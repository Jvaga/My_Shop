import React from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Store } from "./pages/Store";
import { Container } from "react-bootstrap";
import { About } from "./pages/About";
import { Provider as ProviderItem } from "./context/ContextItems";
import { Provider as ProviderArtist } from "./context/ContextArtist";
import { Provider as ProvidershoppingCart } from "./context/ContextItems";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./components/footer/Footer";
import { Login } from "./pages/Login";
import { SingleProduct } from "./pages/SingleProduct";
import { AppBody } from "./App.css";

const App = () => {
  return (
    <AppBody>
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
                  <Route path="singleproduct" element={<SingleProduct />} />
                </Routes>
              </Container>
              <Footer />
            </ProviderItem>
          </ProviderArtist>
        </ShoppingCartProvider>
      </ProvidershoppingCart>
    </AppBody>
  );
};

export default App;
