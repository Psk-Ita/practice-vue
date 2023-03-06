<script setup lang="ts">
import BookWidget from "@/components/BookWidget.vue";
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
        <div>
            <div class="books-grid">
                <BookWidget v-for="book in booksData" :book="book"/>
            </div>
        </div>
    </div>
        
    
    <div v-else>No Data</div>

</main>
</template>

<style scoped>

.books-grid{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>