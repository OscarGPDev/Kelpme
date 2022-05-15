import { mount } from '@vue/test-utils';
import VideoHome from './../../src/components/home/VideoHome.vue';

describe('Test para InforComponent', () => {
    it('Test 1: Pintando h2', () => {
        const wrapper = mount(VideoHome)

        expect(wrapper.html()).toContain('Actualmente el sargazo esta muy presente en las playas mexicanas')
    })
})