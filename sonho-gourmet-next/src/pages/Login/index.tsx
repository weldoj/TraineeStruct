import styles from '@/styles/Login.module.css'
export default function Login(){
    return(
        <div id={styles.screen}>
            <div id={styles.formContainer}>
                <div id={styles.form}>
                    <div id={styles.back}>
                       <a href="/"><img src='backButton.png'></img></a>
                    </div>
                    <div id={styles.form2}>
                        <form id={styles.form3}>
                            <h1 className={styles.cell} id={styles.title}>Faça login na plataforma</h1>
                            <label className={styles.cell}>E-mail:</label>
                            <input></input>
                            <label className={styles.cell}>Senha:</label>
                            <input></input>
                            <button>Enviar</button>
                        </form>  
                    </div>
                </div>      
            </div>
            <div id={styles.img}>
            </div>
        </div>
    )
}