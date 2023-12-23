import getCategoria from "@/clientApi/categoria/getCategoria";
import getProdutos from "@/clientApi/produto/getProdutos";
import CardapioCard from "@/components/cardapioCard";
import ComboBox from "@/components/comboBox";
import PopUp from "@/components/Pop-up";
import styles from "@/styles/Cardapio.module.css"
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";

export const getServerSideProps = (async () => {
    const produtos = await getProdutos()
    const categoria = await getCategoria({id: 1})
    
    return { props: {categoria ,produtos} };
  }) satisfies GetServerSideProps;
  
  
export default function Cardapio(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [popup,setpopup] = useState(false)
    
   
    
    return (
        <>
            <header className={styles.hearder}>        
                <div className={styles.form}>
                    <form  action="dado.rb" method="post">
                        <input className={styles.pesquisar} type="search" placeholder="Pesquisar..." />
                        <button className={styles.button}>
                            <img src="/material-symbols_search.png" alt="" />
                        </button>
                    </form>
                </div>
                
                <div className={styles.combo}>
                    <ComboBox/>
                </div>         
            </header>
           

            <main className={styles.main}>     
                <section>
                    <section className={styles.adcionar}>
                        <button onClick={()=>setpopup(!popup)}>ADICIONAR <strong className={styles.strong}>+</strong></button>
                    </section>
                {
                    popup && <PopUp/>
                }
                    <ul>
                        {props.produtos.map((item) => (
                            <CardapioCard key={item.id} >                   
                                <div>
                                    <img src={`/${item.foto}`} className={styles.img}  alt="" />
                                </div>       
                                <div className={styles.informacoes}>
                                    <h1 className={styles.h1} >{item.nome}</h1>
                                    <p className={styles.p}>{item.descricao}</p>
                                    <h2 className={styles.h2}>{props.categoria.nome}</h2>
                                    <h3 >R$ {item.preco}</h3>
                                </div>
                            </CardapioCard>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    )
}
