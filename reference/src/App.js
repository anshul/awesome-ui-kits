import React from 'react';
import './App.css';

const App = () => (
  <div className="D(f) Mih(100vh) Fxd(c)">
    <header className="Px(20px) D(f)">
      <h1>Header</h1>
      <nav className="D(n)--l" style={{ flex: 1 }}>
        <ul className="List(n) D(f) Jc(sb) Py(0px) H(70px) Ai(c)">
          <li className="Ta(c) My(15px)">Menu 1</li>
          <li className="Ta(c) My(15px)">Menu 2</li>
          <li className="Ta(c) My(15px)">Menu 3</li>
        </ul>
      </nav>
    </header>
    <div className="body D(f) " style={{ flex: 1 }}>
      <aside className="P(20px) Bd Bdc(#eee) D(n)--s">
        <h1>Sidebar</h1>
        <ul className="List(n) M(0px) Px(10px)">
          <li className="Mx(0px) My(10px)">Menu 1</li>
          <li className="Mx(0px) My(10px)">Menu 2</li>
          <li className="Mx(0px) My(10px)">Menu 3</li>
        </ul>
      </aside>
      <main className="Bd Bdc(#eee) P(20px)" style={{ flex: 1 }}>
        <h1>Main</h1>
        <div className="Bd Bdc(#999) P(20px)" style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .23)" }}>
          <h3>Hero</h3>
          <p>Some text and a...</p>
          <button>Button</button>
        </div>
      </main>       
    </div>
    <footer className="Px(50px)">
      <h3>Footer</h3>
    </footer>
  </div>
);

export default App;
