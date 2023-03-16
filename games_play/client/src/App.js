import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Catalogue /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
