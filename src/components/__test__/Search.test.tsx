import { shallow } from 'enzyme'
import Search from '../Search';

describe('<Search />', () => {

    const props = {
        handleSearch: () => jest.fn()
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<Search { ...props } />);
        expect(wrapper).toMatchSnapshot();
    });
})