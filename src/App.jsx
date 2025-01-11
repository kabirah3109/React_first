import React, { useState } from "react";
import "./App.scss";
import Slider from "react-slick";

const App = () => {
  const [accountDropdownState, setAccountDropdownState] = useState(false);
  const [helpDropdownState, setHelpDropdownState] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="top_header">
          <div>
            <h1>Sell on Jumai</h1>
          </div>
        </div>
        <nav>
          <div className="nav_first_slide">
            <button>
              <i className="fa-2x fa-solid fa-bars"></i>
            </button>
            <h1 className="jum">JUMIA</h1>
            <div className="rounded_star">
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="text_logo">
            <button className="searchicon_button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              className="input"
              type="text"
              placeholder="Search products, brands and categories"
            />
            <button className="search"> Search</button>
            <div className="flex_container_parent">
              <div className="dropdown_container">
                <button
                  className="accountname_icon"
                  onClick={() => setAccountDropdownState(!accountDropdownState)}
                >
                  <i class="fa-regular fa-user"></i>&nbsp;Account
                </button>
                {accountDropdownState == true && (
                  <div className="dropdown_items">
                    <button>sign in</button>
                    <a href="My account">
                      <i class="fa-regular fa-user"></i> MY Account
                    </a>
                    <a href="orders">orders</a>
                    <a href="saved Items">Saved ITEMS</a>
                  </div>
                )}
              </div>
              <div className="dropdown_container">
                <button
                  className="accountname_icon"
                  onClick={() => setHelpDropdownState(!helpDropdownState)}
                >
                  <i class="fa-solid fa-question"></i>&nbsp;Help
                </button>
                {helpDropdownState == true && (
                  <div className="dropdown_items">
                    <a href="My account">help center</a>
                    <a href="orders">place an orders</a>
                    <a href="saved Items">payment option </a>
                    <a href="">Track an orders</a>
                    <a href="">cancle an order</a>
                    <a href="">return & refund</a>
                  </div>
                )}
                <button className="accountname_icon">
                  <i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart
                </button>
              </div>
              {/* <button>cart</button> */}
            </div>
          </div>
        </nav>
      </div>
      <main
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <div
          className="flex_container_parent"
          style={{ justifyContent: "space-around", alignItems: "stretch" }}
        >
          <div className="link_container" style={{ width: "100%" }}>
            <a href="">Appliances</a>
            <a href="">
              <i class="fa-solid fa-tablet"></i>Phones & Tablets
            </a>
            <a href="">Health & Beauty</a>
            <a href="">
              <i className="fa-solid fa-house"></i>&nbsp;Home & Office
            </a>
            <a href="">
              <i className="fa-solid fa-tv"></i>&nbsp;Electronics
            </a>
            <a href="">Fashion</a>
            <a href="">
              <i class="fa-solid fa-apple-whole"></i>&nbsp;Supermarket
            </a>
            <a href="">Computing</a>
            <a href="">Baby Provision</a>
            <a href="">
              <i class="fa-solid a-gamepad"></i>&nbsp;Gaming
            </a>
            <a href="">
              <i class="fa-solid fa-music"></i>&nbsp;Musical Instrument
            </a>
            <a href="">Other Categories</a>
          </div>
          <div style={{ minWidth: "300px", maxWidth: "900px" }}>
            <Slider
              {...{
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
                dots: true,
              }}
            >
              <img
                src="712X384_merry_xmas (3).jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <img src="712x384.gif" alt="" style={{ width: "100%" }} />
              <img src="712x384_1.jpg" alt="" style={{ width: "100%" }} />
              <img
                src="712X384_merry_xmas (3).jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <img
                src="Dec_Master_Card_712x384.jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <img
                src="FLASH-SALE_712x384.gif"
                alt=""
                style={{ width: "100%" }}
              />
            </Slider>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(2, minmax(0, 1fr))",
              alignItems: "stretch",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div
              style={{
                color: "black ",
                backgroundColor: "white",
                fontSize: "14px!important",
                padding: "18px 10px",
              }}
            >
              <a href="">
                <i className="fa-solid fa-phone"></i>CALL TO ORDER
              </a>
              <a href="">sell on jumia </a>
              <a href="">best deals</a>
            </div>
            <img src="/Untitled-3.gif" alt="" className="h-full" />
          </div>
        </div>
        <form action="" className="form_2">
          <div
            style={{
              display: "flex",
              gap: "20px",
              // height: "150px",
              backgroundColor: "white",
              padding: "10px",
              border: "8px",
              width: "100%",
            }}
          >
            <img src="electronics.png" alt="" style={{ width: "15%" }} />
            <img src="7.gif" alt="" style={{ width: "15%" }} />
            <img src="clearance.png" alt="" style={{ width: "15%" }} />
            <img src="appliances.png" alt="" style={{ width: "15%" }} />
            <img src="BUY-2_updated.gif" alt="" style={{ width: "15%" }} />
            <img src="phones.png" alt="" style={{ width: "15%" }} />
          </div>
        </form>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              backgroundColor: "white",
              padding: "10px",
              border: "8px",
              width: "100%",
            }}
          >
            <div>
              <img src="/1.jpg" alt="" className="slider_product_image" />
              <span>₦7,700</span>
            </div>
            <div>
              <img src="/1(2).jpg" alt="" className="slider_product_image" />
              <span></span>
            </div>
            <div>
              <img src="/1(3).jpg" alt="" className="slider_product_image" />
              <span>₦ 8100
              </span>
            </div>
            
          
            <>
              <img src="/1(4).jpg" alt="" />
            </>
            <>
              <img src="/1(5).jpg" alt="" />
            </>
            <>
              <img src="/1(6).jpg" alt="" className="slider_product_image"/>
            </>
            <>
              <img src="/1(7).jpg" alt="" />
            </>
            <>
              <img src="/1(8).jpg" alt="" />
            </>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
