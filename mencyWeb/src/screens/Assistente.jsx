import { useState } from "react";
import { SparkleIcon, ChartLineUpIcon, PiggyBankIcon, CalendarCheckIcon, LightbulbIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";

const sugestoes = [
    {
        titulo: "Analisar meus gastos",
        descricao: "Entenda para onde vai seu dinheiro.",
        pergunta: "Me ajude a analisar meus gastos.",
        Icone: ChartLineUpIcon,
    },
    {
        titulo: "Como economizar?",
        descricao: "Encontre oportunidades para economizar.",
        pergunta: "Como posso economizar dinheiro?",
        Icone: PiggyBankIcon,
    },
    {
        titulo: "Planejar meu mês",
        descricao: "Organize suas receitas e despesas.",
        pergunta: "Me ajude a planejar meu mês.",
        Icone: CalendarCheckIcon,
    },
    {
        titulo: "Receber sugestões",
        descricao: "Melhore sua organização financeira.",
        pergunta: "Me dê sugestões para melhorar minhas finanças.",
        Icone: LightbulbIcon,
    },
];

export default function Assistente() {
    const [mensagem, setMensagem] = useState("");

    function selecionarSugestao(pergunta) {
        setMensagem(pergunta);
    }

    function enviarMensagem(e) {
        e.preventDefault();

        if (!mensagem.trim()) return;

        console.log("Mensagem enviada:", mensagem);

        setMensagem("");
    }

    return (
        <main className="flex min-h-screen min-w-0 flex-1 flex-col bg-[#FAFAFA] px-5 py-6 font-poppins sm:px-8 lg:px-10">
            <header className="mb-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C19000] text-white">
                        <SparkleIcon size={27} weight="regular" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-medium text-[#171717] sm:text-3xl">
                            Assistente Mency
                        </h1>
                        <p className="mt-1 text-sm text-[#777]">
                            Sua inteligência financeira pessoal
                        </p>
                    </div>
                </div>
            </header>

            <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col">
                <div className="flex flex-1 flex-col items-center justify-center py-8">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F5EBCB] text-[#A77D00]">
                        <SparkleIcon size={34} weight="regular" />
                    </div>

                    <h2 className="text-center text-2xl font-medium text-[#202020]">
                        Vamos cuidar do seu dinheiro?
                    </h2>

                    <p className="mt-3 max-w-lg text-center text-sm leading-6 text-[#777]">
                        Tire dúvidas sobre suas finanças e encontre novas
                        formas de organizar seu dinheiro.
                    </p>

                    <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                        {sugestoes.map(({ titulo, descricao, pergunta, Icone }) => (
                            <button
                                key={titulo}
                                type="button"
                                onClick={() => selecionarSugestao(pergunta)}
                                className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-[#EAEAEA] bg-white p-4 text-left transition hover:border-[#C19000]/50 hover:bg-[#FFFEFA]"
                            >
                                <Icone
                                    size={23}
                                    weight="regular"
                                    className="mt-0.5 shrink-0 text-[#C19000]"
                                />

                                <div>
                                    <p className="text-sm font-medium text-[#292929]">
                                        {titulo}
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-[#888]">
                                        {descricao}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <form
                    onSubmit={enviarMensagem}
                    className="sticky bottom-4 mt-6 rounded-2xl border border-[#E5E5E5] bg-white p-3 shadow-sm"
                >
                    <textarea
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                e.currentTarget.form?.requestSubmit();
                            }
                        }}
                        rows={2}
                        placeholder="Pergunte algo sobre suas finanças..."
                        className="w-full resize-none bg-transparent px-2 py-2 text-sm text-[#252525] outline-none placeholder:text-[#A0A0A0]"
                    />

                    <div className="flex items-center justify-between border-t border-[#F0F0F0] pt-3">
                        <p className="text-xs text-[#999]">
                            O que você gostaria de saber?
                        </p>

                        <button
                            type="submit"
                            disabled={!mensagem.trim()}
                            aria-label="Enviar mensagem"
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#C19000] text-white transition hover:bg-[#A77D00] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <PaperPlaneTiltIcon size={20} weight="fill" />
                        </button>
                    </div>
                </form>

                <p className="mt-3 text-center text-xs leading-5 text-[#999]">
                    As respostas da IA podem conter imprecisões. Confira
                    os dados antes de tomar decisões financeiras.
                </p>
            </section>
        </main>
    );
}