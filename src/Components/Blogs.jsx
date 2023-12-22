import React from "react";
import blog from "../assets/blog.png";

const Blogs = () => {
  return (
    <div
      className=" z-3 position-relative rating-container gap-4 p-md-5  "
      style={{ backgroundColor: "var(--secondary-bg)" }}
    >
      <h1
        className="p-3 "
        style={{ fontSize: "5rem", color: "var( --primary-text)", marginLeft: "10rem" }}
      >
        Hear it from our clients
      </h1>
      <div className="cols d-flex gap-4 justify-content-center align-items-center ">
        <div className="col-3 d-flex flex-column gap-5">
          <div className="">
            <img src={blog} alt="img" className=" blog" />
            <div className="d-flex justify-content-between">
              <p style={{ color: "var( --primary-text)" }}>Blogs</p>
              <p style={{ color: "var( --primary-text)" }}>October 23, 2023</p>
            </div>
            <h4 style={{ color: "var( --primary-text)" }}>
              Startup Market Sizing: Founder's Guide to TAM SAM SOM
            </h4>
            <div className="btn mt-md-4 ">Market Sizing and Forecasting</div>
          </div>
        </div>



        <div className="col-3 d-flex flex-column ">
          <div className="">
            <img src={blog} alt="img" className=" blog" />
            <div className="d-flex justify-content-between">
              <p style={{ color: "var( --primary-text)" }}>Blogs</p>
              <p style={{ color: "var( --primary-text)" }}>October 23, 2023</p>
            </div>
            <h4 style={{ color: "var( --primary-text)" }}>
              Startup Market Sizing: Founder's Guide to TAM SAM SOM
            </h4>
            <div className="btn mt-md-4 ">Market Sizing and Forecasting</div>
          </div>
        </div>

        <div className="col-3 d-flex flex-column">
          <div className="">
            <img src={blog} alt="img" className=" blog" />
            <div className="d-flex justify-content-between">
              <p style={{ color: "var( --primary-text)" }}>Blogs</p>
              <p style={{ color: "var( --primary-text)" }}>October 23, 2023</p>
            </div>
            <h4 style={{ color: "var( --primary-text)" }}>
              Startup Market Sizing: Founder's Guide to TAM SAM SOM
            </h4>
            <div className="btn mt-md-4 ">Market Sizing and Forecasting</div>
          </div>
        </div>


      </div>

      <div className="subscribe d-flex pt-3 pb-3 m-md-5"  style={{height: "15rem", paddingLeft: "5rem", paddingRight: "5rem",}}>
        <div className="col-6 d-flex flex-column justify-content-between "  >
<h2 className="w-75" style={{ fontSize: "2.5rem", color: "var( --primary-text)", fontWeight: "500"}}>Don't want to
miss anything?</h2>
<div>
  <input
    style={{
      border: "none",
      borderBottom: "0.1px solid var(--line-color)", // You can set the color of the line here
      outline: "none", // Remove the default input focus outline
      backgroundColor: "transparent",
      color: "var(--text-color)",
      fontSize: "1.6rem",
      fontWeight: '500'
    }}
    placeholder="Email"
  /> 
  <div className="green-border d-flex justify-content-center pt-4 w-75 mt-2" style={{borderColor: "var(--text-color)"}}></div>
</div>

        </div>
        <div className="col-6 d-flex flex-column justify-content-between ">
<p className="w-75" style={{color: "var(--primary-text)", fontSize: "1.3rem", fontWeight: "500"}}>Sign up for our newsletter to discover
winning trends before your competition!</p>
<div>
  <p className="fw-medium"
    style={{
      backgroundColor: "transparent",
      color: "var(--primary-text)",
      fontSize: "1.6rem",
    }}>
    Subscribe
    </p>
  <div className="green-border d-flex justify-content-center pt-4 w-75" style={{borderColor: "var(--text-color)"}}></div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
