import React from 'react';
import Logo from './Logo';

const Header = () => (
  <header>
    <div className="fl">
      <button type="button">
        <img src="/images/misc/user.png" alt="User Settings" />
      </button>
    </div>

    <div className="fl">
      <h1 className="agent">AGENT</h1>
    </div>

    <div className="fl">
      <button type="button">
        <img src="/images/misc/messages.png" alt="View Messages" />
      </button>
    </div>
  </header>
);

export default Header;
