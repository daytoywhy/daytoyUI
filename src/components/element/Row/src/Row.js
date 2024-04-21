import { h } from 'vue'
export default {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validate(value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
      }
    },
    align: {
      type: String,
      default: 'top',
      validate(value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    }
  },
  computed: {
    style() {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    }
  },
  render() {
    return h(
      this.tag,
      {
        class: [
          'el-row',
          {
            'el-row--flex': this.type === 'flex'
          },
          this.justify !== 'start' && `is-justify-${this.justify}`,
          this.align !== 'top' && `is-align-${this.align}`
        ],
        style: this.style
      },
      this.$slots.default()
    )
  }
}
