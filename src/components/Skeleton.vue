<script setup lang="ts">
import { computed } from 'vue';

export interface SkeletonProps {
    width?: string;
    height?: string;
    maxWidth?: number | string | undefined;
    minWidth?: number | string | undefined;
}

const props = defineProps<SkeletonProps>()
const computedWidth = computed(() => {
    const {maxWidth, minWidth,  width} = { maxWidth:100, minWidth:80, ...props};
    return width || `${Math.floor((Math.random() * (parseFloat(`${maxWidth}`) - parseFloat(`${minWidth}`))) + parseFloat(`${minWidth}`))}%`;
})
</script>

<template>
    <span :style="{ height, width: computedWidth }" class="skeleton" />
</template>

<style scoped lang="scss" >
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .skeleton {
    display: inline-block;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    background-color: #DDDBDD;

    &::after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        position: absolute;
        transform: translateX(-100%);
        animation: shimmer 5s infinite;
        background-image: linear-gradient(
            90deg,
            rgba(#fff, 0) 0,
            rgba(#fff, 0.25) 25%,
            rgba(#fff, 0.5) 50%,
            rgba(#fff, 0.75) 75%
        );
    }
 }
</style>