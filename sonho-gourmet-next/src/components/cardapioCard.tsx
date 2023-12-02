import styles from "@/styles/CardapioCard.module.css"
import { useState } from "react";
import PopUp from "@/components/Pop-up";

export default function CardapioCard(){
    const [popup,setpopup] = useState(false)
    return(
        <>
        <section className={styles.section}>  
            <div>
                <img className={styles.img} src="/Comida1Home.png" alt="" />
            </div>         
           
            <div className={styles.informacoes}>
                <h1>Rattatouille</h1>
                <p className={styles.p} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec scelerisque diam. Donec vehicula ante risus, in tincidunt libero maximus suscipit.  </p>
                <h2 className={styles.h2}>sobremesas</h2>
                <h3>preço</h3>
            </div>
            
            <div className={styles.carrinho}>
                <button onClick={()=>setpopup(!popup)}>
                    <img src="/Group5.png" alt="" />
                </button>
                {
                    popup && <PopUp/>
                }
            </div>
           
        </section>
        </>
    );
}

