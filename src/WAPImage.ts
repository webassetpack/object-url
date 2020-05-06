
import {WAPPlugin} from '@wap/core';

export class WAPImage extends WAPPlugin<string> {
    protected async _read(data: Uint8Array, type: string): Promise<string> {
        let blob: Blob = new Blob([ data.buffer ], {type});
        return URL.createObjectURL(blob);
    }
}

export default WAPImage;
