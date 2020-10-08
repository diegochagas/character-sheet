import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Navbar() {
  function get_flashed_messages() {
    return true;
  }

  function join(text) {
    return text;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="/">Character Battle</Link>

        <button aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbar" data-toggle="collapse" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto mt-2">
              <li className="nav-item"><Link className="nav-link" to="/rules">Rules</Link></li>

              <li className="nav-item"><Link className="nav-link" to="/add-character">Add character</Link></li>

              <li className="nav-item"><Link className="nav-link" to="/edit-character">Edit character</Link></li>

              <li className="nav-item"><Link className="nav-link" to="/delete-character">Delete character</Link></li>

              <li className="nav-item"><Link className="nav-link" to="/character-sheet">Character sheet</Link></li>

              <li className="nav-item"><Link className="nav-link" to="/advantages">Advantages</Link></li>
          </ul>
        </div>
      </nav>

      {get_flashed_messages() ? (
        <header>
          <div className="alert alert-primary border text-center" role="alert">
            {get_flashed_messages() || join(" ")}
          </div>
        </header>
      ) : ''}
    </div>
  );
}

export default Navbar;
