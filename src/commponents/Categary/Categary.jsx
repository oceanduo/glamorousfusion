import React from "react";
import "./categary.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://picsum.photos/1600/1000?random=8"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://picsum.photos/1600/1000?random=9"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Greenery
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://picsum.photos/1600/1000?random=10"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Arrival
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://picsum.photos/1600/1000?random=11"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Trees
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://picsum.photos/1600/1000?random=12"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://picsum.photos/1600/1000?random=13"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Flowers
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;