import styles from "@/styles/Navbar.module.css"
import Menu from "@/components/menu";
import { useState } from "react";

export default function NavBar(){
    

  const [abreMenu, setAbreMenu] = useState(false);
    return(
        <>
        <nav id={styles.nav}>
            <a href="/" id={styles.logo}>
            <div id={styles.logo}>
                <img src='/LogoIMG.png'></img>
            </div>
            </a>
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
            <div className={styles.btnMenu} >
                <button  onClick={()=> setAbreMenu(!abreMenu)}>
                    <img src="/Vector(1).png" alt="" />
                </button>
                
            </div>
        </nav>
        {
            abreMenu && 
            <div className={styles.menu} >
                <Menu></Menu>
            </div> 
        }
        </>
    )
}