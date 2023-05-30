<template>

    <div id="quemsou">

        <h1 class="titulo" data-aos="fade-down">Quem Sou</h1>

        <div class="text" data-aos="fade-right">

            <div class="pr">
        <p>Olá meu nome é ademir, tenho 19 anos de idade atuo como desenvolvedor front-end  </p>

        <p>Desenvolvo sites como portifólios, sites institucionais. </p>
    </div>

    <div class="li">
            <img src="../../../public/img/foto.jpg">
        </div>

        </div>

    </div>
  
</template>


<script>
export default {
    name: "QuemSou",

}
</script>

<style scoped>
@import url(../../assets/main.css);


 h1{
    display: flex;
    align-content: center;
    justify-content: center;
    color:var(--cor-texto);
    font-family: 'Cinzel', serif;
    font-weight: lighter;
    font-size: 40px;
    letter-spacing: 25px;
    
}

.text{
    display: flex;
    width: 1000px;
    height: 500px;
    background-color: var(--cor-secundaria);
    margin-bottom: 400px;
    margin-top: 40px;
    margin-left:400px;

}

div{
    background-color: #FFF0;
}

img{
    justify-items: end;
    height:400px;
    margin:0;
    margin-top: 45px;
    border-radius: 38px;
}

p{
    display: block;
    width: 489px;
    background-color: #FFF0;
    font-size: 22px;
    font-weight: lighter;
    color: var(--cor-texto);
    margin-top:123px;
    margin-bottom: -70px;
    margin-left: 49px;
    font-family: 'Quicksand', sans-serif;

}

@media (max-width: 1765px){
    .text{
        margin-left:356px;
    }
}

@media (max-width: 1665px){
    .text{
        margin-left:300px;
    }
}

@media (max-width: 1555px){
    .text{
        margin-left:279px;
    }
}

@media (max-width: 1495px){
    .text{
        margin-left:240px;
    }
}

@media (max-width: 1445px){
    .text{
        margin-left:195px;
    }
}

@media (max-width: 1378px){
    .text{
        margin-left:195px;
    }
}

@media (max-width: 1378px){
    .text{
        margin-left:130px;
    }
}

@media (max-width: 1270px){
    .text{
        margin-left:77spx;
    }
}

@media (max-width: 1200px){
    .text{
        margin-left:32px;
    }
}

@media (max-width: 1077px){
    .text{
        width:925px;
        margin-left:32px;
    }
    img{
        height:346px;
        margin-top: 83px;
    }
}

@media (max-width: 1018px){
    p{
        width:426px;
        margin-left:34px;
    }

    .text{
        width:858px;
    }

    img{
        margin-left:11px;
    }

}

@media(max-width: 933px){
    p{
        margin-left:25px;
    }
    img{
        height:331px;
    }
    .text{
        width:837px;
    }
}

@media(max-width: 906px){
    img{
        height: 313px;
        margin-top: 54px;
    }
    .text{
        height:433px;
        width:752px;
    }

    p{
        margin-top: 103px;
        width:376px;
    }

}

@media(max-width: 873px){
    img{
        height:277px;
    }
    .text{
        height:370px;
        width:711px;
    }
}

@media(max-width: 792px){
    p{
        margin-top:89px;
        margin-left:18px;
    }
    .text{
        margin-left:12px;
        height: 353px;
        width:676px;
    }
    img{
        height:250px;
    }
}

@media(max-width: 722px){
    p{
        font-size: 20px;
        width:328px;
    }
    .text{
        height:344px;
        width:630px;
    }
}

@media (max-width: 675px){
    img{
        height: 231px;
    }
    .text{
        height:316px;
        width: 607px;
    }
    h1{
        font-size:36px;
    }
}

@media (max-width: 391px){
    h1{
        font-size: 34px;
        letter-spacing: 18px;
    }
    .text{
        width:369px;
        height:404px;
    }
    p{
        margin-left: 16px;
        width: 160px;
        font-size: 20px;
    }
    img{
        height:171px;
    }
}

</style>