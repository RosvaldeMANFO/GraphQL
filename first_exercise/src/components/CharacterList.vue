<script setup lang="ts">
import { useClient, useQuery } from 'villus';
import { Ref, ref, computed } from 'vue';
import router from '../router';

const currentPage: Ref<number> = ref(1);
const query = computed(() => {
  return `{
  characters(page: ${currentPage.value}){
    __typename
    results{
      id
      name
      image
    }
    info{
      count
      prev
      next
      pages
    }
  }
}`;
});

useClient({
  url: 'https://rickandmortyapi.com/graphql',
});


var { data } = useQuery({
  query: query,
});

async function loadPage(page: number){
  if(page){
    currentPage.value = page;
  }
};

function goToDetails(id: number){
  router.push({ name: "details", params: { id: id }, replace: false});
};

</script>
<template>
  <div class="w-full flex flex-col place-items-center justify-center gap-7 p-7">
    <h1 class="text-center uppercase">Rick & Morty character: page {{ currentPage }} </h1>
    <div class="flex justify-between gap-11">
      <div @click="loadPage(data.characters.info.prev)" class="user-select-none bg-green-200 rounded-md text-md font-bold border border-green-500 border-solid shadow-md w-fit px-7 py-3 hover:shadow-lg hover:cursor-pointer">Prev</div>
      <button class="user-select-none bg-green-200 rounded-md text-md font-bold border border-green-500 border-solid shadow-md w-fit px-7 py-3 hover:shadow-lg hover:cursor-pointer" @click="loadPage(data.characters.info.next)">Next</button>
    </div>
    <div v-if="data" class="sm:w-full grid sm:grid-cols-2 sm:gap-7 justify-center place-items-center">
      <div @click="goToDetails(character.id)" v-for="character in data.characters.results" :key="character.id" 
        class="card shadow-md p-3 rounded-md flex flex-col gap-10 w-fit ">
        <img :src="character.image" :alt="character.name" class="card rounded-md " />
        <h2>{{ character.name }}</h2>
      </div>
    </div>

  </div>
</template>
