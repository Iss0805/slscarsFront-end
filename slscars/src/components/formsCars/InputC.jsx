import styles from './InputC.module.css'

// eslint-disable-next-line react/prop-types
function Input({type,name,text,placeHolder,onChange}){
    return(

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeHolder}
            onChange={onChange}
           
         />

            


        </div>

    )

}
export default Input