import { Routes, Route } from "react-router";
import { Home } from "./home";

const AppRoutes = () => (
    <Routes>
        <Route index path='/' element={<Home />} />
    </Routes>
)

export { AppRoutes }