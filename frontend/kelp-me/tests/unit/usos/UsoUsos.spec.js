import { mount } from '@vue/test-utils';
import UsoUsos from '../../../src/components/usos/UsoUsos.vue';

describe('Test para UsoUsos', () => {
    it('Test 1: Obteniendo data', () => {
        const wrapper = mount(UsoUsos)
        
        console.log(wrapper.html())
        expect(wrapper.html()).toContain('Productos cosméticos y para el cuidado de la piel')
        
       
     
    })
})