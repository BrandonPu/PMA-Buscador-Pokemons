import { BuscadorPokemonApp } from "./components/BuscadorPokemonApp";
import React from "react";
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BuscadorPokemonApp/>
    </React.StrictMode>
)