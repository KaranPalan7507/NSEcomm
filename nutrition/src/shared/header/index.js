import React from "react";

import menuOptions from "./../../utils/navigation_menu";
import logo from "./../../images/logo.jpg";
import socialIcon1 from "./../../images/social_icon1.jpg";
import socialIcon2 from "./../../images/social_icon2.jpg";
import messages from "../../utils/messages";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navMenu = React.createRef();
  }

  state = {
    isMenuOpen: true
  };

  componentDidMount() {
    this.removeMenuFromDom();
    window.addEventListener("resize", this.removeMenuFromDom);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.removeMenuFromDom);
  }

  handleSubmit = value => {
    console.log(value);
  };

  removeMenuFromDom = () => {
    if (window.innerWidth < 992) {
      this.setState({ isMenuOpen: false });
    } else {
      this.setState({ isMenuOpen: true });
    }
  };

  toggleMenu = () => {
    if (window.innerWidth < 992) {
      if (!this.state.isMenuOpen) {
        this.setState({ isMenuOpen: true }, () => {
          if (this.navMenu && this.navMenu.current) {
            setTimeout(() => {
              this.navMenu.current.style.marginLeft = 0 + "px";
            });
          }
        });
      } else {
        this.navMenu.current.style.marginLeft = -280 + "px";
        setTimeout(() => {
          this.setState({ isMenuOpen: false });
        }, 250);
      }
    }
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <header className="header">
        <div className="container">
          <div className="inner-header">
            <div className="custom-col-2">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="Nutrition Systems" />
                </a>
              </div>
            </div>
            <div className="custom-col-10">
              <div className="navbar-main">
                <div className="custom-col-9">
                  <div className="navbar-action">
                    <div className="navbar-search">
                      <div className="inner-search">
                        <form onSubmit={this.handleSubmit}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={messages.common.search_text}
                          />
                          <button className="btn btn-search" type="submit">
                            <em className="fa fa-search" aria-hidden="true" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="nav-toggle">
                      <button
                        className={`btn menu-toggle ${
                          isMenuOpen ? "nav-active" : ""
                        }`}
                        type="button"
                        onClick={e => this.toggleMenu()}
                      >
                        <span className="top-bar icon-bar"></span>
                        <span className="middle-bar icon-bar"></span>
                        <span className="bottom-bar icon-bar"></span>
                      </button>
                    </div>
                    {isMenuOpen && (
                      <div className="navbar-menu" ref={this.navMenu}>
                        <span className="menu-close" onClick={this.toggleMenu}>
                          <em className="fa fa-times" />
                        </span>
                        <ul>
                          {menuOptions.map((item, index) => (
                            <li key={index}>
                              <a href="javascript:void(0)">{item.name}</a>
                              {item.options && (
                                <ul>
                                  {item.options.map((subitem, index) => (
                                    <li key={index}>
                                      <a href={subitem.path}>{subitem.name}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="custom-col-3">
                  <div className="navbar-register">
                    <div className="reg-link">
                      <ul>
                        <li>
                          <a href="/">Login</a>/<a href="/">Register</a>
                        </li>
                        <li>
                          Cart / $0
                          <a href="/">
                            <em
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="quick-contact-link">
                      <ul>
                        <li>
                          <a href="/">
                            <img src={socialIcon1} alt="" />
                            <span>{messages.common.whatsapp}</span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img src={socialIcon2} alt="" />
                            <span>{messages.common.ask_expert}</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
