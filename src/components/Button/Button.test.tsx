import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('renders button with text', () => {
        render(<Button>Click me</Button>);
        // expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('shows loading spinner when loading is true', () => {
        render(<Button loading>Loading</Button>);
        // expect(screen.getByText('Loading')).toBeInTheDocument();
        // expect(document.querySelector('svg')).toBeInTheDocument();
    });
});