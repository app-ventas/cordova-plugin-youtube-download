import { WebPlugin } from '@capacitor/core';

import type { YoutubeDownloadPlugin, OpenMapOptions } from './definitions';

export class YoutubeDownloadWeb extends WebPlugin implements YoutubeDownloadPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async openMap(location: OpenMapOptions): Promise<void> {
    // logic here
  }
}
