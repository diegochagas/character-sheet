import React, { useState } from 'react';

// import { Container } from './styles';

export default function TextArea({
  items,
  setItems,
  choosen,
  setChoosen,
  rows,
}) {
  const [touched, setTouched] = useState(false);
  const [text, setText] = useState('');

  function removeItem(type) {
    const newList = choosen;

    newList.splice(choosen.indexOf(type), 1);

    setChoosen(newList);

    setItems([...items, type].sort());
  }

  return (
    <>
      {choosen ? (
        <div className="lista">
          {choosen.map(type => (
            <div key={type} className="adicionados">
              <span className="texto">{type} </span>
              <span className="badge badge-danger">
                <i className="fas fa-minus" onClick={() => removeItem(type)} />
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
    </>
  );
}
