<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { getRecentChanges } from '@/api/recentchanges';
  import BookDetails from '@/components/BookDetails.vue';
  import BookSkeleton from '@/components/BookSkeleton.vue'

  const list = reactive<string[]>([])
  const loading = ref(true);

  getRecentChanges().then((result) => {
    list.splice(0, list.length, ...result.list.map((x) => ''));

    result.list.forEach((x, idx) => {
      setTimeout(() => {list.splice(idx, 1, x)}, idx * 99 )
    });

    loading.value=false;
  });
</script>

<template>
  <div v-if="loading" class="results">
    <template v-for="idx in 15" :key="idx">
      <BookSkeleton class="element" />
    </template>
  </div>
  <div v-else class="results">
    <BookDetails v-for="el in list" :key="el" class="element" :id="el"/>
  </div>
</template>

<style scoped lang="scss">  
  .results{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .element {
    width: 48%;
    margin: 1%;
    border: 1px solid #dedede;
    padding: 1%;
    text-align: center;
    border-radius: 8px;
  }

  @media (min-width: 256px) {
    .element { width: 98%; }
  }   
  @media (min-width: 512px) {
    .element { width: 48%; }
  }
  @media (min-width: 768px) {
    .element { width: 31%; }
  }
  @media (min-width: 1024px) {
    .element { width: 23%; }
  }
  @media (min-width: 1280px) {
    .element { width: 18%; }
  }
  
</style>