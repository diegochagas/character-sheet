import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);

    act(() => {
      root.render(<App />);
    });

    expect(div.querySelector('.navbar-brand')).toHaveTextContent(
      'Character Battle'
    );

    act(() => {
      root.unmount();
    });
  });
});
