import { shallowMount } from '@vue/test-utils'
import Editor from '@/components/Editor.vue';

describe('Editor.vue', () => {
    it('renders "Work in progress"', () => {
        const wrapper = shallowMount(Editor);

        expect(wrapper.text()).toContain('Work in progress')
    })
});
