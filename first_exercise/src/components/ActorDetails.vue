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
  <div class="flex justify-center w-full h-full place-items-center mt-10">
    <div class=" w-fit flex flex-col gap-10 p-7 card shadow-md rounded-md">
      <h1 >Actor Details</h1>
      <div v-if="data">
        <img :src="data.character.image" :alt="data.character.name" class="rounded-md"/>
        <h2>{{ data.character.name }}</h2>
        <p>{{ data.character.gender }}</p>
        <p>{{ data.character.species }}</p>
      </div>
    </div>
  </div>
</template>