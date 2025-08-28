import { BrowserRouter } from "react-router";
import { AppRoutes } from "./pages/routes";
import { HeaderBar } from "./components/header-bar";

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
