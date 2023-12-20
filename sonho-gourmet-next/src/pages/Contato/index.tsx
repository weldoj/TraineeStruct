import Head from 'next/head'
import styles from '@/styles/Contato.module.css'
import { useState } from 'react'
import createContatos from '@/clientApi/contatos/createContatos'


export default function Contato() {

  const [nome, setnome] =  useState("")
  const [email, setemail] = useState("")
  const [numContato, setnumContato] = useState("")
  const [contenos, setcontenos] = useState("")

  function handlercreate(){
    createContatos({
      nome: nome,
      email: email,
      numeroContato: parseInt(numContato),
      informacao: contenos
    }).catch(e => alert(e.response.data.error))
}
  return (
    <>
      <header>
        <div className={styles.fale_cag}>
          <h1>Fale com a gente!</h1>
        </div>
      </header>
      <main className={styles.main}>
              <section className={styles.section}>
                  <form className={styles.form} onSubmit={handlercreate}>
                      <div className={styles.nome}>
                          <input type='text'  value={nome} onChange={(e) => setnome(e.target.value)} required />
                          <span  className={styles.span}>Nome</span>
                      </div>

                      <div  className={styles.email}>
                          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} required />
                          <span  className={styles.span}>Email</span>
                      </div>

                      <div  className={styles.contato}>
                          <input type="number"  value={numContato} onChange={(e) => setnumContato(e.target.value)} required/>
                          <span  className={styles.span}>Número para contato</span>
                      </div>

                      <div className={styles.texto}>
                          <textarea className={styles.textarea} value={contenos} onChange={(e) => setcontenos(e.target.value)} required/>
                          <span  className={styles.span}>Conte-nos do que precisa</span>
                      </div>
                      <div className={styles.enviar}>
                          <button type='submit'>Enviar</button>
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