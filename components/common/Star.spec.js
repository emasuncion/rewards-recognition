import {shallowMount} from '@vue/test-utils';

import StarComponent from '@/components/common/Star.vue';

describe('Star component', () => {
  let wrapper;
  const propsData = {
    categoryName: 'Test Category',
    className: 'test-class'
  };

  it('should be able to open the modal', () => {
    wrapper = shallowMount(StarComponent, {propsData});
    wrapper.vm.openCommendModal();
    expect(wrapper.emitted('open')[0][0]).toEqual(propsData.categoryName);
  });
});
