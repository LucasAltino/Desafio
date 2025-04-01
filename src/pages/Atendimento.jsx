import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Atendimento.module.css";
import Card from "../components/Card";

function Atendimento() {
    const [pets, setPets] = useState([]);
    const pets2 = [...pets].reverse();
    const [search, setSearch] = useState("");

    const fetchPets = async () => {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await response.json();
        
        console.log("Dados da API:", data);
        
        const filto = data.filter(pet => pet.id.toString() === search);

        if (filto.length > 0) {
            setPets(prevPets => [...prevPets, ...filto]);
        }
    };

    return (
        <div className={style.contain}>
            <div className={style.header}>
                <Link to={'/'}>
                    <div className={style.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                        </svg>
                    </div>
                </Link>
                <div className={style.logo}>
                    <img src="./logo2.png" alt="Logo" />
                </div>
            </div>
            <div className={style.main}>
                <div className={style.consulta}>
                    <h3>Nova consulta</h3>
                    <input 
                        type="text" 
                        placeholder="Digite um número (1-172)..." 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={fetchPets}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </button>
                </div>
                <div className={style.tituloAtend}>
                    <p>Últimos atendimentos:</p>
                </div>
                <div className={style.cards}>
                    <Card pets={pets2} />
                </div>
            </div>
        </div>
    );
}

export default Atendimento;