import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowsClockwiseIcon, HeadCircuitIcon, ArticleIcon, ClipboardTextIcon, GearSixIcon, SignOutIcon } from "@phosphor-icons/react";

export function Nav({ onSair }) {
    const [expandida, setExpandida] = useState(true);

    const itens = [
        { titulo: "Resumo", caminho: "/home", icone: ArticleIcon },
        { titulo: "Transações", caminho: "/transacoes", icone: ArrowsClockwiseIcon },
        { titulo: "Assistente IA", caminho: "/assistente", icone: HeadCircuitIcon },
        { titulo: "Relatórios", caminho: "/relatorios", icone: ClipboardTextIcon },
        { titulo: "Configurações", caminho: "/configuracoes", icone: GearSixIcon },
    ];

    return (
        <nav
            aria-label="Menu principal"
            className={`sticky top-0 flex h-dvh shrink-0 flex-col
                overflow-x-hidden bg-[#FAFAFA] text-black shadow-2xl
                transition-[width] duration-300
                ${expandida ? "w-64" : "w-[68px]"}`}
        >
            <button
                type="button"
                onClick={() => setExpandida((atual) => !atual)}
                aria-label={expandida ? "Recolher menu" : "Expandir menu"}
                aria-expanded={expandida}
                aria-controls="menu-lateral"
                className="flex h-24 shrink-0 cursor-pointer items-center justify-center"
            >
                <img
                    src="/images/logodourada.png"
                    alt=""
                    className="h-[52px] w-[52px] max-w-none shrink-0 object-contain"
                />

                {expandida && (
                    <span className="ml-1 text-2xl font-medium">
                        Mency
                    </span>
                )}
            </button>

            <div
                id="menu-lateral"
                className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3 py-4"
            >
                {itens.map(({ titulo, caminho, icone: Icone }) => (
                    <NavLink
                        key={caminho}
                        to={caminho}
                        end
                        aria-label={titulo}
                        title={expandida ? undefined : titulo}
                        className={({ isActive }) =>
                            `flex min-h-12 shrink-0 items-center rounded-2xl
                            transition-colors
                            ${expandida ? "gap-3 px-4" : "justify-center"}
                            ${
                                isActive
                                    ? "bg-[#C19000] text-white"
                                    : "hover:bg-[#C19000]/15"
                            }`
                        }
                    >
                        <Icone
                            size={22}
                            className="shrink-0"
                            weight="light"
                        />

                        {expandida && (
                            <span className="whitespace-nowrap">
                                {titulo}
                            </span>
                        )}
                    </NavLink>
                ))}
            </div>

            <div className="shrink-0 px-3 py-4">
                <button
                    type="button"
                    onClick={onSair}
                    aria-label="Sair"
                    title={expandida ? undefined : "Sair"}
                    className={`flex min-h-12 w-full cursor-pointer items-center
                        rounded-2xl text-[#C19000] transition-colors
                        hover:bg-[#C19000]/15
                        ${expandida ? "gap-3 px-4" : "justify-center"}`}
                >
                    <SignOutIcon size={22} weight="light" className="shrink-0" />

                    {expandida && (
                        <span className="whitespace-nowrap">
                            Sair
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}