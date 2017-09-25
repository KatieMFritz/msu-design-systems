<template>
  <button class="a-button"
    @click.prevent="onClick"
    :style="{ color: color, fontSize: fontSize }">
    <slot></slot>
  </button>
</div>
</template>

<script>


/**
 * The only true button.
 */
export default {
  name: 'a-button',
  props: {
    /**
     * The color for the button.
     */
    color: {
      type: String,
      default: '#333'
    },
    /**
     * The size of the button
     * (`small, normal, large`)
     */
    size: {
      type: String,
      default: 'normal'
    },
    /**
     * Gets called when the user clicks on the button
     * @ignore
     */
    onClick: {
      type:Function,
      default: (event) => {
        console.log('You have clicked me!', event.target);
      }
    }
  },
  computed: {
    fontSize(){
      let size;
      switch (this.size) {
        case 'small':
          size = '10px';
          break;
        case 'normal':
          size = '14px';
          break;
        case 'large':
          size = '18px';
          break;
      }
      return size;
    }
  }
}
</script>

<docs>
Here's where the docs go.
</docs>
