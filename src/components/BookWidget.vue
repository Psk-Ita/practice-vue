<script setup lang="ts">
import type { Book } from "@/interfaces/Book";
import {
    ref,
    reactive,
    computed,
    onMounted,
    watch
  } from "vue"

//   const props = defineProps({
//     book: Book
// })
const props = defineProps<{
  book: Book
}>()



</script>

<template>
  <div class="book-widget">
        <img class="image" height="300" :src="book?.image" :alt="book?.title">
        <div class="title">{{ book?.title }}</div>
        <h3 class="author">{{ book?.author }}</h3>
        <div class="description">{{ book?.summary }}</div>
        <h3 class="isbn">ISBN: {{ book?.ISBN }}</h3>
    </div>
</template>


<style scoped>
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