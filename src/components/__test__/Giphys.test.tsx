import { shallow } from 'enzyme'
import Giphys from '../Giphys';

describe('<Giphys />', () => {

    const props = {
        data: [
            {
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
            },
            {
                id: '456',
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
        ]
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<Giphys { ...props } />);
        expect(wrapper).toMatchSnapshot();
    });
})