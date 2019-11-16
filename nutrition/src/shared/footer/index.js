import React from "react";
import quickLinks from "./../../utils/footer_navigation_menu";

import messages from "./../../utils/messages";

import footerBottomImg from "./../../images/footer-bottom.jpg";
import footerLogo from "./../../images/footer-logo.jpg";
import paymentOpt1 from "./../../images/payment-opt1.jpg";
import paymentOpt2 from "./../../images/payment-opt2.jpg";
import paymentOpt3 from "./../../images/payment-opt3.jpg";
import paymentOpt4 from "./../../images/payment-opt4.jpg";
import paymentOpt5 from "./../../images/payment-opt5.jpg";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.fooMedia = React.createRef();
    this.fooImg = React.createRef();
  }

  paymentOptions = [
    {
      type: "Visa",
      img: paymentOpt1
    },
    {
      type: "Master Card",
      img: paymentOpt2
    },
    {
      type: "Cirrus",
      img: paymentOpt3
    },
    {
      type: "Discover",
      img: paymentOpt4
    },
    {
      type: "Paypal",
      img: paymentOpt5
    }
  ];

  componentDidMount() {
    this.footerImage();
  }

  footerImage = () => {
    const imgUrl = this.fooImg.current.src;

    this.fooMedia.current.style.background =
      "transparent url(" + imgUrl + ") no-repeat center center";
    this.fooMedia.current.style.backgroundSize = "cover";
    this.fooMedia.current.style["-webkit-background-size"] = "cover";
    this.fooMedia.current.style["-moz-background-size"] = "cover";
    this.fooMedia.current.style["-ms-background-size"] = "cover";
    this.fooMedia.current.style["-o-background-size"] = "cover";
    this.fooMedia.current.style.minHeight = 89 + "px";
    this.fooImg.current.style.display = "none";
  };

  render() {
    return (
      <footer className="footer">
        <div className="inner-footer">
          <div className="footer-newsletter">
            <div className="fn-media" ref={this.fooMedia}>
              <img
                src={footerBottomImg}
                alt="newsletter-bg"
                ref={this.fooImg}
              />
            </div>
          </div>
          <div className="footer-main">
            <div className="container">
              <div className="footer-nav">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <div className="footer-quick-links">
                      <div className="row">
                        {quickLinks.map((item, index) => (
                          <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            key={index}
                          >
                            <div className="fql-box">
                              <h5>{item.title}</h5>
                              {item.links && (
                                <ul>
                                  {item.links.map((item, index) => (
                                    <li key={index}>
                                      <a href={item.path}>{item.name}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="footer-subscription">
                      <h5>{messages.common.signup_newsletter}</h5>
                      <form onSubmit={this.newsletterSignUp}>
                        <div className="fn-subscribe">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={messages.common.enter_email}
                          />
                          <button type="submit" className="btn btn-send">
                            {messages.common.send}
                          </button>
                        </div>
                      </form>
                      <div className="coupen-info">
                        <h5>{messages.common.coupen_code}</h5>
                        <p>{messages.common.dummy_text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="fc-row">
                  <div className="custom-col-2">
                    <div className="footer-logo">
                      <a href="/">
                        <img src={footerLogo} alt="footer logo" />
                      </a>
                    </div>
                  </div>
                  <div className="custom-col-10">
                    <div className="copyright">
                      <div className="row">
                        <div className="col-lg-3 col-md-12">
                          <p>{messages.common.copyright}</p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="cc-payment">
                            <ul>
                              {this.paymentOptions.map((option, index) => (
                                <li key={index}>
                                  <span title={option.type}>
                                    <img src={option.img} alt={option.type} />
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                          <div className="cc-social">
                            <ul>
                              <li>
                                <a href="/" target="_blank">
                                  <em className="fa fa-facebook"></em>
                                </a>
                              </li>
                              <li>
                                <a href="/" target="_blank">
                                  <em className="fa fa-linkedin"></em>
                                </a>
                              </li>
                              <li>
                                <a href="/" target="_blank">
                                  <em className="fa fa-google-plus"></em>
                                </a>
                              </li>
                              <li>
                                <a href="/" target="_blank">
                                  <em className="fa fa-twitter"></em>
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
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
