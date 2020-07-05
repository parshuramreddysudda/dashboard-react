import React from 'react'
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import SnakbarComponent from './Snakbar'
import Snackbar from '@material-ui/core/Snackbar';
import { configure } from 'enzyme';
import Alert from './Snakbar';
configure({ adapter: new Adapter() });

describe('Testing Snakbar Component', () => {

    test('should handle snakbar Props', () => {

        const mockClosefn = jest.fn(() => true)
        const mockAlert = jest.fn(() => { })
        const props = { show: true, closeSnak: mockClosefn, snakType: 'Info', desc: 'Description' }
        const wrapper = shallow(
            <SnakbarComponent
                {...props}
                Alert={mockAlert}
            />)
        expect(wrapper.find(Snackbar).at(0).props().open).toEqual(true);
        expect(wrapper.find(Snackbar).at(0).props().autoHideDuration).toEqual(6000);
        expect(wrapper.find(Snackbar).at(0).props().onClose).toEqual(mockClosefn);
        expect(wrapper.find('Alert').at(0).props().children).toEqual('Description')
        expect(wrapper.find('Alert').at(0).props().severity).toEqual('Info')
        
        const instance=wrapper.instance()
        instance.Alert(props)
    });

});