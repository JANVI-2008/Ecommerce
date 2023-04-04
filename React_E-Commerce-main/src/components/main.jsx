import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/file.jpg.jpg"
            alt="Card"
            height={200}
            width={200}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 style={{color:"black",fontWeigh:"bold" }}>New Season Arrivals</h1>
              {/* <h2 style={{color:"white"}}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </h2> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;