import  styles  from "@/styles/Menu.module.css"
export default function Menu(){
    return(
        <section className={styles.menuOverlay}>
            <div id={styles.mainNav}>
                <a href="/Cardapio" className={styles.linkNav}><div className={styles.mainNavButton}>Cardápio</div></a>
                <a href="/Sobre" className={styles.linkNav}><div className={styles.mainNavButton}>Sobre</div></a>
                <a href="/Contato" className={styles.linkNav}><div className={styles.mainNavButton}>Contatos</div></a>
                <a href="/Carrinho "className={styles.linkNav}><div className={styles.mainNavButton}>Carrinho</div></a>
            </div>
            <a href="/Login" className={styles.linkNav}>
                <div id={styles.login}>
                    <div>Login</div>
                    <div><img src='/UserIcon.png' height='80px'></img></div>
                </div>
            </a>
        </section>
    )
}