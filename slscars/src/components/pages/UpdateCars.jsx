import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import style from './UpdateCars.module.css'
import Input from '../formsCars/InputC'

import Button from '../formsCars/ButtonC'

const UpdateCars = () => {

        const [carros, setCarros] = useState({});

        
        const {id} = useParams();

        const navigate = useNavigate();

       

        
        function handlerChangeCarros(event) {
                setCarros({...carros, [event.target.name] : event.target.value});
                console.log(carros)
        }

     
 

        
        useEffect(()=>{

                fetch(`http://localhost:5490/listagemCarros/${id}`, {
                method: 'GET',
                mode:'cors',
                headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                },
                })
                .then((resp)=>resp.json())
                .then((data)=>{
                        console.log('ID: ' + data.data.id);
                        setCarros(data.data);
                        console.log('STATE: ' + carros.placa);
                })
                .catch((err)=>{console.log(err)});

        }, []);

        
        function updateCars(carros) {
        
                console.log(JSON.stringify(carros))
        
                fetch('http://localhost:5490/alterarCarrosCli', {
                        method:'PUT',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(carros)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                                console.log(data);
                                navigate('/ListCars',{state:'CARRO ALTEARADO COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        
        function submit(event) {
                event.preventDefault();
                updateCars(carros);
        }

        return (
                <section className={style.update_carro}>
                        
                        <h1>ALTERAÇÃO DE CARROS</h1>

                        <form onSubmit={submit}>

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
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite o email do cliente"
                    text="Email do cliente"
                    onChange={handlerChangeCarros} 
                    value={carros.email} // Campo controlado
                />
                                
                                

                                <Button 
                                rotulo='Editar Carro'/>

                        </form>

                </section>
        )
        }

export default UpdateCars