import React from 'react';
import { configure } from 'enzyme';
import OverviewHelper from './OverviewHelper'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Testing OverviewHelper Component ', () => {
    test('should handle dataFormatter and  return count value assigned ', () => {


        const responce = {
            "Locations": [
                {
                    "name": "Noida",
                    "value": 88
                },
                {
                    "name": "California",
                    "value": 59
                },
                {
                    "name": "India",
                    "value": 17
                },
                {
                    "name": "NewYork",
                    "value": 22
                }
            ]
        }

        const cardDate = [
            { id: 1, name: 'India', icon: 'india', count: 0 },
            { id: 2, name: 'NewYork', icon: 'newyork', count: 0 },
            { id: 2, name: 'New', icon: 'newyork', count: 0 },
        ]
        const result = [
            { id: 1, name: 'India', icon: 'india', count: 17 },
            { id: 2, name: 'NewYork', icon: 'newyork', count: 22 },
            { id: 2, name: 'New', icon: 'newyork', count: 0 },
        ]
        expect(OverviewHelper.dataFormatter(responce, cardDate)).toEqual(result)

    })

})

