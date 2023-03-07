<script setup lang="ts">
import type { Author } from "@/api/api";
import { useDataStore } from "@/stores/useDataStore";
import {
    ref, reactive, computed, onMounted, watch, onUpdated
} from "vue"
import { getBookByISBN } from '@/api/api'
import { checkCompatEnabled } from "@vue/compiler-core";
defineProps<{
    authorId: number
   
}>()


const dataStore = useDataStore();
let authorData: Author | null = null;
let data: any = ref(null);
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

const check = () => {
    // selectedLink.value = selectedLink.value.replace("http://bookstore.apiary.io:80", "")
}

watch(selectedLink, (newSelectedLink) => {
    selectedLink.value = selectedLink.value.replace("http://bookstore.apiary.io:80", "https://private-b716af-bookstore.apiary-mock.com/")
    console.log(`newSelectedLink is ${newSelectedLink}`)
})

onMounted(() => {

    getBookByISBN(dataStore.selectedISBN)

})





</script>

<template>
<main>
    <h1>Author Page</h1>
    <br>
    <img :src="data?.book?.author?.image" height="200" alt="">
    <!-- <p>{{ data }}</p> -->
    <br>
    <br>    
    <h2 class="bold">{{ data?.book?.author?.name || '' }}</h2>
    <br>
    <p>{{ data?.book?.author?.biography || ''  }}</p>


    <select name="links" @click="check()" v-model="selectedLink">
        <option v-for="link in data?.links" :value="link.href">{{ link.rel }}</option>
    </select>
    
    <a :href="selectedLink"><button @click="goToLink(selectedLink)">Go To Link: {{ selectedLink }}</button></a>
    
</main>
</template>

<style scoped>


</style>