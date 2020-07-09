import React from 'react'
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Forbidden from './Forbidden'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });

describe('Testing Forbidden Component', () => {

test('should show correct text', () => {
    const wrapper=mount(<Forbidden/>)
    expect(wrapper.find('img').at(0).props().src).toEqual('https://cdn3.wpbeginner.com/wp-content/uploads/2016/03/403forbiddenerror.jpg')
    expect(wrapper.find(Typography).at(0).props().children[0]).toEqual("Your current role doesn't have enough permission to view this page. ", <br/>,"Please return with other Role :P")
    
});
    
});