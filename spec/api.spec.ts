
import * as api from '../src/api';
import WAPImage from '../src/WAPImage';
import APIDefault from '../src/api';

describe('Public API', () => {
    it('Named import', () => {
        expect(api.WAPImage).toBe(WAPImage);
    });

    it('Default import', () => {
        expect(APIDefault).toBe(WAPImage);
    });
});
