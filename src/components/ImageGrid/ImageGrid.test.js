import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageGrid from './ImageGrid'
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

configure({adapter: new Adapter()});

describe('<ImageGrid>', () => {
    let wrapper;
beforeEach(() => {
    wrapper = shallow(<ImageGrid/>);
});
    it('should render <Spinner/>component', () => {      
        expect(wrapper.find(Spinner));
    });
    it('should render <ErrorMessage/> component if there is an Error', () => { 
        wrapper.setProps({error: true});
        expect(wrapper.find(ErrorMessage));
    });
});