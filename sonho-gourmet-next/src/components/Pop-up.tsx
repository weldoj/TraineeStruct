import createProduto from "@/clientApi/produto/createProduto";
import styles from "@/styles/PopUp.module.css"
import { useRef, useState } from "react";
export default function PopUp(){
    const [close, setclose] = useState(true);
    const [image, setImage] = useState<File | null>();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("")
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const vaifechar = () => {setclose(!close)};
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

    function handlercreate(){
        createProduto({
            nome: nome,
            descricao: descricao,
            preco: parseInt(preco),
            foto: "sei lá",
            Categoria: categoria
        }).catch(e => alert(e.response.data.error))
    }
    
    return(
        <>
        {close && (
            <>
            <form className={styles.form} onSubmit={handlercreate} encType="multipart/form-data">
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
                    <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} />
                </div>
                <div className={styles.descricaoDiv}>
                    <label htmlFor="idescricao">Descrição</label>
                    <textarea name="idescricao" id={styles.descricao} value={descricao} onChange={(e) => {setDescricao(e.target.value)}}></textarea>
                </div>
                <div className={styles.preco_categoria}>
                    <div className={styles.preco}>
                        <label htmlFor="ipreco">Preço</label>
                        <input type="number"  value={preco} onChange={(e)=>{ setPreco(e.target.value)}}/>
                    </div>
                    <div className={styles.categoria}>
                        <label htmlFor="icategoria">Categoria</label>
                        <input type="text"  value={categoria} onChange={(e)=>{ setCategoria(e.target.value)}}/>
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