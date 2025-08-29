import { Routes, Route } from "react-router";
import { Home } from "./home";
import { Chess } from "./chess";
import { Tierlist } from "./tierlist";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path='chess-pieces' element={<Chess />} />
        <Route path='tierlist-fnaf' element={<Tierlist />} />
    </Routes>
)

export { AppRoutes }