import styles from "@/styles/CardapioCard.module.css"
import React, { useState } from "react";
import PopUp from "@/components/Pop-up";
import deleteProduto from "@/clientApi/produto/deleteProduto";

type cardProps = React.PropsWithChildren<{
}>
export default function CardapioCard({ children}:cardProps){
    const [popup,setpopup] = useState(false)
     function handlerdelete(){
        deleteProduto({id: 1}).catch(e => alert(e.response.data.error))
     }
    
    return(
        <>
        <section className={styles.section}>          
            {children}
            <div className={styles.carrinho}>
                <button>
                    <img src="/Group5.png" alt="" />
                </button>
                {
                    popup && <PopUp/>
                }
                <button className={styles.btn_editar} onClick={()=>setpopup(!popup)}>
                    <img src="/Group7.png" alt="" />
                </button>
                <button onClick={handlerdelete}>
                    <img src="/Group6.png" alt="" />
                </button>
            </div>
           
        </section>
        </>
    );
}

