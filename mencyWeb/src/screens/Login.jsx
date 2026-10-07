import { useState } from "react";
import {
    EnvelopeSimpleIcon,
    LockKeyIcon,
    EyeIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    ChartPieSliceIcon,
    ShieldCheckIcon,
    TrendUpIcon,
} from "@phosphor-icons/react";

export default function Login() {
    const [design, setDesign] = useState(2);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log({
            email,
            senha,
        });
    }

    return (
        <main className="min-h-screen font-poppins">
            <section className="grid min-h-screen grid-cols-1 bg-[#FAFAFA] lg:grid-cols-2">

                <div className="flex items-center justify-center px-8 py-24">
                    <div className="w-full max-w-md">
                        <div className="mb-10 flex items-center gap-3">
                            <img
                                src="/images/logodourada.png"
                                alt="Mency"
                                className="w-14"
                            />

                            <span className="text-3xl font-semibold text-[#222] cursor-default">
                                Mency
                            </span>
                        </div>

                        <p className="mb-2 text-sm font-medium uppercase tracking-[3px] text-[#C19000] cursor-default">
                            Bem-vindo novamente
                        </p>
                        <h1 className="text-4xl font-semibold text-[#202020] cursor-default">
                            Que bom ter você de volta!
                        </h1>
                        <p className="mt-3 text-[#696969] cursor-default">
                            Entre na sua conta e continue cuidando da sua vida
                            financeira.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 flex flex-col gap-5"
                        >
                            <InputEmail
                                email={email}
                                setEmail={setEmail}
                            />
                            <InputSenha
                                senha={senha}
                                setSenha={setSenha}
                            />
                            <OpcoesLogin />

                            <button
                                type="submit"
                                className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#C19000] py-4 font-medium text-white shadow-md transition duration-300 hover:bg-[#A97E00]"
                            >
                                Entrar
                                <ArrowRightIcon size={20} />
                            </button>
                        </form>

                        <CriarConta />

                    </div>
                </div>

                <div className="relative hidden overflow-hidden bg-[#C19000] lg:flex lg:items-center lg:justify-center">

                    <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10" />
                    <div className="absolute top-[20%] -left-16 h-40 w-40 rounded-full border-[25px] border-white/10" />
                    <div className="absolute -bottom-20 right-[20%] h-72 w-72 rounded-full border-[40px] border-white/10" />
                    <div className="relative z-10 max-w-lg px-12 text-white">
                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                            <ChartPieSliceIcon
                                size={36}
                                weight="light"
                            />
                        </div>

                        <h2 className="text-5xl font-semibold leading-tight cursor-default">
                            Organize hoje.
                            <br />
                            Conquiste amanhã.
                        </h2>
                        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80 cursor-default">
                            Tenha receitas, despesas, contas e metas financeiras
                            organizadas em um só lugar.
                        </p>
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <MiniCard
                                icon={
                                    <ShieldCheckIcon
                                        size={28}
                                        weight="light"
                                    />
                                }
                                titulo="Seguro"
                                texto="Seus dados protegidos"
                            />

                            <MiniCard
                                icon={
                                    <TrendUpIcon
                                        size={28}
                                        weight="light"
                                    />
                                }
                                titulo="Inteligente"
                                texto="Entenda seus gastos"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function InputEmail({ email, setEmail }) {
    return (
        <label>
            <span className="mb-2 block text-sm font-medium text-[#333] cursor-default">
                E-mail
            </span>

            <div className="flex items-center gap-3 rounded-xl border border-[#E2E2E2] bg-[#FAFAFA] px-4 transition focus-within:border-[#C19000] focus-within:bg-white">
                <EnvelopeSimpleIcon
                    size={20}
                    className="text-[#999]"
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    placeholder="seu@email.com"
                    className="w-full bg-transparent py-4 outline-none placeholder:text-[#AAAAAA]"
                />
            </div>
        </label>
    );
}

function InputSenha({ senha, setSenha }) {
    return (
        <label>
            <span className="mb-2 block text-sm font-medium text-[#333] cursor-default">
                Senha
            </span>

            <div className="flex items-center gap-3 rounded-xl border border-[#E2E2E2] bg-[#FAFAFA] px-4 transition focus-within:border-[#C19000] focus-within:bg-white">

                <LockKeyIcon
                    size={20}
                    className="text-[#999]"
                />

                <input
                    type="password"
                    value={senha}
                    onChange={(e) =>
                        setSenha(e.target.value)
                    }
                    placeholder="Sua senha"
                    className="w-full bg-transparent py-4 outline-none placeholder:text-[#AAAAAA]"
                />

                <EyeIcon
                    size={20}
                    className="cursor-pointer text-[#999]"
                />

            </div>
        </label>
    );
}

function OpcoesLogin() {
    return (
        <div className="flex items-center justify-between text-sm">
            <button
                type="button"
                className="cursor-pointer font-medium text-[#C19000] hover:underline"
            >
                Esqueci minha senha
            </button>

        </div>
    );
}

function CriarConta() {
    return (
        <p className="mt-8 text-center text-sm text-[#696969] cursor-default">

            Ainda não possui uma conta?{" "}

            <span className="cursor-pointer font-semibold text-[#C19000] hover:underline">
                Criar conta
            </span>

        </p>
    );
}

function MiniCard({ icon, titulo, texto }) {
    return (
        <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">

            {icon}

            <p className="mt-4 font-semibold cursor-default">
                {titulo}
            </p>

            <p className="mt-1 text-sm text-white/70 cursor-default">
                {texto}
            </p>

        </div>
    );
}