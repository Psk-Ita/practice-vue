<script lang="ts">
import type { PropType } from 'vue';
import { ref, computed, watchEffect, markRaw } from 'vue';

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
  setup(props, { attrs, emit }) {
    const loading = ref(true);
    const sourceIcon = ref(props.icon);
    const currentIcon = ref(null);

    const nextIcon = computed(() => {
      const nextIndex = (1 + IconOptions.findIndex((x) => x === props.icon)) % IconOptions.length;
      return IconOptions[nextIndex] as IconTypes;
    });

    const loadIcon = async (iconType?: IconTypes): Promise<void> => {

      if (!iconType) return Promise.resolve();

      loading.value = true;

      await new Promise((resolve) => setTimeout(resolve, 199));

      const objIcon = await import(`./Icon${iconType}.vue`);
      currentIcon.value = markRaw(objIcon.default);

      loading.value = false;

      return Promise.resolve();
    }

    watchEffect(async () => {
      await loadIcon(props.icon)
    });

    return {
      attrs,
      loading,
      nextIcon,
      sourceIcon,
      currentIcon,
      emit,
      loadIcon,
    }
  },
  inheritAttrs: false
};
</script>

<template>
  <!-- loading state -->
  <template v-if="loading">
    <span>...</span>
  </template>
  <component v-else-if="currentIcon" v-bind="attrs" :is="currentIcon" :id="icon" :key="icon" :alt="icon"
    @click="emit('update:icon', nextIcon)" />
</template>
