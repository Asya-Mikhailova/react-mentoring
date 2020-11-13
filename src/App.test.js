import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

afterEach(cleanup);
configure({ adapter: new Adapter() });

describe('<App/>', () => {
  test('Should contain Hello World', () => {
    const component = shallow(<App></App>);
    expect(component.find('#container').text()).toEqual('Hello World');
  });
});
