import style from './CardCars.module.css'

import Button from '../components/formsCars/ButtonC'

const CardCars = ({placa,modelo,id,email})=>{

    return(
        <div className={style.cardCars}>
            <h1 className={style.placa}>{placa}</h1>
            <h3 className={style.email}>{email}</h3>
            <p className={style.modelo}>{modelo}</p>

            <Button label='DETALHES' router='/detalhesCliente/'id={id} />
        </div>
    )

}

export default CardCars