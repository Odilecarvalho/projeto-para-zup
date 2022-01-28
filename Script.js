
const  nomeDoPersonagem1  =  document . getElementById ( "nomeDoPersonagem1" ) ;
const  img1  =  documento . querySelector ( "img#personagem1" ) ;
const  espécie1  =  documento . getElementById ( "especie1" ) ;
const  status1  =  documento . getElementById ( "status1" ) ;
const  gênero1  =  documento . getElementById ( "gender1" ) ;

const  nomeDoPersonagem2  =  documento . getElementById ( "nomeDoPersonagem2" ) ;
const  img2  =  documento . querySelector ( "img#personagem2" ) ;
const  espécie2  =  documento . getElementById ( "especie2" ) ;
const  status2  =  documento . getElementById ( "status2" ) ;
const  gênero2  =  documento . getElementById ( "gender2" ) ;

const  nomeDoPersonagem3  =  document . getElementById ( "nomeDoPersonagem3" ) ;
const  img3  =  documento . querySelector ( "img#personagem3" ) ;
const  espécie3  =  documento . getElementById ( "especie3" ) ;
const  status3  =  documento . getElementById ( "status3" ) ;
const  gênero3  =  documento . getElementById ( "gênero3" ) ;

const  nomeDoPersonagem4  =  document . getElementById ( "nomeDoPersonagem4" ) ;
const  img4  =  documento . querySelector ( "img#personagem4" ) ;
const  especie4  =  document . getElementById ( "especie4" ) ;
const  status4  =  documento . getElementById ( "status4" ) ;
const  gênero4  =  documento . getElementById ( "gender4" ) ;

const  numeroMaximoDePersonagens  =  671 ;

gerarNumeroAleatorio  =  ( )  =>  {
  retornar  Matemática . andar ( Math . random ( )  *  numeroMaximoDePersonagens ) ;
} ;
chamarPersonagem1  =  ( )  =>  {
  const  numeroAleatorio  =  gerarNumeroAleatorio ( ) ;
  return  buscar ( `https://rickandmortyapi.com/api/character/ ${ numeroAleatorio } ` ,  {
    método : "GET" ,
    cabeçalhos : {
      Aceite : "application/json" ,
      "Content-Type" : "application/json"
    }
  } )
    . then ( ( resposta )  =  > resposta.json ( ) ) _
    . então ( ( dados )  =>  {
      img1 . src  =  dados . imagem ;  
      img1 . alt  =  "Imagem do personagem: "  +  data . nome ;    nomeDoPersonagem1 . innerHTML  =  dados . nome ;
      espécie1 . innerHTML  +=  dados . espécies ;
      estado1 . innerHTML  +=  dados . estado ;
      gênero1 . innerHTML  +=  dados . gênero ; 
      } ) ;
} ;

chamarPersonagem2  =  ( )  =>  {
  const  numeroAleatorio  =  gerarNumeroAleatorio ( ) ;
  return  buscar ( `https://rickandmortyapi.com/api/character/ ${ numeroAleatorio } ` ,  {
    método : "GET" ,
    cabeçalhos : {
      Aceite : "application/json" ,
      "Content-Type" : "application/json"
    }
  } )
    . then ( ( resposta )  =  > resposta.json ( ) ) _
    . então ( ( dados )  =>  {
      img2 . src  =  dados . imagem ;  
      img2 . alt  =  "Imagem do personagem: "  +  data . nome ;    nomeDoPersonagem2 . innerHTML  =  dados . nome ;
      espécie2 . innerHTML  +=  dados . espécies ;
      estado2 . innerHTML  +=  dados . estado ;
      gênero2 . innerHTML  +=  dados . gênero ; 
      } ) ;
} ;
chamarPersonagem3  =  ( )  =>  {
  const  numeroAleatorio  =  gerarNumeroAleatorio ( ) ;
  return  buscar ( `https://rickandmortyapi.com/api/character/ ${ numeroAleatorio } ` ,  {
    método : "GET" ,
    cabeçalhos : {
      Aceite : "application/json" ,
      "Content-Type" : "application/json"
    }
  } )
    . then ( ( resposta )  =  > resposta.json ( ) ) _
    . então ( ( dados )  =>  {
      img3 . src  =  dados . imagem ;  
      img3 . alt  =  "Imagem do personagem: "  +  data . nome ;    nomeDoPersonagem3 . innerHTML  =  dados . nome ;
      espécie3 . innerHTML  +=  dados . espécies ;
      estado3 . innerHTML  +=  dados . estado ;
      gênero3 . innerHTML  +=  dados . gênero ; 
      } ) ;
} ;
chamarPersonagem4  =  ( )  =>  {
  const  numeroAleatorio  =  gerarNumeroAleatorio ( ) ;
  return  buscar ( `https://rickandmortyapi.com/api/character/ ${ numeroAleatorio } ` ,  {
    método : "GET" ,
    cabeçalhos : {
      Aceite : "application/json" ,
      "Content-Type" : "application/json"
    }
  } )
    . then ( ( resposta )  =  > resposta.json ( ) ) _
    . então ( ( dados )  =>  {
      img4 . src  =  dados . imagem ;  
      img4 . alt  =  "Imagem do personagem: "  +  data . nome ;    nomeDoPersonagem4 . innerHTML  =  dados . nome ;
      espécie4 . innerHTML  +=  dados . espécies ;
      estado4 . innerHTML  +=  dados . estado ;
      gênero4 . innerHTML  +=  dados . gênero ; 
      } ) ;
} ;
atualizaPágina  =  ( )  =>  {
  chamarPersonagem1 ( ) ;
  chamarPersonagem2 ( ) ;
  chamarPersonagem3 ( ) ;
  chamarPersonagem4 ( ) ;
}
documento . onload  =  atualizaPage ( ) ;

