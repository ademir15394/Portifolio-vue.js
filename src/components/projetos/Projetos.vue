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
    margin-left:54px;
    margin-bottom:100px;
    margin-bottom:160px;
}

@media (max-width: 1519px){
    .cards, .cards2{
        margin-left: 23px;
    }
}

@media(max-width: 1506px){
    .cards, .cards2{
        margin-left: 374px;
    }
}

@media (max-width: 1428px){
    .cards, .cards2{
        margin-left: 348px;
    }
}

@media (max-width: 1352px){
    .cards, .cards2{
        margin-left: 307px;
    }
}

@media (max-width: 1312px){
    .cards, .cards2{
        margin-left: 275px;
    }
}

@media (max-width: 1244px){
    .cards, .cards2{
        margin-left: 250px;
    }
}

@media (max-width: 1192px){
    .cards, .cards2{
        margin-left: 225px;
    }
}

@media (max-width: 1132px){
    .cards, .cards2{
        margin-left: 195px;
    }
}

@media (max-width: 1104){
    .cards, .cards2{
        margin-left: 176px;
    }
}

@media (max-width: 1060px){
    .cards, .cards2{
        margin-left: 143px;
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

@media (max-width: 556px){
    .cards, .cards2{
        margin-left: 14px;
    }
}

@media (max-width: 536px){
    .cards, .cards2{
        margin-left: 8px;
    }
}

@media (max-width: 391px){
    .h1{
        letter-spacing: 18px;
        font-size:41px;
    }
}

</style>