import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function Select({
  defaultOption,
  items,
  setItems,
  choosen,
  setChoosen,
  addAdvantage,
}) {
  const [selectedOption, setSelectedOption] = useState('');

  function addItem() {
    const newList = items;

    newList.splice(items.indexOf(selectedOption), 1);

    setItems(newList);

    setChoosen([...choosen, selectedOption].sort());

    setSelectedOption('');

    if (addAdvantage) addAdvantage(selectedOption);
  }

  return (
    <div className="tipos-de-dano">
      <div className="select-tiposDeDano">
        <select
          className="form-control"
          name="tipos-de-dano"
          onChange={event => setSelectedOption(event.target.value)}
        >
          <option value="">{defaultOption}</option>

          {items
            ? items.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            : null}
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

Select.propTypes = {
  defaultOption: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  setItems: PropTypes.func.isRequired,
  choosen: PropTypes.arrayOf(PropTypes.string).isRequired,
  setChoosen: PropTypes.func.isRequired,
  addAdvantage: PropTypes.func.isRequired,
};

export default Select;
