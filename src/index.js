import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */

/* con il metodo render definisco cosa fa la classe mentre per eseguirlo chiamo il metodo renderNomeClasse */

class Square extends React.Component {

  constructor(props) {

    super(props);
    this.state= {

      /* set a null il valore all'interno dei square prima del clcik */
      value:null,
    }
  }
  render() {
    return (
      <button className="square" onClick={ () => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {

  renderSquare(i) {
    return <Square value={i} />;
  }

  /* Qui sono definiti i valori pasati al metodo render della classe Square */
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (

      <div className="game">

        <div className="game-board">
          <Board />
        </div>

        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>

      </div>

    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);



