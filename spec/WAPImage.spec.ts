
/// <reference path="./support/tsdefs/node-blob.d.ts" />

import {
    WAPTestTools,
    WAPReader,
    WebAssetPack,
    PluginManager
} from '@wap/test-tools';
import Blob from 'node-blob';
import WAPImage from '../src/WAPImage';
import def from './support/def.json';

//TODO: Add MD5 hash checks has a way to verify that the test images
//      are binary-consistent when read from the wap file


describe('WAPImage', () => {
    let reader: WAPReader = new WAPReader();
    let pack: WebAssetPack = null;

    beforeAll(async () => {
        (<any>global).Blob = Blob;
        PluginManager.getInstance().addPlugin('jpg', new WAPImage());
        PluginManager.getInstance().addPlugin('jpeg', new WAPImage());
        PluginManager.getInstance().addPlugin('gif', new WAPImage());
        PluginManager.getInstance().addPlugin('png', new WAPImage());
        let buffer: ArrayBuffer = await WAPTestTools.compile(def);
        pack = await reader.read(buffer);
    });

    beforeEach(() => {
        (<any>global).URL = jasmine.createSpyObj('URL', [ 'createObjectURL' ]);
    });

    const files: Array<string> = [
        'dice.png',
        'earth.gif',
        'img.jpeg',
        'img.jpg'
    ];

    files.forEach((file: string) => {
        it(file, async () => {
            await pack.get(file);
            expect(URL.createObjectURL).toHaveBeenCalled();
            expect((<jasmine.Spy>URL.createObjectURL).calls.mostRecent().args[0]).toBeInstanceOf(Blob);
        });
    });
});
