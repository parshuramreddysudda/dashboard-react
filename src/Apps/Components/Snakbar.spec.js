import React from 'react'
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import SnakbarComponent from './Snakbar'
import Snackbar from '@material-ui/core/Snackbar';
import { configure } from 'enzyme';
import MuiAlert from '@material-ui/lab/Alert';
import Alert from './Snakbar';
configure({ adapter: new Adapter() });

describe('Testing Snakbar Component', () => {

    test('should handle snakbar Props', () => {

        const mockClosefn = jest.fn(() => true)
        const mockAlert = jest.fn(() => { console.log("Called me") })
        const props = { show: true, closeSnak: mockClosefn, snakType: 'info', desc: 'Description' }
        const wrapper = shallow(
            <SnakbarComponent
                {...props}
                Alert={mockAlert}
            />)
        expect(wrapper.find(Snackbar).at(0).props().open).toEqual(true);
        expect(wrapper.find(Snackbar).at(0).props().autoHideDuration).toEqual(6000);
        expect(wrapper.find(Snackbar).at(0).props().onClose).toEqual(mockClosefn);
        expect(wrapper.find('Alert').at(0).props().children).toEqual('Description')
        expect(wrapper.find('Alert').at(0).props().severity).toEqual('info')
        // const instance=wrapper.instance()
        // jest.spyOn(SnakbarComponent, 'Alert').mockImplementation(() => true);
        // instance.Alert(props)
    });
    test('should pass same Information to MuiAlert', () => {
        const mockClosefn = jest.fn(() => true)
        const props = { show: true, closeSnak: mockClosefn, snakType: 'info', desc: 'Description' }
        const wrapper = mount(<SnakbarComponent {...props} />)
        expect(wrapper.find(MuiAlert).at(0).props().children).toEqual('Description')
        expect(wrapper.find(MuiAlert).at(0).props().severity).toEqual('info')
        expect(wrapper.find(MuiAlert).at(0).props().variant).toEqual('filled')
    });

});