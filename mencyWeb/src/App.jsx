import { Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/nav";
import Index from "./screens/Index";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Transacoes from "./screens/Transacoes";
import Relatorios from "./screens/Relatorios";
import Assistente from "./screens/Assistente";

export default function App() {
    const location = useLocation();

    const rotasSemNav = ["/", "/login"];
    const mostrarNav = !rotasSemNav.includes(location.pathname);

    return (
        <div className="flex min-h-screen bg-[#FAFAFA] font-poppins">
            {mostrarNav && <Nav />}

            <div className="min-w-0 flex-1">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                    <Route path="/relatorios" element={<Relatorios />} />
                    <Route path="/assistente" element={<Assistente />} />
                    <Route path="*" element={<p className="p-8">Página não encontrada.</p>} />
                </Routes>
            </div>
        </div>
    );
}