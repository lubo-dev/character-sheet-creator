import {shallowMount} from '@vue/test-utils'
import Editor from '@/components/Editor.vue';
import PageData from "../../src/components/data/PageData";

beforeEach(() => {
    localStorage.clear();
});

describe('Editor.vue', () => {
    it('adds a single page, with order 0, to the data, when localstorage does not contain pages', () => {
        //when
        const wrapper = shallowMount(Editor);

        //then
        expect(wrapper.vm.$data.pages.length).toEqual(1);
        expect(wrapper.vm.$data.pages).toEqual([new PageData(0)]);
    });
    it('parses localstorage and adds the pages to the data, when localstorage contains pages', () => {
        //given
        localStorage.setItem('pages', '[{"order":0},{"order":1},{"order":2}]');

        //when
        const wrapper = shallowMount(Editor);

        //then
        expect(wrapper.vm.$data.pages.length).toEqual(3);
        expect(wrapper.vm.$data.pages).toEqual([new PageData(0), new PageData(1), new PageData(2)]);
    });
    it('addPage() adds a page to the data', () => {
        //given
        const wrapper = shallowMount(Editor);

        //when
        wrapper.vm.addPage();

        //then
        expect(wrapper.vm.$data.pages.length).toEqual(2);
        expect(wrapper.vm.$data.pages).toEqual([new PageData(0), new PageData(1)]);
    });
});
