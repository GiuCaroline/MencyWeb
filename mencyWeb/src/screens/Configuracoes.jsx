import { useState } from "react";
import { UserCircleIcon, SlidersHorizontalIcon, ShieldCheckIcon, BellIcon, FloppyDiskIcon, EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

export default function Configuracoes( tema, onAlterarTema ) {
    const [nome, setNome] = useState("Seu nome");
    const [email, setEmail] = useState("seuemail@email.com");
    const [cpf, setCpf] = useState("111.111.111-11");

    const [mostrarValores, setMostrarValores] = useState(() => {
    const salvo = localStorage.getItem("mency_mostrar_valores");
        return salvo === null ? true : salvo === "true";
    });
    const [notificacoes, setNotificacoes] = useState(true);
    const [resumos, setResumos] = useState(false);

    const [mensagem, setMensagem] = useState("");

    function alterarVisibilidadeValores(valor) {
        setMostrarValores(valor);
        localStorage.setItem("mency_mostrar_valores", String(valor));
    }

    function salvarPreferencias() {
        setMensagem("Alterações preparadas com sucesso!");
    }

    const secoes = [
        {
            id: "perfil",
            titulo: "Perfil",
            descricao: "Gerencie suas informações pessoais.",
            Icone: UserCircleIcon,
        },
        {
            id: "preferencias",
            titulo: "Preferências",
            descricao: "Personalize sua experiência no Mency.",
            Icone: SlidersHorizontalIcon,
        },
        {
            id: "notificacoes",
            titulo: "Notificações",
            descricao: "Escolha quais avisos deseja receber.",
            Icone: BellIcon,
        },
        {
            id: "seguranca",
            titulo: "Segurança",
            descricao: "Cuide da privacidade da sua conta.",
            Icone: ShieldCheckIcon,
        }
    ];

    return (
        <main className="min-h-screen min-w-0 bg-[#FAFAFA]
            px-5 py-8 font-poppins sm:px-8 lg:px-10">

            <header className="mb-8">
                <h1 className="text-3xl font-medium text-[#171717]">
                    Configurações
                </h1>
                <p className="mt-2 text-sm text-[#777] sm:text-base">
                    Personalize sua conta e a forma como você utiliza
                    o Mency.
                </p>
            </header>

            <div className="grid grid-cols-1 items-start gap-6
                xl:grid-cols-[230px_minmax(0,1fr)]">

                <aside className="rounded-2xl border border-[#EAEAEA]
                    bg-white p-3">
                    <p className="px-3 pb-3 pt-2 text-xs font-medium
                        uppercase tracking-wider text-[#999]">
                        Minha conta
                    </p>

                    <nav className="flex gap-1 overflow-x-auto xl:flex-col">
                        {secoes.map(({ id, titulo, Icone }, index) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`flex shrink-0 items-center gap-3
                                    rounded-xl px-3 py-3 text-sm
                                    transition-colors ${
                                        index === 0
                                            ? "bg-[#C19000]/10 font-medium text-[#9A7300]"
                                            : "text-[#666] hover:bg-[#F7F7F7]"
                                    }`}
                            >
                                <Icone size={20} weight="regular" />
                                {titulo}
                            </a>
                        ))}
                    </nav>
                </aside>

                <div className="min-w-0 space-y-6">

                    <section
                        id="perfil"
                        className="scroll-mt-6 rounded-2xl border
                            border-[#EAEAEA] bg-white p-5 sm:p-7"
                    >
                        <div className="mb-6">
                            <h2 className="text-lg font-medium">
                                Informações pessoais
                            </h2>
                            <p className="mt-1 text-sm text-[#777]">
                                Seus dados de identificação.
                            </p>
                        </div>

                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center
                                justify-center rounded-full bg-[#C19000]/10
                                text-[#C19000]">
                                <UserCircleIcon size={42} weight="light" />
                            </div>
                            <div>
                                <p className="font-medium text-[#252525]">
                                    {nome || "Seu perfil"}
                                </p>
                                <p className="mt-1 text-sm text-[#888]">
                                    Conta Mency
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Campo
                                label="Nome completo"
                                value={nome}
                                onChange={setNome}
                            />
                            <Campo
                                label="CPF"
                                value={cpf}
                                onChange={(valor) => setCpf(formatarCPF(valor))}
                            />
                            <Campo
                                label="E-mail"
                                value={email}
                                onChange={setEmail}
                                type="email"
                            />
                        </div>
                    </section>

                    <section
                        id="preferencias"
                        className="scroll-mt-6 rounded-2xl border
                            border-[#EAEAEA] bg-white p-5 sm:p-7"
                    >
                        <h2 className="text-lg font-medium">
                            Preferências
                        </h2>
                        <p className="mt-1 text-sm text-[#777]">
                            Ajuste a visualização das suas informações.
                        </p>

                        <div className="mt-3 divide-y divide-[#F0F0F0]">
                            <Opcao
                                titulo="Tema escuro"
                                descricao={
                                    tema === "dark"
                                        ? "O modo escuro está ativado."
                                        : "Usar o tema escuro no Mency."
                                }
                                ativo={tema === "dark"}
                                onChange={(ativo) =>
                                    onAlterarTema(ativo ? "dark" : "light")
                                }
                            />
                            <Opcao
                                titulo="Exibir valores financeiros"
                                descricao="Permite visualizar saldos e valores na tela."
                                ativo={mostrarValores}
                                onChange={alterarVisibilidadeValores}
                            />
                        </div>

                        <div className="mt-3 flex items-center gap-3
                            rounded-xl bg-[#FAFAFA] p-4">
                            {mostrarValores ? (
                                <EyeIcon size={22} className="text-[#C19000]" />
                            ) : (
                                <EyeSlashIcon size={22} className="text-[#C19000]" />
                            )}
                            <p className="text-sm text-[#666]">
                                {mostrarValores
                                    ? "Os valores estão visíveis."
                                    : "A visualização dos valores está desativada."}
                            </p>
                        </div>
                    </section>

                    <section
                        id="notificacoes"
                        className="scroll-mt-6 rounded-2xl border
                            border-[#EAEAEA] bg-white p-5 sm:p-7"
                    >
                        <h2 className="text-lg font-medium">
                            Notificações
                        </h2>
                        <p className="mt-1 text-sm text-[#777]">
                            Controle os avisos da sua experiência.
                        </p>

                        <div className="mt-3 divide-y divide-[#F0F0F0]">
                            <Opcao
                                titulo="Notificações gerais"
                                descricao="Receber avisos e atualizações do Mency."
                                ativo={notificacoes}
                                onChange={setNotificacoes}
                            />
                            <Opcao
                                titulo="Resumos financeiros"
                                descricao="Receber resumos periódicos, quando disponíveis."
                                ativo={resumos}
                                onChange={setResumos}
                            />
                        </div>
                    </section>

                    <section
                        id="seguranca"
                        className="scroll-mt-6 rounded-2xl border
                            border-[#EAEAEA] bg-white p-5 sm:p-7"
                    >
                        <h2 className="text-lg font-medium">
                            Segurança e privacidade
                        </h2>
                        <p className="mt-1 text-sm text-[#777]">
                            Mantenha seus dados protegidos.
                        </p>

                        <div className="mt-5 rounded-xl border
                            border-[#EEEEEE] p-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheckIcon
                                    size={24}
                                    className="shrink-0 text-[#C19000]"
                                />
                                <div>
                                    <p className="text-sm font-medium">
                                        Proteção da conta
                                    </p>
                                    <p className="mt-1 text-sm leading-5
                                        text-[#777]">
                                        As opções de alteração de senha e
                                        gerenciamento de sessões poderão
                                        ser integradas à autenticação.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col items-start justify-between
                        gap-3 border-t border-[#E8E8E8] pt-5 sm:flex-row
                        sm:items-center">
                        <p role="status" className="text-sm text-[#777]">
                            {mensagem}
                        </p>

                        <button
                            type="button"
                            onClick={salvarPreferencias}
                            className="flex w-full items-center justify-center
                                gap-2 rounded-xl bg-[#C19000] px-5 py-3
                                text-sm font-medium text-white
                                transition-colors hover:bg-[#A97F00]
                                sm:w-auto cursor-pointer"
                        >
                            <FloppyDiskIcon size={19} />
                            Salvar alterações
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}

function formatarCPF(cpf) {
    return cpf
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function Alternancia({ ativo, onChange }) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={ativo}
            onClick={() => onChange(!ativo)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors cursor-pointer ${
                ativo ? "bg-[#C19000]" : "bg-[#D4D4D4]"
            }`}
        >
            <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                    ativo ? "left-6" : "left-1"
                }`}
            />
        </button>
    );
}

function Campo({ label, value, onChange, type = "text" }) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#444]">
                {label}
            </span>

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C19000] focus:ring-2 focus:ring-[#C19000]/10"
            />
        </label>
    );
}

function Opcao({ titulo, descricao, ativo, onChange }) {
    return (
        <div className="flex items-center justify-between gap-4 py-4">
            <div className="min-w-0">
                <p className="text-sm font-medium text-[#252525]">
                    {titulo}
                </p>

                <p className="mt-1 text-sm leading-5 text-[#777]">
                    {descricao}
                </p>
            </div>

            <Alternancia ativo={ativo} onChange={onChange} />
        </div>
    );
}
