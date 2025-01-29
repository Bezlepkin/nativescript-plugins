# @bezlepkin/nativescript-keyboard-opening
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]

A plugin that allows you to track keyboard opening, changing, closing and returns keyboard height.

```javascript
npm install @bezlepkin/nativescript-keyboard-opening
```

## Usage
```TypeScript
import { keyboardOpening } from '@bezlepkin/nativescript-keyboard-opening';

keyboardOpening().on('opened', async (args: any) => {
    console.log('The keyboard is opened', args.data.height);
});

keyboardOpening().on('changed', async (args: any) => {
    console.log('The keyboard is changed', args.data.height);
});

keyboardOpening().on('closed', async (args: any) => {
    console.log('The keyboard is closed');
});
```

To stop tracking when you switch to another screen, you need to unsubscribe from the actions:
```TypeScript
keyboardOpening().off('opened');
keyboardOpening().off('changed');
keyboardOpening().off('closed');
```

## License
Apache License Version 2.0

[npm-url]: https://www.npmjs.com/package/@bezlepkin/nativescript-keyboard-opening
[npm-version-image]: https://badgen.net/npm/v/@bezlepkin/nativescript-keyboard-opening
[npm-downloads-image]: https://badgen.net/npm/dm/@bezlepkin/nativescript-keyboard-opening
