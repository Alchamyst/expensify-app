import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage, { ExpenseList } from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashBoard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});