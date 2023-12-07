import { describe, it, expect, test} from 'vitest';
import {render, screen, getByText} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './src/App';
import About from './src/pages/About';
import Dogs from './src/pages/Dogs';


describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);
    screen.debug();
    // check if App components renders headline
  });
});

// used to cater for react router 6
test('loads and displays About header text', async () => {
  render(<MemoryRouter><About /></MemoryRouter>)
  const titleValue = screen.getByText('Welcome')
  console.log(titleValue)
  expect(titleValue).toBeInTheDocument()
})

test('loads and displays Dogs text', async () => {
  render(<MemoryRouter><Dogs/></MemoryRouter>)
  screen.debug();
  const titleValue = screen.getByText('Explore our dogs')
  console.log(titleValue)
  expect(titleValue).toBeInTheDocument()
})
