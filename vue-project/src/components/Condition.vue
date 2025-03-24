 <script setup>
import { ref } from 'vue';

      let month=ref("Ramadan");
      let show=ref(true);

      let products=[
        {id:1, name:"Potato"},
        {id:2, name:"Apple"},
        {id:3, name:"Mango"},
        {id:4, name:"Lichi"},
        {id:5, name:"Lemon"},
   ]
</script>

<template>
  <div>
    <h2 v-if="show">This is {{ month }} month</h2>
    <button @click="show= !show">Show/Hide</button>
  </div>
  <div>
    <h2>Fruits</h2>
    <ul>
        <li v-for="product in products" key="{{ product.id }}">{{ product.name }}</li>
    </ul>
  </div>
</template>


<style>

</style>