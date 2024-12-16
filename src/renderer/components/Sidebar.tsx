import React from 'react';

interface SidebarProps {
  image: string;
  mealName: string;
  created: string;
  onClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ image, mealName, created, onClick }) => {
  return (
    <li className="sidebar-item">
      <a className="sidebar-link" onClick={onClick} aria-expanded="false">
        <span>
          <img src={image} alt={mealName} />
        </span>
        <div className="hide-menu-bar">
          <div>
            <p className="fw-bold">{mealName}</p>
            <span>26 recipes</span>
          </div>
        </div>
        <div className="hide-menu-bar">
          <div className="text-end d-flex justify-content-end gap-3">
            <p>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6001 0.5V4.5C4.6001 5.5 1.6001 10.5 0.600098 15.5C3.1001 12 6.6001 10.4 11.6001 10.4V14.5L18.6001 7.5L11.6001 0.5ZM13.6001 5.33L15.7701 7.5L13.6001 9.67V8.4H11.6001C9.5301 8.4 7.6701 8.78 5.9401 9.35C7.3401 7.96 9.1401 6.87 11.8801 6.5L13.6001 6.23V5.33Z"
                  fill="#268EFF"
                />
              </svg>
            </p>

            <div className="dropdown">
              <button
                className="btn p-0 border-0 bg-transparent"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="vertical-dots">
                  <span></span>
                </div>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
              </ul>
            </div>
          </div>
          <span>{created}</span>
        </div>
      </a>
    </li>
  );
};

export default Sidebar;
