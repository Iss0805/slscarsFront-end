import styles from './Select.module.css'

function Select({name,text}){

        return(

            <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
               <option>Selecione uma função</option>
               <option>Fiscal</option>
               <option>Operador</option>
               <option>Manobrista</option>
               
             



            </select>

            </div>
        )



}

export default Select