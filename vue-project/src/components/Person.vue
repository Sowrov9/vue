<script setup>
import { reactive } from 'vue';

    let person=reactive({
        name: "Sowrov Ahammed",
        age:25,
        email:"mdsowrovahmed@gmail.com",
        address:"Cumilla"
    })
    const nameChange=()=>{
        return person.name="Hero Alam"
    }
</script>

<template>
    <h2>Person</h2>
    <p>Name: {{ person.name }}</p>
    <p>Age: {{ person.age }}</p>
    <p>Email: {{ person.email }}</p>
    <p>Address: {{ person.address }}</p>
    <button @click="nameChange">NameChange</button>
</template>

<style>

</style>