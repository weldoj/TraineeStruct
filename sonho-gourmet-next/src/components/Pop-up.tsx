import styles from "@/styles/PopUp.module.css"
import { useState } from "react";
export default function PopUp(){
    const [close, setclose] = useState(true);
    const vaifechar = () => {setclose(!close)};
    
    return(
        <>
        {close && (
            <dialog className={styles.section}>
            <div>
                <a href="#"><img src="/AddImageButton.png" alt="" /></a>
            </div>
            <div>
                <label htmlFor="inome">Nome</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="idescricao">Descrição</label>
                <input type="text" />
            </div>
            <div>
                <div>
                    <label htmlFor="ipreco">Preço</label>
                    <input type="number" />
                </div>
                <div>
                    <label htmlFor="icategoria">Categoria</label>
                    <input type="text" />
                </div>
            </div>
            <button onClick={vaifechar}>Salvar</button>
        </dialog>
        )}
        </>
    );

}