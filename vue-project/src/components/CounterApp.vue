<script setup>
    import { ref } from 'vue';
    let count=ref(0);
    const increase=()=>count.value++;
    const decrease=()=>count.value++;
</script>

<template>
    <h1>Counter</h1>
    <p>Value:{{ count }}</p>
    <!-- <button @click="count--">Minus</button>
    <button @click="count++">Plus</button> -->
    <button @click="decrease">Minus</button>
    <button @click="increase">Plus</button>
</template>