import {Link} from 'react-router-dom'

import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
function Button({label, router, id }) {
    return (
        <div className={styles.buttonContainer}>
        
            <Link to ={`${router}${id}`}>
            <button>{label}</button>
            </Link>
       
        </div>
    );  
}

export default Button;
