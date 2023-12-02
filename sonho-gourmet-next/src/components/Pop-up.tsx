import styles from "@/styles/PopUp.module.css"
import { useState } from "react";
export default function PopUp(){
    const [close, setclose] = useState(true);
    const vaifechar = () => {setclose(!close)};
    
    return(
        <>
        {close && (
            <>
            <div className={styles.overlay} onClick={vaifechar}></div>
            <section className={styles.section}>
                <button className={styles.btnSair} onClick={vaifechar}><img src="/x_icon_150997.png" alt="" /></button>
                <div className={styles.addImg}>
                    <a href="#"><img src="/AddImageButton.png" alt="" /></a>
                </div>
                <div className={styles.nome}>
                    <label htmlFor="inome">Nome</label>
                    <input type="text" />
                </div>
                <div className={styles.descricaoDiv}>
                    <label htmlFor="idescricao">Descrição</label>
                    <textarea name="idescricao" id={styles.descricao}></textarea>
                </div>
                <div className={styles.preco_categoria}>
                    <div className={styles.preco}>
                        <label htmlFor="ipreco">Preço</label>
                        <input type="number" />
                    </div>
                    <div className={styles.categoria}>
                        <label htmlFor="icategoria">Categoria</label>
                        <input type="text" />
                    </div>
                </div>
                <button className={styles.btn} onClick={vaifechar}>Salvar</button>
        </section>
        </>
        )}
        </>
    );

}