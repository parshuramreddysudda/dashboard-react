import React from 'react'
import App from './Apps'
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import permissionHelper from '../Auth/PermissionHelper';
import Snakbar from './Components/Snakbar'
// import Loader from './Components/loader'
configure({ adapter: new Adapter() });


describe('Testing Apps Component', () => {

    test('should have been called ', (done) => {

        const mockFetchfn = jest.fn(() => []);
        const mockCreatefn = jest.fn(() => { });
        const mockResetfn = jest.fn(() => { });
        const mockUpdatefn = jest.fn(() => { });
        const mockDeletefn = jest.fn(() => { });
        const wrapper = shallow(
            <App
                apps={[]}
                loading={true}
                updating={false}
                error={false}
                fetchApps={mockFetchfn}
                createApp={mockCreatefn}
                resetApps={mockResetfn}
                updateApp={mockUpdatefn}
                deleteApp={mockDeletefn}

            />
        )
        const instance = wrapper.instance();

        jest.spyOn(permissionHelper, 'checkPermission').mockImplementation(() => true);
        // instance.componentDidMount();
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        // const loader = wrapper.find(Loader)
        // console.log("Loader Props",loader.at(0))
        // expect(loader.exists()).toBe(true)

        instance.clearData().then(() => {
            // expect(mockResetfn).toHaveBeenCalledTimes(1)
            const snakbar = wrapper.find(Snakbar)
            // console.log("Snakbar ", snakbar)
            console.log("Snakbar Props(0)", snakbar.at(0).props())
            expect(snakbar.exists()).toBe(true)
            // expect(snakbar.at(0).props()).toBe(true)
            expect(snakbar.at(0).props().show).toBe(true)
            done()
        });


    })


})

