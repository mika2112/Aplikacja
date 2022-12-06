<template>
  <div class="alkhole">

    <div v-for="alcohol, index in alcohols" :key="alcohol.label">
      <t v-if="alcohol.value == false"><button @click="alcohols[index].value = true">dodaj</button> </t>
      <t v-else><button @click="alcohols[index].value = false">usuń</button></t> <t> </t>
      <t>{{alcohol.label}}</t>
      <br/><br/>  
      
    </div>
    
    <!-- pętla wypisuje alkohole z obiektu alcohols w których skład wchodzi index czyli np rum, nazwa- label 'Rum' i wartość true/false  --> 
    <!-- aby dodać alkohol wystarczy w obiekcie dodać index i wartości label i value -->
    <p> Dostępne przepisy do wykonania: </p>

    
    
    <!-- szuka drinka w obiekcie drinki(nasza baza drinków) klucz mówi po jakim parametrze ma wyszukiwać/ robić akcje -->
    <div v-for="drink in drinks" :key="(drink.id, drink.path)">
      <t v-if="checkIfIsValidDrink(drink.id)">
        <k> <router-link :to="drink.path">Przepis</router-link>  </k>
        <t> 
        </t> {{drink.label}}</t>
      <p></p>
    </div>
    
      <!--router-view></router-view-->
    

  </div>
</template>
  
<script setup type="text/javascript">

//import { router } from "express";
import { ref } from "vue"

//obiekt alkohole składające się z alkoholi w których 'skład' wchodzą: nazwa, wartość- domyślnie false, ale może się zmieniać dzięki ref()

const alcohols = ref({
  darkRum: {
    label: 'Ciemny Rum',
    value: false
  },
  whisky: {
    label: 'Whisky',
    value: false
  },
  vodka: {
    label: 'Vodka',
    value: false
  },
  tequila: {
    label: 'Tequila',
    value: false
  }, 
  whiteRum: {
    label: 'Biały rum',
    value: false
  }, 
  amaretto: {
    label: 'Amaretto',
    value: false
  }, 
  jagermeister: {
    label: 'Jagermeister',
    value: false
  },
  aperol: {
    label: 'Aperol',
    value: false
  }, 
  gin: {
    label: 'Gin',
    value: false
  },
  tripleSec: {
    label: 'Triple Sec',
    value: false
  },
  orangeLiqueur: {
    label:'Likier pomarańczowy',
    value: false
  },
  wermut: {
    label: 'Wermut',
    value: false
  },
  campari: {
    label: 'Campari',
    value: false
  }
})
//schemat 
/*

: {
    label: '',
    value: false
  },
*/



//baza drinków (tablica obiektów) na ten moment składająca się z id drinka, nazwy drinky, tablicy składników-alkoholi

const drinks = [
  {
    id: 'testDrink',
    label: 'Test drink',
    components: ['vodka', 'whisky'],
    path: '/testDrink'
  },
  {
    id: 'longIsland',
    label: 'Long Island',
    components: ['vodka', 'tequila', 'whiteRum', 'gin', 'tripleSec'],
    path:'/longIsland'
  },
  {
    id: 'mojito',
    label: 'Mojijto',
    components: ['whiteRum'],
    path: '/mojito'
  },
  {
    id: 'margarita',
    label: 'Margarita',
    components: ['tequila', 'tripleSec'],
    path: '/margarita'
  }, 
  {
    id: 'californication',
    label: 'Californiacation',
    components: ['vodka', 'whiteRum', 'gin', 'tequila', 'orangeLiquer'],
    path: '/californication'
  },
  {
    id: 'cubaLibre',
    label: 'Cuba libre',
    components: ['whiteRum'],
    path: '/cubaLibre'
  },
  {
    id: 'aperolSpritz',
    label: 'Aperol spritz',
    components: ['aperol', 'prosecco'],
    path: '/aperolSpritz'
  },
  {
    id: 'whiskySour',
    label: 'Whisky Sour',
    components: ['whisky'],
    path: '/whiskySour'
  },
  {
    id: 'maiTai',
    label: 'Mai Tai',
    components: ['whiteRum', 'darkRum'],
    path: '/maiTai'
  },
  {
    id: 'moscowMule',
    label: 'Moscow Mule',
    components: ['vodka'],
    path: '/moscowMule'
  },
  {
    id: 'manhattan',
    label: 'Manhattan',
    components: ['whisky'],
    path: '/manhattan'
  },
  {
    id: 'daiquiri',
    label: 'Daiquiri',
    components: ['whiteRum'],
    path: '/daiquiri'
  },
  {
    id: 'negroni',
    label: 'Negroni',
    components: ['wermut', 'gin', 'campari'],
    path: '/negroni'
  },
  {
    id: 'oldFashioned',
    label: 'Old Fashioned',
    components: ['whisky'],
    path: '/oldFashioned'
  },
  {
    id: 'dryMartini',
    label: 'Dry Martini',
    components: ['gin', 'wermut'],
    path: '/dryMartini'
  },
  {
    id: 'dirtyMartini',
    label: 'Dirty Martini',
    components: ['gin', 'wermut'],
    path: '/dirtyMartini'
  },
  {
    id: 'nakedMartini',
    label: 'Naked Martini',
    components: ['gin'],
    path: '/nakedMartini'
  },
  {
    id: 'gibson',
    label: 'Gibson',
    components: ['gin', 'wermut'],
    path: '/gibson'
  },
  {
    id: 'silverBulletMartini',
    label: 'Silver Bullet Martini',
    components: ['gin', 'whisky'],
    path: '/silverBulletMartini'
  },
  {
    id: 'bloodyMary',
    label: 'Bloody Mary',
    components: ['vodka'],
    path: '/bloodyMary'
  },
]
/*
schemat dodawania nowych drinków

  {
    id: '',
    label: '',
    components: ['']
  },
  componwnty dla wielu składników
  components; ['nazwa1', 'nazwa2', 'nazwa3', itd...]
*/






//mechanizm sprawdający czy można wykonć jakiś drink
//na zasadzie pętli sprawdzającej indywiduanie dla każdego alkoholu czy się on znajduje
//jeżeli tak to wartość value jest true
const checkIfIsValidDrink = (drinkId) => {
  const currentDrink = drinks.find(({id})=> id === drinkId)
  const checkAlcohols = Object.entries(alcohols.value).every(([alcoholId, {value}]) => {
    const isCurrentAlcoholNeeded = currentDrink.components.indexOf(alcoholId) > -1;
    if(isCurrentAlcoholNeeded) {
        return value === true;
    } 
    return true
  })
  return checkAlcohols;
}

</script>



<style>
body {
  display: grid;
  place-items: center;
}

k{
 border-color: gold;
 border-radius: 10px;
 border-width: 3px;
 border-style: groove;
 font: Arial;
 text-align: center;
 fill: purple;
 color: gold;
 width: 80px;
 height: 25px;
 font-size: medium;
 display: inline-block;
 background-color: black;

}




 button{
  border-color: gold;
  border-radius: 10px;
  border-width: 3px;
  border-style: groove;
  font: Arial;
  text-align: center;
  fill: purple;
  color: gold;
  width: 80px;
  height: 25px;
  font-size: medium;
  display: inline-block;
  background-color: black;

}

t {
  background-color: rgba(0, 0, 0, 0.83);
  font: Arial;
  font-size: 20px;
  border-radius: 3px;
  text-align: left;

}

p {
  background-color: rgba(0, 0, 0, 0.8);
  font: Arial;
  font-size: 24px;

}
</style>