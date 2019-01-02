import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ImageGrid } from './ImageGrid';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

configure({adapter: new Adapter()});

describe('<ImageGrid/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ImageGrid loading={true} error={null} data={null}/>);
    });

    it('should render <Spinner/> element if loading is true', () => { 
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should render <ErrorMessage/> component if there is an Error', () => { 
        wrapper.setProps({error: true, loading: false, data: null});
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });

});