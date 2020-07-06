import React from 'react'
import CardComponent from './Card'
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { Grid, Button, Typography } from '@material-ui/core';

// import Loader from '../Components/loader'
configure({ adapter: new Adapter() });

describe('Testing Card Component', () => {

    test('should handle card props', () => {
        const props = {
            data: [{ id: 1, name: 'propName1', count: 34 },
            { id: 2, name: 'propName2', count: 344 }
            ]
        }
        const wrapper = shallow(<CardComponent {...props} />)
        expect(wrapper.find(Typography).first().props().children).toBe('propName1')
        expect(wrapper.find(Typography).first().props().component).toBe('h6')
        expect(wrapper.find(Typography).last().props().children[0]).toBe('Count is ')
        expect(wrapper.find(Typography).last().props().children[1]).toBe(344)
    })


})
