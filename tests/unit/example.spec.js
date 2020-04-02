import { shallowMount } from '@vue/test-utils'
import Document from '@/components/Document.vue';

describe('Document.vue', () => {
  it('renders "Work in progress"', () => {
    const wrapper = shallowMount(Document);

    expect(wrapper.text()).toContain('Work in progress')
  })
});
