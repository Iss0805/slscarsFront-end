// eslint-disable-next-line no-unused-vars
import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import style from '../pages/DetailCars.module.css'

import Button from '../Button'

import carro from '../../assets/celta.jpg'

const DetailCars = () => {

    /* RECUPERANDO O ID DA URL */
    const {id} = useParams();
    console.log('ID:' + id);

    
    const[carros, setCarros] = useState({});

  
    useEffect(()=>{

        fetch(`http://localhost:5490/listagemCarros/${id}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setCarros(data.data);
            console.log('DADOS DO CARRO' + data.data);
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return (
        <section className={style.detail_cars}>
        <div className={style.grid}>
            
            <div className={style.container_img}>
                <img className={style.img} src={carro} alt='Imagem do carro' />
            </div>

            <div className={style.info}>

                <span className={style.placa}>{carros.placa}</span>
                <span className={style.modelo}>{carros.modelo}</span>

                <span className={style.email}>
                    {carros.email}
                </span>

                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router='/updateCars/'
                        id={carros.id}
                        
                    />

                    <Button 
                        label='EXCLUIR'
                        router='/deleteCars/'
                        id={carros.id}
                    />

                </div>

            </div>

        </div>
        </section>
    )

}

export default DetailCars
