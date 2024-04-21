import { h } from 'vue'
export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    },
    style() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    },
    classList() {
      let classList = []

      ;['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          classList.push(prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`)
        }
      })
      ;['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach((prop) => {
            classList.push(
              prop !== 'span'
                ? `el-col-${size}-${prop}-${props[prop]}`
                : `el-col-${size}-${props[prop]}`
            )
          })
        }
      })
      return classList
    }
  },
  render() {
    return h(
      this.tag,
      {
        class: ['el-col', ...this.classList],
        style: this.style
      },
      this.$slots.default()
    )
  }
}
