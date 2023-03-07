<script setup lang="ts">
import type { Author } from "@/api/api";
import { useDataStore } from "@/stores/useDataStore";
import {
    ref, reactive, computed, onMounted, watch, onUpdated
} from "vue"
import { getBookByISBN } from '@/api/api'

export interface BookByISBN {
    
    book:{
       ISBN: number,
       title: string,
       author:{
          id: string,
          name: string,
          biography: string,
          image:string
       },
       summary: string ,
       image: string,
       price:{
          currency:string,
          value: number,
          displayValue: string
       }
    },
    links:[
       {
          rel:string,
          href:string
       },
    ]
}
defineProps<{
    authorId: number
   
}>()



const dataStore = useDataStore();
let authorData: Author | null = null;
let data : any = ref(null);
let selectedLink = ref('');


async function getBookByISBN(isbn: number | string){
    const res = await fetch(
        `http://private-b716af-bookstore.apiary-mock.com/books/${isbn}`
    )
    data.value =  await res.json()
    console.log('data.value', data.value)   
}

function goToLink(selectedLink: string){
    console.log('selectedLink', selectedLink);
} 

onMounted(() => {

    getBookByISBN(dataStore.selectedISBN)

})





</script>

<template>
<main>
    <h1>Book Detail</h1>
    <br>
    <img class="image" height="300" :src="data?.book?.image" :alt="data?.book?.title">

    <h1 class="bold">{{data?.book.title}}</h1> 
    <h2 class="bold">{{ data?.book?.author?.name || '' }}</h2>

    <h3>{{data?.book.price.value}} {{data?.book.price.currency}}</h3>
    <p>{{data?.book.summary}}</p>
    <h3>{{data?.book.ISBN}}</h3>
    <div class="separator mb-10px"></div>

    <img :src="data?.book?.author?.image" height="200" alt="">
    <!-- <p>{{ data }}</p> -->
    <br>
    <br>    

    <h2 class="bold">{{ data?.book?.author?.name || '' }}</h2>
    <br>
    <p>{{ data?.book?.author?.biography || ''  }}</p>


    <select name="links"  v-model="selectedLink">
        <option v-for="link in data?.links" :value="link.href">{{ link.rel }}</option>
    </select>
    
    <a :href="selectedLink"><button @click="goToLink(selectedLink)">Go To Link: {{ selectedLink }}</button></a>
    
</main>
</template>

<style scoped>


</style>