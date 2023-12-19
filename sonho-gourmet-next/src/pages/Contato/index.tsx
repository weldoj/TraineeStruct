import Head from 'next/head'
import styles from '@/styles/Contato.module.css'
import { useState } from 'react'


export default function Contato() {

  const [nome, setnome] =  useState("")
  const [email, setemail] = useState("")
  const [numContato, setnumContato] = useState("")
  const [contenos, setcontenos] = useState("")
  return (
    <>
      <header>
        <div className={styles.fale_cag}>
          <h1>Fale com a gente!</h1>
        </div>
      </header>
      <main className={styles.main}>
              <section>
                  <form action="dado.rb" method="post">
                      <div className={styles.nome}>
                          <label htmlFor="inome">Nome: </label> 
                          <input type='text' placeholder="Digite o seu nome" value={nome} onChange={(e) => setnome(e.target.value)} />
                      </div>

                      <div  className={styles.email}>
                          <label htmlFor="iemail">Email: </label>

                          <input type="email"  placeholder="Digite o seu email" value={email} onChange={(e) => setemail(e.target.value)}/>
                      </div>

                      <div  className={styles.contato}>
                          <label htmlFor="icontato">Número para contato: </label>

                          <input type="number"  placeholder="Digite o seu numero" value={numContato} onChange={(e) => setnumContato(e.target.value)}/>
                      </div>

                      <div className={styles.Texto}>
                          <label htmlFor="ineed">Conte-nos do que precisa:</label>
                          <br />
                          <textarea className={styles.textarea} placeholder="Clique para inserir ..." value={contenos} onChange={(e) => setcontenos(e.target.value)} />

                      </div>
                      <div className={styles.enviar}>
                          <button>Enviar</button>
                      </div>
                  </form>
              </section>

              <div className={styles.imgs} >
                <img className={styles.img1} src="memeContato1.png" alt="" />
                <img className={styles.img2} src="memeContato2.png" alt="" width="200px" />
              </div>
      </main>
    </>
  )
}