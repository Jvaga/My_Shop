import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Store } from "./pages/store/Store";
import { Container } from "react-bootstrap";
import { About } from "./pages/about/About";
import { Provider as ProviderItem } from "./context/ContextItems";
import { Provider as ProviderArtist } from "./context/ContextArtist";
import { Provider as ProvidershoppingCart } from "./context/ContextItems";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./components/footer/Footer";
import { Login } from "./pages/login/register/Login";
import { SingleProduct } from "./pages/singleProduct/SingleProduct";
import { AppBody, Header } from "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { ShoppingCart } from "./components/shoppingCart/shopppingCart/ShoppingCart";

const App = () => {
  return (
    <AppBody>
      <ProvidershoppingCart>
        <ShoppingCartProvider>
          <ProviderArtist>
            <ProviderItem>
              <Header>
                <NavBar />
                <ShoppingCart />
              </Header>

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
