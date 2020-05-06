
/// <reference path="./support/tsdefs/node-blob.d.ts" />

import {
    WAPTestTools,
    WAPReader,
    // WebAssetPack,
    PluginManager,
    WAPTestFactory,
    TestWAP
} from '@wap/test-tools';
import {IDictionary} from '@totalpave/interfaces';
import Blob from 'node-blob';
import WAPImage from '../src/WAPImage';
import def from './support/def.json';

//TODO: Add MD5 hash checks has a way to verify that the test images
//      are binary-consistent when read from the wap file


describe('WAPImage', () => {
    let reader: WAPReader = new WAPReader(new WAPTestFactory());
    let pack: TestWAP = null;

    beforeAll(async () => {
        (<any>global).Blob = Blob;
        PluginManager.getInstance().addPlugin('jpg', new WAPImage());
        PluginManager.getInstance().addPlugin('jpeg', new WAPImage());
        PluginManager.getInstance().addPlugin('gif', new WAPImage());
        PluginManager.getInstance().addPlugin('png', new WAPImage());
        let buffer: ArrayBuffer = await WAPTestTools.compile(def);
        pack = <TestWAP>(await reader.read(buffer));
    });

    beforeEach(() => {
        (<any>global).URL = jasmine.createSpyObj('URL', [ 'createObjectURL' ]);
    });

    const files: Array<string> = [
        'dice.png'
        // 'earth.gif',
        // 'img.jpeg',
        // 'img.jpg'
    ];

    let checksums: IDictionary<string> = {
        'dice.png': '32351df8f7942ad9bacd1e5cf55f8ed2',
        'earth.gif': '0f992d2987bd3151057eedc85220ecb6',
        'img.jpeg': 'fe87d1319c2c2bd2d5c41b113f4aa070',
        'img.jpg': 'fe87d1319c2c2bd2d5c41b113f4aa070'
    };

    files.forEach((file: string) => {
        it(`File Check: ${file}`, async () => {
            await pack.get(file);
            expect(URL.createObjectURL).toHaveBeenCalled();
            expect((<jasmine.Spy>URL.createObjectURL).calls.mostRecent().args[0]).toBeInstanceOf(Blob);
        });

        it(`MD5 Checksum Check: ${file}`, async () => {
            console.warn(pack.hexdump(file).slice(0, 100));
            expect(pack.md5(file)).toBe(checksums[file]);
        });
    });
});
