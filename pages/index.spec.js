import {shallowMount} from '@vue/test-utils';

import IndexPage from '@/pages/index.vue';

describe('Index page', () => {
  let wrapper;

  it('should open the commend modal', () => {
    wrapper = shallowMount(IndexPage);
    wrapper.vm.openCommendModal();
    expect(wrapper.vm.isStarModalOpen).toBe(true);
  })
});
