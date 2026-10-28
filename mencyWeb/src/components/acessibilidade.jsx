
import { useEffect, useState } from "react";
import { PersonArmsSpreadIcon, Minus, Plus, CircleHalf, ArrowCounterClockwise, X } from "@phosphor-icons/react";

const TAMANHO_INICIAL = 100;
const TAMANHO_MINIMO = 90;
const TAMANHO_MAXIMO = 130;

export default function Acessibilidade() {
  const [aberto, setAberto] = useState(false);
  const [tamanho, setTamanho] = useState(TAMANHO_INICIAL);
  const [contraste, setContraste] = useState(false);
  const [cinza, setCinza] = useState(false);

  useEffect(() => {
    const raiz = document.documentElement;

    raiz.style.fontSize = `${tamanho}%`;
    raiz.classList.toggle("alto-contraste", contraste);
    raiz.classList.toggle("escala-cinza", cinza);

    return () => {
      raiz.style.fontSize = "";
      raiz.classList.remove("alto-contraste", "escala-cinza");
    };
  }, [tamanho, contraste, cinza]);

  function redefinir() {
    setTamanho(TAMANHO_INICIAL);
    setContraste(false);
    setCinza(false);
  }

  return (
    <div className="fixed bottom-24 right-5 z-50">
      {aberto && (
        <section
          aria-label="Opções de acessibilidade"
          className="mb-3 w-72 rounded-2xl border border-gray-200
                     bg-white p-5 text-gray-900 shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Acessibilidade
            </h2>

            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar opções de acessibilidade"
              className="rounded-lg p-2 hover:bg-gray-100
                         focus-visible:outline-2"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-5">
            <p className="mb-3 text-sm font-medium">
              Tamanho do texto
            </p>

            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() =>
                  setTamanho((atual) =>
                    Math.max(TAMANHO_MINIMO, atual - 10)
                  )
                }
                disabled={tamanho <= TAMANHO_MINIMO}
                aria-label="Diminuir tamanho do texto"
                className="rounded-lg border p-3 disabled:opacity-40"
              >
                <Minus size={20} />
              </button>

              <span aria-live="polite" className="font-medium">
                {tamanho}%
              </span>

              <button
                type="button"
                onClick={() =>
                  setTamanho((atual) =>
                    Math.min(TAMANHO_MAXIMO, atual + 10)
                  )
                }
                disabled={tamanho >= TAMANHO_MAXIMO}
                aria-label="Aumentar tamanho do texto"
                className="rounded-lg border p-3 disabled:opacity-40"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              aria-pressed={contraste}
              onClick={() => setContraste((atual) => !atual)}
              className="flex items-center gap-3 rounded-xl border
                         p-3 text-left hover:bg-gray-50"
            >
              <CircleHalf size={22} />
              <span>
                Alto contraste
                <span className="block text-xs text-gray-500">
                  {contraste ? "Ativado" : "Desativado"}
                </span>
              </span>
            </button>

            <button
              type="button"
              aria-pressed={cinza}
              onClick={() => setCinza((atual) => !atual)}
              className="flex items-center gap-3 rounded-xl border
                         p-3 text-left hover:bg-gray-50"
            >
              <PersonArmsSpreadIcon size={22} />
              <span>
                Preto e branco
                <span className="block text-xs text-gray-500">
                  {cinza ? "Ativado" : "Desativado"}
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={redefinir}
              className="flex items-center justify-center gap-2
                         rounded-xl bg-[#C19000] p-3
                         font-medium text-white hover:opacity-90"
            >
              <ArrowCounterClockwise size={18} />
              Restaurar padrão
            </button>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setAberto((atual) => !atual)}
        aria-label={
          aberto
            ? "Fechar acessibilidade"
            : "Abrir opções de acessibilidade"
        }
        aria-expanded={aberto}
        className="ml-auto flex h-14 w-14 items-center justify-center
                   rounded-full bg-[#C19000] text-white shadow-lg
                   hover:opacity-90 focus-visible:outline-2
                   focus-visible:outline-offset-4"
      >
        {aberto ? (
          <X size={28} />
        ) : (
          <PersonArmsSpreadIcon size={28} />
        )}
      </button>
    </div>
  );
}
