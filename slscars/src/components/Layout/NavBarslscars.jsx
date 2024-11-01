import style from './NavBarslscars.module.css'
import { Link, Outlet } from 'react-router-dom';

const NavBar = () =>{

    return(

        <>

        <nav className={style.NavBar}>


        <ul className={style.list}>
        <Link to='/'>
            <li className={style.fund}><img className={style.logo} src="./cars2.png"/></li>
        </Link>

        <Link to='/'>
            <li className={style.fund}>HOME</li>
        </Link>

        <Link to='/CreateUserColab'>
            <li className={style.fund}>CADASTRAR CLIENTES</li>
        </Link>

        <Link to='/CreateCarssls'>
            <li className={style.fund}>CADASTRAR CARROS</li>

        </Link>

        <Link to='/ListCars'>
            <li className={style.fund}>LISTA CARROS</li>
        </Link>

        
        <Link to='/CardCars'>
            <li className={style.fund}>CARD CARROS</li>
        </Link>



        </ul>
        </nav>
        <Outlet/>
        </>

        


    )


}

export default NavBar;