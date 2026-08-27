import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Rules from './page';

describe('Rules', () => {
  it('renders the rules heading', () => {
    render(<Rules />);

    expect(screen.getByRole('heading', { name: 'Rules' })).toBeInTheDocument();
  });
});
