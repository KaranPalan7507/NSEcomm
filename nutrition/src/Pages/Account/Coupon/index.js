import React from "react";
import "./style.scss";
import { API } from "./../../../axios";
import { apis, token } from "./../../../constants";
const config = {
  headers: {
    authorization: "Bearer " + token
  }
};
class Coupon extends React.Component {
  state = { firstName: "", lastName: "", email: "" };
  dummyCoupon = [
    {
      coupon_code: "HMSPECIAL15",
      title: "On minimum purchase of Rs 1,999",
      desc: "Lorem ipsum",
      terms: {
        type: String
      },
      images: [
        {
          image: "",
          image_alt_text: ""
        }
      ],
      creation_date: Date,
      state: {
        type: String,
        enum: ["active", "in-active"]
      },
      active_date: {
        type: Date
      },
      end_date: "OCT 31 2019 | 11:59:00",
      quantity: {
        type: Number,
        default: 999999
      },
      coupon_type: {
        single: {
          product_id: {
            type: Number,
            default: -1
          }
        },
        category: {
          category: {
            type: String,
            default: -1
          }
        },
        brand: {
          brand_id: {
            type: Number,
            default: -1
          }
        },
        new_user: {
          type: Boolean,
          default: false
        },
        repeat_user: {
          type: Boolean,
          default: false
        },
        all_user: {
          type: Boolean,
          default: false
        },
        select_user: [
          {
            user_id: {
              type: Number
            }
          }
        ]
      }
    },
    {
      coupon_code: "HMSPECIAL15",
      title: "On minimum purchase of Rs 1,999",
      desc: "Lorem ipsum",
      terms: {
        type: String
      },
      images: [
        {
          image: "",
          image_alt_text: ""
        }
      ],
      creation_date: Date,
      state: {
        type: String,
        enum: ["active", "in-active"]
      },
      active_date: {
        type: Date
      },
      end_date: "OCT 31 2019 | 11:59:00",
      quantity: {
        type: Number,
        default: 999999
      },
      coupon_type: {
        single: {
          product_id: {
            type: Number,
            default: -1
          }
        },
        category: {
          category: {
            type: String,
            default: -1
          }
        },
        brand: {
          brand_id: {
            type: Number,
            default: -1
          }
        },
        new_user: {
          type: Boolean,
          default: false
        },
        repeat_user: {
          type: Boolean,
          default: false
        },
        all_user: {
          type: Boolean,
          default: false
        },
        select_user: [
          {
            user_id: {
              type: Number
            }
          }
        ]
      }
    }
  ];
  async componentDidMount() {
    const response = await API.POST(apis.coupon, {}, config);
    if (response.success) {
    }
  }
  renderCoupon(item, index) {
    return (
      <div class="coupon-item">
        <div className="top-section">
          <div class="left">
            <div class="coupon-amount">30%</div>
            <div class="coupon-offText">OFF </div>
          </div>
          <div class="right">
            <div class="coupon-purchase-info">
              <span class="coupon-label"> On minimum purchase of</span>
              <span>Rs 1,999</span>
            </div>
            <div>
              <span class="coupon-label"> Code: </span>
              <span class="coupon-coupon-code">STEAL30</span>
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <span>Expiry: </span>
          <span class="coupon-expiry-date">DEC 19 2019</span>
          <span>07:00:00 P.M</span>
          <span class="coupon-details">Details</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="coupons-wrapper">
        {this.dummyCoupon.map((item, index) => this.renderCoupon(item, index))}
      </div>
    );
  }
}
export default Coupon;
