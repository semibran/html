
const EMPTY_OBJ = {}
const EMPTY_ARR = []

export const h = tag => (props, content) =>
  props == null || Array.isArray(props)
    ? { tag, props: EMPTY_OBJ, content: props || EMPTY_ARR }
    : { tag, props, content: content || EMPTY_ARR }
