import { describe, it, expect, test} from 'vitest';
import {render, screen, getByText} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from './Button'

describe('button', () => {
    it('renders text', () => {
      render(<MemoryRouter><Button btnText ='test' /></MemoryRouter>);
      expect(screen.getByText(/Test/i)).toBeDefined()
      // check if App components renders headline
    });
    it('renders text', () => {
        render(<MemoryRouter><Button route="/dogs" /></MemoryRouter>);
        expect(screen.getByText(/Test/i)).toBeDefined()
        // check if App components renders headline
      });

  });