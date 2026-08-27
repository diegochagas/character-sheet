import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DeleteCharacter from '.';

describe('DeleteCharacter', () => {
  it('renders its placeholder heading', () => {
    render(<DeleteCharacter />);

    expect(
      screen.getByRole('heading', { name: 'Delete character' })
    ).toBeInTheDocument();
  });
});
