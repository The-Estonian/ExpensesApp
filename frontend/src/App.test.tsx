import { render, screen } from '@testing-library/react';
import { describe, vi, it, expect } from 'vitest';
import App from './App';

// Mock the CategorySectors component so we don't need its logic here
vi.mock('./components/CategorySectors/CategorySectors', () => {
  return {
    default: () => <div>Mock CategorySectors</div>,
  };
});

describe('App', () => {
  it('renders the CategorySectors component', () => {
    render(<App />);
    expect(screen.getByText('Mock CategorySectors')).toBeInTheDocument();
  });
});
