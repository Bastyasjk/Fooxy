<template>
    <section class="section__hero py-6 bg-black bg-cover bg-center">
        <div class="container w-full">
            <div class="section__form bg-transparent p-10 w-full">
                <div class="logo__container">
                     <img src="./src/images/fooxy-bot.png" 
                          alt="" 
                          class=""/>
                </div>
                <div class="titlecta__container">
                    <router-link :to="{ name: 'HomePage' }">
                        <button class="btn__start"><span>S T A R T</span></button>
                    </router-link>
                </div>
            </div>
            </div>
    </section> 
</template>

<style scoped>
span {
    font-family: 'Michroma', sans-serif;
    font-size: 18px;
}
.section__hero {
    width: 100vw;
    height: 100vh;
    min-height: 1080px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.section__hero .container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.section__form{
    width: 100%;
    margin-top: 0;
    height: auto;
    display: block;
    align-items: center;
    justify-content: center;
}
.logo__container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}
.logo__container img{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    animation: up-and-down 2s ease-in-out infinite alternate;
}
    @keyframes up-and-down {
    0% {
        transform: translate(0%, -25%);
    }
    100% {
        transform: translate(0%, -10%);
    }
    }
.titlecta__container{
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn__start {
  --primary-neon:rgba(10, 225, 255, 0.9);
  --light-neon:rgba(8, 225, 255, 0.7);
  --pulse-neon:rgba(80, 150, 200, 0.5);
  --bright-neon:rgb(10, 226, 255);
  --off-neon:rgb(50, 50, 50);
  
  --neon-shadow:0 0 5px 5px var(--light-neon), 0 0 5px 5px var(--light-neon) inset;
  --neon-shadow-pulse:0 0 8px 5px var(--pulse-neon), 0 0 8px 5px var(--pulse-neon) inset;
  --neon-shadow-bright:0 0 8px 4px var(--bright-neon), 0 0 8px 5px var(--bright-neon) inset;
  --neon-shadow-text:0 0 5px var(--primary-neon);
  
  font-family: 'Michroma', sans-serif;
  font-size: 12px;
  color:var(--primary-neon);
  text-transform: uppercase;
  padding: 10px;
  border: 1px solid var(--primary-neon);
  border-radius: 5px; 
  text-shadow:var(--neon-shadow-text);
  box-shadow:var(--neon-shadow);
  animation: flicker 10s linear infinite;
}


</style>
