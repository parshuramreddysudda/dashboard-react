import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Components/Card';
import { Typography, Paper } from '@material-ui/core';
import OverviewServices from './Services/OverviewServices'
import OverviewHelper from './Services/OverviewHelper'
import Overview from './index'
import { configure } from 'enzyme';
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

afterEach(() => {
  jest.clearAllMocks();
});

describe('Testing Overview Component', () => {

  test('should handle Machine state', () => {

    const wrapper = mount(<Overview />)
    const setStateSpy = jest.spyOn(Overview.prototype, 'setState');
    const data =
      [
        { id: 1, name: 'Android', icon: 'android', count: 64 },
        { id: 2, name: 'Windows', icon: 'windows', count: 68 },
      ]
    jest.spyOn(OverviewServices, 'getMachineData').mockImplementation(() => {
      return Promise.resolve()
    })

    jest.spyOn(OverviewHelper, 'dataFormatter').mockImplementation(() => {
      return data
    })

    // wrapper.setState({
    //   machine: OverviewHelper.dataFormatter(),
    //   app: OverviewHelper.dataFormatter(),
    //   cloud: OverviewHelper.dataFormatter(),
    //   location: OverviewHelper.dataFormatter()
    // })
    OverviewServices.getMachineData().then((done) => {
      wrapper.setState({ machine: OverviewHelper.dataFormatter() }, () => {
        expect(wrapper.update().state('machine')).toBe(data);
      });
      expect(setStateSpy).toHaveBeenCalled();
    })

  })

  test('should handle Cloud state', () => {

    const wrapper = mount(<Overview />)
    const setStateSpy = jest.spyOn(Overview.prototype, 'setState');
    const data =
      [
        { id: 1, name: 'AWS', icon: 'amazon', count: 94 },
        { id: 2, name: 'Azure', icon: 'azure', count: 68 },
      ]
    jest.spyOn(OverviewServices, 'getCloudData').mockImplementation(() => {
      return Promise.resolve()
    })

    jest.spyOn(OverviewHelper, 'dataFormatter').mockImplementation(() => {
      return data
    })
    wrapper.setState({
      machine: OverviewHelper.dataFormatter(),
      app: OverviewHelper.dataFormatter(),
      cloud: OverviewHelper.dataFormatter(),
      location: OverviewHelper.dataFormatter()
    })
    OverviewServices.getCloudData().then((done) => {
      wrapper.setState({ cloud: OverviewHelper.dataFormatter() }, () => {
        expect(wrapper.update().state('cloud')).toBe(data);
      });
      expect(setStateSpy).toHaveBeenCalled();
      done()
    })
  })

  test('should handle App state', () => {

    const wrapper = mount(<Overview />)
    const setStateSpy = jest.spyOn(Overview.prototype, 'setState');
    const data =
      [
        { id: 1, name: 'React', icon: 'react.png', count: 25 },
        { id: 2, name: 'Vue', icon: 'vue.png', count: 36 }
      ]
    jest.spyOn(OverviewServices, 'getAppData').mockImplementation(() => {
      return Promise.resolve()
    })

    jest.spyOn(OverviewHelper, 'dataFormatter').mockImplementation(() => {
      return data
    })
    OverviewServices.getAppData().then((done) => {
      wrapper.setState({ app: OverviewHelper.dataFormatter() }, () => {
        expect(wrapper.update().state('app')).toBe(data);
      });
      expect(setStateSpy).toHaveBeenCalled();
    })
  })

  test('should handle Location state', () => {

    const wrapper = mount(<Overview />)
    const setStateSpy = jest.spyOn(Overview.prototype, 'setState');
    const data =
      [
        { id: 1, name: 'React', icon: 'react.png', count: 25 },
        { id: 2, name: 'Vue', icon: 'vue.png', count: 36 }
      ]
    jest.spyOn(OverviewServices, 'getLocationData').mockImplementation(() => {
      return Promise.resolve()
    })

    jest.spyOn(OverviewHelper, 'dataFormatter').mockImplementation(() => {
      return data
    })
    OverviewServices.getLocationData().then((done) => {
      wrapper.setState({ location: OverviewHelper.dataFormatter() }, () => {
        expect(wrapper.update().state('location')).toBe(data);
      });
      expect(setStateSpy).toHaveBeenCalled();
    })
  })




  test('should load all data  with all state ', () => {
    const wrapper = mount(<Overview />);
    const instance = wrapper.instance();
    const data =
      [
        { id: 1, name: 'React', icon: 'react.png', count: 25 },
        { id: 2, name: 'Vue', icon: 'vue.png', count: 36 }
      ]
    jest.spyOn(OverviewServices, 'getAppData').mockImplementation(() => {
      return Promise.resolve()
    })

    jest.spyOn(OverviewHelper, 'dataFormatter').mockImplementation(() => {
      return data
    })

    wrapper.setState({
      machine: OverviewHelper.dataFormatter(),
      app: OverviewHelper.dataFormatter(),
      cloud: OverviewHelper.dataFormatter(),
      location: OverviewHelper.dataFormatter()
    })

    expect(wrapper.find(Card).at(0).props().data[0]).toStrictEqual(data[0])
    expect(wrapper.find(Card).at(1).props().data[1]).toStrictEqual(data[1])
    expect(wrapper.find(Card).at(2).props().data[0]).toStrictEqual(data[0])
    expect(wrapper.find(Card).at(3).props().data[1]).toStrictEqual(data[1])
    expect(wrapper.find(Grid).at(2).props().spacing).toBe(3)
    expect(wrapper.find('#machines').at(0).props('children').children).toBe(' Machines running ')
    // console.log(wrapper.find('#servers').at(0).props('children').children.props)
    expect(wrapper.find('#servers').at(0).props('children').children).toBe(' Servers running ')
    expect(wrapper.find('#framework').at(0).props('children').children).toBe(' Frameworks running ')
    expect(wrapper.find('#work').at(0).props('children').children).toBe(' Works running ')
  })




})
