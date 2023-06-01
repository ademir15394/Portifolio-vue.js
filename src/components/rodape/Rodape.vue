<template>
<div id="rod">  
    
    <h1 class="titulo" data-aos="fade-up">Contato</h1>

    <div class="rodape">

        <div class="session" data-aos="fade-right">
            <h1>Contato</h1>

            <div class="info">

                <ul>
                    <li>Telefone: 11 949494113</li>
                    <li>Discord: ademirpmf#8239</li>
                    <li>Email: ademirperes85@gmail.com</li>
                </ul>

            </div>

        </div>

        <div class="session" data-aos="fade-right">
            <h1>Rede sociais</h1>
            
            <div class="info">

                <ul>
                    <li><a class="links" href="https://www.linkedin.com/in/ademir-peres-ba0a3522a/">Linkedin</a></li>
                    <li><a class="links" href="https://twitter.com/AdemirPeresDev">Twitter</a></li>
                    <li><a class="links" href="https://www.instagram.com/ademirperes85/"> Instagram</a></li>
                    <li><a class="links" href="https://github.com/ademir15394"> Github</a></li>
                </ul>
                </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: "Rodape",
}
</script>

<style scoped>
@import url(../../assets/main.css);

.titulo{
    font-family: 'Cinzel', serif;
    color:var(--cor-texto);
    display:flex;
    justify-content: center;
    font-size: 45px;
    letter-spacing: 25px;
    font-weight: lighter;
    margin-bottom: 100px;
}

.rodape{
    width: auto;
    height: auto;
    background-color: var(--cor-blue);
}

.session{
    background-color: var(--cor-blue);
    display: inline-block;
    width: 700px;
    margin-left:90px;
    margin-top:30px;
}

.session h1{
    background-color: #fff0;
    color: var(--cor-texto);
    font-size: 38px;
    font-weight: 400;
    font-family: 'Quicksand', sans-serif;

}

ul{
    background-color: var(--cor-blue);
}

li,.links{
    background-color: var(--cor-blue);
    font-size: 28px;
    list-style:none;
    font-family: 'Quicksand', sans-serif;
    color:var(--cor-texto);
    margin-top:50px;

}

.links{
    text-decoration: 1px underline;
}

@media (max-width: 1604px){
    .session{
        margin-left: 50px;
    }
}

@media (max-width: 1502px){
    .session{
        margin-left: 30px;
        width:610px;
    }
    
}

@media (max-width: 1280px){
    .session{
        margin-left: 24px;
        width:499px;
    }
}

@media (max-width: 1270px){
    .session{
        margin-left: 20px;
        width: 460px;
    }

    li, .links{
        font-size: 25px;
    }
}

@media (max-width: 996px){
    .session{
        margin-left: 17px;
        width: 433px;
    }
}

@media (max-width: 945px){
    li, .links{
        font-size: 22px;
    }
    h1{
        font-size: 32px;
    }
    .session{
        margin-left:18px;
        width:390px;
    }
}

@media (max-width: 905px){
    .session{
        display: block;
        margin-left:52px;
    }
    .rodape{
        height:680px
    }
}

@media (max-width: 571px) {
    .session{
        width:347px;
    }
}

@media (max-width: 465px){
    .session{
        width:329px;
    }
    .rodape{
        height:736px;
    }
}

@media (max-width: 391px){
    .titulo{
        font-size: 42px;
        letter-spacing: 20px;

    }
    .session{
        width:320px;
        margin-left: 25px;
        margin-bottom: 62px;
    }
    li{
        font-size: 22px;
    }
}

@media (max-width: 379px){
    .rodape{
        height: 800px;
    }
}

</style>
