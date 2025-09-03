import { BrowserRouter } from "react-router";
import { AppRoutes } from "./pages/routes";
import { HeaderBar } from "./components/header-bar";
import { ChessProvider } from "./contexts/chess-context";

function App() {

  return (
    <>
      <ChessProvider>
        <BrowserRouter>
          <HeaderBar />
          <AppRoutes />
        </BrowserRouter>
      </ChessProvider>
    </>
  )
}

export default App
