import React from 'react';
import { shallow, configure } from 'enzyme';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BeerSearch from './BeerSearch';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('axios');

configure({ adapter: new Adapter() });

describe('BeerSearch Component', () => {
    let wrapper;

    beforeAll(() => {
        const onChange = () => { };
        wrapper = shallow(<BeerSearch onChange={onChange} />);
    });

    it('should contain a form', () => {
        const formWrapper = wrapper.find('form');

        expect(formWrapper).toHaveLength(1);
    });

    it('should contain a text field inside form', () => {
        const textFieldWrapper = wrapper.find(TextField);

        expect(textFieldWrapper).toHaveLength(1);
        expect(textFieldWrapper.parent().is('form')).toBeTruthy();
    });

    it('should contain a button', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('shoud invoke the punkapi service on onSubmit', () => {
        axios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    name: 'Beer1_name',
                    description: 'Beer1_desc',
                    first_brewed: 'Beer1_first_brewed',
                },
            ],
        });

        const formElement = wrapper.find('form');
        formElement.simulate('submit', {
            preventDefault: () => { },
        });

        expect(axios.get).toHaveBeenCalled();
    });
});
