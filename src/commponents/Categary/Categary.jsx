import React from "react";
import "./categary.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">

      <div className="col col-2">
        <div className="row">
          <img
            src="https://picsum.photos/1600/1000?random=8"
            alt=""
          />
          <button>
            <Link className="link" to={'/products/garland'}>
              Garland
            </Link>
          </button>
        </div>


        <div className="row">
          <img
            src="https://picsum.photos/1600/1000?random=9"
            alt=""
          />
          <button>
            <Link to={'/products/greenery'} className="link">
              Greenery
            </Link>
          </button>
        </div>
      </div>


      <div className="col">
        <div className="row">

          <img
            src="https://picsum.photos/1600/1000?random=10"
            alt=""
          />
          <button>
            <Link to={'/products/assessories'} className="link">
            Assessories
            </Link>
          </button>
        </div>
      </div>


      <div className="col col-l">

        <div className="row">


          <img
            src="https://picsum.photos/1600/1000?random=11"
            alt=""
          />
          <button>
            <Link to={'/products/trees'} className="link">
              Trees
            </Link>
          </button>


        </div>


        <div className="row">
          <img
            src="https://picsum.photos/1600/1000?random=13"
            alt=""
          />
          <button>
            <Link to={'/products/flower'} className="link">
              Flowers
            </Link>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Categories;