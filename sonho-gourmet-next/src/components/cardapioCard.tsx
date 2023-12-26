import styles from "@/styles/CardapioCard.module.css"
import React, { useState } from "react";
import PopUp from "@/components/Pop-up";
import deleteProduto from "@/clientApi/produto/deleteProduto";

type cardProps = React.PropsWithChildren<{
}>
export default function CardapioCard({ children}:cardProps){
    
    
    return(
        <>
        <section className={styles.section}>          
            {children}
        </section>
        </>
    );
}





/*  <DetailsMenu>

<h1>{selectedPrato.nome_produto}</h1>
<Prato link={selectedPrato.url_imagem}> 
    <div>
        <h1>{selectedPrato.nome_produto}</h1>
        <h2>R$ {selectedPrato.preco}</h2>
    </div>
</Prato>
<h2>{selectedPrato.descricao}</h2>
<LinkLocalizar to={`/Mapa/${selectedPrato.fk_id_restaurante}`}>Localizar</LinkLocalizar>
<Button_close onClick={handleCloseClick}>X</Button_close>
</DetailsMenu> 

const DetailsMenu = styled.div`

  position: fixed;
  top: 400px;
  width: 500px;
  height: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 500;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid red; /* Add a red border 

  a {
    font-weight: 800; /* Changed to bold 
    font-size: 64px; /* Changed to size 64 
    color: #000; /* Adjusted text color 
    text-decoration: none; /* Remove underline 
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    max-height: 200px;
    margin-bottom: 0px;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  */