    <script setup lang="ts">
    import {
        ref, reactive, computed, onMounted, watch, onUpdated
    } from "vue"

        
    let booksData: any = ref(null)


    // let booksData: any = ref([])
    // let booksData = reactive([])
    // let bookData = ref(null)


    let date = new Date();
    const year = date.getFullYear().toString();
    const month = `00${1+date.getMonth()}`.substr(-2)
    // const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    // const rawMonth = date.getMonth() + 1;
    // const monthStr = "0".repeat(2-(rawMonth.toString().length));




    // async function fetchData(year: string, month: string) {
    // const res = await fetch(
    //     `http://openlibrary.org/recentchanges/${year}/${month}/add-book.json`
    // )
    // booksData = await res.json();
    // }

    // fetchData(year, month);
    // async function fetchBookData(year: string, month: string) {
    //   const res = await fetch(
    //     `https://openlibrary.org/books/OL6807502M/`
    //   )
    //   bookData = await res.json();
    // }



    // TODO: prendere solo i books
    // Composable --> wrappo fetch ? 


    async function fetchDataBooks() {
        const res = await fetch(
            `http://private-b716af-bookstore.apiary-mock.com/data/books`
        )
        booksData = await res.json();
        console.log(booksData);
    }
    fetchDataBooks()

    onMounted(() =>{


       
    })
    onUpdated(() =>{

        // fetch('http://private-b716af-bookstore.apiary-mock.com/data/books')
        // .then(response => response.json())
        // .then(data => {
        //     booksData = data;
        // });
    })


    </script>

    <template>
    <main>
        {{ booksData[0].title }}

        <!-- <div class="books-grid"> -->
            <!-- <div :key="book?.ISBN" v-for="book in booksData"> -->
    <!-- <div v-if="booksData"> -->
    <!-- </div> -->
                
            <!-- <div v-for="book in booksData" :key="book?.ISBN"> -->
                <!-- <div class="book-widget">
                    <img :src="book?.image" :alt="book?.title">
                    <h2 class="title">{{ book?.title }}</h2>
                    <h3 class="author">{{ book?.author }}</h3>
                    <h3 class="author">{{ book?.ISBN }}</h3>
                    <div class="description">{{ book?.summary }}</div>
                </div> -->
                <!-- <BooksWidget :book="book" /> -->

            <!-- </div> -->
            
        <!-- </div> -->

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