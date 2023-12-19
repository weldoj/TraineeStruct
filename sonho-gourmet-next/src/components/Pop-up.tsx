import styles from "@/styles/PopUp.module.css"
import { readFile } from "fs";
import { useRef, useState } from "react";
export default function PopUp(){
    const [close, setclose] = useState(true);
    const vaifechar = () => {setclose(!close)};
    const [image, setImage] = useState<File | null>();
    
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    
    const handleButtonClick = () => {
        if(fileInputRef.current){
            fileInputRef.current.click();
        }  
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        setImage(selectedFile)
    }

    const uploadImg = async  (e: React.FormEvent) => {
        e.preventDefault()
        console.log("imagem salva", image)

    }

    
    return(
        <>
        {close && (
            <>
            <form onSubmit={uploadImg}>
            <div className={styles.overlay} onClick={vaifechar}></div>
            <section className={styles.section}>
                
                <button className={styles.btnSair} onClick={vaifechar}><img src="/x_icon_150997.png" alt="" /></button>
                <div className={styles.addImg}>
                    <img
                     src="/AddImageButton.png"
                     alt="" 
                     onClick={handleButtonClick} 
                     />
                     
                    <input 
                     ref= {fileInputRef}
                     type="file" 
                     name="image" 
                     className={styles.fileInput}
                     onChange={handleFileChange}
                     />
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
                <button 
                    type='submit'
                    className={styles.btn} 
                    >Salvar
                </button>
                
        </section>
        </form>
        </>
        )}
        </>
    );

}