import React, { useState } from 'react';

// import { Container } from './styles';

export default function Select({ defaultOption, items, addItem }) {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="tipos-de-dano">
      <div className="select-tiposDeDano">
        <select
          className="form-control"
          name="tipos-de-dano"
          onChange={event => setSelectedOption(event.target.value)}
        >
          <option value="">{defaultOption}</option>

          {items.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button
          className="btn btn-default"
          type="button"
          onClick={addItem}
          disabled={!selectedOption}
        >
          <i className="fas fa-plus" />
        </button>
      </div>
    </div>
  );
}
