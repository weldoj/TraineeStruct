import MainDisplay from "@/components/homeDisplay";
import styles from "@/styles/Sobre.module.css"

export default function Sobre() {
    return (
        
        <>
        <MainDisplay></MainDisplay>
        <h1 className={styles.h1}>Sobre Nós</h1>
        <main className={styles.main}>
            <div className={styles.div1}>
                <p className={styles.p}>Há muitos anos, no coração da cidade, um jovem chef chamado Luca tinha um sonho: abrir o restaurante Sonho Gourmet, um lugar que iria 
                    encantar os paladares e cativar corações. Desde a infância, Luca demonstrou uma paixão fervorosa pela culinária, inspirado por sua 
                    avó, que o levava à cozinha e lhe transmitia os segredos dos sabores autênticos da sua terra natal.
                    No entanto, o caminho para a realização desse sonho estava cheio de obstáculos. Luca sabia que teria que economizar muito dinheiro, ganhar experiência e 
                    criar algo único para se destacar em um mercado competitivo. Ele trabalhou incansavelmente em vários restaurantes, refinando suas habilidades culinárias 
                    e aprendendo com os mestres da cozinha. Cada prato que ele preparava era uma jornada em direção ao seu objetivo.
                    <br /><br />
                    Com o tempo, Luca começou a desenvolver sua própria identidade culinária. Ele criava receitas exclusivas e experimentava combinações 
                    inovadoras de sabores. Sua abordagem criativa à culinária chamou a atenção e conquistou a lealdade de muitos clientes fiéis.
</p>
            </div>

            <div className={styles.div2}>
                <p className={styles.p}>Após anos de economia meticulosa, Luca finalmente encontrou o local perfeito para o Sonho Gourmet. Com a ajuda de amigos e familiares,
                     ele obteve o financiamento necessário para transformar o espaço em um restaurante que refletisse sua visão única. As reformas incluíram 
                     uma decoração elegante e acolhedora, criando uma atmosfera que convidava os clientes a desfrutar de uma experiência culinária única.
                    <br /><br />
                    O cardápio do Sonho Gourmet era uma celebração de sabores autênticos, com ingredientes frescos e locais sempre que possível. Luca estabeleceu 
                    parcerias com fornecedores de confiança, comprometendo-se com a qualidade acima de tudo. Críticos de gastronomia locais logo começaram a 
                    elogiar suas criações, reconhecendo sua paixão e autenticidade.
                    Para atrair e cativar os clientes, Luca adotou uma abordagem inovadora de marketing, utilizando as redes sociais para compartilhar 
                    fotos de suas deliciosas criações e contar a história do Sonho Gourmet. As mídias sociais se tornaram uma ferramenta poderosa para atrair uma 
                    clientela diversificada e leal.</p>
                <img className = {styles.img} src="/Comida1Comida1Sobre.png" alt="" />
            </div>

            <div className={styles.div3}>
                <p className={styles.p}>Conforme o tempo passava, o Sonho Gourmet de Luca ganhava uma reputação invejável, com fila de espera todas as noites. Ele montou uma equipe 
                    talentosa e dedicada que compartilhava sua visão e paixão pela gastronomia. A experiência excepcional que ofereciam aos clientes incluía não 
                    apenas a comida deliciosa, mas também um serviço impecável e uma atmosfera acolhedora.
                    À medida que o sucesso do Sonho Gourmet crescia, Luca decidiu expandir seus negócios. Ele abriu uma segunda localização em uma área 
                    movimentada da cidade, mantendo o mesmo compromisso com a qualidade e a autenticidade. Com o tempo, a marca Sonho Gourmet se tornou 
                    sinônimo de excelência culinária na cidade.
                    <br /><br />
                    O restaurante Sonho Gourmet de Luca conquistou o coração da cidade e até mesmo a atenção nacional. Visitantes de todo o país e além 
                    faziam questão de experimentar a magia das criações de Luca. Seu restaurante não era apenas um lugar para comer, era uma experiência 
                    inesquecível que despertava os sentidos e a imaginação.
                    <br /><br />
                    Hoje, o Sonho Gourmet de Luca é uma história de sucesso notável, um exemplo inspirador de como a paixão, a dedicação e a busca 
                    incessante pela excelência podem levar ao topo da indústria da gastronomia. Seu restaurante é um farol de criatividade culinária, 
                    onde os amantes da boa comida se reúnem para viver o sonho que Luca tornou realidade. É uma história que nos lembra que os sonhos 
                    podem se tornar realidade quando se tem um talento único e uma dedicação inabalável para segui-los.</p>
            </div>
            
            </main>
        
        
        </>
        
    )
}
