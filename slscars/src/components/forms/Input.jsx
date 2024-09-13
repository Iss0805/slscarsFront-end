import styles from './Input.module.css'

function Input({type,name,text,placeHolder}){
    return(

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeHolder}
         />

            


        </div>

    )

}
export default Input