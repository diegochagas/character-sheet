import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EditCharacter from '.';

describe('EditCharacter', () => {
  it('renders its placeholder heading', () => {
    render(<EditCharacter />);

    expect(
      screen.getByRole('heading', { name: 'Edit character' })
    ).toBeInTheDocument();
  });
});
