import React from 'react'
import App from './Apps'
import MaterialTable from 'material-table';
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { Grid } from '@material-ui/core';
import permissionHelper from '../Auth/PermissionHelper';
import Snakbar from './Components/Snakbar'
// import Loader from './Components/loader'
configure({ adapter: new Adapter() });


describe('Testing Apps Component', () => {

    test('should not load table and grid when Permission is flase', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        jest.spyOn(permissionHelper, 'checkPermission').mockImplementation(() => false);
        wrapper.setState({ read: false })
        const materialTable = wrapper.find(MaterialTable);
        expect(materialTable.exists()).toBe(false);
        const grid = wrapper.find(Grid);
        expect(grid.exists()).toBe(false);
        done();
    })
    test('should load table and grid when Permission is true', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        jest.spyOn(permissionHelper, 'checkPermission').mockImplementation(() => true);
        wrapper.setState({ read: true })
        const materialTable = wrapper.find(MaterialTable);
        expect(materialTable.exists()).toBe(true);
        done();
    })

    test('should show Error component when error is true', () => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        wrapper.setState({ error: true })
        expect(wrapper.contains('#errorSnakbar')).toBe(true)

    })



    // test('should have been called ', (done) => {

    //     const mockFetchfn = jest.fn(() => []);
    //     const mockCreatefn = jest.fn(() => { });
    //     const mockResetfn = jest.fn(() => { });
    //     const mockUpdatefn = jest.fn(() => { });
    //     const mockDeletefn = jest.fn(() => { });
    //     const wrapper = shallow(
    //         <App
    //             apps={[]}
    //             loading={true}
    //             updating={false}
    //             error={false}
    //             fetchApps={mockFetchfn}
    //             createApp={mockCreatefn}
    //             resetApps={mockResetfn}
    //             updateApp={mockUpdatefn}
    //             deleteApp={mockDeletefn}

    //         />
    //     )
    //     const instance = wrapper.instance();

    //     jest.spyOn(permissionHelper, 'checkPermission').mockImplementation(() => true);
    //     // instance.componentDidMount();
    //     expect(mockFetchfn).toHaveBeenCalledTimes(1)
    //     // const loader = wrapper.find(Loader)
    //     // console.log("Loader Props",loader.at(0))
    //     // expect(loader.exists()).toBe(true)

    //     instance.clearData().then(() => {
    //         expect(mockResetfn).toHaveBeenCalledTimes(1)
    //         const snakbar = wrapper.find(Snakbar)
    //         expect(snakbar.exists()).toBe(true)
    //         // expect(snakbar.at(0).props()).toBe(true)
    //         expect(snakbar.at(0).props().show).toBe(true)
    //         done()
    //     });
    // })

})

