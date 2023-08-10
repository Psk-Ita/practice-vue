<script lang="ts">
import type { PropType } from 'vue'
import { defineAsyncComponent, watchEffect } from 'vue'

export enum Icons {
  Community = 'Community',
  Documentation = 'Documentation',
  Ecosystem = 'Ecosystem',
  Support = 'Support',
  Tooling = 'Tooling'
}
export type IconTypes = keyof typeof Icons
export const IconOptions = Object.keys(Icons)

export default {
  props: {
    icon: String as PropType<IconTypes>
  },
  data() {
    return {
      loadedIcon: defineAsyncComponent(() => import(`./Icon${this.$props.icon}.vue`))
    }
  }
}
</script>

<template>
  <component :is="loadedIcon" :key="$props.icon" :alt="$props.icon" />
</template>
