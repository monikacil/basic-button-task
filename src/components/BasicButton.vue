<template>
  <component class="btn" :is="type" :class="btnStyle" :href="href" :to="to" :disabled="disabled">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color: string
  href?: string
  to?: string
  size?: string
  variant?: string
  disabled?: boolean
  fullWidth?: boolean
}

/**
 * Possible value for dynamic props:
 * color (required): orange | green | dark-green | yellow | red
 * size: s | m (default) | l
 * variant: filled (default) | outlined
 *
 */

// define props with default value
const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  variant: 'filled',
  disabled: false,
  fullWidth: false
})

// computed button type
const type = computed(() => {
  if (props.href) {
    return 'a'
  } else if (props.to) {
    return 'router-link'
  } else {
    return 'button'
  }
})

// computed button styles based on given props
const btnStyle = computed<string[]>(() => {
  const styles = [props.size, props.variant, props.color, props.fullWidth ? 'block' : '']
  return styles
})
</script>
