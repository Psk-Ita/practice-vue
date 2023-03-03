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
                <div class="book-widget" v-for="book in booksData">
                    <img class="image" height="300" :src="book?.image" :alt="book?.title">
                    <div class="title">{{ book?.title }}</div>
                    <h3 class="author">{{ book?.author }}</h3>
                    <div class="description">{{ book?.summary }}</div>
                    <h3 class="isbn">ISBN: {{ book?.ISBN }}</h3>
                </div>
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
    /* grid-template-columns: 200px 200px 200px; */
}
.book-widget{
    flex: 1 0 30%;
    margin: 5px;
    /* width: 30,999%; */
    border:1px solid black;
    border-radius: 10px;
    padding: 10px;
}

.book-widget .title{
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 1.3;
    margin-top: 20px;
}

.book-widget .description{
    margin-top: 20px;
}

.book-widget .isbn{
    margin-top: 20px;
}


.book-widget .author{
    margin-top:.4em;
    font-weight: 600;
    font-size: 1.4rem;
    /* line-height: 1.3; */
}

.image{
    float:left;
    margin-right: 30px;
}
</style>