<script setup>
    let students=
    `
        <li>Hasan</li>
        <li>Jisan</li>
        <li>Rohan</li>
        <li>Rihan</li>
    `
</script>
<template>
    <h2>Student List</h2>
    <ul v-html="students"></ul>

</template>