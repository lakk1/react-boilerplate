import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { MemoryRouter } from 'react-router';
import About from './components/About';
import Home from './components/Home';
import App from './App';

configure({adapter: new Adapter()});

test('invalid path should redirect Home', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(About)).toHaveLength(0);
  expect(wrapper.find(Home)).toHaveLength(1);
});

test('valid path should render About', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/about' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(About)).toHaveLength(1);
  expect(wrapper.find(Home)).toHaveLength(0);
});