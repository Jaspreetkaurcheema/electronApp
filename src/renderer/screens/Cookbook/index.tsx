import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cook-book.css';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css"; // Import slick-carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import {
  arraw,
  arrow,
  frame10,
  frame11,
  frame12,
  frame13,
  frame14,
  frame15,
  frame16,
  frame17,
  frame9,
  ginger,
  greentea,
  noodle,
  grp5,
  grp4,
  grp3,
  grp2,
  grp1,
  grp8,
  grp7,
  grp6,
} from '../../assets/images.jsx';
import RecipeCard from '../../components/ListCookBook';
// import { Stores, getStoreData, initDB } from '../../dbconfig/Offlinedb.jsx';
import { Modal, Button } from "react-bootstrap";

import InputWithClear from '../../components/inputbax';

interface Recipe {
  id: number;
  image: string;
  title: string;
  icon: string;
  'recipe-time': string;
  'recipe-content': string;
}

const CookBook: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [list, setList] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/snacksDetail');
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const result = await initDB();
     
          const data: Recipe[] = [
            {
              id: 2,
              image: noodle,
              title: "Snacks",
              icon: arraw,
              'recipe-time': "Created: 5 days ago",
              'recipe-content': "26 recipe’s",
            },
            {
              id: 3,
              image: ginger,
              title: "Chicken recipe",
              icon: arraw,
              'recipe-time': "Created: 5 days ago",
              'recipe-content': "26 recipe’s",
            },
            {
              id: 4,
              title: "Snacks",
              image: noodle,
              icon: arraw,
              'recipe-time': "Created: 5 days ago",
              'recipe-content': "26 recipe’s",
            },
            {
              id: 5,
              image: noodle,
              title: "Snacks",
              icon: arraw,
              'recipe-time': "Created: 5 days ago",
              'recipe-content': "26 recipe’s",
            },
          ];
          setList(data);
          console.log('Database initialized successfully');
      
      } catch (error) {
        console.error('Database fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSuccessClose = () => setShowSuccess(false);
  const handleSuccessShow = () => {
    setShow(false);
    setShowSuccess(true);
  };

  const dashboard = async () => {
    navigate('/dashboard');
  };

  const handleShopping = async () => {
    navigate('/shoppingList');
  };

  const viewShoppingList = async () => {
    navigate('/viewShoppingList');
  };

  return (
    <div className="container">
      <div className="container d-flex flex-column vh-100 p-0">
        <div className="search-bar">
          <div className="searching">
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" placeholder="search" />
          </div>
        </div>

        {/* Main content */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12">
            <div>
            <Slider {...settings}>
      <div>
        <div className="cookbookboxes">
          <div className="card-box-1">
            <div className="box-1">
              <div className="box-border">
                <p className="import">
                  <u onClick={() => document.getElementById('fileInput')?.click()}>Import Cookbook</u>
                </p>
                <p className="or-cen">or</p>
                <button className="cook-book" onClick={handleShow}>Create new cookbook</button>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </div>
            </div>
            {list.map((item) => (
              <RecipeCard
                key={item.id}
                image={item.image}
                title={item.title}
                arraw={item.icon}
                description={item['recipe-content']}
                time={item['recipe-time']}
                onClick={handleClick}
              />
            ))}
          </div>

          <div className="card-box-1 pt-4">
            {list.map((item) => (
              <RecipeCard
                key={item.id}
                image={item.image}
                title={item.title}
                arraw={item.icon}
                description={item['recipe-content']}
                time={item['recipe-time']}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Repeat the above structure for each slide */}
    </Slider>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="bottom-bar-apps">
            <nav className="fixed-bottom navbar-light pb-3">
              <div className="container d-flex justify-content-around">
                <div className="botton-navbar">
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="res-app1 res-app">
                      <img src={frame13} alt="frame13" onClick={dashboard} />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="res-app2 res-app">
                      <img src={frame10} alt="frame10" />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="res-app3 res-app">
                      <img src={frame11} alt="frame11" />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="res-app4 res-app green-icon">
                      <img src={frame12} alt="frame12" onClick={handleShopping} />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="app-pic5 res-app">
                      <img src={frame17} alt="frame17" />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="app-pic6 res-app">
                      <img src={frame14} alt="frame14" onClick={viewShoppingList} />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="app-pic7 res-app">
                      <img src={frame9} alt="frame9" />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="app-pic8 res-app">
                      <img src={frame15} alt="frame15" />
                    </div>
                  </button>
                  <button className="btn btn-light d-flex flex-column align-items-center">
                    <div className="app-pic8 res-app">
                      <img src={frame16} alt="frame16" />
                    </div>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* First Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Create new cookbook</Modal.Title>
          <i
            className="fa fa-times custom-close-icon"
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <InputWithClear
            
          />
          <div className="pt-2">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept="image/*"
              onChange={handleFileSelect}
            />
            <label className="input-button" htmlFor="fileInput">
              Upload file
            </label>
          </div>
          <Button
            className="btn btn-dark w-100 mt-2"
            onClick={handleSuccessShow}
          >
            Create
          </Button>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal show={showSuccess} onHide={handleSuccessClose} centered>
        <Modal.Header>
          <Modal.Title>Success</Modal.Title>
          <i
            className="fa fa-times custom-close-icon"
            onClick={handleSuccessClose}
            style={{ cursor: 'pointer' }}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <p className="text-center">
              New cookbook created successfully!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark w-100" onClick={handleSuccessClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CookBook;
