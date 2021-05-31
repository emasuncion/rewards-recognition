import {shallowMount} from '@vue/test-utils';

import CommendModal from '@/components/common/CommendModal.vue';

describe('Commend modal component', () => {
  let wrapper;

  const propsData = {
    categoryName: 'Test Category',
    persistent: true,
    value: false
  };

  describe('computed: categorySubtitle1', () => {
    it('should return the correct category subtitle for Value Creator', () => {
      wrapper = shallowMount(CommendModal, {
        propsData: {
          categoryName: 'Value Creator',
          persistent: true,
          value: false
        }
      });
      expect(wrapper.vm.categorySubtitle1).toBe(
        'Individual that exemplify improvements to delivery outcomes'
          + ' and continuously achieving higher client satisfaction on the delivery.'
      );
    });

    it('should return the correct category subtitle for People Developer', () => {
      wrapper = shallowMount(CommendModal, {
        propsData: {
          categoryName: 'People Developer',
          persistent: true,
          value: false
        }
      });
      expect(wrapper.vm.categorySubtitle1).toBe(
        'Individual that exemplify leadership skill of developing other'
          + ' people to do better job as well as continuously improving oneself technically and functionally'
          + ' in the organization.'
      );
    });

    it('should return the correct category subtitle for Business Operator', () => {
      wrapper = shallowMount(CommendModal, {
        propsData: {
          categoryName: 'Business Operator',
          persistent: true,
          value: false
        }
      });
      expect(wrapper.vm.categorySubtitle1).toBe(
        'Individual that exemplify Delivery Excellence and meet schedule and'
          + ' budget on time.'
      );
    });
  });

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
      wrapper = shallowMount(CommendModal, {propsData});
      wrapper.vm.closeModal();
      expect(wrapper.emitted('input')[0][0]).toBe(false);
    });
  });
});
