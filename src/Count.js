import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}
          {this.state.count}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;

/*
Klassenbasierte Komponente:

import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Willkommen zur klassenbasierten Komponente!</h1>
        <p>Zähler: {this.state.count}</p>
        <button onClick={this.incrementCount}>Erhöhen</button>
      </div>
    );
  }
}

export default ClassComponent;

/*
Klassenbasierte Komponenten (Class based Components):

Definition: Diese Komponenten werden mit ES6-Klassen erstellt. Sie erweitern die React.Component-Klasse.
Zustandsverwaltung: Sie können einen internen Zustand (this.state) haben und diesen mit this.setState() aktualisieren.
Lebenszyklusmethoden: Klassenbasierte Komponenten bieten verschiedene Lebenszyklusmethoden wie componentDidMount, componentDidUpdate, und componentWillUnmount.
this-Schlüsselwort: Innerhalb dieser Komponenten muss man oft das this-Schlüsselwort verwenden, um auf Zustand, Eigenschaften (props) und Methoden zuzugreifen.
Komplexität: Sie sind tendenziell komplexer und haben mehr Code im Vergleich zu funktionalen Komponenten.

*/

/*
Funktionale Komponente:

import React, { useState } from 'react';

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Willkommen zur funktionalen Komponente!</h1>
      <p>Zähler: {count}</p>
      <button onClick={incrementCount}>Erhöhen</button>
    </div>
  );
}

export default FunctionalComponent;


/*
Funktionale Komponenten (Functional Components):

Definition: Diese Komponenten sind einfache JavaScript-Funktionen, die JSX zurückgeben. Sie wurden in React eingeführt, um eine einfachere und klarere Syntax zu bieten.
Zustandsverwaltung: Ursprünglich hatten funktionale Komponenten keinen eigenen Zustand. Seit Einführung der Hooks in React 16.8 können funktionale Komponenten jedoch Zustände mit dem useState-Hook verwalten.
Lebenszyklusmethoden: Früher hatten sie keinen direkten Zugriff auf Lebenszyklusmethoden. Mit den Hooks wie useEffect können jetzt jedoch Lebenszyklus-ähnliche Funktionen in funktionalen Komponenten genutzt werden.
Kein this-Schlüsselwort: In funktionalen Komponenten gibt es kein this. Zugriffe auf Zustand und Eigenschaften erfolgen direkt.
Einfachheit und Lesbarkeit: Sie sind oft kürzer und leichter zu lesen und zu testen.
*/
