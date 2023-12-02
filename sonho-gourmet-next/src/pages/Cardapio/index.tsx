import CardapioCard from "@/components/cardapioCard";
import ComboBox from "@/components/comboBox";
import PopUp from "@/components/Pop-up";
import styles from "@/styles/Cardapio.module.css"

export default function Cardapio() {
    return (
        <>
        
        <header className={styles.hearder}>
            <section className={styles.section_form} >
                <form className={styles.form} action="dado.rb" method="post">
                    <input className={styles.pesquisar} type="search" placeholder="Pesquisar..." />
                    <button className={styles.button}>
                        <img src="/material-symbols_search.png" alt="" />
                    </button>
                </form>
            </section>
            <section className={styles.comboBox}>
                <ComboBox/>
            </section>
        </header>
        <main className={styles.main}>
            
            <section>
                <CardapioCard />
                <CardapioCard />
                <CardapioCard />
                <CardapioCard />
            </section>
        </main>
        </>
    )
}
