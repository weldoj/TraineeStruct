import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainDisplay from '@/components/homeDisplay'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <MainDisplay></MainDisplay>
    <section>
            <div id={styles.content1Container}>
                <div id={styles.PosterEventosIMG}>
                    <div id={styles.OffIMG}></div>
                    <div id={styles.PosterContent}>
                        <div id={styles.titlePoster}>🎃Pesadelo Gourmet🎃</div>
                        <div id={styles.PosterOffer}>Pratos temáticos pela metade do preço</div>
                    </div>
                </div>      
            </div>
            <div id={styles.content2Container}>
              <div id={styles.TableTitle}>Nossos horários de funcionamento: </div>
              <div id={styles.Table}>
                <div className={styles.TableItem}>Café da Manhã:
                  <div className={styles.TableSubitem}>·Segunda a sexta-feira: 7h00 - 10h00</div>
                  <div className={styles.TableSubitem}>·Sábado e domingo: 8h00 - 11h00</div>
                </div>  
                <div className={styles.TableItem}>Almoço:
                  <div className={styles.TableSubitem}>·Segunda a sexta-feira: 11h30 - 14h00</div>
                </div>
                <div className={styles.TableItem}>Jantar:
                  <div className={styles.TableSubitem}>·Segunda a quinta-feira: 18h00 - 22h00</div>
                  <div className={styles.TableSubitem}>·Sexta-feira e sábado: 18h00 - 23h00</div>
                  <div className={styles.TableSubitem}>·Domingo: 17h00 - 21h00</div>
                </div>
              </div>
            </div>
        </section>
        <section id={styles.middlePoster}>
          <div id={styles.middlePosterContainer}>
            <div className={styles.MiddleItem}>
              Na hora que você precisar:<br></br>
              Pro almoço ou pro jantar,<br></br>
              Café da manhã também,<br></br>
              Vem aqui que a gente tem!<br></br>
              Lanche ou sobremesa, <br></br>
              A gente te serve que é uma beleza<br></br>

              Na nossa cozinha, o sabor é a lei, <br></br>
              Com ingredientes frescos, você vai ver, <br></br>
              Pratos deliciosos, com amor preparados, <br></br>
              Para deixar todos os seus desejos saciados.<br></br>

              Seja um prato quente ou uma sobremesa doce, <br></br>
              Nossa comida é uma verdadeira proeza, <br></br>
              Venha nos visitar a qualquer hora do dia, <br></br>
              E faremos o seu apetite sorrir de alegria!<br></br>
            </div>
            <div className={styles.MiddleItem} id={styles.PhotosTitle}>Conheça o que temos a oferecer:
              <div id={styles.PhotoContainer}>
                <div id={styles.PhotosContainer1}>
                  <div id={styles.photo1}><img src='/Comida1Home.png'></img></div>
                  <div id={styles.photo2}><img src='/Comida2Home.png'></img></div>
                  <div id={styles.photo3}><img src='/Comida3Home.png'></img></div>
                </div>
                <div id={styles.PhotosContainer2}>
                  <div id={styles.photo4}><img src='/Comida4Home.png'></img></div>
                  <div id={styles.photo5}><img src='/Comida5Home.png'></img></div>
                  <div id={styles.photo6}><img src='/Comida6Home.png'></img></div>
                </div>
              </div> 
            </div>
          </div>
        </section>
        <section>
          <div id={styles.aboutContainer}>
            <div id={styles.about}>
              <p id={styles.aboutTitle}>Um pouco sobre nós:</p>
              <p id={styles.aboutContent}>Sonho Gourmet surgiu há muito tempo com um simples objetivo: agradar o paladar da humanidade com comida de qualidade, e até então cumprimos fielmente com esse objetivo pela satisfação de vocês, nossos fiéis clientes e consumidores que apreciam estar sempre conosco. 
              Por isso, a nossa maior satisfação é foco em continuar entregando o melhor serviço com a melhor qualidade. Para saber mais clique aqui.</p>
            </div>
          </div>
        </section>
        <section>
          <div id={styles.depContainer}>
            <div id={styles.depTitle}>Depoimentos:</div>
            <div id={styles.depContent}>
              <div className={styles.depItem}>
                <p className={styles.depItemTitle}>John Doe</p>
                <p className={styles.depItemTxt}>“O Sonho Gourmet é simplesmente incrível! A comida é uma explosão de sabores e a apresentação dos pratos é de tirar o fôlego. Um verdadeiro deleite para os sentidos!”</p>
              </div>
              <div className={styles.depItem}>
                <p className={styles.depItemTitle}>Jane Doe</p>
                <p className={styles.depItemTxt}>“Uma refeição no Sonho Gourmet é uma experiência culinária que realmente satisfaz todos os sentidos.”</p>
              </div>
              <div className={styles.depItem}>
                <p className={styles.depItemTitle} >Joseph Doe</p>
                <p className={styles.depItemTxt}>“A atmosfera do Sonho Gourmet é sofisticada, criando um ambiente perfeito para jantares românticos ou celebrações especiais.”</p>
              </div>
            </div>
          </div>
            
        </section>
      </>
  )
}
