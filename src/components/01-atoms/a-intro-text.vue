<template>
  <div class="m-intro">
    The intro text may be a lead-in to the passage of text, or it may just be used to create a visual distinction between the rest of the passage of text.
  </div>
</template>

<script>
/**
 * Use this element for editors notes and other introductory text.
 */

export default {
  name: 'a-intro-text',
  props: {
  },
}
</script>

<style lang="scss">
@import '../../styles/brand';

.m-intro {
  color: $color-orange-contrast;
  font-size: $font-size-l;
  margin: $space-stack-l;
}
</style>
