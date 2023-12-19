import styles from "@/styles/Carrinho.module.css"
import CardapioCard from "@/components/cardapioCard";
import { useState } from "react";
import CarrinhoCard from "@/components/carrinhoCard";
export default function Carrinho(){
    const [qtd, setQtd] = useState(false);
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1 className={styles.h1}>Carrinho de compras</h1>
            <CarrinhoCard />
            <CarrinhoCard />
            <CarrinhoCard />
            </section>
        </main>
    );
}