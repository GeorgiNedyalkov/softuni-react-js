import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <div id="box">
        <main id="main-content">
          <Home />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
