import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/CartComponents/ShoppingCart";
import Container from "./components/HomePage/AllRoutes";
import Products from "./components/Products/Products";
import "./components/Style.css";



function App() {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route index path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;