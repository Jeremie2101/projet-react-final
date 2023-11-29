import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Special from "./Components/Special";
import Products from "./Components/Products";
import Place from "./Components/Place";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";



function App() {
  return (
    <>
      <Header/>
        <main className="main">
        <Hero/>
        <Special/>
        <Products/>
        <Place/>
        <Blog/>
        </main>
        <Footer/>
    </>
  );
}

export default App;
