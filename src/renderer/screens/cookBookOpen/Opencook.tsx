import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; // Import slick-carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

import { arraw, chicken, chickenRecipe, frame10, frame11, frame12, frame13, frame14, frame15, frame16, frame17, frame9, ginger, greentea, noodle, quikmeal } from '../../assets/images';
import RecipeCard from '../../components/ListCookBook';
import './cookBookOpen.css';
import Sidebar from '../../components/Sidebar';
import RecipeList from '../../components/Recipelist';
import AddRecipe from '../AddRecipe/AddRecipe';

interface Recipe {
  image: string;
  recipeName: string;
  time: string;
  person: string;
  created: string;
  discription: string;
  recipeContent: string;
  rating: string;
}

interface Meal {
  id: number;
  mealPic: string;
  mealName: string;
  created: string;
}

const CookBookOpen: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/viewRecipe');
  };

  const handleClickss = () => {
    navigate('/AddRecipe');
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files, 'hfdhfgdfgdfg');
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file);
      // You can add further functionality here, like uploading the file to a server or displaying a preview
    }
  };

  const handleClicks = () => {
    navigate('/dashboard');
  };

  const recipeList: Recipe[] = [
    {
      image: chickenRecipe,
      recipeName: "Butter chicken",
      time: "15 min",
      person: "4 persons",
      created: "-5 days ago",
      discription: "In a bowl, mix together the ricotta cheese, milk, lemon   zest, lemon juice, and.....",
      recipeContent: "26 recipe’s",
      rating: "4.7(23 reviews)"
    },
    {
      image: noodle,
      recipeName: "noodles",
      time: "20 min",
      person: "5 persons",
      created: "-4 days ago",
      discription: "In a bowl, mix together the ricotta cheese, milk, lemon   zest, lemon juice, and.....",
      recipeContent: "26 recipe’s",
      rating: "4.6(23 reviews)"
    },
    {
      image: chickenRecipe,
      recipeName: "Butter chicken",
      time: "15 min",
      person: "4 persons",
      created: "-5 days ago",
      discription: "In a bowl, mix together the ricotta cheese, milk, lemon   zest, lemon juice, and.....",
      recipeContent: "26 recipe’s",
      rating: "4.7(23 reviews)"
    },
    {
      image: chickenRecipe,
      recipeName: "Butter chicken",
      time: "15 min",
      person: "4 persons",
      created: "-5 days ago",
      discription: "In a bowl, mix together the ricotta cheese, milk, lemon   zest, lemon juice, and.....",
      recipeContent: "26 recipe’s",
      rating: "4.7(23 reviews)"
    },
    {
      image: chickenRecipe,
      recipeName: "Butter chicken",
      time: "15 min",
      person: "4 persons",
      created: "-5 days ago",
      discription: "In a bowl, mix together the ricotta cheese, milk, lemon   zest, lemon juice, and.....",
      recipeContent: "26 recipe’s",
      rating: "4.7(23 reviews)"
    },
    {
      image: chickenRecipe,
      recipeName: "Butter chicken",
      time: "15 min",
      person: "4 persons",
      created: "-5 days ago",
      discription: "In a bowl, mix together the ricotta cheese, milk, lemon   zest, lemon juice, and.....",
      recipeContent: "26 recipe’s",
      rating: "4.7(23 reviews)"
    },
    {
      image: chickenRecipe,
      recipeName: "Butter chicken",
      time: "15 min",
      person: "4 persons",
      created: "-5 days ago",
      discription: "In a bowl, mix together the ricotta cheese, milk, lemon   zest, lemon juice, and.....",
      recipeContent: "26 recipe’s",
      rating: "4.7(23 reviews)"
    },
    // Add more recipe items here
  ];

  const data: Meal[] = [
    {
      id: 1,
      mealPic: quikmeal,
      mealName: "Quick Meals",
      created: "Created: 5 days ago"
    },
    {
      id: 2,
      mealPic: noodle,
      mealName: "snacks",
      created: "Created: 5 days ago"
    },
    {
      id: 3,
      mealPic: chicken,
      mealName: "Chicken recipe",
      created: "Created: 5 days ago"
    },
    {
      id: 4,
      mealPic: noodle,
      mealName: "snacks",
      created: "Created: 5 days ago"
    },
    {
      id: 5,
      mealPic: chicken,
      mealName: "Chicken recipe",
      created: "Created: 5 days ago"
    },
    {
      id: 6,
      mealPic: noodle,
      mealName: "snacks",
      created: "Created: 5 days ago"
    },
    {
      id: 7,
      mealPic: chicken,
      mealName: "Chicken recipe",
      created: "Created: 5 days ago"
    },
    {
      id: 8,
      mealPic: noodle,
      mealName: "snacks",
      created: "Created: 5 days ago"
    },

    // Add more meal items here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000000,
    arrows: false, // Hide the navigation arrows
  };

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed">
      <aside className="left-sidebar">
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a onClick={handleClicks} className="text-nowrap logo-img">
              <div className="d-flex gap-3 cook-book-heading-1">
                <span className="h6"><i className="fa-solid fa-chevron-left"></i></span>
                <h5> CookBook</h5>
              </div>
            </a>
            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          <div className="input-group cookbooklist rounded mb-3">
            <span className="serach-icon searchicon-2" id="search-addon-1">
              <i className="fas fa-search"></i>
            </span>
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
              aria-describedby="search-addon" />
          </div>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav" className='cookbookshopping-sidebar'>
            {data.map((meal) =>
              <Sidebar
                key={meal.id}
                image={meal.mealPic}
                mealName={meal.mealName}
                created={meal.created}
                onClick={handleClicks}
              />
            )}
          </ul>
        </nav>
      </aside>
      <div className="body-wrapper">
        <header className="app-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item d-block d-xxl-none">
                <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse"
                  href="javascript:void(0)">
                  <i className="ti ti-menu-2"></i>
                </a>
              </li>
            </ul>
            <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
              <ul className="navbar-nav flex-row align-items-center justify-content-end">
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option selected>Cuisine</option>
                      <option value="1">Cuisine</option>
                      <option value="2">Item One</option>
                      <option value="3">Item two</option>
                      <option value="4">Item three</option>
                      <option value="5">Item four</option>
                      <option value="6">Item five</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option selected>Ratings</option>
                      <option value="2">Item One</option>
                      <option value="3">Item two</option>
                      <option value="4">Item three</option>
                      <option value="5">Item four</option>
                      <option value="6">Item five</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option selected>Category</option>
                      <option value="2">Item One</option>
                      <option value="3">Item two</option>
                      <option value="4">Item three</option>
                      <option value="5">Item four</option>
                      <option value="6">Item five</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option selected>Rich fibre</option>
                      <option value="2">Healthy</option>
                      <option value="3">Veg</option>
                      <option value="4">High protein</option>
                      <option value="5">High calorie</option>
                      <option value="6">High fats</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="input-group rounded">
                    <span className="serach-icon" id="search-addon">
                      <i className="fas fa-search"></i>
                    </span>
                    <input type="search" className="form-control rounded" placeholder="Search"
                      aria-label="Search" aria-describedby="search-addon" />
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container-fluid">
          <div className="body-content">
            <div>
              <div className='open-cookbook'>
                <div className="container mt-5">
                  <Slider {...settings}>
                    <div>
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                          <div className="content-box">
                            <div className="box-border">
                              <p className="import">
                                <h6 onClick={() => document.getElementById('fileInput')?.click()}>Import Recipe</h6>
                              </p>
                              <h6>or</h6>
                              <div>
                                <a className="btn btn-primary" role="button" onClick={handleClickss}>
                                  Add new recipe
                                </a>
                                <input
                                  type="file"
                                  id="fileInput"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleFileSelect}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {recipeList.map((meal, index) =>
                          <RecipeList
                            key={index}
                            image={meal.image}
                            mealName={meal.recipeName}
                            rating={meal.rating}
                            recipeContent={meal.recipeContent}
                            discription={meal.discription}
                            person={meal.person}
                            time={meal.time}
                            created={meal.created}
                            onClick={handleClick}
                          />
                        )}
                      </div>
                    </div>
                    {/* Repeat the div with slider items as needed */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookBookOpen;
