
import * as api from '../src/api';
import WAPObjectUrl from '../src/WAPObjectUrl';
import APIDefault from '../src/api';

describe('Public API', () => {
    it('Named import', () => {
        expect(api.WAPObjectUrl).toBe(WAPObjectUrl);
    });

    it('Default import', () => {
        expect(APIDefault).toBe(WAPObjectUrl);
    });
});
