import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Layout from './components/Layout/Layout';
import BeerSearch from './components/BeerSearch/BeerSearch';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('should contain layout page', () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it('should contain BeerSearch component inside Layout', () => {
    const textFieldWrapper = wrapper.find(BeerSearch);

    expect(textFieldWrapper).toHaveLength(1);
    expect(textFieldWrapper.parent().is('layout')).toBeTruthy();
  });

  
});

