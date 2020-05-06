import { WAPPlugin } from '@wap/core';
export declare class WAPImage extends WAPPlugin<string> {
    protected _read(data: Uint8Array, type: string): Promise<string>;
}
export default WAPImage;
