import { Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/nav";
import Index from "./screens/Index";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Transacoes from "./screens/Transacoes";
import Relatorios from "./screens/Relatorios";
import Assistente from "./screens/Assistente";
import Configuracoes from "./screens/Configuracoes";
import { useEffect, useState } from "react";
import Acessibilidade from "../src/components/acessibilidade";

export default function App() {
    const location = useLocation();

    const [tema, setTema] = useState(() => {
        const temaSalvo = localStorage.getItem("mency_tema");

        if (temaSalvo === "dark" || temaSalvo === "light") {
            return temaSalvo;
        }

        const prefereDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        return prefereDark ? "dark" : "light";
    });

    useEffect(() => {
        const raiz = document.documentElement;

        raiz.classList.toggle("dark", tema === "dark");
        raiz.style.colorScheme = tema;

        localStorage.setItem("mency_tema", tema);
    }, [tema]);

    const rotasSemNav = ["/", "/login"];
    const mostrarNav = !rotasSemNav.includes(location.pathname);

    return (
        <>
        <div className="flex min-h-screen bg-[#FAFAFA] dark:bg-[#121212] font-poppins">
            {mostrarNav && <Nav />}

            <div className="min-w-0 flex-1">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                    <Route path="/relatorios" element={<Relatorios />} />
                    <Route path="/assistente" element={<Assistente />} />
                    <Route
                        path="/configuracoes"
                        element={
                            <Configuracoes
                                tema={tema}
                                onAlterarTema={setTema}
                            />
                        }
                    />
                    <Route
                        path="*"
                        element={<p className="p-8">Página não encontrada.</p>}
                    />
                </Routes>
            </div>
        </div>

        <Acessibilidade />
    </>
    );
}