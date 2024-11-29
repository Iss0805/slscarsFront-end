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
        const { name, value } = event.target;
        setCarros({ ...carros, [name]: value });
    }

    function submit(event) {
        event.preventDefault();
        if (!carros.placa || !carros.modelo || !carros.cliente_id || !carros.email) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        fetch('http://localhost:5490/inserirCarros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carros),
        })
        .then((resp) => resp.json())
        .then((data) => console.log(data,
            alert('Carro cadastrado com sucesso!')
        ))
        .catch((err) => console.error(err));
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
                    value={carros.placa} // Campo controlado
                />
                
                <Input 
                    type="text"
                    name="modelo"
                    id="modelo"
                    placeholder="Digite o modelo do carro"
                    text="Modelo do carro"
                    onChange={handlerChangeCarros} 
                    value={carros.modelo} // Campo controlado
                />
                
                <Input 
                    type="number"
                    name="cliente_id"
                    id="cliente_id"
                    placeholder="Digite o Id do cliente"
                    text="ID do cliente"
                    onChange={handlerChangeCarros} 
                    value={carros.cliente_id} // Campo controlado
                />
                
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite o email do cliente"
                    text="Email do cliente"
                    onChange={handlerChangeCarros} 
                    value={carros.email} // Campo controlado
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
