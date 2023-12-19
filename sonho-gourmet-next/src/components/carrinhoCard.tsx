import styles from "@/styles/CarrinhoCard.module.css"
export default function CarrinhoCard(){
    return (
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
                <button>Qtd</button>
                <button>Excluir</button> 
            </div>
        </section>
        
    );
}