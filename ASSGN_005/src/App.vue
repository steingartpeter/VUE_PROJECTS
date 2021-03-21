<!--
// Beszarás a VUE comment.... HTML comentet kell írni..<template>
// Na ennek az alényege, hogy itt kell alkalmazni a main.js-ben importált 
// componenseket.
// Ezek mostanra már csak frankó custom HTML tag-ek lesznek.
// Ezekhez már hozzá lehet adni a PROPS-okat mint kiküldött adatelemeket, 
// és lehet fogadni az emit:function-öket.  
-->
<template>
  <div>
    <div v-for="u in users" :key="u.id">
      <active-user :usrName="u.name" :usrAge="u.age"></active-user>
      <usr-data @updtUser="updtCurrUser"></usr-data>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [
          {
            id: 1,
            name: "Peckes Johnny",
            age: +94,
          },
        ],
      };
    },
    methods: {
      updtCurrUser(nm, age) {
        this.users[0].name = nm;
        this.users[0].age = age;
      },
    },
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }
</style>
