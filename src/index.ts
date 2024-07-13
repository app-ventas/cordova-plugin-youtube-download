// my-youtube-download-plugin/src/index.ts

import { registerWebPlugin } from '@capacitor/core';
import { YoutubeDownloadInstance } from './web';

export * from './definitions';
export { YoutubeDownloadInstance };

registerWebPlugin(YoutubeDownloadInstance);
