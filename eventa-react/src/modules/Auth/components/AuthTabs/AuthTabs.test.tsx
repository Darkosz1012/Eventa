import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthTabs from './AuthTabs.tsx';
import renderer from 'react-test-renderer';

jest.mock('../SignInForm/SignInForm', () => {
    return function DummySignInForm() {
        return (<div>Mocked SignInForm</div>);
    };
});


describe('AuthTabs Component', () => {

    test('mock',()=>{
        const component = renderer.create(<AuthTabs />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('renders AuthTabs component', () => {
        const { getByText } = render(<AuthTabs />);
        expect(getByText('Sign In')).toBeInTheDocument();
        expect(getByText('Sign Up')).toBeInTheDocument();
    });

    test('default active tab should be "Sign In"', () => {
        const { getByText } = render(<AuthTabs />);
        expect(getByText('Sign In')).toHaveClass('Mui-selected');
    });

    test('clicking "Sign Up" tab makes it active', () => {
        const { getByText } = render(<AuthTabs />);
        fireEvent.click(getByText('Sign Up'));
        expect(getByText('Sign Up')).toHaveClass('Mui-selected');
    });
});