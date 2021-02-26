import {shallowMount} from '@vue/test-utils';

import CommendModal from '@/components/common/CommendModal.vue';

describe('Commend modal component', () => {
  let wrapper;

  const propsData = {
    categoryName: 'Test Category',
    persistent: true,
    value: false
  };

  describe('watch: isFormValid', () => {
    it('should validate the form and enable submit button', async () => {
      const VFormStub = {
        render: () => {},
        methods: {reset: () => {}}
      };

      wrapper = shallowMount(CommendModal, {
        propsData,
        stubs: {'v-form': VFormStub}
      });
      wrapper.setData({isFormValid: true});
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.isSubmitButtonEnabled).toBe(true);
    });
  });

  describe('method: closeModal', () => {
    it('should be able to close the modal', () => {
      wrapper = shallowMount(CommendModal, {
        propsData
      });
      wrapper.vm.closeModal();
      expect(wrapper.emitted('input')[0][0]).toBe(false)
    });
  });
});
