import {shallowMount} from '@vue/test-utils';

import vuetify from '@/jest.setup'
import HeaderComponent from '@/components/Header.vue';

describe('Header component', () => {
  let wrapper;

  it('should set the data of the component', async () => {
    wrapper = shallowMount(HeaderComponent, {vuetify});
    await wrapper.setData({ripple: false});
    expect(wrapper.vm.ripple).toBe(false);
  });
});
