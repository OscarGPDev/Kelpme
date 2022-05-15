import { mount } from '@vue/test-utils';
import OrganizationComponent from '../../../src/components/organization/OrganizationComponent.vue';

describe('Test para OrganizationComponent', () => {
    it('Test 1: Pintando props', () => {
        const wrapper = mount(OrganizationComponent, {
            props: {
                name: 'Nivea',
                description: 'Empresa dedicada al cuidado...'
            }
        });

        expect(wrapper.html()).toContain('Nivea')
        expect(wrapper.html()).toContain('Empresa dedicada al cuidado...')
       
     
    })
})