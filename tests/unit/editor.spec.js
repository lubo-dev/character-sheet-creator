import {shallowMount} from '@vue/test-utils'
import Editor from '@/components/Editor.vue';
import PageData from "../../src/components/page/PageData";

describe('Editor.vue', () => {
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
