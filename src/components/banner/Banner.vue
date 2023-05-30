<template>
  <div class="banner">

    <h1 >Web Developer</h1>

  </div>
</template>

<script>
export default {

    name: "Banner",

}
</script>

<style scoped>
@import url(../../assets/main.css);

.banner{
    background-image: url('../../../public/img/img.jpg');
    background-position: 0 -240px;
    background-size: cover;
    height: 720px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0;
    padding:0;
    margin-bottom: 200px;
}

.banner h1{
  color: var(--cor-texto);
  text-align:center;
  font-size: 37px;
  padding: 20px 40px;
  font-family: 'Quicksand', sans-serif;

/* From https://css.glass */
background: rgba(14, 31, 83, 0.53);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10.4px);
-webkit-backdrop-filter: blur(10.4px);

}

@media (max-width: 1466px){
  .banner{
    background-position: 0 -180px;
  }  
}

@media (max-width: 1366px){
  .banner{
    background-position: 0 -125px;
  }  
}

@media (max-width: 1300px){
  .banner{
    background-position: 0 -80px;
  }  
}

@media (max-width: 1226px){
  .banner{
    background-position: 0 -50px;
  }  
}

@media (max-width: 1185px){
  .banner{
    background-position: 0 -30px;
  }  
}

@media (max-width: 1150px){
  .banner{
    background-position: 0 0px;
  }  
}

@media (max-width: 391px){
  .banner{
    font-size: 30px;
  }
}

</style>