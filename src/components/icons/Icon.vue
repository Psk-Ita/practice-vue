<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineAsyncComponent, markRaw } from 'vue';

export enum Icons {
  Community = 'Community',
  Documentation = 'Documentation',
  Ecosystem = 'Ecosystem',
  Support = 'Support',
  Tooling = 'Tooling'
}
export type IconTypes = keyof typeof Icons;
export const IconOptions = Object.keys(Icons);

export default {
  props: {
    icon: String as PropType<IconTypes>
  },
  data() {
    return {
      sourceIcon: this.$props.icon,
      currentIcon: markRaw(defineAsyncComponent(() => import(`./Icon${this.sourceIcon}.vue`))),
      nextIcon: computed(() => {
        const nextIndex = (1 + IconOptions.findIndex((x) => x === this.$props.icon)) % IconOptions.length;
        return IconOptions[nextIndex];
      })
    };
  },
  updated() {
    // prevent: Maximum recursive updates exceeded
    if (this.sourceIcon === this.$props.icon) return;
    this.sourceIcon = this.$props.icon;
    this.currentIcon = markRaw(defineAsyncComponent(() => import(`./Icon${this.sourceIcon}.vue`)));
  },
  inheritAttrs: false
};
</script>

<template>
  <Suspense>
    <!-- main content -->
    <component v-bind="$attrs" :is="currentIcon" :id="$props.icon" :key="$props.icon" :alt="$props.icon" @click="$emit('update:icon', nextIcon)" />

    <!-- loading state -->
    <template #fallback><span>...</span></template>
  </Suspense>
</template>
