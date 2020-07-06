import React from 'react'
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import CircularProgress from '@material-ui/core/CircularProgress';
import { configure } from 'enzyme';
import Loader from './loader'
configure({ adapter: new Adapter() });

describe('Testing Loader Componet', () => {

    test('Should show loader component', () => {
        const wrapper=shallow(<Loader/>)
        const instance=wrapper.instance();
        expect(wrapper.find(CircularProgress).at(0).props().color).toBe('secondary')
    });
    
});