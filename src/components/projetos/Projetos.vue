<template>
<div id="cot">


    <h1 class="h1"  data-aos="fade-right">Projetos</h1>

    <div class="cards" data-aos="fade-up-right">
        
        <Card
         
        nome="Site Gradiente"
          
        desc="Feito em HTML, CSS e Javascript. "
           
        :srcdoc="linkdoc"
            
        :srcproj="linkproj"
             
        srcimg="/portifolio-vue.js/assets/sitedegrade.jpg"
             
             
        />

    </div>

    <div class="cards2" data-aos="fade-up-right">

        <Card
                 
        nome="Projeto de TCC"
          
        desc="Feito em HTML, CSS e Javascript baseado em uma empresa real com permição da empresa."
           
        :srcdoc="linkdoc2"
            
        :srcproj="linkproj2"
             
        srcimg="/portifolio-vue.js/assets/espaçoqueen.jpg"
             
        />

    </div>

</div>
</template>

<script>
import Card from "./Cards.vue"

export default {
    name: "projetos",

    components:{
        Card,
    },

    data(){
        return{
            //primeiro card
            linkproj: "https://ademir15394.github.io/site-degrade/site%20degrade/",
            linkdoc: "https://github.com/ademir15394/site-degrade",
            //
             linkproj2:"https://github.com/ademir15394/TCC",
            linkdoc2:"https://github.com/ademir15394/TCC",

        }
    },

}
</script>

<style scoped>
@import url(../../assets/main.css);
#cot{
    margin-bottom:400px;
}

.h1{
    font-family: 'Cinzel', serif;
    color:var(--cor-texto);
    display:flex;
    justify-content: center;
    font-size: 45px;
    letter-spacing: 25px;
    font-weight: lighter;
    margin-bottom: 100px;

}

.cards, .cards2{
    display: inline-block;
    margin-left:130px;
    margin-bottom:100px;
}

@media (max-width: 1725px){
    .cards, .cards2{
        margin-left: 100px;
    }
}

@media (max-width: 1715px){
    .cards, .cards2{
        margin-left: 65px;
    }
}

@media (max-width: 1708px){
    .cards, .cards2{
        display:block;
        margin-left:505px;
    }
    .cards{
        margin-bottom:200px;
    }
}

@media (max-width: 1677px){
    .cards,.cards2{
        margin-left:432px;
    }
}

@media (max-width: 1601px){
    .cards, .cards2{
        margin-left:370px;
    }
}

@media (max-width: 1494px){
    .cards, .cards2{
        margin-left:310px;
    }
}

@media (max-width: 1350px){
    .cards, .cards2{
        margin-left:245px;
    }
}

@media (max-width: 1250px){
    .cards, .cards2{
        margin-left:200px;
    }
}


@media (max-width: 1350px){
    .cards, .cards2{
        margin-left:210px;
    }
}

@media (max-width: 1225px){
    .cards, .cards2{
        margin-left:145px;
    }
}


@media (max-width: 1238px){
    .cards, .cards2{
        margin-left:245px;
    }
}


@media (max-width: 1180px){
    .cards, .cards2{
        margin-left:206px;
    }
}

@media (max-width: 1056px){
    .cards, .cards2{
        margin-left:95px;
    }
}


@media (max-width: 1114px){
    .cards, .cards2{
        margin-left:155px;
    }
}


@media (max-width: 996px){
    .cards, .cards2{
        margin-left:110px;
    }
}


@media (max-width: 936px){
    .cards, .cards2{
        margin-left:80px;
    }
}


@media (max-width: 860px){
    .cards, .cards2{
        margin-left:40px;
    }
}


@media (max-width: 800px){
    .cards, .cards2{
        margin-left:10px;
    }
}

@media (max-width: 391px){
    .h1{
        letter-spacing: 18px;
        font-size:41px;
    }
}

</style>