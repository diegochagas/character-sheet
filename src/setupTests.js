// jest-dom adds custom matchers for asserting on DOM nodes, e.g.
// expect(element).toHaveTextContent(/react/i)
import React from 'react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// next/link relies on the App Router context, which isn't mounted under
// Vitest/jsdom. A plain anchor is all these tests need.
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }) =>
    React.createElement('a', { href, ...rest }, children),
}));
