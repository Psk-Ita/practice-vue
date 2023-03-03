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
        <div v-for="book in booksData">
            <div class="books-grid">
                <div class="book-widget">
                    <img class="image" height="500" :src="book?.image" :alt="book?.title">
                    <h2 class="title">{{ book?.title }}</h2>
                    <h3 class="author">{{ book?.author }}</h3>
                    <h3 class="author">{{ book?.ISBN }}</h3>
                    <div class="description">{{ book?.summary }}</div>
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
    flex: 1 0 20%;
    margin: 5px;
    /* width: 30,999%; */
    border:1px solid black;
    border-radius: 10px;
    padding: 10px;
}

.book-widget.title{

}

.book-widget.description{

}

.book-widget.author{

}

.image{
    float:left;
    margin-right: 30px;

}
</style>