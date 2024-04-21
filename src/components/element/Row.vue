<template>
  <div :class="[
    'el-row',
    {
      'el-row--flex': type === 'flex'

    },
    justify !== 'start' && `is-justify-${justify}`,
    align !== 'top' && `is-align-${align}`
  ]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validate (value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
      }
    },
    align: {
      type: String,
      default: 'top',
      validate (value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    }
  },
  computed: {
    style () {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }

  &--flex {
    display: flex;

    &::before,
    &::after {
      display: none;
    }

    &.is-justify-start {
      justify-content: flex-start;
    }

    &.is-justify-end {
      justify-content: flex-end;
    }

    &.is-justify-center {
      justify-content: center;
    }

    &.is-justify-space-around {
      justify-content: space-around;
    }

    &.is-justify-space-between {
      justify-content: space-between;
    }

    &.is-align-top {
      align-items: flex-start;
    }

    &.is-align-middle {
      align-items: center;
    }

    &.is-align-bottom {
      align-items: flex-end;
    }
  }
}
</style>
