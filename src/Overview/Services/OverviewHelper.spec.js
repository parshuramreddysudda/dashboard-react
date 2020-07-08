import React from 'react';
import { configure } from 'enzyme';
import { mount, shallow } from 'enzyme'
import OverviewHelper from './OverviewHelper'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Testing OverviewHelper Component ', () => {
    test('should handle dataFormatter and  return count value assigned ', () => {
        
        const wrapper=shallow(OverviewHelper)
        
    })

})
 
