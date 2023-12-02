import { useState } from "react";
import styles from "@/styles/ComboBox.module.css"

export default function ComboBox(){
    const [open, setOpen] = useState<boolean>(false)
    
    return (
        <div className={styles.div}>
            <button className= {styles.button} onClick={() => setOpen(!open)}>Todas as categorias</button>
            <img className={styles.img} src="/Vector.png" alt="seta" />
            {open && 
            <ul className={styles.ul}>
                <a href="#"><li>Bebidas</li></a>
                <a href="#"><li>Sobremesas</li></a>
                <a href="#"><li>Pratos Principais</li></a>
                <a href="#"><li>Entradas</li></a>
            </ul>}
        </div>
    );
}