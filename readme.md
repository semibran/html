# html
> tiny helper functions for creating virtual DOM nodes

```js
import * as h from '@semibran/html'
import patch from '@semibran/patch'

patch(document.body, h.body([
  h.p(['hello world!'])
]))
```

## usage
[![npm badge]][npm page]

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)

[npm page]:  https://npmjs.com/package/@semibran/html
[npm badge]: https://nodei.co/npm/@semibran/html.png?mini
