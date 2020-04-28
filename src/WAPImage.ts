
import {WAPPlugin} from '@wap/core';

export class WAPImage extends WAPPlugin<string> {
    protected async _read(data: Uint8Array): Promise<string> {
        let blob: Blob = new Blob([ data.buffer ]);
        return URL.createObjectURL(blob);
    }
}

export default WAPImage;
