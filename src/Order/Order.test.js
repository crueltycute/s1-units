import { shallow, configure } from 'enzyme';
import React from 'react';

import { fakeOrders } from '../mock/fakeOrders';
import Order from './Order';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Order component', () => {
    it('render first element', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render second element', () => {
        const wrapperSecond = shallow(<Order order={fakeOrders[1]} />);
        expect(toJson(wrapperSecond)).toMatchSnapshot();
    });

    it('render empty element', () => {
        const wrapperNotValid = shallow(<Order order={{}} />);

        expect(toJson(wrapperNotValid)).toMatchSnapshot();
    });
})