<template>
  <div class="Nav">

    <h3>Ademir Peres</h3>


    <a href="">Projetos</a>
    <a href="">Quem Sou</a>

  </div>
</template>

<script>
export default {
    name: "NavBar",

}
</script>

<style scoped>
@import url(../../assets/main.css);

.Nav{
    background-color: var(--cor-blue);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 75px;
}
a{
    background-color: #FFF0;
    color:var(--cor-texto);
    margin-right: 70px;
    font-size: 25px;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
}

h3{
    color:#fff;
    margin:auto;
    margin-left:0;
    padding-left: 20px;
    font-size: 27px;
    font-weight: 100;
    font-family: 'Cinzel', serif;
}

</style>