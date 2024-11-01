import { useState } from "react";
import style from "./CreateCars.module.css";
import Input from "../formsCars/InputC";
import Button from "../formsCars/ButtonC";

const CreateCarssls = () => {
    const [carros, setCarros] = useState({
        placa: '',
        modelo: '',
        cliente_id: '',
        email: ''
    }); 

    function handlerChangeCarros(event) {
        setCarros({ ...carros, [event.target.name]: event.target.value });
        console.log(carros);
    }

    function submitCreateCarros(carros) {  
        console.log(JSON.stringify(carros));

        fetch('http://localhost:5490/inserirCarros', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carros),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function submit(event) {
        event.preventDefault();
        const { placa, modelo, cliente_id, email } = carros;
        
        if (!placa || !modelo || !cliente_id || !email) {
            alert("Placa, modelo, ID do cliente e email são obrigatórios!");
            return;
        }

        console.log("Dados a serem enviados:", carros);
        submitCreateCarros(carros);
    }

    return (
        <section className={style.create_carro}>
            <form onSubmit={submit}>
                <h1>CADASTRO DE CARROS</h1>
                
                <Input 
                    type="text"
                    name="placa"
                    id="placa"
                    placeholder="Digite a placa do seu carro aqui"
                    text="Placa do Carro"
                    onChange={handlerChangeCarros} 
                />
                
                <Input 
                    type="text"
                    name="modelo"
                    id="modelo"
                    placeholder="Digite o modelo do carro"
                    text="Modelo do carro"
                    onChange={handlerChangeCarros} 
                />
                
                <Input 
                    type="number"
                    name="cliente_id"
                    id="cliente_id"
                    placeholder="Digite o Id do cliente"
                    text="ID do cliente"
                    onChange={handlerChangeCarros} 
                />
                
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite o email do cliente"
                    text="Email do cliente"
                    onChange={handlerChangeCarros} 
                />
                
                <Button
                    rotulo="Cadastrar Carro"
                    type="submit"
                />
            </form>
        </section>
    );
};

export default CreateCarssls;
