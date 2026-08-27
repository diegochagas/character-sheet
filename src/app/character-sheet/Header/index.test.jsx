import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '.';

const scales = [{ value: 4, label: 'Pessoa comum' }];

describe('Header', () => {
  it('shows a required-name warning only after the field is touched and left empty', async () => {
    const user = userEvent.setup();

    render(
      <Header
        scales={scales}
        setInitialPoints={() => {}}
        points={0}
        name=""
        setName={() => {}}
      />
    );

    expect(screen.queryByText('Nome obrigatório')).not.toBeInTheDocument();

    await user.click(screen.getByLabelText('Nome'));
    await user.tab();

    expect(screen.getByText('Nome obrigatório')).toBeInTheDocument();
  });

  it('warns when the name is over 100 characters', () => {
    render(
      <Header
        scales={scales}
        setInitialPoints={() => {}}
        points={0}
        name={'a'.repeat(101)}
        setName={() => {}}
      />
    );

    expect(screen.getByText('Máximo de 100 caracteres')).toBeInTheDocument();
  });

  it('warns when the remaining points go negative', () => {
    render(
      <Header
        scales={scales}
        setInitialPoints={() => {}}
        points={-1}
        name="Goku"
        setName={() => {}}
      />
    );

    expect(screen.getByText('Mínimo de 0 pontos')).toBeInTheDocument();
  });
});
