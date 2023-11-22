import styles from '@/styles/homeDisplay.module.css'

export default function MainDisplay(){
    return(
        <section>
            <div id={styles.imgContainer}>    
                <div id={styles.logo}></div>
                <h1 id={styles.title}>Sonho Gourmet</h1>
            </div>  
        </section>
    )
}