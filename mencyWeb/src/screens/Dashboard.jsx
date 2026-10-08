import { CaretDownIcon, EyeIcon , EyeSlashIcon, CurrencyDollarIcon, ShoppingCartIcon,  WifiHighIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const usu = [
        {id: 1, name:'Fulano da Silva Amado de Jesus', saldTotal: 8540.00, receitas: 5200.00, despesas: 2840.00}
    ];

    const transacoes = [
        { id: 1, usuarioId: 1, descricao: "Salário", categoria: "salario", tipo: "receita", valor: 1000, data: "2026-10-01T09:03:00", },
        { id: 2, usuarioId: 1, descricao: "Mercado", categoria: "mercado", tipo: "despesa", valor: 550.98, data: "2026-09-20T11:30:00", },
        { id: 3, usuarioId: 1, descricao: "Internet", categoria: "internet", tipo: "despesa", valor: 40.99, data: "2026-09-05T07:00:00", },
        { id: 4, usuarioId: 1, descricao: "Salário", categoria: "salario", tipo: "receita", valor: 1000, data: "2026-09-01T09:03:00", },
        { id: 5, usuarioId: 1, descricao: "Mercado", categoria: "mercado", tipo: "despesa", valor: 550.98, data: "2026-08-20T11:30:00", },
        { id: 6, usuarioId: 1, descricao: "Internet", categoria: "internet", tipo: "despesa", valor: 40.99, data: "2026-08-05T07:00:00", },
    ];

    const gastosPorCategoria = [
        { id: 1, usuarioId: 1, categoria: "Alimentação", valor: 950, cor: "#E8B635" },
        { id: 2, usuarioId: 1, categoria: "Moradia", valor: 1200, cor: "#B2821A" },
        { id: 3, usuarioId: 1, categoria: "Transporte", valor: 450, cor: "#8D6409" },
        { id: 4, usuarioId: 1, categoria: "Lazer", valor: 240, cor: "#634401" },
    ];

    const categoriasGastos = {
        mercado: { nome: "Alimentação", cor: "#E8B635" },
        moradia: { nome: "Moradia", cor: "#B2821A" },
        transporte: { nome: "Transporte", cor: "#8D6409" },
        lazer: { nome: "Lazer", cor: "#634401" },
        internet: { nome: "Internet", cor: "#C19000" },
    };
    
    const [mostrarValor, setMostrarValor] = useState(false);
    const [mostrarReceitas, setMostrarReceitas] = useState(false);
    const [mostrarDespesas, setMostrarDespesas] = useState(false);

    const [meses] = useState(gerarUltimosMeses);
    const [mesSelecionado, setMesSelecionado] = useState(
        () => gerarUltimosMeses()[0].valor
    );

    const transacoesUsuario = transacoes.filter(
        (item) => item.usuarioId === usu[0].id
    );

    const transacoesMes = transacoesUsuario.filter(
        (item) => item.data.slice(0, 7) === mesSelecionado
    );

    const receitasMes = transacoesMes
        .filter((item) => item.tipo === "receita")
        .reduce((total, item) => total + item.valor, 0);

    const despesasMes = transacoesMes
        .filter((item) => item.tipo === "despesa")
        .reduce((total, item) => total + item.valor, 0);

    const resultadoMes = receitasMes - despesasMes;

    const gastosAgrupados = transacoesMes
        .filter((item) => item.tipo === "despesa")
        .reduce((grupos, item) => {
            grupos[item.categoria] =
                (grupos[item.categoria] ?? 0) + item.valor;

            return grupos;
        }, {});

    const gastosUsuario = Object.entries(gastosAgrupados).map(
        ([categoria, valor]) => ({
            id: categoria,
            categoria: categoriasGastos[categoria]?.nome ?? categoria,
            cor: categoriasGastos[categoria]?.cor ?? "#C19000",
            valor,
        })
    );

    const ultimasTransacoes = [...transacoesMes]
        .sort((a, b) => new Date(b.data) - new Date(a.data))
        .slice(0, 3);

    return(
        <div className="flex min-h-screen bg-[#FAFAFA] font-poppins">
            <main className="flex-1 py-8 px-10">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-medium">Olá, {primeiroNome(usu[0].name)}!</h1>
                        <p className="mt-1 text-[18px]">Aqui está o resumo da sua vida financeira</p>
                    </div>
                    <div className="relative shrink-0">
                        <select
                            value={mesSelecionado}
                            onChange={(e) => setMesSelecionado(e.target.value)}
                            aria-label="Selecionar mês do resumo"
                            className="appearance-none cursor-pointer rounded-xl border-2
                                border-black bg-white py-2 pl-4 pr-10
                                outline-none focus:border-[#C19000]"
                        >
                            {meses.map((mes) => (
                                <option key={mes.valor} value={mes.valor}>
                                    {mes.titulo}
                                </option>
                            ))}
                        </select>

                        <CaretDownIcon
                            size={18}
                            aria-hidden="true"
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

                <section className="flex flex-col mt-[3%] justify-center items-center">
                    <div className="flex flex-row gap-4 items-center justify-center w-full">
                        <div className="w-[50%] bg-[#FFFFFF] shadow-xl rounded-3xl py-6 px-5 flex flex-row justify-between items-center">
                            <div>
                                <p className="text-[16px]">Saldo total</p>
                                <p id="saldo-total" className="font-bold text-2xl">
                                    {mostrarValor ? formatarMoeda(resultadoMes) : "R$ ••••••"}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setMostrarValor((atual) => !atual)}
                                aria-label={mostrarValor ? "Ocultar valor" : "Mostrar valor"}
                                aria-controls="valor"
                                className="flex shrink-0 cursor-pointer items-center justify-center rounded p-1 text-black hover:text-[#C19000] focus-visible:outline-2 focus-visible:outline-[#C19000]"
                            >
                                {mostrarValor ? (
                                    <EyeIcon size={27} />
                                ) : (
                                    <EyeSlashIcon size={27} />
                                )}
                            </button>
                        </div>

                        <div className="w-[30%] bg-[#FFFFFF] shadow-xl rounded-3xl py-6 px-5 flex flex-row justify-between items-center">
                            <div>
                                <p className="text-[16px]">Receitas</p>
                                <p id="receitas" className="font-bold text-2xl text-[#006A1D]">
                                    {mostrarReceitas ? formatarMoeda(receitasMes) : "R$ ••••••"}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setMostrarReceitas((atual) => !atual)}
                                aria-label={mostrarReceitas ? "Ocultar valor" : "Mostrar valor"}
                                aria-controls="valor"
                                className="flex shrink-0 cursor-pointer items-center justify-center rounded p-1 text-black hover:text-[#C19000] focus-visible:outline-2 focus-visible:outline-[#C19000]"
                            >
                                {mostrarReceitas ? (
                                    <EyeIcon size={27} />
                                ) : (
                                    <EyeSlashIcon size={27} />
                                )}
                            </button>
                        </div>

                        <div className="w-[30%] bg-[#FFFFFF] shadow-xl rounded-3xl py-6 px-5 flex flex-row justify-between items-center">
                            <div>
                                <p className="text-[16px]">Despesas</p>
                                <p id="despesas" className="font-bold text-2xl text-[#A4000D]">
                                    {mostrarDespesas ? formatarMoeda(despesasMes) : "R$ ••••••"}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setMostrarDespesas((atual) => !atual)}
                                aria-label={mostrarDespesas ? "Ocultar valor" : "Mostrar valor"}
                                aria-controls="valor"
                                className="flex shrink-0 cursor-pointer items-center justify-center rounded p-1 text-black hover:text-[#C19000] focus-visible:outline-2 focus-visible:outline-[#C19000]"
                            >
                                {mostrarDespesas ? (
                                    <EyeIcon size={27} />
                                ) : (
                                    <EyeSlashIcon size={27} />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="mt-[2%] grid w-full grid-cols-1 items-stretch gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
                        <div className="flex min-w-0 flex-col rounded-3xl bg-white px-5 py-6 shadow-xl">
                            <h2 className="text-[18px]">
                                Gastos por categoria
                            </h2>

                            <div className="flex flex-1 items-center justify-center">
                                <GraficoGastos dados={gastosUsuario} />
                            </div>
                        </div>

                        <UltimasTransacoes dados={ultimasTransacoes} />
                    </div>
                </section>
            </main>
        </div>
    )
}

