import { useNavigate } from 'react-router-dom';
import './editRecipe.css';
import {
  arrow, butterch, butterCh, chef, chicken, deleteicom, deleteicon, edit, editButton, empty, frame10, frame11,
  frame13, frame14, frame15, frame16, frame9, fruit, fruits, milk, milkbottle, nonVeg, noodle, notes, pyramidred,
  quick, quikmeal, reciepe1, recipeVideo, share, spices, spoon, step1, step2, stepfive, stepfour, stepone,
  stepthree, storeIcon, veg, vegitable
} from '../../assets/images';
import { ChangeEvent, useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Form, InputGroup, Button, Modal } from 'react-bootstrap';
import InputWithClear from '../../components/inputbax';
import editChief from '../../assets/Images/edit-chife-pic.png';
import editnotes from '../../assets/Images/edit-notes.png';
import { X } from 'react-bootstrap-icons';


interface FileSelectProps {
  onFileSelect: (files: FileList | null) => void;
}
const RecipeEdit: React.FC = () => {
  const [showModal1, setShowModal1] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => {
    setShowModal1(false);
    setShowModal2(true);
  };

  const handleGoToRecipe = () => {
    setShowModal2(false);
    setShowModal1(true);
  };

  const navigate = useNavigate();
  const handleClicks = () => {
    navigate('/viewRecipe');
  };


 
  
  
    // Function to handle file selection
    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
      const fileInput = event.target as HTMLInputElement;
      const files = fileInput.files;
    
      // Handle file input value
      if (files) {
        // Process files or use files in your logic
        console.log(files); // Example action, replace with actual processing
      }
    };
    
    
  
  const data = [
    {
      id: 1,
      mealPic: quikmeal,
      mealName: "Quick Meals",
      created: "Created: 5 days ago"
    },
    {
      id: 2,
      mealPic: noodle,
      mealName: "Snacks",
      created: "Created: 5 days ago"
    },
    {
      id: 3,
      mealPic: chicken,
      mealName: "Chicken Recipe",
      created: "Created: 5 days ago"
    },
    {
      id: 4,
      mealPic: noodle,
      mealName: "Snacks",
      created: "Created: 5 days ago"
    },
    {
      id: 5,
      mealPic: chicken,
      mealName: "Chicken Recipe",
      created: "Created: 5 days ago"
    },
    {
      id: 6,
      mealPic: noodle,
      mealName: "Snacks",
      created: "Created: 5 days ago"
    },
    {
      id: 7,
      mealPic: chicken,
      mealName: "Chicken Recipe",
      created: "Created: 5 days ago"
    },
    {
      id: 8,
      mealPic: noodle,
      mealName: "Snacks",
      created: "Created: 5 days ago"
    },
  ];

  // useEffect(() => {
  //   const initSlickSlider = () => {
  //     const $slider = window.jQuery('.my-slider');
  //     if ($slider.length) {
  //       $slider.slick({
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         arrows: true,
  //         dots: false,
  //         speed: 300,
  //         infinite: true,
  //         autoplaySpeed: 5000,
  //         autoplay: true,
  //         responsive: [
  //           {
  //             breakpoint: 991,
  //             settings: {
  //               slidesToShow: 3,
  //             },
  //           },
  //           {
  //             breakpoint: 767,
  //             settings: {
  //               slidesToShow: 1,
  //             },
  //           },
  //         ],
  //       });
  //     }
  //   };

  //   const timer = setTimeout(() => {
  //     initSlickSlider();
  //   }, 0);

  //   return () => {
  //     clearTimeout(timer);
  //     if (window.jQuery) {
  //       window.jQuery('.my-slider').slick('unslick');
  //     }
  //   };
  // }, []);

  const [value, setValue] = useState<string>('');

  const clearInput = () => setValue('')



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
            <a onClick={handleClicks} className="text-nowrap logo-img">
              {/* <img src="../assets/images/logos/dark-logo.svg" width="180" alt="" /> */}
              <div className="d-flex gap-3 cook-book-heading-1">
                {" "}
                <span className="h6">
                  <i className="fa-solid fa-chevron-left" />
                </span>
                <h5> Cook Book</h5>
              </div>
            </a>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8" />
            </div>
          </div>
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <div className="input-group rounded mb-3">
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
            <ul id="sidebarnav " className='cookbookshopping-sidebar' >
              {data.map((meal) =>
                <Sidebar
                  image={meal.mealPic}
                  mealName={meal.mealName}
                  //  arraw={item.icon}
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
              {/* <li class="nav-item">
         <a class="nav-link nav-icon-hover" href="javascript:void(0)">
           <i class="ti ti-bell-ringing"></i>
           <div class="notification bg-primary rounded-circle"></div>
         </a>
       </li> */}
            </ul>
            <div
              className="navbar-collapse justify-content-start px-0"
              id="navbarNav"
            >
              <ul className="navbar-nav flex-row align-items-center justify-content-start ms-5">
                <li className="nav-item ms-5 ">
                  <div className='ms-5'>
                    <h5> Edit Recipe</h5>
                  </div>
                </li>
                {/* <li className="nav-item ">
                  <div>
                    <select className="form-select">
                      <option selected="">Ratings</option>
                      <option value={2}>Item One</option>
                      <option value={3}>Item two</option>
                      <option value={4}>Item three</option>
                      <option value={5}>Item four</option>
                      <option value={6}>Item five</option>
                    </select>
                  </div>
                </li> */}
                {/* <li className="nav-item ">
                  <div>
                    <select className="form-select">
                      <option selected="">Category</option>
                      <option value={2}>Item One</option>
                      <option value={3}>Item two</option>
                      <option value={4}>Item three</option>
                      <option value={5}>Item four</option>
                      <option value={6}>Item five</option>
                    </select>
                  </div>
                </li> */}
                {/* <li className="nav-item ">
                  <div>
                    <select className="form-select">
                      <option selected="">Rich fibre</option>
                      <option value={2}>Healthy</option>
                      <option value={3}>Veg</option>
                      <option value={4}>High protein</option>
                      <option value={5}>High calorie</option>
                      <option value={6}>High fats</option>
                    </select>
                  </div>
                </li> */}
                {/* <li className="nav-item ">
                  <div className="input-group rounded ">
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
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
        {/*  Header End */}
        <div className="container-fluid quik-meal-video-content">
          <div className="quik-meal-body-content">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-6 col-md-12 col-sm-12">
                <div className="recepie-detail-video">
                  <div className="col-12">
                    <InputWithClear />
                  </div>
                  <hr className="dashed-2" />
                  <div className="recepe-video-content">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        {" "}
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Description ...s"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className=" row mt-4">
                      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-112 col-sm-12">
                        <div className="vide-add">
                          <div className="video-edit-rescipe">
                            <div className="row">
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="select-cover-img">
                                  <div>
                                    <img
                                      src={butterch}
                                      alt=""
                                    />
                                  </div>
                                  <div className="edit-icons">
                                    <div className="edit-reciepe-cook">
                                      <a >
                                        {" "}
                                        <img src={editButton} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={deleteicom} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={share} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="select-cover-img">
                                  <div>
                                    <img
                                      src={butterch}
                                      alt=""
                                    />
                                  </div>
                                  <div className="edit-icons">
                                    <div className="edit-reciepe-cook">
                                      <a >
                                        {" "}
                                        <img src={editButton} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={deleteicom} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={share} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="select-cover-img">
                                  <div>
                                    <img
                                      src={butterch}
                                      alt=""
                                    />
                                  </div>
                                  <div className="edit-icons">
                                    <div className="edit-reciepe-cook">
                                      <a >
                                        {" "}
                                        <img src={editButton} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={deleteicom} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={share} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="select-cover-img">
                                  <div>
                                    <img
                                      src={butterch}
                                      alt=""
                                    />
                                  </div>
                                  <div className="edit-icons">
                                    <div className="edit-reciepe-cook">
                                      <a >
                                        {" "}
                                        <img src={editButton} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={deleteicom} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={share} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="select-cover-img">
                                  <div>
                                    <img
                                      src={butterch}
                                      alt=""
                                    />
                                  </div>
                                  <div className="edit-icons">
                                    <div className="edit-reciepe-cook">
                                      <a >
                                        {" "}
                                        <img src={editButton} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={deleteicom} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={share} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="select-cover-img">
                                  <div>
                                    <img
                                      src={butterch}
                                      alt=""
                                    />
                                  </div>
                                  <div className="edit-icons">
                                    <div className="edit-reciepe-cook">
                                      <a >
                                        {" "}
                                        <img src={editButton} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={deleteicom} />
                                      </a>
                                      <a >
                                        {" "}
                                        <img src={share} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add-images">
                            <div className="row">
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="box-border">
                                  <p className="import">
                                    <button className="btn btn-light" onClick={() => document.getElementById('fileInput1')?.click()}>
                                      Add image/Video
                                    </button>
                                  </p>
                                  <input
                                    type="file"
                                    id="fileInput1"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleFileSelect(e)}
                                  />
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="box-border">
                                  <p className="import">
                                    <button className="btn btn-light" onClick={() => document.getElementById('fileInput2')?.click()}>
                                      Add image/Video
                                    </button>
                                  </p>
                                  <input
                                    type="file"
                                    id="fileInput2"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleFileSelect(e)}
                                  />
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="box-border">
                                  <p className="import">
                                    <button className="btn btn-light" onClick={() => document.getElementById('fileInput3')?.click()}>
                                      Add image/Video
                                    </button>
                                  </p>
                                  <input
                                    type="file"
                                    id="fileInput3"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleFileSelect(e)}
                                  />
                                </div>
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm">
                                <div className="d-flex justify-content-center gap- align-items-center mt-4">
                                  <button
                                    type="button"
                                    className="btn btn-seconda"
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="recipi-details-view ">
                          <h4>Update info</h4>
                          <div className="row mt-3">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Category</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <select className="form-select">
                                      <option selected>Cuisine</option>
                                      <option value={1}>Cuisine</option>
                                      <option value={2}>Item One</option>
                                      <option value={3}>Item two</option>
                                      <option value={4}>Item three</option>
                                      <option value={5}>Item four</option>
                                      <option value={6}>Item five</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Category</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <select className="form-select">
                                      <option selected>Cuisine</option>
                                      <option value={1}>Cuisine</option>
                                      <option value={2}>Item One</option>
                                      <option value={3}>Item two</option>
                                      <option value={4}>Item three</option>
                                      <option value={5}>Item four</option>
                                      <option value={6}>Item five</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Category</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <select className="form-select">
                                      <option selected>Cuisine</option>
                                      <option value={1}>Cuisine</option>
                                      <option value={2}>Item One</option>
                                      <option value={3}>Item two</option>
                                      <option value={4}>Item three</option>
                                      <option value={5}>Item four</option>
                                      <option value={6}>Item five</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Yield</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="Amount/Unit"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Servings</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="Amount/Unit"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Prep time</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                      />
                                      <span className="input-group-text">
                                        Minutes
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Cook time</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                      />
                                      <span className="input-group-text">
                                        Minutes
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="recepie-timing-label">
                                <label>Total time</label>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                              <div className="recipi-details-1">
                                <div className="recepie-timing-label">
                                  <div>
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Amount (to the nearest dollar)"
                                      />
                                      <span className="input-group-text">
                                        Minutes
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm">
                              <div className="d-flex justify-content-center align-items-center">
                                <button
                                  type="button"
                                  onClick={handleShowModal2}
                                  className="btn btn-primary"
                                >
                                  {" "}
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recepi-steps">
                    <div className="heading-meal">
                      <div className="d-flex align-items-center gap-2">
                        <h4>Directions</h4>
                        <span>(7 steps)</span>
                      </div>
                    </div>
                    <hr className="dashed-2" />
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={empty} alt="" />
                          </div>
                          <div className="edit-icon-pic">
                            <a >
                              {" "}
                              <img src={editButton} alt="" />
                            </a>
                            <a >
                              {" "}
                              <img src={deleteicom} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="detail-tips">
                            <div className="mb-3">
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                placeholder="Description ..."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={empty} alt="" />
                          </div>
                          <div className="edit-icon-pic">
                            <a >
                              {" "}
                              <img src={editButton} alt="" />
                            </a>
                            <a >
                              {" "}
                              <img src={deleteicom} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="detail-tips">
                            <div className="mb-3">
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                placeholder="Description ..."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm">
                        <div className="d-flex justify-content-center gap-3 align-items-center mt-4">
                          <button type="button" className="btn btn-light">
                            {" "}
                            Add More step
                          </button>
                          <button type="button" onClick={handleShowModal2} className="btn btn-primary">
                            {" "}
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-steps mt-5">
                      <div className="heading-meal">
                        <div className="d-flex align-items-center gap-2">
                          <h4>Serving ideas</h4>
                        </div>
                      </div>
                      <hr className="dashed-2" />
                      <div>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          placeholder="Description ..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="recepi-steps mt-5">
                      <div className="heading-meal">
                        <div className="d-flex align-items-center gap-2">
                          <h4>Wine</h4>
                        </div>
                      </div>
                      <hr className="dashed-2" />
                      <div>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          placeholder="Description ..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="">
                  <div className="Ingredients Nutrition-detail">
                    <div className="heading-meal">
                      <h4>Ingredients</h4>
                    </div>
                    <div className="Ingredients-steps edit-page">
                      <ul>
                        <li>
                          <div className="mb-3 edit-ingredients">
                            <InputWithClear />
                          </div>
                        </li>
                        <li>
                          <div className="mb-3 edit-ingredients">
                            <InputWithClear />
                          </div>
                        </li>
                        <li>
                          <div className="mb-3 edit-ingredients">
                            <InputWithClear />
                          </div>
                        </li>
                        <li>
                          <div className="mb-3 edit-ingredients">
                            <InputWithClear />
                          </div>
                        </li>
                        <li>
                          <div className="mb-3 edit-ingredients">
                            <InputWithClear />
                          </div>
                        </li>
                        <li>
                          <div className="mb-3 edit-ingredients">
                            <InputWithClear />
                          </div>
                        </li>
                        <li>
                          <InputWithClear />
                        </li>
                        <li>
                          <div className="mb-3 edit-ingredients">
                            <InputWithClear />
                          </div>
                        </li>
                      </ul>
                      <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm">
                          <div className="d-flex justify-content-center gap-3 align-items-center mt-4">
                            <button type="button" className="btn btn-light">
                              {" "}
                              Add More step
                            </button>
                            <button type="button" onClick={handleShowModal2} className="btn btn-primary">
                              {" "}
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Author-info Nutrition-detail">
                  <div className="heading-meal">
                    <h4>Author info</h4>
                  </div>
                  <div className="author-profile text-center mt-5">
                    <div className='authore-im'>
                      <img src={editChief} alt="" />

                      <div className="edit-icons">
                        <div className="edit-reciepe-cook">
                          <a >
                            {" "}
                            <img src={editButton} />
                          </a>
                          <a >
                            {" "}
                            <img src={deleteicom} />
                          </a>
                          {/* <a >
                            {" "}
                            <img src={share} />
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 mt-4 edit-author">
                      <InputWithClear />
                    </div>

                    <div className="mb-3 mt-4 edit-author">
                      <InputWithClear />
                    </div>
                    <div className="mb-3 mt-4 edit-author">
                      <InputWithClear />
                    </div>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm">
                        <div className="d-flex justify-content-center align-items-center mt-4">
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Notes Nutrition-detail">
                  <div className="heading-meal">
                    <h4>Notes</h4>
                    <div>

                    </div>
                  </div>

                  <div className='authore-im mt-3'>
                    <img src={editnotes} alt="" />


                    <div className="edit-icons">
                      <div className="edit-reciepe-cook">
                        <a>
                          {" "}
                          <img src={editButton} />
                        </a>
                        <a >
                          {" "}
                          <img src={deleteicom} />
                        </a>

                      </div>
                    </div>
                  </div>
                  <div className="copy-right mt-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                    />
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm">
                        <div className="d-flex justify-content-center align-items-center mt-4">
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}
          <>
            {/* Modal 1 */}
            {/* <Modal
              show={showModal1}
              onHide={handleCloseModal1}
              centered
              size="sm"
            >
              <Modal.Header closeButton>
                
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
            </Modal> */}

            {/* Modal 2 */}
            <Modal
              show={showModal2}
              onHide={handleCloseModal2}
              centered
              size="sm"
            >
              <Modal.Header >
                <i
                  className="fa fa-times custom-close-icon"
                  onClick={handleCloseModal2}
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
                  <Button variant="primary" onClick={handleCloseModal2}>
                    Go To cookbook
                  </Button>
                </div>

              </Modal.Body>
            </Modal>
          </>
        </div>
      </div>
    </div>




  );


};
export default RecipeEdit;