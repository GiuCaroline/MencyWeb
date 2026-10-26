import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "./components/nav";
import Index from "./screens/Index";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Transacoes from "./screens/Transacoes";
import Relatorios from "./screens/Relatorios";
import Assistente from "./screens/Assistente";
import Configuracoes from "./screens/Configuracoes";

export default function App() {
    const location = useLocation();
    const [tema, setTema] = useState(() => {
        const preferenciaSalva = localStorage.getItem("mency_tema");
        if (preferenciaSalva === "dark" || preferenciaSalva === "light") {
            return preferenciaSalva;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", tema === "dark");
        document.documentElement.style.colorScheme = tema;
        localStorage.setItem("mency_tema", tema);
    }, [tema]);

    const rotasSemNav = ["/", "/login"];
    const mostrarNav = !rotasSemNav.includes(location.pathname);

    return (
        <div className="mency-app flex min-h-screen bg-[#FAFAFA] font-poppins">
            {mostrarNav && <Nav />}

            <div className="min-w-0 flex-1">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                    <Route path="/relatorios" element={<Relatorios />} />
                    <Route path="/assistente" element={<Assistente />} />
                    <Route path="/configuracoes" element={<Configuracoes tema={tema} onAlterarTema={setTema} />} />
                    <Route path="*" element={<p className="p-8">Página não encontrada.</p>} />
                </Routes>
            </div>
        </div>
    );
}