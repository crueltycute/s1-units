import { shallow, configure } from 'enzyme';
import React from 'react';

import { fakeOrders } from '../mock/fakeOrders';
import Order from './Order';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Order component', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]} />);
    const wrapperSecond = shallow(<Order order={fakeOrders[1]} />);
    const wrapperNotValid = shallow(<Order order={{}} />);

    it('render first element', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render second element', () => {
        expect(toJson(wrapperSecond)).toMatchSnapshot();
    });

    it('render empty element', () => {
        expect(toJson(wrapperNotValid)).toMatchSnapshot();

        expect(toJson(wrapperNotValid)).not.toEqual(toJson(wrapper))
    });
})