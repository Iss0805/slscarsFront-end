import styles from '../formsCars/ButtonC.module.css';

// eslint-disable-next-line react/prop-types
function Button({ rotulo }) {
    return (
        <button className={styles.button}>
            
            {rotulo}
        </button>
    );
}

export default Button;
