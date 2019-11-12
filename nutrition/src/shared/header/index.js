import React from "react";

import menuOptions from "./../../utils/navigation_menu";
import logo from "./../../images/logo.jpg";
import socialIcon1 from "./../../images/social_icon1.jpg";
import socialIcon2 from "./../../images/social_icon2.jpg";
import messages from "../../utils/messages";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="inner-header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Nutrition Systems" />
            </a>
          </div>
          <div className="navbar-main">
            <div className="navbar-action">
              <div className="navbar-search">
                <div className="inner-search">
                  <input type="text" className="form-control" />
                  <span>
                    <em className="fa fa-search" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="navbar-nav">
                <ul>
                  {menuOptions.map((item, index) => (
                    <li key={index}>
                      <a href={item.path}>{item.name}</a>
                      <ul>
                        {item.options &&
                          item.options.map((subitem, index) => (
                            <li key={index}>
                              <a href={subitem.path}>{subitem.name}</a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="navbar-register">
              <div className="reg-link">
                <ul>
                  <li><a href="#">Login</a>/<a href="#">Register</a></li>
                  <li>Cart / $0<a href="#"><em className="fa fa-shopping-cart" aria-hidden="true"/></a></li>
                </ul>
              </div>
              <div className="quick-contact-link">
                <ul>
                  <li><a href="#"><img src={socialIcon1} alt="" /><span>{messages.common.whatsapp}</span></a></li>
                  <li><a href="#"><img src={socialIcon2} alt="" /><span>{messages.common.ask_expert}</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
