
import { Mock, describe, expect, test, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
import AuthTabs from './AuthTabs.tsx';
import { useRef } from 'react';

vi.mock('../SignInForm', () => ({
    SignInForm: function DummySignInForm() {
        return (<div>Mocked SignInForm</div>)
    }
}));

vi.mock('../SignUpForm', () => ({
    SignUpForm: function DummySignInForm() {
        return (<div>Mocked SignUpForm</div>)
    }
}));


vi.mock('@splidejs/react-splide', () => ({
    Splide: vi.fn(({ children }) => <div>{children}</div>),
    SplideSlide: vi.fn(({ children }) => <div>{children}</div>),
}));


vi.mock('@splidejs/react-splide/css', () => {
    return {}
});



vi.mock('react', async () => {
    const actual = await vi.importActual("react") as object
    const mUseRef = vi.fn(() => { current: null });
    return {
        ...actual,
        useRef: mUseRef,
    };
});


describe('AuthTabs Component', () => {

    test('should render the Tabs component', () => {
        const { getByTestId } = render(<AuthTabs />);
        expect(getByTestId('tab-sign-in')).toBeInTheDocument();
        expect(getByTestId('tab-sign-up')).toBeInTheDocument();
    });

    test('should render authentication Forms (Sign In/Sign Up)', () => {
        const { getAllByText } = render(<AuthTabs />);
        expect(getAllByText('Mocked SignInForm').length).toBe(1);
        expect(getAllByText('Mocked SignUpForm').length).toBe(1);
    });

    test('should have "Sign In" as the default active tab', () => {
        const { getByTestId } = render(<AuthTabs />);
        expect(getByTestId('tab-sign-in')).toHaveClass('Mui-selected');
    });

    test('should make "Sign Up" tab active when clicked', () => {
        const { getByTestId } = render(<AuthTabs />);
        fireEvent.click(getByTestId('tab-sign-up'));
        expect(getByTestId('tab-sign-up')).toHaveClass('Mui-selected');
    });

    test('should call splide.current.go() with correct argument on tab click', async () => {
        const { getByTestId } = render(<AuthTabs />);
        const mockGoFunction = vi.fn();
        (useRef as Mock).mockReturnValue({ current: { go: mockGoFunction } })

        fireEvent.click(getByTestId('tab-sign-up'));
        expect(mockGoFunction).toHaveBeenLastCalledWith(1);

        fireEvent.click(getByTestId('tab-sign-in'));
        expect(mockGoFunction).toHaveBeenLastCalledWith(0);
    });
});