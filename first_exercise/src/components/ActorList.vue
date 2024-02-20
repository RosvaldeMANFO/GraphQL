<script setup lang="ts">
import { useClient, useQuery } from 'villus';

useClient({
  url: 'https://rickandmortyapi.com/graphql',
});
const { data } = useQuery({
  query: `{
  characters{
    results{
      name
      image
    }
    info{
      count
      prev
      next
    }
  }
}`,
});

</script>
<template>
  <div>
    <h1>Rick & Morty</h1>
    <div v-if="data">
      <div v-for="character in data.characters.results" :key="character.id">
        <h2>{{ character.name }}</h2>
        <img :src="character.image" :alt="character.name" />
      </div>
    </div>
  </div>
</template>
