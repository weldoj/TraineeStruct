import Styles from "@/styles/Footer.module.css"

export default function Footer() {
    return (
 
        <footer className={Styles.footer}>
            <div className={`${Styles.logo_links} ${Styles.responsive_div}`}>
                <div className={Styles.logo}>
                    <img src="/LogoIMG.png"/>
                    <p className={Styles.p}>Sonho Gourmet</p>
                </div>

                <div className={`${Styles.links} ${Styles.media_link_amor}`}>
                    <p className={Styles.p}>Links úteis</p>
                    <ul className={Styles.ul}>
                        <li className={Styles.li}><a href="#">Home</a></li>
                        <li className={Styles.li}><a href="#">Cardápio</a></li>
                        <li className={Styles.li}><a href="#">Sobre</a></li>
                    </ul>
                </div>
            </div>

            <section className={`${Styles.frase} ${Styles.media_link_amor}`}>
                <p className={Styles.p_feitoComAmor}>Feito com <span className={Styles.heart}>&hearts;</span> pela <strong>RocketWeb</strong> 🚀</p>
            </section>

            <div className={`${Styles.Contatos} ${Styles.responsive_div}`}>
                <p className={Styles.p_contatos}>Contatos</p>
                <i className={Styles.i}><a href="#"><img src="/Facebook_Logo_Primary 1.png" alt="" /></a></i>
                <i className={Styles.i}><a href="#"><img src="/Digital_Glyph_Green 1.png" alt="" /></a></i>
                <i className={Styles.i}><a href="#"><img src="/Instagram_Glyph_Gradient 1 (1).png" alt="" /></a></i>
            </div> 
        </footer>
    )
}