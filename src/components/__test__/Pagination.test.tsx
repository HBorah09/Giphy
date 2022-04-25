import { shallow, mount } from 'enzyme';
import { Pagination as BootStrapPagination }  from 'react-bootstrap';
import Pagination from '../Pagination';

describe('<Pagination />', () => {

    const props = {
       currentPage: 3,
       handlePagination: () => jest.fn()
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<Pagination { ...props } />);
        expect(wrapper).toMatchSnapshot();
    });
    
    // it('should call handlePagination with currentPage-1 when PrevButton is clicked', () => {
    //     const wrapper = shallow(<Pagination { ...props } />);
    //     const prevButton = wrapper.find(BootStrapPagination.Prev);
    //     const spy = jest.spyOn(wrapper.instance(), "handlePagination");
    //     prevButton.simulate('click');
    //     expect(spy).toHaveBeenCalledWith(2);
    // });
})