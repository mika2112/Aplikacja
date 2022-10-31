<template>
<div>
  <center><h1>Wyszukiwarka do drinków pt: Alkomix</h1> </center>
<AlkoholeApp />
    <div><p>plik App.vue działa</p></div>
   
  </div>
</template>

<script>



import aklohole from './components/AlkoholeApp.vue'
export default {
  components: {
    AlkoholeApp: aklohole
  },
  methods: {
   

  }
}

</script>

<style>
 body {
        background-color: black;
        font-style: 24px;
        color: gold;
        }
</style>





