<script setup lang="ts">
import { computed } from 'vue';
import router from '../router';
import { useClient, useQuery } from 'villus';

useClient({
  url: 'https://rickandmortyapi.com/graphql',
});

const query = computed(() => {
  return `
  {
    character(id: ${router.currentRoute.value.params.id}){
      name,
      image,
      gender,
      species
    } 
  }
  `
});

const {data} = useQuery({
  query: query,
});


</script>
<template class="w-full">
  <div class="w-fit h-full flex flex-col gap-10 justify-center p-7 place-items-center">
    <h1 class="text-center" >Rick & Morty character details</h1>
    <div class="card shadow-md rounded-md w-fit p-3">
      <div v-if="data">
        <img :src="data.character.image" :alt="data.character.name" class="rounded-md"/>
        <h2>{{ data.character.name }}</h2>
        <p>{{ data.character.gender }}</p>
        <p>{{ data.character.species }}</p>
      </div>
    </div>
  </div>
</template>