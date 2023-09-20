import React from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Container } from "react-bootstrap";
import { About } from "./pages/About";
import { Provider as ProviderItem } from "./context/ContextItems";
import { Provider as ProviderArtist } from "./context/ContextArtist";
import { Provider as ProvidershoppingCart } from "./context/ContextItems";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./components/footer/Footer";
import { Login } from "./pages/Login";
import { Checkout } from "./pages/Checkout";

const App = () => {
  return (
    <>
      <ProvidershoppingCart>
        <ShoppingCartProvider>
          <ProviderArtist>
            <ProviderItem>
              <Navbar />
              <Container className="mb-5" fluid="true">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="store" element={<Store />} />
                  <Route path="about" element={<About />} />
                  <Route path="login" element={<Login />} />
                  <Route path="checkout" element={<Checkout />} />
                </Routes>
              </Container>
              <Footer />
            </ProviderItem>
          </ProviderArtist>
        </ShoppingCartProvider>
      </ProvidershoppingCart>
    </>
  );
};

export default App;
