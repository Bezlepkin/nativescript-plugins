# @bezlepkin/nativescript-video-thumbnail

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
