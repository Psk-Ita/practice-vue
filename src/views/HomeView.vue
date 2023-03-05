<script setup lang="ts">
  import { useRecentChanges, recentDefaults, type recentChangesPayload } from '@/api/recentchanges';
  import BookDetails from '@/components/BookDetails.vue';
  import BookSkeleton from '@/components/BookSkeleton.vue'
  import {  reactive, ref, watch } from 'vue';

  const options = reactive(recentDefaults)
  let result = ref<recentChangesPayload>()

  const callApi = () => {
    result.value = useRecentChanges(options);    
  }

  // everytime an attribute of options change, we ask server for data updating
  // since we are also using an input, some de-bouncing method should be put in place to avoid calls on each key-up
  watch(options, callApi);

  // first call could be left in the root (setup) or moved inside onMounter 
  callApi();
</script>

<template>
  <div class="options">     
    <fieldset>
      <legend>action</legend>
      <select v-model="options.kind">
        <option value="update">update</option>
        <!-- option value="new-account">new-account</option -->
        <!-- option value="lists">lists</option -->
        <option value="add-cover">add-cover</option>
        <option value="edit-book">edit-book</option>
        <!-- option value="add-photo">add-photo</option -->
        <option value="add-book">add-book</option>
        <option value="merge-authors">merge-authors</option>
        <!-- option value="merge-works">merge-works</option -->
      </select>
    </fieldset>
    <fieldset>
      <legend>quantity</legend>
      <input type="number" v-model="options.limit" />
    </fieldset>
  </div>
  <div v-if="result?.isLoading" class="results">
    <template v-for="idx in parseFloat(`${options.limit}`)" :key="idx">
      <BookSkeleton class="element" />
    </template>
  </div>
  <div class="results">
    <BookDetails v-for="el in result?.list" :key="el" class="element" :id="el"/>
  </div>
</template>

<style scoped lang="scss">  
  .options{
    fieldset{
      &>*:not(legend){
        width: 100%;
        border: 1px solid #dedede;
        border-radius: 4px;
      }

      legend{
        color: #4285F4;
        padding: 4px;
        font-size: .8rem;
      }
      option{
        text-align: center;
      }
      input[type="number"]{
        text-align: right;
      }

      margin: 0 .5rem;
      max-width: 200px;
      min-width: 200px;
      border: 1px solid #dedede;
      border-radius: 8px;
    }
    width: fit-content;
    display: flex;
    transform: translateX(-50%);
    margin-left: 50%;
    align-items: center;
    flex-direction: row;
    align-content: space-around;
  }
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