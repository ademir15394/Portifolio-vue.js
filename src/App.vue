<template>
  <div>
    <div class="Nav">

    <h3>Ademir Peres</h3>

    <a href="#quemsou">Quem Sou</a>
    <a href="#projetos">Projetos</a>
    <a href="#contato">Contato</a>

    </div>

  <Banner/>
<div id="quemsou">
  <QuemSou/>
</div>
<div id="projetos">
  <Projetos/>
</div>

<div id="contato">
  <Rodape/>
</div>
</div>
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue"
import Banner from "./components/banner/Banner.vue"
import QuemSou from "./components/quem_sou/QuemSou.vue"
import Projetos from "./components/projetos/Projetos.vue"
import Rodape from "./components/rodape/Rodape.vue"


export default {


  components:{
    NavBar,
    Banner,
    QuemSou,
    Projetos,
    Rodape,
  }

}
</script>

<style scoped>
@import url(./assets/main.css);

.Nav{
    background-color: var(--cor-blue);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 75px;
}
a{
    background-color: var(--cor-blue);
    color:var(--cor-texto);
    margin-right: 70px;
    font-size: 25px;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
}

h3{
  background-color: var(--cor-blue);
    color:#fff;
    margin:auto;
    margin-left:0;
    padding-left: 20px;
    font-size: 27px;
    font-weight: 100;
    font-family: 'Cinzel', serif;
}

@media (max-width: 391px){
  a{
    margin-right:12px;
    font-size: 19px;
  }
  h1{
    font-size: 20px;
  }
}

</style>

<style>
@import url(./assets/main.css);

*{
  background-color: var(--cor-de-fundo);
  margin: 0;
  padding: 0;
}
</style>