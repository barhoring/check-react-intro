import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

// console.log(process.env.NODE_ENV); // who knew? jest sets a NODE_ENV variable

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows', () => {
    const searchWord = 'black';
    const component = shallow(<Search />);
    component.find('input').simulate('change', {target: {value: searchWord}});
    const showCount = preload.shows.filter(
        show=> `${show.title} ${show.description}`.toLowerCase().includes(searchWord)
    ).length;
    expect(component.find(ShowCard).length).toEqual(showCount);
    //expect(component.find(ShowCard).length).toEqual(showCount);

});