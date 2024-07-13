// my-youtube-download-plugin/src/web.ts

import { WebPlugin } from '@capacitor/core';
import type { YoutubeDownloadPlugin, OpenMapOptions } from './definitions';

export class YoutubeDownloadWeb extends WebPlugin implements YoutubeDownloadPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openMap(location: OpenMapOptions): Promise<void> {
    // Aquí puedes implementar la lógica para abrir un mapa
    console.log('Open map at', location);
  }
}

// Exporta una instancia del plugin
const YoutubeDownloadInstance = new YoutubeDownloadWeb();
export { YoutubeDownloadInstance };
