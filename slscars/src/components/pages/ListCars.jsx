import React, { useState, useEffect } from 'react';
import CardCars from '../CardCars';
import Container from '../layout/Container';
import ContainerCars from '../Layout/Containerslscars';
import style from './ListCars.module.css';

const ListCars = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5490/listagemCarros', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (Array.isArray(data.data)) {
                    console.log('CARROS: ', data.data);
                    setCarros(data.data);
                } else {
                    console.error('A resposta não contém um array de carros:', data);
                }
            })
            .catch((err) => {
                console.error('Erro ao buscar carros:', err);
            });
    }, []);

    useEffect(() => {
        console.log('STATE atualizado: ', carros);
    }, [carros]);

    return (
        <Container>
            <section className={style.list_cars}>
                <h1>LISTA DE CARROS</h1>
                <ContainerCars>
                    {carros.map((carro) => (
                        <CardCars
                            
                            placa={carro.placa}
                            modelo={carro.modelo}
                            email={carro.email}
                            cliente_id={carro.cliente_id}
                            key={carro.placa} 
                        />
                    ))}
                </ContainerCars>
            </section>
        </Container>
    );
};

export default ListCars;
