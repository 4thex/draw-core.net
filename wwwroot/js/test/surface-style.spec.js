import SurfaceStyle from '../SurfaceStyle.js';
describe('SurfaceStyle', () => {
    it("zIndex is 1", done => {
        expect(SurfaceStyle.zIndex).toEqual(1);
        done();
    });
});