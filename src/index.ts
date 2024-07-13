import { registerPlugin } from '@capacitor/core';

import type { YoutubeDownloadPlugin } from './definitions';

const YoutubeDownload = registerPlugin<YoutubeDownloadPlugin>('YoutubeDownload', {
  web: () => import('./web').then(m => new m.YoutubeDownloadWeb()),
});

export * from './definitions';
export { YoutubeDownload };
