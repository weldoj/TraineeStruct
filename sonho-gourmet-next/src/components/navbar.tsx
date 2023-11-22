import styles from "@/styles/Navbar.module.css"

export default function NavBar(){
    return(
        <nav id={styles.nav}>
            <a href="/" id={styles.logo}>
            <div id={styles.logo}>
                <img src='LogoIMG.png'></img>
            </div>
            </a>
            <div id={styles.mainNav}>
                <a href="/Cardapio" className={styles.linkNav}><div className={styles.mainNavButton}>Cardápio</div></a>
                <a href="/Sobre" className={styles.linkNav}><div className={styles.mainNavButton}>Sobre</div></a>
                <a href="/Contato" className={styles.linkNav}><div className={styles.mainNavButton}>Contatos</div></a>
            </div>
            <a href="" className={styles.linkNav}>
                <div id={styles.login}>
                    <div>Login</div>
                    <div><img src='UserIcon.png' height='80px'></img></div>
                </div>
            </a> 
        </nav>
    )
}