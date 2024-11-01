import { useState } from "react";
import style from "./CreateUserColab.module.css";
import Input from "../formsCars/InputC";
import Button from "../formsCars/ButtonC";

const CreateUserColab = () => {
    const [clientes, setClientes] = useState({}); 

    function handlerChangeCliente(event) {
        setClientes({ ...clientes, [event.target.name]: event.target.value });
        console.log(clientes);
    }

    function submitCreateUserColab(clientes) {  
        console.log(JSON.stringify(clientes));

        fetch('http://localhost:5490/inserirUsuario', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientes),
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
        if (!clientes.nome_cliente || !clientes.email) {
            alert("Nome e Email são obrigatórios!");
            return;
        }
        console.log("Dados a serem enviados:", clientes);
        submitCreateUserColab(clientes);
    }

    return (
        <section className={style.create_User_Colab_container}>
            <h1>CADASTRO DE CLIENTES</h1>

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="nome_cliente"
                    id="nome_cliente"
                    placeholder="Digite o nome do cliente"
                    text="Digite o nome do cliente:"
                    onChange={handlerChangeCliente} 
                />

                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite o email do cliente"
                    text="Digite o email do cliente:"
                    onChange={handlerChangeCliente} 
                />

                <Input
                    type="number"
                    name="telefone"
                    id="telefone"
                    placeholder="Digite o telefone do cliente"
                    text="Telefone:"
                    onChange={handlerChangeCliente}  
                />

                <Button rotulo="Cadastrar Cliente" type="submit" />
            </form>
        </section>
    );
};

export default CreateUserColab;
