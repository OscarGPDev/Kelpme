import { mount } from '@vue/test-utils';
import HelloWorld from './../../src/components/HelloWorld.vue';

describe('HelloWorld test', () => {
  it('should format message on button click', () => {
    const wrapper = mount(HelloWorld);
    const { vm } = wrapper;
    wrapper.setData({
        name: 'Adam',
    });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(vm.message).toBe('Hello Adam');
  });
  /* async keyword is needed because of updating the DOM.
  We need to wait for button click to complete and call formatMsg function.
  Otherwise the last assertion would fail */
  it('should show message on button click', async () => {
    const wrapper = mount(HelloWorld);
    const { vm } = wrapper;
    wrapper.setData({
        name: 'Adam',
    });
    const button = wrapper.find('button');
    await button.trigger('click');
    const p = wrapper.find('p');
    expect(p.text()).toBe('Hello Adam');
  });
});