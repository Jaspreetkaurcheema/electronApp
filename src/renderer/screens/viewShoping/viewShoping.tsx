import { useNavigate } from 'react-router-dom'
import './viewShoping.css'
import { arrow, chicken, frame10, frame11, frame13, frame14, frame15, frame16, frame9, fruit, fruits, milk, milkbottle, nonVeg, noodle, pyramidred, quikmeal, spices, storeIcon, veg, vegitable } from '../../assets/images'
import Sidebar from '../../components/Sidebar'


import React, { useState } from 'react';

// Import your image assets here
// import quikmeal from '../../assets/images/quikmeal';

interface Row {
  id: number;
  item: string;
  amount: string;
  unit: string;
  store: string;
  recipe: string;
  cost: string;
}

interface Data {
  id: number;
  mealPic: string;
  mealName: string;
  created: string;
}

function ShopingView() {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, item: 'Milk', amount: '1 Kg', unit: 'Kilograms', store: 'AIM’s Grocery, London', recipe: 'Milk cake', cost: '$2.00' },
    { id: 2, item: 'Sugar', amount: '1 Kg', unit: 'Kilograms', store: 'AIM’s Grocery, London', recipe: 'Milk cake', cost: '$2.00' },
    // Add other initial rows here
  ]);

  const addRow = () => {
    const newRow: Row = {
      id: rows.length + 1,
      item: '',
      amount: '',
      unit: '',
      store: '',
      recipe: '',
      cost: ''
    };
    setRows([...rows, newRow]);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/viewRecipe');
  };

  const handleClicks = () => {
    navigate('/shopingList');
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const data: Data[] = [
    { id: 1, mealPic: quikmeal, mealName: 'Quick Meals', created: 'Created: 5 days ago' },
    { id: 2, mealPic: noodle, mealName: 'Snacks', created: 'Created: 5 days ago' },
    { id: 3, mealPic: chicken, mealName: 'Chicken recipe', created: 'Created: 5 days ago' },
    { id: 4, mealPic: noodle, mealName: 'Snacks', created: 'Created: 5 days ago' },
    { id: 5, mealPic: chicken, mealName: 'Chicken recipe', created: 'Created: 5 days ago' },
    { id: 6, mealPic: noodle, mealName: 'Snacks', created: 'Created: 5 days ago' },
    { id: 7, mealPic: chicken, mealName: 'Chicken recipe', created: 'Created: 5 days ago' },
    { id: 8, mealPic: noodle, mealName: 'Snacks', created: 'Created: 5 days ago' },
    // Add more data as needed
  ];


    // add
 
    return (
        <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* Sidebar Start */}
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <a onClick={handleClicks}  className="text-nowrap logo-img">
                {/* <img src="../assets/images/logos/dark-logo.svg" width="180" alt="" /> */}
                <div className="d-flex gap-3 cook-book-heading-1">
                  {" "}
                  <span className="h6">
                    <i className="fa-solid fa-chevron-left"></i>
                    <img src="./assets/Images/lees-than.png" alt="" />
                  </span>
                  <h5> Shopping list</h5>
                </div>
              </a>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8" />
              </div>
            </div>
            {/* tabs */}
            <div className="tabs">
            <div className='shopping-tabs mt-3'>
              <ul className="nav nav-tabs" id="myTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active page-name"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane home"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Shopping List
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab profile"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Pantry
                  </button>
                </li>
              </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex={0}
                >
                  {/* Sidebar navigation*/}
                  <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                    <div className="input-group rounded mb-3 search-bar_1">
                      <span className="serach-icon" id="search-addon">
                        <i className="fas fa-search" />
                      </span>
                      <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                    </div>
                    <ul id="sidebarnav " className='cookbookshopping-sidebar'>
                    {data.map((meal) =>
                <Sidebar
                  image={meal.mealPic}
                  mealName={meal.mealName}
                  //arraw={item.icon}
                  created={meal.created}
                  onClick={handleClicks}
                //  description={item['recipe-content']}
                //  time={item['recipe-time']}
                //  onClick={handleClick}

                />

              )

              }
                    </ul>
                  </nav>
                  {/* End Sidebar navigation */}
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex={0}
                >
                  {/* Sidebar navigation*/}
                  <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                    <div className="input-group rounded mb-3 search-bar_1">
                      <span className="serach-icon" id="search-addon">
                        <i className="fas fa-search" />
                      </span>
                      <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                    </div>
                    <ul id="sidebarnav " className='cookbookshopping-sidebar'>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={milk} alt="" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold">Dairy</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={fruits} alt="fruits" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold">Fruits</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                              {/* three-dots */}
                              <div className="dropdown">
                                <button className="drop-btn">
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                                <div style={{ position: "absolute" }}>
                                  <ul style={{ display: "none" }}>
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                  </ul>
                                </div>
                              </div>
                              {/* three-dots */}
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={veg} alt="veggies" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold">Vegetables</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                              {/* three-dots */}
                              <div className="dropdown">
                                <button className="drop-btn">
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                                <div style={{ position: "absolute" }}>
                                  <ul style={{ display: "none" }}>
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                  </ul>
                                </div>
                              </div>
                              {/* three-dots */}
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={spices} alt="spice" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold"> Spices</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                              {/* three-dots */}
                              <div className="dropdown">
                                <button className="drop-btn">
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                                <div style={{ position: "absolute" }}>
                                  <ul style={{ display: "none" }}>
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                  </ul>
                                </div>
                              </div>
                              {/* three-dots */}
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={fruits} alt="fruit" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold">Fruits</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                              {/* three-dots */}
                              <div className="dropdown">
                                <button className="drop-btn">
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                                <div style={{ position: "absolute" }}>
                                  <ul style={{ display: "none" }}>
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                  </ul>
                                </div>
                              </div>
                              {/* three-dots */}
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={veg} alt="veggies" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold">Vegetables</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                              {/* three-dots */}
                              <div className="dropdown">
                                <button className="drop-btn">
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                                <div style={{ position: "absolute" }}>
                                  <ul style={{ display: "none" }}>
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                  </ul>
                                </div>
                              </div>
                              {/* three-dots */}
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={spices} alt="spice" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold">Spices</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                              {/* three-dots */}
                              <div className="dropdown">
                                <button className="drop-btn">
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                                <div style={{ position: "absolute" }}>
                                  <ul style={{ display: "none" }}>
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                  </ul>
                                </div>
                              </div>
                              {/* three-dots */}
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          onClick={handleClicks} 
                          aria-expanded="false"
                        >
                          <span>
                            <img src={veg} alt="veggies" />
                          </span>
                          <div className="hide-menu-bar">
                            <div>
                              <p className="fw-bold">Vegetables</p>
                              <span>26 recipe’s</span>
                            </div>
                          </div>
                          <div className="hide-menu-bar">
                            <div className="text-end">
                              <p>
                                <svg
                                  width={19}
                                  height={16}
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
                              {/* three-dots */}
                              <div className="dropdown">
                                <button className="drop-btn">
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                                <div style={{ position: "absolute" }}>
                                  <ul style={{ display: "none" }}>
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                  </ul>
                                </div>
                              </div>
                              {/* three-dots */}
                            </div>
                            <span>Created: 5 days ago</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* End Sidebar navigation */}
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex={0}
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="disabled-tab-pane"
                  role="tabpanel"
                  aria-labelledby="disabled-tab"
                  tabIndex={0}
                >
                  ...
                </div>
              </div>
            </div>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xxl-none">
                  <a
                    className="nav-link sidebartoggler nav-icon-hover"
                    id="headerCollapse"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-menu-2" />
                  </a>
                </li>
              </ul>
              <div
                className="navbar-collapse justify-content-end px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <li className="nav-item ">
                    <div className="input-group rounded search-container">
                      <span className="serach-icon" id="search-addon">
                        <i className="fas fa-search" />
                      </span>
                      <input
                        type="search"
                        className="form-control rounded side-search"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {/*  Header End */}
          <div className="container-fluid">
          <div className="body-content">
              {/* Table */}
              <section className="table-structure">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-header">
            <tr>
              <th scope="col" style={{ textAlign: "center" }}>Count</th>
              <th scope="col">
                <span className="select">
                  <input className="form-check-input" type="checkbox" name="remember" />
                </span>
                Select all
              </th>
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
              <th scope="col">Units</th>
              <th scope="col">Store location</th>
              <th scope="col">Recipe</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "table-style" : ""}>
                <th scope="row" className="count-table">{row.id}</th>
                <td className="mark">
                  <span>
                    <input className="form-check-input" type="checkbox" name="remember" />
                  </span>
                  <span className="mark-text">
                    Mark as <span className="purchase">purchased</span>
                  </span>
                </td>
                <td className="item">{row.item}</td>
                <td className="amount">{row.amount}</td>
                <td className="unit">{row.unit}</td>
                <td className="store">{row.store}</td>
                <td className="recipe">{row.recipe}</td>
                <td className="cost">{row.cost}</td>
              </tr>
            ))}
            <tr>
              <th scope="row" />
              <td>
                <button className="more-btn" onClick={addRow}>Add more rows</button>
              </td>
              <td>
                {/* delete button */}
              <button className="delete-btn" onClick={() => deleteRow(rows.length)}>Delete row</button>  
                </td>
              <td />
              <td />
              <td />
              <td />
              <td className="d-flex">
                <button className="bill-btn">$16.00 (Total bill)</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    
            </div>
          </div>
        </div>
      </div>
   
)

  
  }
  export default ShopingView;