import { useState } from "react";

export default function Relatorios() {
    
    const transacoes = [
        { id: 1, usuarioId: 1, descricao: "Salário", categoria: "salario", tipo: "receita", valor: 4800, data: "2026-08-01T09:00:00" },
        { id: 2, usuarioId: 1, descricao: "Aluguel", categoria: "moradia", tipo: "despesa", valor: 1500, data: "2026-08-05T10:00:00" },
        { id: 3, usuarioId: 1, descricao: "Mercado", categoria: "mercado", tipo: "despesa", valor: 800, data: "2026-08-12T11:30:00" },
        { id: 4, usuarioId: 1, descricao: "Transporte", categoria: "transporte", tipo: "despesa", valor: 400, data: "2026-08-20T08:00:00" },
        { id: 5, usuarioId: 1, descricao: "Cinema e passeios", categoria: "lazer", tipo: "despesa", valor: 300, data: "2026-08-23T19:00:00" },

        { id: 6, usuarioId: 1, descricao: "Salário", categoria: "salario", tipo: "receita", valor: 5000, data: "2026-09-01T09:00:00" },
        { id: 7, usuarioId: 1, descricao: "Aluguel", categoria: "moradia", tipo: "despesa", valor: 1500, data: "2026-09-05T10:00:00" },
        { id: 8, usuarioId: 1, descricao: "Mercado", categoria: "mercado", tipo: "despesa", valor: 900, data: "2026-09-12T11:30:00" },
        { id: 9, usuarioId: 1, descricao: "Transporte", categoria: "transporte", tipo: "despesa", valor: 450, data: "2026-09-20T08:00:00" },
        { id: 10, usuarioId: 1, descricao: "Restaurante", categoria: "lazer", tipo: "despesa", valor: 370, data: "2026-09-25T19:00:00" },

        { id: 11, usuarioId: 1, descricao: "Salário", categoria: "salario", tipo: "receita", valor: 4800, data: "2026-10-01T09:03:00" },
        { id: 12, usuarioId: 1, descricao: "Aluguel", categoria: "moradia", tipo: "despesa", valor: 1200, data: "2026-10-02T10:00:00" },
        { id: 13, usuarioId: 1, descricao: "Mercado", categoria: "mercado", tipo: "despesa", valor: 650, data: "2026-10-03T11:30:00" },
        { id: 14, usuarioId: 1, descricao: "Transporte", categoria: "transporte", tipo: "despesa", valor: 450, data: "2026-10-04T08:00:00" },
        { id: 15, usuarioId: 1, descricao: "Cinema", categoria: "lazer", tipo: "despesa", valor: 90, data: "2026-10-05T19:00:00" },
        { id: 16, usuarioId: 1, descricao: "Freelance", categoria: "salario", tipo: "receita", valor: 400, data: "2026-10-06T09:00:00" },
        { id: 17, usuarioId: 1, descricao: "Restaurante", categoria: "lazer", tipo: "despesa", valor: 150, data: "2026-10-07T12:30:00" },
        { id: 18, usuarioId: 1, descricao: "Mercado", categoria: "mercado", tipo: "despesa", valor: 300, data: "2026-10-08T08:00:00" },
    ];

    const usuarioId = 1;

    const [meses] = useState(gerarMeses);
    const [mesSelecionado, setMesSelecionado] = useState(
        () => gerarMeses()[0].valor
    );

    const registrosUsuario = transacoes.filter(
        (item) => item.usuarioId === usuarioId
    );

    const registrosMes = registrosUsuario.filter(
        (item) => item.data.slice(0, 7) === mesSelecionado
    );

    const receitas = somarTipo(registrosMes, "receita");
    const despesas = somarTipo(registrosMes, "despesa");
    const resultado = receitas - despesas;

    const grupos = registrosMes
        .filter((item) => item.tipo === "despesa")
        .reduce((acumulado, item) => {
            acumulado[item.categoria] =
                (acumulado[item.categoria] ?? 0) + item.valor;

            return acumulado;
        }, {});

    const gastosCategorias = Object.entries(grupos)
        .map(([categoria, valor]) => ({
            id: categoria,
            nome: categorias[categoria]?.nome ?? categoria,
            cor: categorias[categoria]?.cor ?? "#C19000",
            valor,
            percentual: despesas > 0 ? (valor / despesas) * 100 : 0,
        }))
        .sort((a, b) => b.valor - a.valor);

    const comparacao = [...meses].reverse().map((mes) => {
        const registros = registrosUsuario.filter(
            (item) => item.data.slice(0, 7) === mes.valor
        );

        return {
            ...mes,
            receitas: somarTipo(registros, "receita"),
            despesas: somarTipo(registros, "despesa"),
        };
    });

    const maiorValor = Math.max(
        1,
        ...comparacao.flatMap((mes) => [mes.receitas, mes.despesas])
    );

    return (
        <main className="min-h-screen min-w-0 bg-[#FAFAFA] px-6 py-8 font-poppins lg:px-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-3xl font-medium">
                        Relatórios
                    </h1>

                    <p className="mt-1 text-[18px] text-[#696969]">
                        Entenda seus gastos e acompanhe seus resultados
                    </p>
                </div>

                <select
                    value={mesSelecionado}
                    onChange={(e) => setMesSelecionado(e.target.value)}
                    aria-label="Selecionar mês do relatório"
                    className="cursor-pointer rounded-xl border border-[#E2E2E2] bg-white px-4 py-3 outline-none focus:border-[#C19000]"
                >
                    {meses.map((mes) => (
                        <option key={mes.valor} value={mes.valor}>
                            {mes.titulo.charAt(0).toUpperCase() +
                                mes.titulo.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <section
                aria-label="Resumo do mês"
                className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
            >
                <CardRelatorio
                    titulo="Receitas"
                    valor={receitas}
                    cor="text-[#006A1D]"
                />

                <CardRelatorio
                    titulo="Despesas"
                    valor={despesas}
                    cor="text-[#A4000D]"
                />

                <CardRelatorio
                    titulo="Resultado do mês"
                    valor={resultado}
                    cor={
                        resultado >= 0
                            ? "text-[#C19000]"
                            : "text-[#A4000D]"
                    }
                />
            </section>

            <div className="mt-6 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-2">
                <section className="min-w-0 rounded-3xl bg-white p-6 shadow-xl">
                    <h2 className="text-[18px] font-medium">
                        Gastos por categoria
                    </h2>

                    <p className="mt-1 text-sm text-[#696969]">
                        Participação de cada categoria nas despesas do mês
                    </p>

                    <ul className="mt-6 flex flex-col gap-6">
                        {gastosCategorias.map((item) => (
                            <li key={item.id}>
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="flex items-center gap-2">
                                        <span
                                            className="h-3 w-3 rounded-full"
                                            style={{ backgroundColor: item.cor }}
                                            aria-hidden="true"
                                        />

                                        <span className="text-sm">
                                            {item.nome}
                                        </span>
                                    </span>

                                    <span className="text-sm font-semibold">
                                        {formatarMoeda(item.valor)}
                                        <span className="ml-2 font-normal text-[#696969]">
                                            ({item.percentual.toFixed(1).replace(".", ",")}%)
                                        </span>
                                    </span>
                                </div>

                                <div
                                    className="mt-3 h-3 overflow-hidden rounded-full bg-[#F0F0F0]"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="h-full rounded-full transition-[width] duration-500 motion-reduce:transition-none"
                                        style={{
                                            width: `${item.percentual}%`,
                                            backgroundColor: item.cor,
                                        }}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    {gastosCategorias.length === 0 && (
                        <p className="py-12 text-center text-[#696969]">
                            Nenhuma despesa registrada neste mês.
                        </p>
                    )}
                </section>

                <section className="min-w-0 rounded-3xl bg-white p-6 shadow-xl">
                    <h2 className="text-[18px] font-medium">
                        Receitas e despesas
                    </h2>

                    <p className="mt-1 text-sm text-[#696969]">
                        Comparação dos últimos três meses
                    </p>

                    <div className="mt-4 flex gap-5 text-sm text-[#696969]">
                        <span className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#006A1D]" />
                            Receitas
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#A4000D]" />
                            Despesas
                        </span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-6">
                        {comparacao.map((mes) => (
                            <li key={mes.valor}>
                                <h3 className="mb-3 text-sm font-medium capitalize">
                                    {mes.titulo}
                                </h3>

                                {[
                                    {
                                        titulo: "Receitas",
                                        valor: mes.receitas,
                                        cor: "#006A1D",
                                    },
                                    {
                                        titulo: "Despesas",
                                        valor: mes.despesas,
                                        cor: "#A4000D",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.titulo}
                                        className="mt-2 flex items-center gap-3"
                                    >
                                        <span className="sr-only">
                                            {item.titulo}:
                                        </span>

                                        <div
                                            className="h-4 min-w-0 flex-1 overflow-hidden rounded-full bg-[#F0F0F0]"
                                            aria-hidden="true"
                                        >
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: `${(item.valor / maiorValor) * 100}%`,
                                                    backgroundColor: item.cor,
                                                }}
                                            />
                                        </div>

                                        <span className="w-28 shrink-0 text-right text-xs font-medium">
                                            {formatarMoeda(item.valor)}
                                        </span>
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <GraficoMovimentacoes
                    receitas={receitas}
                    despesas={despesas}
                />

                <GraficoResultados dados={comparacao} />
            </div>

            <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-xl">
                <h2 className="px-6 py-5 text-[18px] font-medium">
                    Resumo mensal
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] text-left text-sm">
                        <thead className="bg-[#F5F5F5] text-[#696969]">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium">
                                    Mês
                                </th>
                                <th scope="col" className="px-6 py-4 text-right font-medium">
                                    Receitas
                                </th>
                                <th scope="col" className="px-6 py-4 text-right font-medium">
                                    Despesas
                                </th>
                                <th scope="col" className="px-6 py-4 text-right font-medium">
                                    Resultado
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#EEEEEE]">
                            {comparacao.map((mes) => {
                                const resultadoMes =
                                    mes.receitas - mes.despesas;

                                return (
                                    <tr
                                        key={mes.valor}
                                        className={
                                            mes.valor === mesSelecionado
                                                ? "bg-[#C19000]/5"
                                                : ""
                                        }
                                    >
                                        <td className="px-6 py-4 capitalize">
                                            {mes.titulo}
                                        </td>

                                        <td className="px-6 py-4 text-right text-[#006A1D]">
                                            {formatarMoeda(mes.receitas)}
                                        </td>

                                        <td className="px-6 py-4 text-right text-[#A4000D]">
                                            {formatarMoeda(mes.despesas)}
                                        </td>

                                        <td
                                            className={`px-6 py-4 text-right font-semibold ${
                                                resultadoMes >= 0
                                                    ? "text-[#006A1D]"
                                                    : "text-[#A4000D]"
                                            }`}
                                        >
                                            {formatarMoeda(resultadoMes)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

const categorias = {
    mercado: { nome: "Alimentação", cor: "#E8B635" },
    moradia: { nome: "Moradia", cor: "#B2821A" },
    transporte: { nome: "Transporte", cor: "#8D6409" },
    lazer: { nome: "Lazer", cor: "#634401" },
    internet: { nome: "Internet", cor: "#C19000" },
};

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

function gerarMeses() {
    const hoje = new Date();

    return Array.from({ length: 3 }, (_, indice) => {
        const data = new Date(
            hoje.getFullYear(),
            hoje.getMonth() - indice,
            1
        );

        return {
            valor: `${data.getFullYear()}-${String(
                data.getMonth() + 1
            ).padStart(2, "0")}`,
            titulo: data.toLocaleDateString("pt-BR", {
                month: "long",
                year: "numeric",
            }),
        };
    });
}

function somarTipo(registros, tipo) {
    return registros
        .filter((item) => item.tipo === tipo)
        .reduce((total, item) => total + item.valor, 0);
}


function CardRelatorio({ titulo, valor, cor }) {
    return (
        <div className="min-w-0 rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-[16px] text-[#696969]">
                {titulo}
            </p>

            <p className={`mt-2 text-2xl font-bold ${cor}`}>
                {formatarMoeda(valor)}
            </p>
        </div>
    );
}

function GraficoMovimentacoes({ receitas, despesas }) {
    const total = receitas + despesas;
    const circunferencia = 2 * Math.PI * 75;

    const partes = [
        { nome: "Receitas", valor: receitas, cor: "#006A1D" },
        { nome: "Despesas", valor: despesas, cor: "#A4000D" },
    ];

    return (
        <section className="min-w-0 rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="text-[18px] font-medium">
                Distribuição das movimentações
            </h2>

            <p className="mt-1 text-sm text-[#696969]">
                Participação das entradas e saídas no mês selecionado
            </p>

            {total === 0 ? (
                <p className="py-12 text-center text-[#696969]">
                    Nenhuma movimentação registrada neste mês.
                </p>
            ) : (
                <div className="mt-6 flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <div className="relative h-56 w-56 shrink-0">
                        <svg
                            viewBox="0 0 220 220"
                            className="h-full w-full"
                            role="img"
                            aria-label={`Receitas: ${formatarMoeda(receitas)}. Despesas: ${formatarMoeda(despesas)}.`}
                        >
                            <g transform="rotate(-90 110 110)">
                                {partes.map((item, indice) => {
                                    const comprimento =
                                        (item.valor / total) * circunferencia;

                                    const deslocamento = indice === 0
                                        ? 0
                                        : (receitas / total) * circunferencia;

                                    return (
                                        <circle
                                            key={item.nome}
                                            cx="110"
                                            cy="110"
                                            r="75"
                                            fill="none"
                                            stroke={item.cor}
                                            strokeWidth="28"
                                            strokeDasharray={`${comprimento} ${circunferencia}`}
                                            strokeDashoffset={-deslocamento}
                                        >
                                            <title>
                                                {item.nome}: {formatarMoeda(item.valor)}
                                            </title>
                                        </circle>
                                    );
                                })}
                            </g>
                        </svg>

                        <div
                            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
                            aria-hidden="true"
                        >
                            <span className="text-xs text-[#696969]">
                                Total movimentado
                            </span>

                            <span className="mt-1 text-lg font-semibold">
                                {formatarMoeda(total)}
                            </span>
                        </div>
                    </div>

                    <ul className="flex min-w-0 flex-col gap-5">
                        {partes.map((item) => (
                            <li key={item.nome}>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="h-3 w-3 rounded-full"
                                        style={{ backgroundColor: item.cor }}
                                        aria-hidden="true"
                                    />

                                    <span className="text-sm text-[#696969]">
                                        {item.nome}
                                    </span>
                                </div>

                                <p className="mt-1 font-semibold">
                                    {formatarMoeda(item.valor)}
                                </p>

                                <p className="text-xs text-[#696969]">
                                    {((item.valor / total) * 100)
                                        .toFixed(1)
                                        .replace(".", ",")}%
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

function GraficoResultados({ dados }) {
    const resultados = dados.map((mes) => ({
        ...mes,
        resultado: mes.receitas - mes.despesas,
    }));

    const minimo = Math.min(0, ...resultados.map((mes) => mes.resultado));
    const maximo = Math.max(0, ...resultados.map((mes) => mes.resultado));
    const amplitude = maximo - minimo || 1;

    const altura = 160;
    const y = (valor) => 35 + ((maximo - valor) / amplitude) * altura;
    const linhaZero = y(0);

    return (
        <section className="min-w-0 rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="text-[18px] font-medium">
                Evolução do resultado
            </h2>

            <p className="mt-1 text-sm text-[#696969]">
                Receitas menos despesas nos últimos três meses
            </p>

            <svg
                viewBox="0 0 480 245"
                className="mt-6 w-full"
                role="img"
                aria-label={resultados
                    .map((mes) => `${mes.titulo}: ${formatarMoeda(mes.resultado)}`)
                    .join(". ")}
            >
                <line
                    x1="20"
                    x2="460"
                    y1={linhaZero}
                    y2={linhaZero}
                    stroke="#DADADA"
                    strokeWidth="1"
                />

                {resultados.map((mes, indice) => {
                    const x = 80 +
                        indice * (320 / Math.max(resultados.length - 1, 1));

                    const topo = Math.min(y(mes.resultado), linhaZero);
                    const alturaBarra = Math.abs(y(mes.resultado) - linhaZero);

                    return (
                        <g key={mes.valor}>
                            <rect
                                x={x - 30}
                                y={topo}
                                width="60"
                                height={alturaBarra}
                                rx="5"
                                fill={
                                    mes.resultado >= 0
                                        ? "#C19000"
                                        : "#A4000D"
                                }
                            >
                                <title>
                                    {mes.titulo}: {formatarMoeda(mes.resultado)}
                                </title>
                            </rect>

                            <text
                                x={x}
                                y={
                                    mes.resultado >= 0
                                        ? topo - 10
                                        : topo + alturaBarra + 18
                                }
                                textAnchor="middle"
                                fontSize="12"
                                fontWeight="600"
                                fill="#333"
                            >
                                {formatarMoeda(mes.resultado)}
                            </text>

                            <text
                                x={x}
                                y="235"
                                textAnchor="middle"
                                fontSize="12"
                                fill="#696969"
                            >
                                {mes.titulo}
                            </text>
                        </g>
                    );
                })}
            </svg>

            <p className="mt-2 text-xs text-[#696969]">
                Amarelo: resultado positivo. Vermelho: resultado negativo.
            </p>
        </section>
    );
}