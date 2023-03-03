<script setup lang="ts">
import {
    ref, reactive, computed, onMounted, watch, onUpdated
} from "vue"

    
let booksData: any = ref(null)

async function fetchDataBooks() {
    const res = await fetch(
        `http://private-b716af-bookstore.apiary-mock.com/data/books`
    )
    booksData.value = await res.json();
    console.log(booksData);
}
// fetchDataBooks()

onMounted(() =>{
    fetchDataBooks()
})
onUpdated(() =>{
})


</script>

<template>
<main>
    <button @click="fetchDataBooks()">Fetch Data Books</button>
    <div v-if="booksData">
        {{ booksData[0]}}
    </div>
    <div v-else>No Data</div>

</main>
</template>

<style scoped>

.books-grid{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* grid-template-columns: 200px 200px 200px; */
}
</style>