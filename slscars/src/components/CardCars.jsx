import style from './CardCars.module.css'

import Button from '../components/Button'

// eslint-disable-next-line react/prop-types
const CardCars = ({placa,modelo,id,email})=>{

    return(
        <div className={style.cardCars}>
            
            <h4 className={style.email}>{email}</h4>
            <h1 className={style.placa}>{placa}</h1>
            <p className={style.modelo}>{modelo}</p>

            <Button label='DETALHE' router='/detailCarros/' id={id}/>
        </div>
    )

}

export default CardCars