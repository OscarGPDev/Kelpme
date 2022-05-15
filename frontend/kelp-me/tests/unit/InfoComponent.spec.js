import { mount } from '@vue/test-utils';
import InfoComponent from './../../src/components/home/InfoComponent.vue';

describe('Test para InforComponent', () => {
    it('Test 1: Pintando h2', () => {
        const wrapper = mount(InfoComponent)

        expect(wrapper.html()).toContain('Es una página sin ánimo de lucro que logra juntar organizaciones')
    })
})