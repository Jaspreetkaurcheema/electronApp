import React from 'react';

interface RecipeCardProps {
  image: string;
  title: string;
  arraw: string;
  description: string;
  time: string;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, title, arraw, description, time, onClick }) => {
  return (
    <div className='cook-book-reviw'>
      <div className="box-2 outline-box">
        <div className="d-flex justify-content-center bowl-box">
          <img src={image} alt={title} />
        </div>
        <div className="snack-content d-flex justify-content-between mt-3">
          <div className="snack-heading">
            <p className="snack-para">{title}</p>
          </div>
          <div className="sign-heading">
            <p>
              <span className="sharing-icon">
                <img src={arraw} alt="arrow-sign" />
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
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="recipe-content">{description}</p>
          </div>
          <div>
            <p className="recipe-time">{time}</p>
          </div>
        </div>
        <button type="button" onClick={onClick} className="btn open-book">
          Open cookbook
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
