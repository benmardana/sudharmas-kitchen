import React from 'react';
import { Link } from 'gatsby';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <strong className="has-text-white-ter">Sudharma's Kitchen</strong>
        </div>
        <div className="container has-background-black has-text-white-ter pb-6">
          <nav className="level">
            <div className="level-item has-text-centered">
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </div>
            <div className="level-item has-text-centered">
              <Link className="navbar-item" to="/recipe">
                Latest Recipes
              </Link>
            </div>
            <div className="level-item has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>
            <div className="level-item has-text-centered">
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
};

export default Footer;
