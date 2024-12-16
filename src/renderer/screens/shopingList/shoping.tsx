import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './shoping.css';
import { arrow, frame10, frame11, frame13, frame14, frame15, frame16, frame9, fruit, milkbottle, nonVeg, pyramidred, storeIcon, vegitable } from '../../assets/images';
import Shoping from '../../components/ShopingList';
import { Tabs, Tab } from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import InputWithClear from '../../components/inputbax';

interface ShopingItem {
  id: number;
  image: string;
  name: string;
  arrows: string;
  noOfPro: string;
  created: string;
}

const Shopinglist: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/viewShopingList');
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files, 'hfdhfgdfgdfg');
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      console.log('Selected file:', file);
      // Add further functionality here if needed
    }
  };

  const shopingList: ShopingItem[] = [
    {
      id: 1,
      image: milkbottle,
      name: 'Diary',
      arrows: arrow,
      noOfPro: '26 products',
      created: 'Created: 5 days ago',
    },
    {
      id: 2,
      image: fruit,
      name: 'Fruits',
      arrows: arrow,
      noOfPro: '16 products',
      created: 'Created: 5 days ago',
    },
    {
      id: 3,
      image: vegitable,
      name: 'Vegetables',
      arrows: arrow,
      noOfPro: '16 products',
      created: 'Created: 5 days ago',
    },
    // {
    //   id: 4,
    //   image: nonVeg,
    //   name: 'Meat and Eggs',
    //   arrows: arrow,
    //   noOfPro: '6 products',
    //   created: 'Created: 5 days ago',
    // },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSuccessClose = () => setShowSuccess(false);
  const handleSuccessShow = () => {
    setShow(false);
    setShowSuccess(true);
  };

  const handleShoping = async () => {
    navigate('/shopingList');
  };

  const dashboard = async () => {
    navigate('/dashboard');
  };

  const viewShopingList = async () => {
    navigate('/viewShopingList');
  };

  const Cookbook = async () => {
    navigate('/cookbook');
  };
  return (

    <div className="container">
      <div className="container flex-grow-1 d-flex flex-column vh-100 p-0 ">
      <div className="search-bar">
      <div className="searching">
        <span className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="text" placeholder="search" />
      </div>
    </div>

        {/* Main content */}
        {/* <div className="row  d-flex justify-content-center align-items-center"> */}

        <div className="tabs">
         <div className='shopping-tabs '>
         <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
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
                id="profile-tab"
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
                <section className="shopping">
      <div className="recipe-container">
        <div className="recipe-box">
          <div className="box-1">
            <div className="box-border">
              <p className="import">
                <u onClick={() => document.getElementById('fileInput')?.click()}>
                  Import Shopping list
                </u>
              </p>
              <p className="or-cen">or</p>
              <button
                onClick={handleShow}
                className="cook-book"
              >
                Create Shopping List
              </button>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />
            </div>
          </div>

          {shopingList.map((meal, index) => (
            <Shoping
              key={index}
              image={meal.image}
              name={meal.name}
              noOfPro={meal.noOfPro}
              arrow={meal.arrows}
              created={meal.created}
              onClick={handleClick}
            />
          ))}

          <div className="box-2 non-veg">
            <div className="d-flex justify-content-center bowl-box">
              <img src={nonVeg} alt="non-veg" />
            </div>
            <div className="snack-content d-flex justify-content-between mt-2 non-veg">
              <div className="snack-heading">
                <p className="snack-para">Meat and Eggs</p>
              </div>
              <div className="sign-heading">
                <p>
                  <span className="sharing-icon">
                    <img src={arrow} alt="arrow-sign" />
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
                <p className="recipe-content">6 products</p>
              </div>
              <div>
                <p className="recipe-time">Created: 5 days ago</p>
              </div>
            </div>
            <button type="button" className="btn open-book">
              Open shopping list
            </button>
          </div>
        </div>
      </div>
    </section>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex={0}
            >
              <section className="shopping">
                <div className="recipe-container">
                  <div className="recipe-box">
                    <div className="box-1">
                      <div className="box-border">
                        <p className="import">
                          <u>Import Cookbook</u>
                        </p>
                        <p className="or-cen">or</p>
                        <button className="cook-book">
                          Create new cookbook
                        </button>
                      </div>
                    </div>

                    {shopingList.map((meal) =>
                      <Shoping
                        image={meal.image}
                        name={meal.name}
                        noOfPro={meal.noOfPro}
                        arrow={meal.arrows}
                        created={meal.created}
                        onClick={handleClick}
                      //  description={item['recipe-content']}
                      //  time={item['recipe-time']}
                      //  onClick={handleClick}

                      />

                    )}
                    <div className="box-2 outline-box non-veg">
                      <div className="d-flex justify-content-center bowl-box">
                        <img
                          src={nonVeg}
                          alt="non-veg"
                        />
                      </div>
                      <div className="snack-content d-flex justify-content-between mt-2">
                        <div className="snack-heading">
                          <p className="snack-para">Meat and Eggs</p>
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
                              className="btn btn-secondary "
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
                          <p className="recipe-content">6 products</p>
                        </div>
                        <div>
                          <p className="recipe-time">Created: 5 days ago</p>
                        </div>
                      </div>
                      {/* <button type="button" class="btn open-book">Open shopping list</button> */}
                      <a onClick={handleClick}>
                        <button type="button" className="btn open-book">
                          Open shopping list
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
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

        <div className="bottom-bar-apps">
          <nav className=" fixed-bottom navbar-light pb-3  ">
            <div className="container d-flex justify-content-around">
              <div className='botton-navbar shopping'>

                

                <button className="btn btn-light d-flex flex-column align-items-center">   <div className="res-app2 res-app">
                  <img src={pyramidred} alt="pyramid-red"  onClick={dashboard}/>
                </div>
                </button>

                <button className="btn btn-light d-flex flex-column align-items-center">  <div className="res-app2 res-app">
                  <img src={frame10} alt="frame-13"  onClick={Cookbook}/>
                </div>
                </button>

                <button className="btn btn-light d-flex flex-column align-items-center">  <div className="res-app3 res-app">
                  <img src={frame11} alt="frame-11" />
                </div>
                </button>

                <button className="btn btn-light d-flex flex-column align-items-center">  <div className="res-app4 res-app">
                  <img src={storeIcon} alt="storage-icon" onClick={handleShoping} />
                </div>
                </button>

             
                <button className="btn btn-light d-flex flex-column align-items-center">   <div className="app-pic6 res-app">
                  <img src={frame14} alt="frame-14" onClick={viewShopingList} />
                </div></button>

                <button className="btn btn-light d-flex flex-column align-items-center">   <div className="app-pic7 res-app">
                  <img src={frame9} alt="frame-9" />
                </div></button>

                <button className="btn btn-light d-flex flex-column align-items-center"> <div className="app-pic8 res-app">
                  <img src={frame15} alt="frame-15" />
                </div> </button>

                <button className="btn btn-light d-flex flex-column align-items-center">  <div className="app-pic8 res-app">
                  <img src={frame16} alt="frame-16" />
                </div></button>

              </div>
            </div>
          </nav>
        </div>


        <>

           {/* First Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
          <Modal.Title>Create Shopping List</Modal.Title>
          <i 
      className="fa fa-times custom-close-icon" 
      onClick={handleClose} 
      style={{ cursor: 'pointer', marginLeft: 'auto' }}>
    </i>
        </Modal.Header>
        <Modal.Body>
          <div className='croos-input-1'>
            <InputWithClear />
          </div>




        </Modal.Body>
        <Modal.Footer>
          <div className='cookbook-btn'>
            <Button variant="primary" onClick={handleSuccessShow}>
              Create now
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Second Success Modal */}
      <Modal show={showSuccess} onHide={handleSuccessClose} centered>
        <Modal.Header >
          <Modal.Title></Modal.Title>
          <i 
      className="fa fa-times custom-close-icon" 
      onClick={handleClose} 
      style={{ cursor: 'pointer', marginLeft: 'auto' }}>
    </i>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="d-flex justify-content-center">
            <svg
              width="45"
              height="40"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="36" height="36" rx="18" fill="#60C26F" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.2203 22.0455L10.9531 17.692L9.5 19.1641L15.2203 25L27.5 12.472L26.0571 11L15.2203 22.0455Z"
                fill="#FEFEFE"
              />
            </svg>
          </div>
          <p className="recipe-added">
            Recipe added <br /> successfully
          </p>
          <div className='cookbook-btn'>
            <Button variant="primary" onClick={handleSuccessClose}>
              Go To cookbook
            </Button>
          </div>

        </Modal.Body>
      </Modal>
        </>
      </div>

    </div>

  )
}
export default Shopinglist;