import Index from "./screens/Index";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<p>Página não encontrada.</p>} />
      </Routes>
    </div>
  );
}