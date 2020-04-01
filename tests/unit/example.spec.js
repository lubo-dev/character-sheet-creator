import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders "Work in progress"', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.text()).toContain('Work in progress')
  })
});
