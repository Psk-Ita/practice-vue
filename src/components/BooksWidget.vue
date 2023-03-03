<script setup lang="ts">
// import { Book } from "../interfaces/Book";
import {
    ref,
    reactive,
    computed,
    onMounted,
    watch
  } from "vue"

  const props = defineProps({
    book: Object
})



</script>

<template>
<!-- 
<div class="book-widget">
    <h2 class="title">Moby Dick</h2>
    <h3 class="author">Herman Melville</h3>
    <div class="description">A captain is obsessed by a white whale. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique laboriosam, ut explicabo aperiam, inventore suscipit in enim, aut nesciunt dicta quidem expedita excepturi sit eaque atque possimus ipsum. Ex.</div>
</div> -->
<!-- ISBN: number;
    title: string;
    author: string;
    summary: string;
    image: string;
    price: {
        currency: string;
        value: number;
        displayValue: number;
    }; -->
<div class="book-widget">
    <img :src="book?.image" :alt="book?.title">
    <h2 class="title">{{ book?.title }}</h2>
    <h3 class="author">{{ book?.author }}</h3>
    <h3 class="author">{{ book?.ISBN }}</h3>
    <div class="description">{{ book?.summary }}</div>
</div>
</template>


<style scoped>
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
</style>