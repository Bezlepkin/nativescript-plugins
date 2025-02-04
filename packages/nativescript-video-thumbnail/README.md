# @bezlepkin/nativescript-video-thumbnail

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]

A plugin that allows you to extract a thumbnail from a video.

```javascript
npm install @bezlepkin/nativescript-video-thumbnail
```

## Usage

```TypeScript
import { getVideoThumbnail } from '@bezlepkin/nativescript-video-thumbnail';

try {
    const imageSource = await getVideoThumbnail(filepath);
} catch (err) {
    console.error(err);
}
```

## License

Apache License Version 2.0

[npm-url]: https://www.npmjs.com/package/@bezlepkin/nativescript-video-thumbnail
[npm-version-image]: https://badgen.net/npm/v/@bezlepkin/nativescript-video-thumbnail
[npm-downloads-image]: https://badgen.net/npm/dm/@bezlepkin/nativescript-video-thumbnail
