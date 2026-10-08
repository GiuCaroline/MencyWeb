import { useState } from "react";
import { MagnifyingGlassIcon, ArrowDownLeftIcon, ArrowUpRightIcon, } from "@phosphor-icons/react";

export default function Transacoes() {
    
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

    const [pesquisa, setPesquisa] = useState("");
    const [mes, setMes] = useState(mesAtual);
    const [tipo, setTipo] = useState("todos");
    const [paginaAtual, setPaginaAtual] = useState(1);
    const registrosPorPagina = 6;

    const registrosUsuario = transacoes.filter(
        (item) => item.usuarioId === usuarioId
    );

    const mesesDisponiveis = [
        ...new Set([
            mesAtual(),
            ...registrosUsuario.map((item) => item.data.slice(0, 7)),
        ]),
    ].sort().reverse();

    const registrosMes = registrosUsuario.filter(
        (item) => mes === "todos" || item.data.slice(0, 7) === mes
    );

    const receitas = registrosMes
        .filter((item) => item.tipo === "receita")
        .reduce((total, item) => total + item.valor, 0);

    const despesas = registrosMes
        .filter((item) => item.tipo === "despesa")
        .reduce((total, item) => total + item.valor, 0);

    const normalizar = (texto) =>
        texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

    const registrosFiltrados = registrosMes
        .filter((item) => {
            const categoria =
                nomesCategorias[item.categoria] ?? item.categoria;

            const correspondePesquisa = normalizar(
                `${item.descricao} ${categoria}`
            ).includes(normalizar(pesquisa.trim()));

            const correspondeTipo =
                tipo === "todos" || item.tipo === tipo;

            return correspondePesquisa && correspondeTipo;
        })
        .sort((a, b) => new Date(b.data) - new Date(a.data));

        const totalPaginas = Math.ceil(
            registrosFiltrados.length / registrosPorPagina
        );

        const inicio = (paginaAtual - 1) * registrosPorPagina;

        const registrosPaginados = registrosFiltrados.slice(
            inicio,
            inicio + registrosPorPagina
        );

    return (
        <main className="min-h-screen min-w-0 bg-[#FAFAFA] px-6 py-8 font-poppins lg:px-10">
            <h1 className="text-3xl font-medium">
                Transações
            </h1>

            <p className="mt-1 text-[18px] text-[#696969]">
                Acompanhe suas receitas e despesas em um só lugar
            </p>

            <section
                aria-label="Resumo"
                className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
            >
                <CardResumo
                    titulo="Receitas"
                    valor={receitas}
                    cor="text-[#006A1D]"
                />

                <CardResumo
                    titulo="Despesas"
                    valor={despesas}
                    cor="text-[#A4000D]"
                />

                <CardResumo
                    titulo="Resultado"
                    valor={receitas - despesas}
                    cor="text-[#C19000]"
                />
            </section>

            <section
                aria-label="Filtros de transações"
                className="mt-8 flex flex-col gap-4 lg:flex-row"
            >
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-[#E2E2E2] bg-white px-4 focus-within:border-[#C19000]">
                    <MagnifyingGlassIcon
                        size={22}
                        className="shrink-0 text-[#999]"
                        aria-hidden="true"
                    />

                    <input
                        type="search"
                        value={pesquisa}
                        onChange={(e) => {setPesquisa(e.target.value); setPaginaAtual(1);}}
                        aria-label="Pesquisar descrição ou categoria"
                        placeholder="Pesquisar transações..."
                        className="min-w-0 flex-1 bg-transparent py-3 outline-none"
                    />
                </div>

                <select
                    value={mes}
                    onChange={(e) => {setMes(e.target.value); setPaginaAtual(1);}}
                    aria-label="Filtrar por mês"
                    className="cursor-pointer rounded-xl border border-[#E2E2E2] bg-white px-4 py-3 outline-none focus:border-[#C19000]"
                >
                    <option value="todos">Todos os meses</option>

                    {mesesDisponiveis.map((valor) => {
                        const [ano, numeroMes] = valor.split("-");

                        const titulo = new Date(
                            Number(ano),
                            Number(numeroMes) - 1,
                            1
                        ).toLocaleDateString("pt-BR", {
                            month: "long",
                            year: "numeric",
                        });

                        return (
                            <option key={valor} value={valor}>
                                {titulo.charAt(0).toUpperCase() +
                                    titulo.slice(1)}
                            </option>
                        );
                    })}
                </select>

                <select
                    value={tipo}
                    onChange={(e) => {setTipo(e.target.value); setPaginaAtual(1);}}
                    aria-label="Filtrar por tipo"
                    className="cursor-pointer rounded-xl border border-[#E2E2E2] bg-white px-4 py-3 outline-none focus:border-[#C19000]"
                >
                    <option value="todos">Todos os tipos</option>
                    <option value="receita">Receitas</option>
                    <option value="despesa">Despesas</option>
                </select>
            </section>

            <section className="mt-6 min-w-0 overflow-hidden rounded-3xl bg-white shadow-xl">
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <h2 className="text-[18px] font-medium">
                        Histórico de transações
                    </h2>

                    <span
                        className="text-sm text-[#696969]"
                        aria-live="polite"
                    >
                        {registrosFiltrados.length} registro(s)
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left">
                        <thead className="bg-[#F5F5F5] text-sm text-[#696969]">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium">
                                    Descrição
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium">
                                    Categoria
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium">
                                    Data
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium">
                                    Tipo
                                </th>
                                <th scope="col" className="px-6 py-4 text-right font-medium">
                                    Valor
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#EEEEEE]">
                            {registrosPaginados.map((item) => {
                                const receita = item.tipo === "receita";
                                const Icone = receita
                                    ? ArrowDownLeftIcon
                                    : ArrowUpRightIcon;

                                return (
                                    <tr
                                        key={item.id}
                                        className="transition-colors hover:bg-[#C19000]/5"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                                                        receita
                                                            ? "bg-[#006A1D]/10 text-[#006A1D]"
                                                            : "bg-[#A4000D]/10 text-[#A4000D]"
                                                    }`}
                                                >
                                                    <Icone size={22} aria-hidden="true" />
                                                </span>

                                                <span className="font-medium">
                                                    {item.descricao}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-sm text-[#696969]">
                                            {nomesCategorias[item.categoria] ??
                                                item.categoria}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-[#696969]">
                                            {formatarData(item.data)}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                    receita
                                                        ? "bg-[#006A1D]/10 text-[#006A1D]"
                                                        : "bg-[#A4000D]/10 text-[#A4000D]"
                                                }`}
                                            >
                                                {receita ? "Receita" : "Despesa"}
                                            </span>
                                        </td>

                                        <td
                                            className={`whitespace-nowrap px-6 py-4 text-right font-semibold ${
                                                receita
                                                    ? "text-[#006A1D]"
                                                    : "text-[#A4000D]"
                                            }`}
                                        >
                                            {receita ? "+" : "−"}
                                            {formatarMoeda(item.valor)}
                                        </td>
                                    </tr>
                                );
                            })}

                            {registrosFiltrados.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-6 py-12 text-center text-[#696969]"
                                    >
                                        Nenhuma transação encontrada.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {totalPaginas > 0 && (
                    <div className="flex flex-col items-center justify-between gap-4 border-t border-[#EEEEEE] px-6 py-4 sm:flex-row">
                        <p className="text-sm text-[#696969]" aria-live="polite">
                            Mostrando {inicio + 1}–
                            {Math.min(inicio + registrosPorPagina, registrosFiltrados.length)}
                            {" de "}
                            {registrosFiltrados.length} registros
                        </p>

                        <nav
                            aria-label="Paginação das transações"
                            className="flex flex-wrap justify-center gap-2"
                        >
                            {Array.from({ length: totalPaginas }, (_, indice) => {
                                const pagina = indice + 1;
                                const ativa = paginaAtual === pagina;

                                return (
                                    <button
                                        key={pagina}
                                        type="button"
                                        onClick={() => setPaginaAtual(pagina)}
                                        aria-label={`Página ${pagina}`}
                                        aria-current={ativa ? "page" : undefined}
                                        className={`flex h-10 w-10 cursor-pointer items-center
                                            justify-center rounded-xl border transition-colors
                                            ${
                                                ativa
                                                    ? "border-[#C19000] bg-[#C19000] text-white"
                                                    : "border-[#E2E2E2] bg-white text-[#696969] hover:bg-[#C19000]/10"
                                            }`}
                                    >
                                        {pagina}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </section>
        </main>
    );
}

function CardResumo({ titulo, valor, cor }) {
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

const nomesCategorias = {
    salario: "Receita",
    mercado: "Alimentação",
    moradia: "Moradia",
    transporte: "Transporte",
    lazer: "Lazer",
    internet: "Internet",
};

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

function formatarData(data) {
    return new Date(data).toLocaleDateString("pt-BR");
}

function mesAtual() {
    const hoje = new Date();

    return `${hoje.getFullYear()}-${String(
        hoje.getMonth() + 1
    ).padStart(2, "0")}`;
}