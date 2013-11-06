
# inputarea

  Cross between a textarea and text input. The textarea behaves like
  a single-line input unless the return key is used. A "multiline" classname
  is added to aid styling, for example you may wish to expand the field height.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/inputarea

## Example

```js
var inputarea = require('inputarea');
var el = document.querySelector('textarea');

inputarea(el).on('input', function(str){
  console.log(str);
});
```

## License

  MIT
