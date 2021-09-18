import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function TextArea({
  items,
  setItems,
  choosen,
  setChoosen,
  rows,
  removeAdvantage,
}) {
  choosen = choosen || [];
  const [touched, setTouched] = useState(false);
  const [text, setText] = useState('');

  function removeItem(item) {
    const newList = choosen;

    newList.splice(choosen.indexOf(item), 1);

    if (setChoosen) setChoosen(newList);

    if (setItems) setItems([...items, item].sort());

    if (removeAdvantage) removeAdvantage(item);
  }

  return (
    <Container>
      {choosen ? (
        <div className="lista">
          {choosen.map(item => (
            <div key={item} className="adicionados">
              <span className="texto">{item} </span>
              <span className="badge badge-danger">
                <i
                  className="fas fa-minus"
                  onClick={() => removeItem(item)}
                  aria-hidden="true"
                />
              </span>
              ,{' '}
            </div>
          ))}
        </div>
      ) : null}

      <textarea
        className="form-control"
        rows={rows}
        onBlur={() => setTouched(true)}
        onChange={event => setText(event.target.value)}
      />

      {touched && !choosen.length && !text ? (
        <span className="form-control alert-danger">Campo obrigatório</span>
      ) : null}
    </Container>
  );
}

TextArea.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  setItems: PropTypes.func,
  choosen: PropTypes.arrayOf(PropTypes.string),
  setChoosen: PropTypes.func,
  rows: PropTypes.number,
  removeAdvantage: PropTypes.func,
};

TextArea.defaultProps = {
  items: [],
  setItems: null,
  choosen: [],
  setChoosen: null,
  rows: 5,
  removeAdvantage: null,
};

export default TextArea;
