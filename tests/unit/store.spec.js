import PageData from "../../src/components/data/PageData";
import Store from '../../src/components/data/Store';

beforeEach(() => {
    localStorage.clear();
});

describe('Store', () => {
    it('adds a single page, with order 0, to the data, when localstorage does not contain pages', () => {
        //then
        expect(Store.state.pages.length).toEqual(1);
        expect(Store.state.pages).toEqual([new PageData(0)]);
    });
});
