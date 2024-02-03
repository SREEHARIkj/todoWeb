import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../../App';

describe('Todo page', () => {
    afterEach(() => {
        cleanup();
    });
    it('should display todo box and add button', () => {
        render(<App />);
        expect(screen.getByText('TODO LIST')).toBeDefined();
        expect(screen.getByPlaceholderText('Enter Todo')).toBeDefined();
        expect(screen.getByText('Add Todo')).toBeDefined();
    });
});
