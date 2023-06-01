<template>
  <div>

    <div class="card">
<br>

            <img class="img" :src="srcimg" alt="">


        <div class="text">

            <p class="p"> Nome: {{ nome }}</p>
            <p class="desc">Descrição {{ desc }}</p>


        </div>

        <div class="link">

           <a class="btn" :href="srcdoc" target="_blank">ver codido</a>

            <a class="btn" :href="srcproj" target="_blank"> Ver Projeto Rodando </a>

        </div>

    </div>

  </div>
</template>

<script>
export default {
    name: "Card",

    props:{
    nome: String,
    desc: String,
    srcimg: String,
    srcdoc: String,
    srcproj: String,
    }

}
</script>

<style scoped>
@import url(../../assets/main.css);

.card{
    width: 700px;
    height: 900px;
    background-color: var(--cor-secundaria);
}

.img{
    width:600px;
    height:300px;
    margin-left: 54px;
    margin-bottom:30px;

}

.text{
    background-color:#fff0;
    height: 500px;
}

 p{
   color:#fff;
   font-family: 'Quicksand', sans-serif;
   font-size: 29px;
   background-color: var(--cor-secundaria);
   margin-left:60px;
   margin-top:35px;

}


.link{
    background-color: var(--cor-secundaria);
    width:auto;
    height: 100px;
    display: flex;
    justify-content: center;
}

.btn{
    color:var(--cor-texto);
    font-size: 20px;
    height: 50px;
    margin-right: 25px;
    margin-top:27px;
    width:240px;
    border-radius:13px;
    background-color: #2d2b2b;
    border: none;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration-line: none;
}

.btn:hover{

    transition: 0.4s;
    width: 250px;

}

@media (max-width: 745px){
    .card{
        width:665px;
    }
    .img{
        margin-left:32px;
    }
    p{
        margin-left:47px;
    }
}

@media (max-width: 716px){
    .card{
        width:634px;
    }
    .img{
        margin-left:17px;
    }
    p{
        margin-left:26px;
    }
}

@media (max-width: 680px){
    .card{
        width:602px;
    }
    .img{
        width:565px;
        height:283px;
    }
    p{
        font-size: 25px;
    }
}

@media (max-width: 632px){
    .card{
        width:595px;
    }
    .img{
        width:553px;
        height:274px;
    }
}

@media (max-width: 604px){
    .card{
        width: 555px;
    }
    .img{
        width: 519px;
        height:262px;
    }
}

@media (max-width: 579px){
    .img{
        width:481px;
        height:238px;
    }
    .card{
        width:521px;
    }
}

@media (max-width: 531px){
    .card{
        width: 482px;
    }
    .img{
        width:441px;
        height:206px;
    }
}

@media (max-width: 524px){
    .card{
        width: 447px;
    }
    .img{
        width:402px;
        height: 200px;
    }
}

@media (max-width: 468px){
    .img{
        width:404px;
        height: 194px;
    }
    .card{
        width:435px;
    }
}

@media (max-widht: 4491px){
    .card{
        width: 410px;
    }
    .img{
        width: 370px;
        height: 180px;
    }
}

@media (max-width: 391px){
    .card{
        width: 330px;
        margin-left:4px;
    }
    .img{
        width:293px;
        height: 158px;
    }
    .btn{
        margin-left:21px;
        margin-right: 10px;
    }
}

</style>