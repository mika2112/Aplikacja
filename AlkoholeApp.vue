<template>
    <div class="alkhole">
     
     
      <t v-if="rum ==0"><button @click="rum=1" id="dodajRum">dodaj</button></t>
      <t v-else><button @click="this.rum=0" id="usunRum">usuń</button></t>
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

        
      
    </div>
  </template>
  
<script type="text/javascript">
    
import {ref} from"vue"
//import drinki from'./DrinkApp.vue'
    
    
    let rum=ref(0)
    let whisky= ref(0)
    let vodka=ref(0)
    let tequila=ref(0)
    let amaretto=ref(0)
    let bialyRum=ref(0)
   export default{
    methods:{
        dodajWhisky(){
            return whisky=1;
        },
        usunWhisky(){
            return whisky=0;
        }
    },
    data(){
               
      return{ 
        rum,
        whisky,
        vodka,
        tequila,
        amaretto,
        bialyRum
      
      }
    },
    //components:{
    //    DrinkApp: drinki
    //},
}
</script>
















  <style>
body{
  display: grid;
  place-items: center;
}
</style>





































export default{
    methods:{
        dodajWhisky(){
            return whisky=1;
        },
        usunWhisky(){
            return whisky=0;
        }
    },
    data(){
               
      return{ 
        rum,
        whisky,
        vodka,
        tequila,
        amaretto,
        bialyRum
      
      }
    },
    components:{
        DrinkApp: drinki
    },
   }