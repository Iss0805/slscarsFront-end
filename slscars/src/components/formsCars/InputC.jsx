import styles from "../formsCars/InputC.module.css"

// eslint-disable-next-line react/prop-types
const Input = ({ type, name, id, placeholder, text, onChange, value }) => (
    <div className={styles.form_control}>
        <label htmlFor={id}>{text}</label>
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value} // Certifique-se de passar o valor
        />
    </div>
);

export default Input;
