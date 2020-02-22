import React, { useState } from 'react';

// import { Container } from './styles';

export default function TextArea({
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
    <>
      {choosen ? (
        <div className="lista">
          {choosen.map(item => (
            <div key={item} className="adicionados">
              <span className="texto">{item} </span>
              <span className="badge badge-danger">
                <i className="fas fa-minus" onClick={() => removeItem(item)} />
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
