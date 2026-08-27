import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '.';

describe('Navbar', () => {
  it('renders a link to every section of the app', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    [
      ['Character Battle', '/'],
      ['Rules', '/rules'],
      ['Add character', '/add-character'],
      ['Edit character', '/edit-character'],
      ['Delete character', '/delete-character'],
      ['Character sheet', '/character-sheet'],
      ['Advantages', '/advantages'],
    ].forEach(([label, href]) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        href
      );
    });
  });
});
