import React from 'react';

interface ShopingProps {
  image: string;
  name: string;
  noOfPro: string;
  created: string;
  onClick: () => void;
  arrow: string;
}

const Shoping: React.FC<ShopingProps> = ({ image, name, noOfPro, created, onClick, arrow }) => {
  return (
    <div className="box-2 outline-box">
      <div className="d-flex justify-content-center bowl-box">
        <img
          src={image}
          alt="milk-bottle"
        />
      </div>
      <div className="snack-content d-flex justify-content-between mt-2">
        <div className="snack-heading">
          <p className="snack-para">{name}</p>
        </div>
        <div className="sign-heading">
          <p>
            <span className="sharing-icon">
              <img
                src={arrow}
                alt="arrow-sign"
              />
            </span>
            <span></span>
          </p>
          <div className="dropdown">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-ellipsis-vertical" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" >
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" >
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <p />
        </div>
      </div>
      <div className="d-flex justify-content-between recipe-means">
        <div>
          <p className="recipe-content">{noOfPro}</p>
        </div>
        <div>
          <p className="recipe-time">{created}</p>
        </div>
      </div>
      <a onClick={onClick}>
        <button type="button" className="btn open-book">
          Open shopping list
        </button>
      </a>
    </div>
  );
};

export default Shoping;
