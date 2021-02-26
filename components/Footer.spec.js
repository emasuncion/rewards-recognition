import {shallowMount} from '@vue/test-utils';

import FooterComponent from '@/components/Footer.vue';

describe('Footer component', () => {
  let wrapper;

  it('should set the data of the component', async () => {
    wrapper = shallowMount(FooterComponent);
    await wrapper.setData({ripple: false});
    expect(wrapper.vm.ripple).toBe(false);
  });
});
