<template>
    <div class="alkhole">
     
     
      <t v-if="rum ==0"><button @click="rum= 1" id="dodajRum">dodaj</button></t>
      <t v-else><button @click="rum=0" id="usunRum">usuń</button></t>
      <t> rum</t>
      <p></p>
      <t v-if="whisky ===0" ><button @click="whisky = 1" id="dodajWhiskyId">dodaj</button></t>
      <t v-else><button @click="whisky = 0" id="usunWhiskyId">usuń</button></t>
      <t> whisky</t>
      <p></p>
      <t v-if="vodka ==0"><button @click="vodka=1" id="dodajVodka">dodaj</button></t>
      <t v-else><button @click="vodka=0" id="usunVodka">usuń</button></t>
      <t> wódka</t>
      <p></p>
      <t v-if="tequila ==0"><button @click="tequila=1" id="dodajTequila">dodaj</button></t>
      <t v-else><button @click="tequila=0" id="usunTequila">usuń</button></t>
      <t> tequila</t>
      <p></p>
      <t v-if="amaretto ==0"><button @click="amaretto=1" id="dodajAmaretto">dodaj</button></t>
      <t v-else><button @click="amaretto=0" id="usunAmaretto">usuń</button></t>
      <t> amaretto</t>
      <p></p>
      <t v-if="bialyRum ==0"><button @click="bialyRum=1" id="dodajBialyRum">dodaj</button></t>
      <t v-else><button @click="bialyRum=0" id="usunBialyRum">usuń</button></t>
      <t> biały rum</t>
      <p></p>
      <t v-if=" jagermaister==0"><button @click="jagermaister=1" id="dodajjagermaister">dodaj</button></t>
      <t v-else><button @click="jagermaister=0" id="usunjagermaister">usuń</button></t>
      <t> jagermaister</t>
      <p></p>
      <t v-if=" aperol==0"><button @click="aperol=1" id="dodajAperol">dodaj</button></t>
      <t v-else><button @click="aperol=0" id="usunAperol">usuń</button></t>
      <t> aperol</t>
      <p></p>
      <t v-if=" gin==0"><button @click="gin=1" id="dodajGin">dodaj</button></t>
      <t v-else><button @click="gin=0" id="usunGin">usuń</button></t>
      <t> gin</t>
        
      
    </div>
  </template>
  
<script type="text/typescript">
    
import {ref,} from"vue"

    
    
    
    let rum=ref(0)
    let whisky= ref(0)
    let vodka=ref(0)
    let tequila=ref(0)
    let amaretto=ref(0)
    let bialyRum=ref(0)
    let jagermaister=ref(0)
    let aperol=ref(0)
    let gin=ref(0)
    /* function dodaj(){
            return 1;
        }
      function  usun(){
            return 0;
        }*/
   export default{
   
    data(){
               
      return { 
        rum,
        whisky,
        vodka,
        tequila,
        amaretto,
        bialyRum,
        jagermaister,
        aperol,
        gin
      
      }
    },
    
}
</script>



  <style>
body{
  display: grid;
  place-items: center;
  
  
  
}
button{
  border-color:  gold;
  border-radius: 10px ;
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
t{
  background-color: rgba(0, 0, 0, 0.8) ;
  font: Arial ;
  font-size: 20px;
}
</style>