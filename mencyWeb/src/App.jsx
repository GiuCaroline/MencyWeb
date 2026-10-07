import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./screens/Index";
import Login from "./screens/Login";

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>Página não encontrada.</p>} />
      </Routes>
    </div>
  );
}