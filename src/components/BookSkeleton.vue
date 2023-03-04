<script setup lang="ts">
  import Skeleton from '@/components/Skeleton.vue';
</script>

<template>
    <div class="book-skeleton" >
        <Skeleton minWidth="50" maxWidth="90" height="20px" />
        <img :src="'https://i0.wp.com/thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png'" :style="{width:'100%'}" />
        <Skeleton minWidth="60" maxWidth="85" height="10px" />
    </div>
</template>

<style scoped lang="scss">
.book-skeleton{
    &>*{
        margin: 6px 4px;
    }
    padding: 4px;        
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: space-between;
}
</style>