function primeiroNome(nome) {
    if (!nome) return "Visitante";
    return nome.split(" ")[0];
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

function formatarDataTransacao(data) {
    const dataObj = new Date(data);

    const diaMes = dataObj.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
    });

    const horario = dataObj.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return `${diaMes}, ${horario}`;
}

function GraficoGastos({ dados }) {
    const [categoriaAtiva, setCategoriaAtiva] = useState(null);

    const total = dados.reduce((soma, item) => soma + item.valor, 0);

    const raio = 80;
    const circunferencia = 2 * Math.PI * raio;

    const segmentos = dados.map((item, indice) => {
        const acumulado = dados
            .slice(0, indice)
            .reduce((soma, anterior) => soma + anterior.valor, 0);

        const proporcao = total > 0 ? item.valor / total : 0;
        const inicio = total > 0 ? acumulado / total : 0;

        const anguloCentral = (inicio + proporcao / 2) * 2 * Math.PI;

        return {
            ...item,
            comprimento: proporcao * circunferencia,
            deslocamento: inicio * circunferencia,
            x: Math.cos(anguloCentral) * 10,
            y: Math.sin(anguloCentral) * 10,
        };
    });

    if (total <= 0) {
        return (
            <p className="py-10 text-center text-[#696969]">
                Nenhum gasto registrado neste período.
            </p>
        );
    }

    return (
        <div className="mt-6 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
            <div className="relative h-64 w-64 shrink-0">
                <svg
                    viewBox="0 0 220 220"
                    className="h-full w-full overflow-visible"
                    role="img"
                >
                    <g transform="rotate(-90 110 110)">
                        {segmentos.map((item) => {
                            const ativa = categoriaAtiva === item.id;

                            return (
                                <circle
                                    key={item.id}
                                    cx="110"
                                    cy="110"
                                    r={raio}
                                    fill="none"
                                    stroke={item.cor}
                                    strokeWidth="28"
                                    strokeDasharray={`${item.comprimento} ${circunferencia}`}
                                    strokeDashoffset={-item.deslocamento}
                                    className="transition-transform duration-300 ease-out motion-reduce:transition-none"
                                    style={{
                                        transform: ativa
                                            ? `translate(${item.x}px, ${item.y}px)`
                                            : "translate(0px, 0px)",
                                    }}
                                >
                                    <title>
                                        {item.categoria}: {formatarMoeda(item.valor)}
                                    </title>
                                </circle>
                            );
                        })}
                    </g>
                </svg>
            </div>

            <ul className="flex w-full max-w-sm flex-col gap-5">
                {dados.map((item) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            onMouseEnter={() => setCategoriaAtiva(item.id)}
                            onMouseLeave={() => setCategoriaAtiva(null)}
                            onFocus={() => setCategoriaAtiva(item.id)}
                            onBlur={() => setCategoriaAtiva(null)}
                            className={`flex w-full cursor-pointer items-center
                                justify-between gap-4 rounded-xl px-3 py-2
                                transition-colors duration-300
                                focus-visible:outline-2 focus-visible:outline-[#C19000]
                                ${
                                    categoriaAtiva === item.id
                                        ? "bg-[#C19000]/10"
                                        : "bg-transparent"
                                }`}
                        >
                            <span className="flex min-w-0 items-center gap-3">
                                <span
                                    className="h-3 w-3 shrink-0 rounded-full"
                                    style={{ backgroundColor: item.cor }}
                                    aria-hidden="true"
                                />

                                <span className="text-left text-[16px] text-[#444]">
                                    {item.categoria}
                                </span>
                            </span>

                            <span className="shrink-0 text-[16px] font-semibold">
                                {formatarMoeda(item.valor)}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function UltimasTransacoes({ dados }) {

    const iconesTransacoes = {
        salario: CurrencyDollarIcon,
        mercado: ShoppingCartIcon,
        internet: WifiHighIcon,
    };

    return (
        <div className="flex w-full min-w-0 flex-col rounded-3xl bg-white px-6 py-6 shadow-xl">
            <h2 className="text-[18px]">
                Últimas transações
            </h2>

            <ul className="mt-5 divide-y divide-[#EEEEEE]">
                {dados.map((transacao) => {
                    const Icone =
                        iconesTransacoes[transacao.categoria] ??
                        CurrencyDollarIcon;

                    const receita = transacao.tipo === "receita";

                    return (
                        <li
                            key={transacao.id}
                            className="flex items-center justify-between gap-3 py-3"
                        >
                            <div className="flex min-w-0 items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0]">
                                    <Icone
                                        size={23}
                                        weight={
                                            transacao.categoria === "mercado"
                                                ? "fill"
                                                : "regular"
                                        }
                                        aria-hidden="true"
                                    />
                                </span>

                                <div className="min-w-0">
                                    <p className="truncate text-[16px]">
                                        {transacao.descricao}
                                    </p>

                                    <p className="mt-1 text-[13px] text-[#696969]">
                                        {formatarDataTransacao(transacao.data)}
                                    </p>
                                </div>
                            </div>

                            <span
                                className={`shrink-0 text-[16px] font-medium ${
                                    receita
                                        ? "text-[#006A1D]"
                                        : "text-[#A4000D]"
                                }`}
                            >
                                {receita ? "+" : "−"}
                                {formatarMoeda(transacao.valor)}
                            </span>
                        </li>
                    );
                })}
            </ul>

            {dados.length === 0 && (
                <p className="py-8 text-center text-sm text-[#696969]">
                    Nenhuma transação registrada.
                </p>
            )}

            <div className="mt-auto pt-6">
                <Link
                    to="/transacoes"
                    className="flex w-full items-center justify-center rounded-xl border border-[#C19000] py-3 text-[18px] text-[#C19000] transition-colors hover:bg-[#C19000]/10"
                >
                    Ver todos
                </Link>
            </div>
        </div>
    );
}

function gerarUltimosMeses() {
    const hoje = new Date();

    return Array.from({ length: 3 }, (_, indice) => {
        const data = new Date(
            hoje.getFullYear(),
            hoje.getMonth() - indice,
            1
        );

        const valor = `${data.getFullYear()}-${String(
            data.getMonth() + 1
        ).padStart(2, "0")}`;

        const nome = data.toLocaleDateString("pt-BR", {
            month: "long",
            year: "numeric",
        });

        return {
            valor,
            titulo: indice === 0
                ? "Este mês"
                : nome.charAt(0).toUpperCase() + nome.slice(1),
        };
    });
}