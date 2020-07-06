import React from 'react'
import App from './Apps'
import Loader from '../Components/loader'
import MaterialTable from 'material-table';
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Forbidden from '../Components/Forbidden';
import { Grid, Button } from '@material-ui/core';
import permissionHelper from '../Auth/PermissionHelper';
import Snakbar from '../Components/Snakbar'
// import Loader from '../Components/loader'
configure({ adapter: new Adapter() });


describe('Testing Apps Component', () => {

    test('should not load MaterialTable and grid and load Forbidden when Permission is flase', (done) => {
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
        const forbidden=wrapper.find(Forbidden)
        expect(forbidden.exists()).toBe(true)
        const grid = wrapper.find(Grid);
        expect(grid.exists()).toBe(false);
        done();
    })

    test('should load MaterialTable and grid and not Forbidden when Permission is true', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        jest.spyOn(permissionHelper, 'checkPermission').mockImplementation(() => true);
        wrapper.setState({ read: true })
        const materialTable = wrapper.find(MaterialTable);
        const forbidden=wrapper.find(Forbidden)
        expect(forbidden.exists()).toBe(false)
        expect(materialTable.exists()).toBe(true);
        done();
    })

    test('should show Error component when errorProps is true', () => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                error={true}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        expect(wrapper.exists('.errorClass')).toBe(true)
    })

    test('should not show Error component when errorProps is fasle', () => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                error={false}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        expect(wrapper.exists('.errorClass')).toBe(false)
    })

    test('should show Loader component when loaderProps is true', () => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                loading={true}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        const loader = wrapper.find(Loader);
        expect(loader.exists()).toBe(true)
    })

    test('should not show Loader component when loaderProps is false', () => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                loading={false}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        const loader = wrapper.find(Loader);
        expect(loader.exists()).toBe(false)
    })

    test('should handle ClearData Function', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const mockResetfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                loading={true}
                resetApps={mockResetfn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        jest.spyOn(permissionHelper, 'checkPermission').mockImplementation(() => true);

        const instance = wrapper.instance();
        instance.clearData().then(() => {
            expect(mockResetfn).toHaveBeenCalledTimes(1)
            const snakbar = wrapper.find(Snakbar)
            // expect(snakbar.props(0).)
            expect(snakbar.at(0).props().desc).toBe('Apps details Cleared')
            expect(snakbar.at(0).props().show).toBe(true)
            // console.log(snakbar.at(0).props().desc)
            expect(snakbar.at(0).props().snakType).toBe('warning')
        })
        done();
    })

    test('should handle resetData Function', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const mockResetfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                loading={true}
                resetApps={mockResetfn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        jest.spyOn(permissionHelper, 'checkPermission').mockImplementation(() => true);

        const instance = wrapper.instance();
        instance.resetData().then(() => {
            expect(mockFetchfn).toHaveBeenCalledTimes(2)
            const snakbar = wrapper.find(Snakbar)
            expect(snakbar.at(0).props().desc).toBe('Apps details Reseted')
            expect(snakbar.at(0).props().show).toBe(true)
            expect(snakbar.at(0).props().snakType).toBe('info')
        })
        done();
    })
    test('should handle snakClose', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        const instance = wrapper.instance();
        instance.snakClose().then(() => {
            expect(wrapper.state('snakOpen')).toBe(false)
        })
        done()
    })

    test('should handle addDatahandler', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const mockCreatefn = jest.fn(() => { })
        const params = {
            "id": "63c45084-1880-b539-0813-c742d0b90b20",
            "name": "amet aute aliqua Ut",
            "version": "beta",
            "installed": "1965-08-29T14:18:23.7Z",
            "type": "Contain in app purchase",
            "availableat": "Windows store"
        };
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                createApp={mockCreatefn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        const instance = wrapper.instance();
        instance.addDatahandler(params).then(() => {
            const snakbar = wrapper.find(Snakbar)
            expect(mockCreatefn).toHaveBeenCalledTimes(1)
            expect(snakbar.at(0).props().desc).toBe('Apps id with 63c45084-1880-b539-0813-c742d0b90b20 has been succesfully created')
            expect(snakbar.at(0).props().show).toBe(true)
            expect(snakbar.at(0).props().snakType).toBe('success')
        })
        done()
    })

    test('should handle deleteDataHandler', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const mockDeletefn = jest.fn(() => { })
        const params = {
            "id": "63c45084-1880-b539-0813-c742d0b90b20",
            "name": "amet aute aliqua Ut",
            "version": "beta",
            "installed": "1965-08-29T14:18:23.7Z",
            "type": "Contain in app purchase",
            "availableat": "Windows store"
        };
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                deleteApp={mockDeletefn}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        const instance = wrapper.instance();
        instance.deleteDataHandler(params).then(() => {
            const snakbar = wrapper.find(Snakbar)
            expect(mockDeletefn).toHaveBeenCalledTimes(1)
            expect(snakbar.at(0).props().desc).toBe('Apps id with 63c45084-1880-b539-0813-c742d0b90b20 has been succesfully Deleted')
            expect(snakbar.at(0).props().show).toBe(true)
            expect(snakbar.at(0).props().snakType).toBe('error')
        })
        done()
    })
    test('should handle updateDataHandler', (done) => {
        const mockFetchfn = jest.fn(() => { })
        const mockUpdatefn = jest.fn(() => { })
        const oldData = [{
            "id": "63c45084-1880-b539-0813-c742d0b90b20",
            "name": "amet aute aliqua Ut",
            "version": "beta",
            "installed": "1965-08-29T14:18:23.7Z",
            "type": "Contain in app purchase",
            "availableat": "Windows store"
        }];
        const newData = {
            "id": "63c45084-1880-b539-0813-c742d0b90b20",
            "name": "aasd",
            "version": "beta",
            "installed": "1965-08-29T14:18:23.7Z",
            "type": "Contain in app purchase",
            "availableat": "Windows store"
        }
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                updateApp={mockUpdatefn}
                apps={oldData}
            />)
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        const instance = wrapper.instance();
        // console.log("Called ")
        instance.updateDataHandler(newData, oldData).then(() => {
            const snakbar = wrapper.find(Snakbar)
            expect(mockUpdatefn).toHaveBeenCalledTimes(1)
            expect(snakbar.at(0).props().desc).toBe('Apps id with 63c45084-1880-b539-0813-c742d0b90b20 has been succesfully Updated')
            expect(snakbar.at(0).props().show).toBe(true)
            expect(snakbar.at(0).props().snakType).toBe('info')
        })
        done()
    })

    test('should show resetData Button props and text', () => {
        const mockFetchfn = jest.fn(() => { })
        const mockResetfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                resetData={mockResetfn}
            />)
        expect(wrapper.find('.resetData').prop('children')).toEqual('Reset Data');
        expect(wrapper.find(Button).first().prop('variant')).toBe('contained')
        expect((wrapper.find(Button).first().prop('startIcon')).type.displayName).toBe('RotateLeftIcon')
        expect(mockFetchfn).toHaveBeenCalledTimes(1)
        wrapper.find(Button).first().simulate('click')
        expect(mockFetchfn).toHaveBeenCalledTimes(2)
        // expect(mockResetfn).toHaveBeenCalled()
        // expect(wrapper.find('.resetData').simulate());
    })
    test('should show clearData Button props and text ', () => {
        const mockFetchfn = jest.fn(() => { })
        const mockClearfn = jest.fn(() => { })
        const mockResetfn = jest.fn(() => { })
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                clearApps={mockClearfn}
                resetApps={mockResetfn}

            />)
        expect(wrapper.find('.clearData').prop('children')).toEqual('Clear Data');
        expect(wrapper.find(Button).last().prop('variant')).toBe('contained')
        expect((wrapper.find(Button).last().prop('startIcon')).type.displayName).toBe('ClearAllIcon')
        wrapper.find(Button).last().simulate('click')
        expect(mockResetfn).toHaveBeenCalledTimes(1)

    })

    test('should handle Material Table', () => {
        const mockFetchfn = jest.fn(() => { })
        const data = [{
            "id": "63c45084-1880-b539-0813-c742d0b90b20",
            "name": "amet aute aliqua Ut",
            "version": "beta",
            "installed": "1965-08-29T14:18:23.7Z",
            "type": "Contain in app purchase",
            "availableat": "Windows store"
        }]
        ;
        const wrapper = shallow(
            <App
                fetchApps={mockFetchfn}
                apps={data}

            />)
        const mockColumns = [
            { title: 'Id', field: 'id', editable: 'onAdd' },
        ]
        wrapper.setState({
            columns: mockColumns
        })
        const materialTable = wrapper.find(MaterialTable);
        expect(materialTable.at(0).props().title).toBe('App Details')
        expect(materialTable.at(0).props().columns).toBe(mockColumns)
        expect(materialTable.at(0).props().data).toBe(data)

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

