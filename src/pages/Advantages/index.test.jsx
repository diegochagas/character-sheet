import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Advantages from '.';

describe('Advantages placeholder page', () => {
  it('renders its placeholder heading', () => {
    render(<Advantages />);

    expect(
      screen.getByRole('heading', { name: 'Advantages' })
    ).toBeInTheDocument();
  });
});
