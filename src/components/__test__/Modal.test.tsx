import { shallow } from 'enzyme'
import Modal from '../Modal';

describe('<Modal />', () => {

    const props = {
        show: true, 
        handleClose : () => jest.fn(),
        data: {
            id: '123',
            title: 'funny gif',
            images: {
                fixed_height: {
                    url: ''
                }, 
                original_still: {
                    url: ''
                }
            },
        }
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<Modal { ...props } />);
        expect(wrapper).toMatchSnapshot();
    });
})