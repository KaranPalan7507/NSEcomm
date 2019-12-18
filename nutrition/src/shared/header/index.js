import React from "react";

import menuOptions from "./options";
import messages from "../../utils/messages";
import { Link } from "react-router-dom";
import "./style.scss";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navMenu = React.createRef();
    this.menuList = React.createRef();
    this.menuItem = [];
  }

  state = {
    isMenuOpen: true,
    isSubOpen: false
  };

  body = "";

  componentDidMount() {
    this.body = document.body || document.documentElement;
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
              this.body.classList.add("no-scroll");
            });
          }
        });
      } else {
        this.navMenu.current.style.marginLeft = -280 + "px";
        this.body.classList.remove("no-scroll");
        setTimeout(() => {
          this.setState({ isMenuOpen: false });
        }, 250);
      }
    }
  };

  subMenu = e => {
    const parentNode = e.currentTarget ? e.currentTarget.parentElement : "";
    if (!this.state.isSubOpen && parentNode) {
      parentNode.classList.add("active");
    } else {
      parentNode.classList.remove("active");
    }
    this.setState({ isSubOpen: !this.state.isSubOpen });
  };

  backToMain = index => {
    if (
      this.state.isSubOpen &&
      this.menuList &&
      this.menuList.current &&
      this.menuItem.length &&
      this.menuItem[index]
    ) {
      this.menuList.current.classList.remove("sub-open");
      this.menuItem[index].classList.remove("active");
      this.setState({ isSubOpen: false });
    }
  };

  render() {
    const { isMenuOpen, isSubOpen } = this.state;
    return (
      <header className="header">
        <div className="container">
          <div className="inner-header">
            <div className="ih-action">
              <div className="header-wrapper">
                <div className="logo">
                  <a href="/">
                    <img src="/images/logo.png" alt="Nutrition Systems logo" />
                  </a>
                </div>
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
                <div className="navbar-register">
                  <div className="reg-link">
                    <ul>
                      <li>
                        <a href="/">
                          <em className="fa fa-heart" />
                          <sup className="badge badge-danger">2</sup>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <em className="fa fa-shopping-cart" />
                          <sup className="badge badge-danger">2</sup>
                        </a>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>/
                        <Link to="/register">Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-toggle">
              <button
                className={`btn menu-toggle ${isMenuOpen ? "nav-active" : ""}`}
                type="button"
                onClick={e => this.toggleMenu()}
              >
                <span className="top-bar icon-bar"></span>
                <span className="middle-bar icon-bar"></span>
                <span className="bottom-bar icon-bar"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="navigation-main">
          <div className="container">
            {isMenuOpen && (
              <div className="navbar-menu" ref={this.navMenu}>
                <span className="menu-close" onClick={this.toggleMenu}>
                  <em className="fa fa-times" />
                </span>
                <ul ref={this.menuList} className={isSubOpen ? "sub-open" : ""}>
                  {menuOptions.map((item, index) => (
                    <li ref={ref => (this.menuItem[index] = ref)} key={index}>
                      {item.name === messages.common.whyUs ||
                      item.name === messages.common.blog ||
                      item.name === messages.common.whatsapp ||
                      item.name === messages.common.iNutrition ? (
                        <Link to={item.path}>
                          {" "}
                          {item.imgPath && (
                            <img src={item.imgPath} alt={item.name} />
                          )}
                          {item.name}
                        </Link>
                      ) : (
                        <span onClick={e => this.subMenu(e)}>{item.name}</span>
                      )}
                      {(item.mainOptions ||
                        item.subOptions ||
                        item.goalOptions ||
                        item.brandOptions ||
                        item.offerOptions) && (
                        <div className="submenu-wrapper">
                          <div className="sw-inner">
                            <div className="sw-back">
                              <span onClick={() => this.backToMain(index)}>
                                <em className="fa fa-angle-left" />
                                {messages.common.back}
                              </span>
                            </div>
                            <div className="sw-overflow">
                              <div className="row">
                                {item.mainOptions && (
                                  <div className="sw-col-2">
                                    <div className="sw-main-opts">
                                      <ul>
                                        {item.mainOptions.map(
                                          (subitem, index) => (
                                            <li key={index}>
                                              <a href={subitem.path}>
                                                {subitem.name}
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                                {item.subOptions && (
                                  <div className="sw-col-10">
                                    <div className="sw-sub-opts">
                                      {item.subOptions && (
                                        <React.Fragment>
                                          {item.subOptions.map(
                                            (subitem, index) => (
                                              <div
                                                className="sws-box"
                                                key={index}
                                              >
                                                <div className="sws-row">
                                                  {subitem.imgPath && (
                                                    <div className="sws-media">
                                                      <img
                                                        src={subitem.imgPath}
                                                        alt={subitem.title}
                                                      />
                                                    </div>
                                                  )}
                                                  <div className="sws-content">
                                                    <h4>{subitem.title}</h4>
                                                    {subitem.options && (
                                                      <ul>
                                                        {subitem.options.map(
                                                          (opt, index) => (
                                                            <li key={index}>
                                                              <a
                                                                href={opt.path}
                                                              >
                                                                {opt.name}
                                                              </a>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </React.Fragment>
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item.goalOptions && (
                                  <React.Fragment>
                                    {item.goalOptions.map((item, index) => (
                                      <div className="col-lg-2" key={index}>
                                        <div className="sw-goal-box">
                                          <a href={item.path}>
                                            <div
                                              className="sw-goal-media"
                                              style={{
                                                background: `url(${item.imgPath}) no-repeat center center/cover`
                                              }}
                                            >
                                              <div className="sw-goal-content">
                                                <h5>{item.name}</h5>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    ))}
                                  </React.Fragment>
                                )}
                                {item.brandOptions && (
                                  <React.Fragment>
                                    {item.brandOptions.map((item, index) => (
                                      <div className="col-lg-2" key={index}>
                                        <div className="sw-brand-box">
                                          <a href={item.path}>
                                            <div
                                              className="sw-brand-media"
                                              style={{
                                                background: `url(${item.imgPath}) no-repeat center center/cover`
                                              }}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    ))}
                                  </React.Fragment>
                                )}
                                {item.offerOptions && (
                                  <React.Fragment>
                                    {item.offerOptions.map((item, index) => (
                                      <div className="col-lg-3" key={index}>
                                        <div
                                          className={
                                            index === 3
                                              ? "sw-offer-box last"
                                              : "sw-offer-box"
                                          }
                                        >
                                          <Link to={item.path}>
                                            <div className="sw-offer-media">
                                              <img
                                                src={item.imgPath}
                                                alt={item.name}
                                              />
                                            </div>
                                            <div className="sw-offer-content">
                                              <h5>{item.name}</h5>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </React.Fragment>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
