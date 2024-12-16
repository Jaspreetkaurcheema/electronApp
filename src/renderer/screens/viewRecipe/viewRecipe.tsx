import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import assets
import {
  arrow, butterCh, chef, chicken, deleteicon, edit, frame10, frame11, frame13,
  frame14, frame15, frame16, frame9, fruit, fruits, milk, milkbottle, nonVeg,
  noodle, notes, pyramidred, quick, quikmeal, reciepe1, recipeVideo, spices,
  spoon, step1, step2, stepfive, stepfour, stepone, stepthree, storeIcon,
  veg, vegitable
} from '../../assets/images';

// Define the type for each meal item
interface MealItem {
  id: number;
  mealPic: string;
  mealName: string;
  created: string;
}

const RecipeView: React.FC = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/editRecipe');
  };

  const handleClicks = () => {
    navigate('/snacksDetail');
  };

  const data: MealItem[] = [
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

  useEffect(() => {
    // Ensure jQuery is available and the element is not null
    const initSlickSlider = () => {
      // const $slider = window.jQuery('.my-slider');
      // if ($slider.length) {
      //   $slider.slick({
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     arrows: true,
      //     dots: false,
      //     speed: 300,
      //     infinite: true,
      //     autoplaySpeed: 5000,
      //     autoplay: true,
      //     responsive: [
      //       {
      //         breakpoint: 991,
      //         settings: {
      //           slidesToShow: 3,
      //         },
      //       },
      //       {
      //         breakpoint: 767,
      //         settings: {
      //           slidesToShow: 1,
      //         },
      //       },
      //     ],
      //   });
      // }
    };

    // Use setTimeout to ensure the DOM is fully rendered
    const timer = setTimeout(() => {
      initSlickSlider();
    }, 0);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };



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
                <h5> Quick Meals</h5>
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
            <ul id="sidebarnav " className='cookbookshopping-sidebar'>
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
              className="navbar-collapse justify-content-end px-0"
              id="navbarNav"
            >
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option value="" selected>
                        Cuisine
                      </option>
                      <option value={1}>Cuisine</option>
                      <option value={2}>Item One</option>
                      <option value={3}>Item two</option>
                      <option value={4}>Item three</option>
                      <option value={5}>Item four</option>
                      <option value={6}>Item five</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option value="" selected>
                        Ratings
                      </option>
                      <option value={2}>Item One</option>
                      <option value={3}>Item two</option>
                      <option value={4}>Item three</option>
                      <option value={5}>Item four</option>
                      <option value={6}>Item five</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option value="" selected>
                        Category
                      </option>
                      <option value={2}>Item One</option>
                      <option value={3}>Item two</option>
                      <option value={4}>Item three</option>
                      <option value={5}>Item four</option>
                      <option value={6}>Item five</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <select className="form-select">
                      <option value="" selected>
                        Rich fibre
                      </option>
                      <option value={2}>Healthy</option>
                      <option value={3}>Veg</option>
                      <option value={4}>High protein</option>
                      <option value={5}>High calorie</option>
                      <option value={6}>High fats</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="input-group rounded">
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
                </li>
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
                  <div className="heading-meal">
                    <h3>Butter Chicken</h3>
                    <div className="">
                      <button type="button" className="btn btn-light sharing">
                        {" "}
                        <span>
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
                          </svg>{" "}
                        </span>
                        Share
                      </button>
                      <button type="button" className="btn btn-light">
                        {" "}
                        <span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_202_1536)">
                              <path
                                d="M14.3333 12H12.3333C12.1493 12 12 11.8507 12 11.6667C12 11.4827 12.1493 11.3333 12.3333 11.3333H14.3333C14.8847 11.3333 15.3333 10.8847 15.3333 10.3333V5.66667C15.3333 5.11533 14.8847 4.66667 14.3333 4.66667H1.66667C1.11533 4.66667 0.666667 5.11533 0.666667 5.66667V10.3333C0.666667 10.8847 1.11533 11.3333 1.66667 11.3333H3.66667C3.85067 11.3333 4 11.4827 4 11.6667C4 11.8507 3.85067 12 3.66667 12H1.66667C0.747333 12 0 11.252 0 10.3333V5.66667C0 4.748 0.747333 4 1.66667 4H14.3333C15.2527 4 16 4.748 16 5.66667V10.3333C16 11.252 15.2527 12 14.3333 12Z"
                                fill="#268EFF"
                              />
                              <path
                                d="M9.66683 13.9997H5.66683C5.48283 13.9997 5.3335 13.8503 5.3335 13.6663C5.3335 13.4823 5.48283 13.333 5.66683 13.333H9.66683C9.85083 13.333 10.0002 13.4823 10.0002 13.6663C10.0002 13.8503 9.85083 13.9997 9.66683 13.9997Z"
                                fill="#268EFF"
                              />
                              <path
                                d="M9.66683 12.6667H5.66683C5.48283 12.6667 5.3335 12.5173 5.3335 12.3333C5.3335 12.1493 5.48283 12 5.66683 12H9.66683C9.85083 12 10.0002 12.1493 10.0002 12.3333C10.0002 12.5173 9.85083 12.6667 9.66683 12.6667Z"
                                fill="#268EFF"
                              />
                              <path
                                d="M7.00016 11.3337H5.66683C5.48283 11.3337 5.3335 11.1843 5.3335 11.0003C5.3335 10.8163 5.48283 10.667 5.66683 10.667H7.00016C7.18416 10.667 7.3335 10.8163 7.3335 11.0003C7.3335 11.1843 7.18416 11.3337 7.00016 11.3337Z"
                                fill="#268EFF"
                              />
                              <path
                                d="M12.3335 4.66667C12.1495 4.66667 12.0002 4.51733 12.0002 4.33333V1.66667C12.0002 1.11533 11.5515 0.666667 11.0002 0.666667H5.00016C4.44883 0.666667 4.00016 1.11533 4.00016 1.66667V4.33333C4.00016 4.51733 3.85083 4.66667 3.66683 4.66667C3.48283 4.66667 3.3335 4.51733 3.3335 4.33333V1.66667C3.3335 0.748 4.08083 0 5.00016 0H11.0002C11.9195 0 12.6668 0.748 12.6668 1.66667V4.33333C12.6668 4.51733 12.5175 4.66667 12.3335 4.66667Z"
                                fill="#268EFF"
                              />
                              <path
                                d="M11.0002 16.0003H5.00016C4.08083 16.0003 3.3335 15.2523 3.3335 14.3337V9.00033C3.3335 8.81633 3.48283 8.66699 3.66683 8.66699H12.3335C12.5175 8.66699 12.6668 8.81633 12.6668 9.00033V14.3337C12.6668 15.2523 11.9195 16.0003 11.0002 16.0003ZM4.00016 9.33366V14.3337C4.00016 14.885 4.44883 15.3337 5.00016 15.3337H11.0002C11.5515 15.3337 12.0002 14.885 12.0002 14.3337V9.33366H4.00016Z"
                                fill="#268EFF"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_202_1536">
                                <rect width={16} height={16} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>{" "}
                        </span>{" "}
                        Print{" "}
                      </button>
                    </div>
                  </div>
                  <hr className="dashed-2" />
                  <div className="recepe-video-content">
                    <p>
                      Butter chicken, traditionally known as murga makhani, is
                      an Indian dish originating in Delhi. It is&nbsp;a type of
                      curry made from chicken with a spiced tomato and
                      butter(makhan) sauce. Its sauce is known for its rich
                      texture.
                    </p>
                    <div className=" row mt-4">
                      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-112 col-sm-12">
                        <div>
                          <div className="ratio ratio-16x9">
                            <iframe
                              src="https://www.youtube.com/embed/RKNogWbAivY"
                              title="YouTube video"
                              className="video-screen"
                              allowFullScreen
                            />
                          </div>
                          <div className='mt-3'>

                            <Slider {...settings}>
                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>

                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="butter-chicken-slider">
                                  <img
                                    src={butterCh}
                                    alt="buteter Chicken"
                                  />
                                </div>
                              </div>

                            </Slider>
                          </div>



                        </div>
                      </div>
                      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="recipi-details-view">
                          <div className="text-end">
                            <a
                              className="btn btn-light"
                              //// href="./edit-recipe.html"
                              role="button"
                              onClick={handleEdit}
                            >
                              {" "}
                              <span>
                                {" "}
                                <svg
                                  width={14}
                                  height={14}
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                    fill="#333333"
                                  />
                                  <path
                                    d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                    fill="#333333"
                                  />
                                  <path
                                    d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                    fill="#333333"
                                  />
                                  <path
                                    d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                    fill="#333333"
                                  />
                                  <path
                                    d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                    fill="#333333"
                                  />
                                  <path
                                    d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                    fill="#333333"
                                  />
                                </svg>
                              </span>
                              Edit
                            </a>
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className="">
                                    <span>
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r={11}
                                          stroke="#333333"
                                          strokeWidth={2}
                                        />
                                        <rect
                                          x="11.5876"
                                          y="4.06267"
                                          width="0.588235"
                                          height="9.29412"
                                          rx="0.294118"
                                          fill="#333333"
                                          stroke="#333333"
                                          strokeWidth="0.588235"
                                        />
                                        <rect
                                          x="11.5876"
                                          y="13.3563"
                                          width="0.588235"
                                          height="6.47059"
                                          rx="0.294118"
                                          transform="rotate(-90 11.5876 13.3563)"
                                          fill="#333333"
                                          stroke="#333333"
                                          strokeWidth="0.588235"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>15 min</h6>
                                    <p>Prep Time</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className="">
                                    <span>
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r={11}
                                          stroke="#333333"
                                          strokeWidth={2}
                                        />
                                        <rect
                                          x="11.5876"
                                          y="4.06267"
                                          width="0.588235"
                                          height="9.29412"
                                          rx="0.294118"
                                          fill="#333333"
                                          stroke="#333333"
                                          strokeWidth="0.588235"
                                        />
                                        <rect
                                          x="11.5876"
                                          y="13.3563"
                                          width="0.588235"
                                          height="6.47059"
                                          rx="0.294118"
                                          transform="rotate(-90 11.5876 13.3563)"
                                          fill="#333333"
                                          stroke="#333333"
                                          strokeWidth="0.588235"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>15 min</h6>
                                    <p>Cook Time</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className="">
                                    <span>
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r={11}
                                          stroke="#333333"
                                          strokeWidth={2}
                                        />
                                        <rect
                                          x="11.5876"
                                          y="4.06267"
                                          width="0.588235"
                                          height="9.29412"
                                          rx="0.294118"
                                          fill="#333333"
                                          stroke="#333333"
                                          strokeWidth="0.588235"
                                        />
                                        <rect
                                          x="11.5876"
                                          y="13.3563"
                                          width="0.588235"
                                          height="6.47059"
                                          rx="0.294118"
                                          transform="rotate(-90 11.5876 13.3563)"
                                          fill="#333333"
                                          stroke="#333333"
                                          strokeWidth="0.588235"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>15 min</h6>
                                    <p>Total Time</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className="">
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M21.3202 24.0002H15.8802C14.4002 24.0002 13.2002 22.8002 13.2002 21.3202V14.0002C13.2002 13.5602 13.5602 13.2002 14.0002 13.2002H21.3202C22.8002 13.2002 24.0002 14.4002 24.0002 15.8802V21.3202C24.0002 22.8002 22.8002 24.0002 21.3202 24.0002ZM14.8002 14.8002V21.3202C14.8002 21.9202 15.2802 22.4002 15.8802 22.4002H21.3202C21.9202 22.4002 22.4002 21.9202 22.4002 21.3202V15.8802C22.4002 15.2802 21.9202 14.8002 21.3202 14.8002H14.8002Z"
                                          fill="#333333"
                                        />
                                        <path
                                          d="M8.12 24.0002H2.68C1.2 24.0002 0 22.8002 0 21.3202V15.8802C0 14.4002 1.2 13.2002 2.68 13.2002H10C10.44 13.2002 10.8 13.5602 10.8 14.0002V21.3202C10.8 22.8002 9.6 24.0002 8.12 24.0002ZM2.68 14.8002C2.08 14.8002 1.6 15.2802 1.6 15.8802V21.3202C1.6 21.9202 2.08 22.4002 2.68 22.4002H8.12C8.72 22.4002 9.2 21.9202 9.2 21.3202V14.8002H2.68Z"
                                          fill="#333333"
                                        />
                                        <path
                                          d="M21.3202 10.8H14.0002C13.5602 10.8 13.2002 10.44 13.2002 10V2.68C13.2002 1.2 14.4002 0 15.8802 0H21.3202C22.8002 0 24.0002 1.2 24.0002 2.68V8.12C24.0002 9.6 22.8002 10.8 21.3202 10.8ZM14.8002 9.2H21.3202C21.9202 9.2 22.4002 8.72 22.4002 8.12V2.68C22.4002 2.08 21.9202 1.6 21.3202 1.6H15.8802C15.2802 1.6 14.8002 2.08 14.8002 2.68V9.2Z"
                                          fill="#333333"
                                        />
                                        <path
                                          d="M10 10.8H2.68C1.2 10.8 0 9.6 0 8.12V2.68C0 1.2 1.2 0 2.68 0H8.12C9.6 0 10.8 1.2 10.8 2.68V10C10.8 10.44 10.44 10.8 10 10.8ZM2.68 1.6C2.08 1.6 1.6 2.08 1.6 2.68V8.12C1.6 8.72 2.08 9.2 2.68 9.2H9.2V2.68C9.2 2.08 8.72 1.6 8.12 1.6H2.68Z"
                                          fill="#333333"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>Indian Curry</h6>
                                    <p>Category</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className="nonvegiocn">
                                    <span>
                                      <svg
                                        width={19}
                                        height={24}
                                        viewBox="0 0 19 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.94589 16.9824C9.94589 16.7235 9.7335 16.5137 9.47148 16.5137C9.20946 16.5137 8.99707 16.7235 8.99707 16.9824C8.99707 17.2413 9.20946 17.4512 9.47148 17.4512C9.7335 17.4512 9.94589 17.2413 9.94589 16.9824Z"
                                          fill="#333333"
                                        />
                                        <path
                                          d="M16.2545 20.6771C15.663 20.7508 14.7194 20.6976 13.5825 20.0247C12.7963 19.5594 12.0087 19.4223 11.2416 19.6171C10.45 19.8182 9.86035 20.336 9.49999 20.743C9.13962 20.336 8.54993 19.8182 7.75828 19.6171C6.99125 19.4223 6.20363 19.5594 5.41739 20.0247C4.28056 20.6976 3.33676 20.7508 2.74541 20.6771C2.38163 20.6315 2.03194 20.8207 1.87462 21.1475C1.7156 21.4778 1.78586 21.8545 2.05357 22.1072C2.98541 22.9865 4.41538 24.0002 6.05448 24.0002C6.15287 24.0002 6.25212 23.9965 6.35203 23.9889C7.49062 23.9028 8.54742 23.3226 9.49999 22.263C10.4526 23.3225 11.5094 23.9028 12.6479 23.9889C12.7479 23.9965 12.847 24.0002 12.9455 24.0002C14.5844 24.0002 16.0146 22.9865 16.9464 22.1072C17.2142 21.8545 17.2844 21.4778 17.1254 21.1475C16.9679 20.8207 16.618 20.6316 16.2545 20.6771ZM6.2794 23.0524C4.98705 23.1501 3.78342 22.3803 2.93849 21.6361C3.67611 21.6726 4.7155 21.5352 5.90594 20.8305C6.46408 20.5002 7.00577 20.3977 7.5159 20.5254C8.17154 20.6898 8.65805 21.1943 8.90583 21.5064C8.08932 22.4624 7.20696 22.9821 6.2794 23.0524ZM12.7205 23.0524C11.793 22.9822 10.9108 22.4626 10.0944 21.5067C10.3421 21.1958 10.8281 20.692 11.4783 20.5268C11.9902 20.3968 12.5337 20.4989 13.0939 20.8305C14.2844 21.5351 15.3238 21.6724 16.0614 21.636C15.2165 22.3803 14.0131 23.1507 12.7205 23.0524Z"
                                          fill="#333333"
                                        />
                                        <path
                                          d="M15.1075 2.19792C14.607 2.19792 14.1042 2.29603 13.6484 2.47908C12.8734 0.937172 11.3177 0 9.47424 0C7.63172 0 6.07669 0.936328 5.30127 2.47673C4.85404 2.29336 4.37526 2.19792 3.8925 2.19792C1.70978 2.19792 0 3.95578 0 6.19988C0 7.90045 1.00376 9.42863 2.48013 10.0381V16.983C2.48013 17.2424 2.69295 17.4527 2.95549 17.4527H7.31633C7.57887 17.4527 7.79169 17.2424 7.79169 16.983C7.79169 16.7236 7.57887 16.5133 7.31633 16.5133H3.43085V15.1725H15.5176V16.5133H11.6266C11.364 16.5133 11.1512 16.7236 11.1512 16.983C11.1512 17.2424 11.364 17.4527 11.6266 17.4527H15.993C16.2555 17.4527 16.4684 17.2424 16.4684 16.983V10.0584C17.9728 9.46355 19 7.92009 19 6.19988C19 3.95578 17.2902 2.19792 15.1075 2.19792ZM15.9047 9.26025C15.8945 9.26334 15.8847 9.26723 15.8749 9.27094C15.1144 9.46097 14.3428 9.3735 13.6971 9.02175C13.4671 8.89636 13.178 8.97909 13.0513 9.20625C12.9245 9.43341 13.0082 9.71906 13.2381 9.84431C13.8035 10.1523 14.4378 10.3092 15.0894 10.3092C15.2315 10.3092 15.3745 10.3014 15.5177 10.2864V14.2332H11.918V11.7866C11.918 11.5272 11.7052 11.3169 11.4426 11.3169C11.1801 11.3169 10.9673 11.5272 10.9673 11.7866V14.2332H7.97557V11.7866C7.97557 11.5272 7.76275 11.3169 7.50021 11.3169C7.23767 11.3169 7.02485 11.5272 7.02485 11.7866V14.2332H3.43085V10.2805C3.5913 10.2993 3.75146 10.3092 3.91062 10.3092C4.56223 10.3092 5.19661 10.1523 5.76197 9.84431C5.99187 9.71911 6.07551 9.43345 5.94874 9.20625C5.82193 8.97909 5.53283 8.89631 5.30297 9.02175C4.65801 9.37303 3.88761 9.46059 3.12813 9.27164C3.11736 9.26752 3.1065 9.26363 3.09535 9.2602C1.83265 8.8763 0.950769 7.61784 0.950769 6.19978C0.950769 4.48242 2.24297 3.1372 3.8926 3.1372C4.38228 3.1372 4.86747 3.27033 5.29557 3.52219C5.41712 3.59367 5.56461 3.60806 5.69788 3.56119C5.83118 3.51441 5.93646 3.41133 5.98508 3.28012C6.52008 1.83623 7.85707 0.939281 9.47424 0.939281C11.0914 0.939281 12.4284 1.83623 12.9634 3.28012C13.012 3.41133 13.1173 3.51441 13.2506 3.56119C13.3839 3.60802 13.5314 3.59367 13.6529 3.52219C14.0688 3.2775 14.599 3.1372 15.1074 3.1372C16.757 3.1372 18.0492 4.48247 18.0492 6.19978C18.0493 7.61789 17.1674 8.87639 15.9047 9.26025Z"
                                          fill="#333333"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>Indian</h6>
                                    <p>Cuisine</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className="">
                                    <span>
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M16.6989 9.27993C16.6497 9.23102 16.5895 9.19469 16.5233 9.17404C16.4571 9.15338 16.3869 9.149 16.3187 9.16128C16.0414 9.21211 15.1942 9.37558 14.3255 9.62374C14.6179 9.17585 14.7735 8.65255 14.7734 8.1177C14.7734 6.72948 12.601 3.54428 12.3532 3.18561C12.3117 3.13152 12.2583 3.08771 12.1972 3.05755C12.136 3.0274 12.0688 3.01172 12.0006 3.01172C11.9324 3.01172 11.8652 3.0274 11.8041 3.05755C11.7429 3.08771 11.6895 3.13152 11.648 3.18561C11.4003 3.54428 9.22785 6.72946 9.22785 8.1177C9.22777 8.65255 9.38339 9.17585 9.67571 9.62374C8.80709 9.37561 7.95989 9.21212 7.68255 9.16128C7.61432 9.14883 7.5441 9.15311 7.47789 9.17376C7.41168 9.19441 7.35147 9.23082 7.30242 9.27985C7.25337 9.32888 7.21694 9.38908 7.19626 9.45528C7.17558 9.52149 7.17127 9.59172 7.18369 9.65995C7.26755 10.1186 7.65921 12.1308 8.23365 13.2264C7.98594 13.1744 7.79015 13.1371 7.68234 13.1174C7.61424 13.1057 7.54434 13.1105 7.4785 13.1314C7.41266 13.1524 7.35279 13.1888 7.30394 13.2376C7.25509 13.2865 7.21867 13.3464 7.19775 13.4122C7.17682 13.4781 7.172 13.548 7.18369 13.6161C7.28392 14.1643 7.82295 16.9377 8.58964 17.7044C8.97895 18.0951 9.49909 18.3278 10.0498 18.3577C10.6005 18.3876 11.1428 18.2126 11.5721 17.8663V20.5719C11.5738 20.6845 11.6197 20.7918 11.6999 20.8708C11.7801 20.9498 11.8881 20.994 12.0006 20.994C12.1132 20.994 12.2212 20.9498 12.3014 20.8708C12.3816 20.7918 12.4275 20.6844 12.4292 20.5719V17.8663C12.8585 18.2126 13.4007 18.3876 13.9514 18.3577C14.5021 18.3278 15.0223 18.0951 15.4116 17.7044C16.1783 16.9377 16.7173 14.1643 16.8175 13.6161C16.8375 12.9284 16.2185 13.1288 15.7676 13.2264C16.342 12.1309 16.7337 10.1187 16.8175 9.65997C16.83 9.59175 16.8257 9.52153 16.805 9.45534C16.7844 9.38914 16.7479 9.32895 16.6989 9.27993ZM12.0006 4.19884C12.8539 5.50692 13.9163 7.37921 13.9163 8.11769C13.9167 8.36952 13.8674 8.61895 13.7713 8.85171C13.6752 9.08448 13.5341 9.29601 13.3562 9.47422C13.1783 9.65242 12.967 9.79379 12.7344 9.89025C12.5018 9.98671 12.2524 10.0364 12.0006 10.0364C11.7488 10.0364 11.4995 9.98671 11.2668 9.89025C11.0342 9.79379 10.8229 9.65242 10.645 9.47422C10.4671 9.29601 10.326 9.08448 10.2299 8.85171C10.1338 8.61895 10.0845 8.36952 10.0849 8.11769C10.0849 7.37921 11.1473 5.50694 12.0006 4.19884ZM8.15229 10.13C9.309 10.3809 10.7884 10.7975 11.1644 11.1733C11.4207 11.4354 11.5633 11.788 11.5612 12.1546C11.5592 12.5212 11.4126 12.8721 11.1535 13.1313C10.8943 13.3905 10.5433 13.537 10.1768 13.5391C9.81022 13.5411 9.45766 13.3986 9.19559 13.1423C8.81959 12.7662 8.40318 11.2868 8.15229 10.13ZM11.1644 17.0984C10.9031 17.3589 10.5491 17.5052 10.18 17.5052C9.81099 17.5052 9.457 17.3589 9.19561 17.0984C8.81959 16.7223 8.40318 15.2427 8.15229 14.0861C9.30882 14.337 10.7884 14.7534 11.1644 15.1294C11.425 15.3908 11.5714 15.7448 11.5714 16.1139C11.5714 16.483 11.425 16.837 11.1644 17.0984ZM12.2308 14.5234C12.1465 14.611 12.0695 14.7053 12.0006 14.8054C11.9317 14.7053 11.8547 14.611 11.7704 14.5234C11.6032 14.3702 11.4138 14.2429 11.2087 14.1461C11.5272 13.992 11.8001 13.7577 12.0006 13.4663C12.2011 13.7578 12.474 13.992 12.7925 14.1461C12.5874 14.2429 12.398 14.3702 12.2308 14.5234ZM15.8489 14.0861C15.598 15.2427 15.1816 16.7224 14.8056 17.0984C14.5435 17.3546 14.191 17.497 13.8245 17.4949C13.458 17.4928 13.1071 17.3463 12.848 17.0871C12.5889 16.828 12.4423 16.4771 12.4402 16.1106C12.4382 15.7441 12.5806 15.3915 12.8368 15.1294C13.2128 14.7534 14.6924 14.337 15.8489 14.0861ZM14.8056 13.1423C14.5435 13.3985 14.191 13.5409 13.8245 13.5388C13.458 13.5367 13.1071 13.3902 12.848 13.131C12.5889 12.8719 12.4423 12.521 12.4402 12.1545C12.4382 11.788 12.5806 11.4354 12.8368 11.1733C13.2128 10.7975 14.6922 10.3809 15.8489 10.13C15.598 11.2868 15.1816 12.7662 14.8056 13.1423Z"
                                          fill="#333333"
                                        />
                                        <path
                                          d="M21.0682 4.1452L21.7308 4.22702C21.8427 4.239 21.9548 4.20653 22.0429 4.13661C22.131 4.06669 22.1882 3.96492 22.2019 3.85326C22.2157 3.7416 22.1851 3.629 22.1166 3.53974C22.0481 3.45049 21.9472 3.39174 21.8358 3.37616L20.1953 3.17381C20.0827 3.16066 19.9693 3.19242 19.8799 3.26221C19.7904 3.332 19.7321 3.43421 19.7174 3.54671L19.5149 5.18733C19.5032 5.29901 19.5359 5.41079 19.6058 5.49864C19.6757 5.5865 19.7773 5.64341 19.8888 5.65717C20.0002 5.67092 20.1126 5.64041 20.2017 5.57219C20.2909 5.50397 20.3498 5.40349 20.3657 5.29233L20.4358 4.72424C26.6511 11.8433 21.4625 23.1789 12.0006 23.1428C9.82354 23.1448 7.69393 22.5069 5.87658 21.3082C5.78162 21.2461 5.66592 21.2242 5.55483 21.2473C5.44374 21.2704 5.34633 21.3365 5.28395 21.4313C5.22158 21.5261 5.19933 21.6418 5.22209 21.7529C5.24484 21.8641 5.31075 21.9617 5.40534 22.0243C7.36268 23.3151 9.65615 24.0021 12.0007 24C22.2053 24.0366 27.7841 11.8068 21.0682 4.1452Z"
                                          fill="#333333"
                                        />
                                        <path
                                          d="M4.03744 18.3018C3.98133 18.2966 3.92474 18.3026 3.87096 18.3194C3.81718 18.3363 3.76727 18.3636 3.72413 18.3999C3.68098 18.4361 3.64546 18.4806 3.61961 18.5307C3.59376 18.5807 3.5781 18.6354 3.57354 18.6916L3.52682 19.2309C-2.63247 12.1013 2.56668 0.820169 12.0008 0.85729C14.1778 0.855219 16.3074 1.49318 18.1248 2.69184C18.2197 2.75394 18.3354 2.77586 18.4465 2.75279C18.5576 2.72972 18.655 2.66353 18.7174 2.56875C18.7798 2.47397 18.802 2.35832 18.7793 2.24715C18.7565 2.13599 18.6906 2.03839 18.596 1.97574C16.6387 0.68502 14.3452 -0.00199195 12.0007 9.60776e-05C1.88262 -0.0392577 -3.72842 12.0199 2.81252 19.7148L2.20504 19.6297C2.0925 19.614 1.9783 19.6436 1.88757 19.712C1.79684 19.7805 1.73702 19.8821 1.72126 19.9947C1.7055 20.1072 1.73509 20.2214 1.80353 20.3122C1.87197 20.4029 1.97365 20.4627 2.08619 20.4785L3.80539 20.7194C3.863 20.7275 3.92165 20.7237 3.97777 20.7084C4.03388 20.6931 4.08629 20.6665 4.1318 20.6302C4.1773 20.594 4.21494 20.5489 4.24243 20.4976C4.26992 20.4463 4.28668 20.39 4.29169 20.332L4.42728 18.7657C4.43217 18.7096 4.42597 18.6532 4.40902 18.5995C4.39207 18.5458 4.36472 18.496 4.32851 18.4529C4.29231 18.4098 4.24796 18.3743 4.19802 18.3484C4.14808 18.3224 4.09351 18.3066 4.03744 18.3018Z"
                                          fill="#333333"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>00</h6>
                                    <p>yield</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className="">
                                    <span>
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <mask
                                          id="mask0_224_1166"
                                          style={{ maskType: "luminance" }}
                                          maskUnits="userSpaceOnUse"
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        >
                                          <path
                                            d="M0 1.90735e-06H24V24H0V1.90735e-06Z"
                                            fill="white"
                                          />
                                        </mask>
                                        <g mask="url(#mask0_224_1166)">
                                          <path
                                            d="M5.47048 18.9145C5.47048 18.9145 5.43509 17.3926 6.17488 16.1264C6.63941 15.3314 6.9343 14.4488 7.00822 13.5309L7.16366 11.601C7.1825 11.3667 7.37816 11.1862 7.61319 11.1862C8.33427 11.1862 8.93638 11.7378 8.99713 12.4563C9.12083 13.9204 9.18547 15.7524 10.2665 16.2288C11.402 16.7291 13.9936 13.9476 13.9936 13.9476L15.1974 12.047C15.5369 11.511 16.1271 11.1862 16.7615 11.1862C17.21 11.1862 17.4978 11.6626 17.2893 12.0596L16.5526 13.4615C16.2177 14.0991 15.8223 14.703 15.3719 15.2651L13.6946 17.3585C13.2054 17.9691 12.6604 18.5312 12.0672 19.0381"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M6.90903 23.5181L3.64789 20.2569C3.50539 20.1144 3.50539 19.8834 3.64789 19.7409L4.71336 18.6754C4.85586 18.5329 5.08691 18.5329 5.22941 18.6754L8.49055 21.9366C8.63305 22.0791 8.63305 22.3101 8.49055 22.4527L7.42508 23.5181C7.28258 23.6606 7.05153 23.6606 6.90903 23.5181Z"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M4.90967 19.9375L5.24853 20.2764"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M16.8557 9.99918H21.5233C21.9742 9.99918 22.3397 10.3647 22.3397 10.8155C22.3397 11.2664 21.9742 11.6318 21.5233 11.6318H2.81628C2.36544 11.6318 2 11.2664 2 10.8155C2 10.3647 2.36544 9.99918 2.81628 9.99918H15.4494"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M5.5648 4.87863C4.33325 6.13507 3.46672 7.75066 3.13672 9.55371"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M20.8633 9.55371C20.0951 5.35638 16.4192 2.17502 12 2.17502C9.98505 2.17502 8.12473 2.83634 6.62402 3.95374"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M12.9174 2.22168V1.29257C12.9174 0.785898 12.5066 0.375133 12 0.375133C11.4932 0.375133 11.0825 0.785898 11.0825 1.29257V2.22168"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M15.269 11.9427L15.3883 11.7683C15.5574 11.5214 15.3807 11.1861 15.0815 11.1861C14.2509 11.1861 13.4847 11.6337 13.077 12.3573L12.2697 13.7899L10.0449 16.1016"
                                            stroke="#333333"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>2</h6>
                                    <p>Servings</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="recipi-details">
                                <div className="recepie-timing">
                                  <div className=" nonvegiocn">
                                    <span className=''>
                                      <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="0.5"
                                          y="0.5"
                                          width={23}
                                          height={23}
                                          stroke="#F54D4D"
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r={6}
                                          fill="#F54D4D"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="">
                                    <h6>Non-Veg</h6>
                                    <p>Recipe Type</p>
                                  </div>
                                </div>
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
                            <img src={reciepe1} alt="" />
                          </div>
                          <div className="steps-count">
                            <span>
                              <svg
                                width={48}
                                height={36}
                                viewBox="0 0 48 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1718 25.9219V34.6089C18.2045 35.6424 16.9578 36.3564 16.0661 35.8134L0.708008 27.1274L1.40645 24.5332H16.7655C17.5418 24.5332 18.1718 25.1554 18.1718 25.9219Z"
                                  fill="#BD1212"
                                />
                                <path
                                  d="M48 16.5313L24 21.2381L0 16.5313V7.14067C0 6.37409 0.63 5.75194 1.40625 5.75194H30.9159V1.38855C30.9159 0.817314 31.2694 0.305336 31.8075 0.0961002C32.3456 -0.11221 32.9578 0.0248121 33.3516 0.442357L47.6231 15.5851C47.8744 15.8517 48 16.1915 48 16.5313Z"
                                  fill="#FF5555"
                                />
                                <path
                                  d="M48 16.5312C48 16.871 47.8744 17.2108 47.6231 17.4774L33.3516 32.6202C32.5324 33.5452 30.8757 32.8964 30.9159 31.674V27.3106H1.40625C0.63 27.3106 0 26.6884 0 25.9219V16.5312H48Z"
                                  fill="#E01010"
                                />
                                <path
                                  d="M7.82955 14.3422C7.77841 13.9104 7.57102 13.5752 7.20739 13.3366C6.84375 13.0979 6.39773 12.9786 5.86932 12.9786C5.48295 12.9786 5.14489 13.0411 4.85511 13.1661C4.56818 13.2911 4.34375 13.463 4.18182 13.6817C4.02273 13.9005 3.94318 14.1491 3.94318 14.4275C3.94318 14.6604 3.99858 14.8607 4.10938 15.0283C4.22301 15.1931 4.3679 15.3309 4.54403 15.4417C4.72017 15.5496 4.90483 15.6391 5.09801 15.7101C5.29119 15.7783 5.46875 15.8337 5.63068 15.8763L6.51705 16.115C6.74432 16.1746 6.99716 16.257 7.27557 16.3621C7.55682 16.4672 7.82528 16.6107 8.08097 16.7925C8.33949 16.9715 8.55256 17.2016 8.72017 17.4829C8.88778 17.7641 8.97159 18.1093 8.97159 18.5184C8.97159 18.99 8.84801 19.4161 8.60085 19.7968C8.35653 20.1775 7.99858 20.48 7.52699 20.7045C7.05824 20.9289 6.48864 21.0411 5.81818 21.0411C5.19318 21.0411 4.65199 20.9403 4.1946 20.7385C3.74006 20.5368 3.3821 20.2556 3.12074 19.8948C2.86222 19.534 2.71591 19.115 2.68182 18.6377H3.77273C3.80114 18.9672 3.91193 19.24 4.10511 19.4559C4.30114 19.6689 4.5483 19.828 4.84659 19.9331C5.14773 20.0354 5.47159 20.0866 5.81818 20.0866C6.22159 20.0866 6.58381 20.0212 6.90483 19.8905C7.22585 19.757 7.48011 19.5724 7.66761 19.3366C7.85511 19.0979 7.94886 18.8195 7.94886 18.5013C7.94886 18.2116 7.8679 17.9758 7.70597 17.7939C7.54403 17.6121 7.33097 17.4644 7.06676 17.3508C6.80256 17.2371 6.51705 17.1377 6.21023 17.0525L5.13636 16.7456C4.45455 16.5496 3.91477 16.2698 3.51705 15.9062C3.11932 15.5425 2.92045 15.0667 2.92045 14.4786C2.92045 13.99 3.05256 13.5638 3.31676 13.2002C3.58381 12.8337 3.94176 12.5496 4.39062 12.3479C4.84233 12.1434 5.34659 12.0411 5.90341 12.0411C6.46591 12.0411 6.96591 12.142 7.40341 12.3437C7.84091 12.5425 8.1875 12.8153 8.44318 13.1618C8.7017 13.5084 8.83807 13.9019 8.85227 14.3422H7.82955ZM13.4194 14.3422V15.1945H10.0273V14.3422H13.4194ZM11.016 12.7741H12.0217V19.0127C12.0217 19.2968 12.0629 19.5099 12.1452 19.6519C12.2305 19.7911 12.3384 19.8849 12.4691 19.9331C12.6026 19.9786 12.7433 20.0013 12.891 20.0013C13.0018 20.0013 13.0927 19.9956 13.1637 19.9843C13.2347 19.9701 13.2915 19.9587 13.3342 19.9502L13.5387 20.8536C13.4705 20.8792 13.3754 20.9047 13.2532 20.9303C13.131 20.9587 12.9762 20.9729 12.7887 20.9729C12.5046 20.9729 12.2262 20.9118 11.9535 20.7897C11.6836 20.6675 11.4592 20.4814 11.2802 20.2314C11.104 19.9814 11.016 19.6661 11.016 19.2854V12.7741ZM17.6062 21.0241C16.9755 21.0241 16.4315 20.8849 15.9741 20.6064C15.5195 20.3252 15.1687 19.9331 14.9215 19.4303C14.6772 18.9246 14.555 18.3366 14.555 17.6661C14.555 16.9956 14.6772 16.4047 14.9215 15.8934C15.1687 15.3792 15.5124 14.9786 15.9528 14.6917C16.396 14.4019 16.913 14.257 17.5039 14.257C17.8448 14.257 18.1815 14.3138 18.5138 14.4275C18.8462 14.5411 19.1488 14.7258 19.4215 14.9814C19.6942 15.2343 19.9116 15.5695 20.0735 15.9871C20.2354 16.4047 20.3164 16.9189 20.3164 17.5297V17.9559H15.271V17.0866H19.2937C19.2937 16.7172 19.2198 16.3877 19.0721 16.0979C18.9272 15.8081 18.7198 15.5795 18.4499 15.4118C18.1829 15.2442 17.8675 15.1604 17.5039 15.1604C17.1033 15.1604 16.7567 15.2599 16.4641 15.4587C16.1744 15.6547 15.9513 15.9104 15.7951 16.2258C15.6388 16.5411 15.5607 16.8792 15.5607 17.24V17.8195C15.5607 18.3138 15.646 18.7329 15.8164 19.0766C15.9897 19.4175 16.2298 19.6775 16.5366 19.8564C16.8434 20.0326 17.1999 20.1206 17.6062 20.1206C17.8704 20.1206 18.109 20.0837 18.3221 20.0099C18.538 19.9331 18.7241 19.8195 18.8803 19.6689C19.0366 19.5155 19.1573 19.3252 19.2425 19.0979L20.2141 19.3706C20.1119 19.7002 19.94 19.99 19.6985 20.24C19.457 20.4871 19.1587 20.6803 18.8036 20.8195C18.4485 20.9559 18.0494 21.0241 17.6062 21.0241ZM21.8462 23.3422V14.3422H22.8178V15.382H22.9371C23.011 15.2684 23.1133 15.1235 23.244 14.9474C23.3775 14.7684 23.5678 14.6093 23.815 14.4701C24.065 14.328 24.4031 14.257 24.8292 14.257C25.3803 14.257 25.8661 14.3948 26.2866 14.6704C26.707 14.9459 27.0352 15.3366 27.271 15.8422C27.5067 16.3479 27.6246 16.9445 27.6246 17.632C27.6246 18.3252 27.5067 18.926 27.271 19.4346C27.0352 19.9403 26.7085 20.3323 26.2908 20.6107C25.8732 20.8863 25.3917 21.0241 24.8462 21.0241C24.4258 21.0241 24.0891 20.9545 23.8363 20.8153C23.5835 20.6732 23.3888 20.5127 23.2525 20.3337C23.1161 20.1519 23.011 20.0013 22.9371 19.882H22.8519V23.3422H21.8462ZM22.8349 17.615C22.8349 18.1093 22.9073 18.5454 23.0522 18.9232C23.1971 19.2982 23.4087 19.5922 23.6871 19.8053C23.9656 20.0155 24.3065 20.1206 24.7099 20.1206C25.1303 20.1206 25.4812 20.0099 25.7624 19.7883C26.0465 19.5638 26.2596 19.2627 26.4016 18.8849C26.5465 18.5042 26.619 18.0809 26.619 17.615C26.619 17.1547 26.5479 16.74 26.4059 16.3706C26.2667 15.9985 26.055 15.7045 25.771 15.4885C25.4897 15.2698 25.136 15.1604 24.7099 15.1604C24.3008 15.1604 23.957 15.2641 23.6786 15.4715C23.4002 15.676 23.19 15.963 23.0479 16.3323C22.9059 16.6988 22.8349 17.1263 22.8349 17.615ZM35.5849 12.1604V20.8877H34.5281V13.2684H34.4769L32.3462 14.6831V13.6093L34.5281 12.1604H35.5849Z"
                                  fill="#FEFEFE"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="action-btn">
                            <div>
                              <a
                                className="btn btn-light"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                              >
                                <svg
                                  width={13}
                                  height={14}
                                  viewBox="0 0 13 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.02273 2.33333H7.97727C7.97727 1.94656 7.82163 1.57563 7.54459 1.30214C7.26755 1.02865 6.8918 0.875 6.5 0.875C6.1082 0.875 5.73245 1.02865 5.45541 1.30214C5.17837 1.57563 5.02273 1.94656 5.02273 2.33333ZM4.13636 2.33333C4.13636 1.71449 4.38539 1.121 4.82866 0.683417C5.27192 0.245833 5.87312 0 6.5 0C7.12687 0 7.72807 0.245833 8.17134 0.683417C8.61461 1.121 8.86364 1.71449 8.86364 2.33333H12.5568C12.6744 2.33333 12.7871 2.37943 12.8702 2.46147C12.9533 2.54352 13 2.6548 13 2.77083C13 2.88687 12.9533 2.99815 12.8702 3.08019C12.7871 3.16224 12.6744 3.20833 12.5568 3.20833H11.7827L11.0636 11.7268C11.0113 12.3464 10.725 12.9241 10.2614 13.3452C9.7979 13.7662 9.191 14 8.56109 14H4.43891C3.809 14 3.2021 13.7662 2.73857 13.3452C2.27504 12.9241 1.98873 12.3464 1.93641 11.7268L1.21727 3.20833H0.443182C0.325643 3.20833 0.212918 3.16224 0.129805 3.08019C0.0466922 2.99815 0 2.88687 0 2.77083C0 2.6548 0.0466922 2.54352 0.129805 2.46147C0.212918 2.37943 0.325643 2.33333 0.443182 2.33333H4.13636ZM2.81982 11.6538C2.85361 12.0548 3.03882 12.4286 3.33872 12.7011C3.63862 12.9736 4.03131 13.1249 4.43891 13.125H8.56109C8.96869 13.1249 9.36138 12.9736 9.66128 12.7011C9.96118 12.4286 10.1464 12.0548 10.1802 11.6538L10.894 3.20833H2.10659L2.81982 11.6538ZM5.17045 5.25C5.28799 5.25 5.40072 5.29609 5.48383 5.37814C5.56694 5.46019 5.61364 5.57147 5.61364 5.6875V10.6458C5.61364 10.7619 5.56694 10.8731 5.48383 10.9552C5.40072 11.0372 5.28799 11.0833 5.17045 11.0833C5.05292 11.0833 4.94019 11.0372 4.85708 10.9552C4.77396 10.8731 4.72727 10.7619 4.72727 10.6458V5.6875C4.72727 5.57147 4.77396 5.46019 4.85708 5.37814C4.94019 5.29609 5.05292 5.25 5.17045 5.25ZM8.27273 5.6875C8.27273 5.57147 8.22604 5.46019 8.14292 5.37814C8.05981 5.29609 7.94708 5.25 7.82955 5.25C7.71201 5.25 7.59928 5.29609 7.51617 5.37814C7.43306 5.46019 7.38636 5.57147 7.38636 5.6875V10.6458C7.38636 10.7619 7.43306 10.8731 7.51617 10.9552C7.59928 11.0372 7.71201 11.0833 7.82955 11.0833C7.94708 11.0833 8.05981 11.0372 8.14292 10.9552C8.22604 10.8731 8.27273 10.7619 8.27273 10.6458V5.6875Z"
                                    fill="#F54D4D"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a
                                className="btn btn-light"
                                // href="./edit-recipe.html"
                                role="button"
                                onClick={handleEdit}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </span>
                                Edit
                              </a>{" "}
                            </div>
                          </div>
                          <div className="detail-tips">
                            <p>
                              CGather all ingredients. Preheat the oven to 375
                              degrees F (190 degrees C).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={reciepe1} alt="" />
                          </div>
                          <div className="steps-count">
                            <span>
                              <svg
                                width={48}
                                height={36}
                                viewBox="0 0 48 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1718 25.9219V34.6089C18.2045 35.6424 16.9578 36.3564 16.0661 35.8134L0.708008 27.1274L1.40645 24.5332H16.7655C17.5418 24.5332 18.1718 25.1554 18.1718 25.9219Z"
                                  fill="#BD1212"
                                />
                                <path
                                  d="M48 16.5313L24 21.2381L0 16.5313V7.14067C0 6.37409 0.63 5.75194 1.40625 5.75194H30.9159V1.38855C30.9159 0.817314 31.2694 0.305336 31.8075 0.0961002C32.3456 -0.11221 32.9578 0.0248121 33.3516 0.442357L47.6231 15.5851C47.8744 15.8517 48 16.1915 48 16.5313Z"
                                  fill="#FF5555"
                                />
                                <path
                                  d="M48 16.5312C48 16.871 47.8744 17.2108 47.6231 17.4774L33.3516 32.6202C32.5324 33.5452 30.8757 32.8964 30.9159 31.674V27.3106H1.40625C0.63 27.3106 0 26.6884 0 25.9219V16.5312H48Z"
                                  fill="#E01010"
                                />
                                <path
                                  d="M7.82955 14.3422C7.77841 13.9104 7.57102 13.5752 7.20739 13.3366C6.84375 13.0979 6.39773 12.9786 5.86932 12.9786C5.48295 12.9786 5.14489 13.0411 4.85511 13.1661C4.56818 13.2911 4.34375 13.463 4.18182 13.6817C4.02273 13.9005 3.94318 14.1491 3.94318 14.4275C3.94318 14.6604 3.99858 14.8607 4.10938 15.0283C4.22301 15.1931 4.3679 15.3309 4.54403 15.4417C4.72017 15.5496 4.90483 15.6391 5.09801 15.7101C5.29119 15.7783 5.46875 15.8337 5.63068 15.8763L6.51705 16.115C6.74432 16.1746 6.99716 16.257 7.27557 16.3621C7.55682 16.4672 7.82528 16.6107 8.08097 16.7925C8.33949 16.9715 8.55256 17.2016 8.72017 17.4829C8.88778 17.7641 8.97159 18.1093 8.97159 18.5184C8.97159 18.99 8.84801 19.4161 8.60085 19.7968C8.35653 20.1775 7.99858 20.48 7.52699 20.7045C7.05824 20.9289 6.48864 21.0411 5.81818 21.0411C5.19318 21.0411 4.65199 20.9403 4.1946 20.7385C3.74006 20.5368 3.3821 20.2556 3.12074 19.8948C2.86222 19.534 2.71591 19.115 2.68182 18.6377H3.77273C3.80114 18.9672 3.91193 19.24 4.10511 19.4559C4.30114 19.6689 4.5483 19.828 4.84659 19.9331C5.14773 20.0354 5.47159 20.0866 5.81818 20.0866C6.22159 20.0866 6.58381 20.0212 6.90483 19.8905C7.22585 19.757 7.48011 19.5724 7.66761 19.3366C7.85511 19.0979 7.94886 18.8195 7.94886 18.5013C7.94886 18.2116 7.8679 17.9758 7.70597 17.7939C7.54403 17.6121 7.33097 17.4644 7.06676 17.3508C6.80256 17.2371 6.51705 17.1377 6.21023 17.0525L5.13636 16.7456C4.45455 16.5496 3.91477 16.2698 3.51705 15.9062C3.11932 15.5425 2.92045 15.0667 2.92045 14.4786C2.92045 13.99 3.05256 13.5638 3.31676 13.2002C3.58381 12.8337 3.94176 12.5496 4.39062 12.3479C4.84233 12.1434 5.34659 12.0411 5.90341 12.0411C6.46591 12.0411 6.96591 12.142 7.40341 12.3437C7.84091 12.5425 8.1875 12.8153 8.44318 13.1618C8.7017 13.5084 8.83807 13.9019 8.85227 14.3422H7.82955ZM13.4194 14.3422V15.1945H10.0273V14.3422H13.4194ZM11.016 12.7741H12.0217V19.0127C12.0217 19.2968 12.0629 19.5099 12.1452 19.6519C12.2305 19.7911 12.3384 19.8849 12.4691 19.9331C12.6026 19.9786 12.7433 20.0013 12.891 20.0013C13.0018 20.0013 13.0927 19.9956 13.1637 19.9843C13.2347 19.9701 13.2915 19.9587 13.3342 19.9502L13.5387 20.8536C13.4705 20.8792 13.3754 20.9047 13.2532 20.9303C13.131 20.9587 12.9762 20.9729 12.7887 20.9729C12.5046 20.9729 12.2262 20.9118 11.9535 20.7897C11.6836 20.6675 11.4592 20.4814 11.2802 20.2314C11.104 19.9814 11.016 19.6661 11.016 19.2854V12.7741ZM17.6062 21.0241C16.9755 21.0241 16.4315 20.8849 15.9741 20.6064C15.5195 20.3252 15.1687 19.9331 14.9215 19.4303C14.6772 18.9246 14.555 18.3366 14.555 17.6661C14.555 16.9956 14.6772 16.4047 14.9215 15.8934C15.1687 15.3792 15.5124 14.9786 15.9528 14.6917C16.396 14.4019 16.913 14.257 17.5039 14.257C17.8448 14.257 18.1815 14.3138 18.5138 14.4275C18.8462 14.5411 19.1488 14.7258 19.4215 14.9814C19.6942 15.2343 19.9116 15.5695 20.0735 15.9871C20.2354 16.4047 20.3164 16.9189 20.3164 17.5297V17.9559H15.271V17.0866H19.2937C19.2937 16.7172 19.2198 16.3877 19.0721 16.0979C18.9272 15.8081 18.7198 15.5795 18.4499 15.4118C18.1829 15.2442 17.8675 15.1604 17.5039 15.1604C17.1033 15.1604 16.7567 15.2599 16.4641 15.4587C16.1744 15.6547 15.9513 15.9104 15.7951 16.2258C15.6388 16.5411 15.5607 16.8792 15.5607 17.24V17.8195C15.5607 18.3138 15.646 18.7329 15.8164 19.0766C15.9897 19.4175 16.2298 19.6775 16.5366 19.8564C16.8434 20.0326 17.1999 20.1206 17.6062 20.1206C17.8704 20.1206 18.109 20.0837 18.3221 20.0099C18.538 19.9331 18.7241 19.8195 18.8803 19.6689C19.0366 19.5155 19.1573 19.3252 19.2425 19.0979L20.2141 19.3706C20.1119 19.7002 19.94 19.99 19.6985 20.24C19.457 20.4871 19.1587 20.6803 18.8036 20.8195C18.4485 20.9559 18.0494 21.0241 17.6062 21.0241ZM21.8462 23.3422V14.3422H22.8178V15.382H22.9371C23.011 15.2684 23.1133 15.1235 23.244 14.9474C23.3775 14.7684 23.5678 14.6093 23.815 14.4701C24.065 14.328 24.4031 14.257 24.8292 14.257C25.3803 14.257 25.8661 14.3948 26.2866 14.6704C26.707 14.9459 27.0352 15.3366 27.271 15.8422C27.5067 16.3479 27.6246 16.9445 27.6246 17.632C27.6246 18.3252 27.5067 18.926 27.271 19.4346C27.0352 19.9403 26.7085 20.3323 26.2908 20.6107C25.8732 20.8863 25.3917 21.0241 24.8462 21.0241C24.4258 21.0241 24.0891 20.9545 23.8363 20.8153C23.5835 20.6732 23.3888 20.5127 23.2525 20.3337C23.1161 20.1519 23.011 20.0013 22.9371 19.882H22.8519V23.3422H21.8462ZM22.8349 17.615C22.8349 18.1093 22.9073 18.5454 23.0522 18.9232C23.1971 19.2982 23.4087 19.5922 23.6871 19.8053C23.9656 20.0155 24.3065 20.1206 24.7099 20.1206C25.1303 20.1206 25.4812 20.0099 25.7624 19.7883C26.0465 19.5638 26.2596 19.2627 26.4016 18.8849C26.5465 18.5042 26.619 18.0809 26.619 17.615C26.619 17.1547 26.5479 16.74 26.4059 16.3706C26.2667 15.9985 26.055 15.7045 25.771 15.4885C25.4897 15.2698 25.136 15.1604 24.7099 15.1604C24.3008 15.1604 23.957 15.2641 23.6786 15.4715C23.4002 15.676 23.19 15.963 23.0479 16.3323C22.9059 16.6988 22.8349 17.1263 22.8349 17.615ZM35.5849 12.1604V20.8877H34.5281V13.2684H34.4769L32.3462 14.6831V13.6093L34.5281 12.1604H35.5849Z"
                                  fill="#FEFEFE"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="action-btn">
                            <div>
                              <a
                                className="btn btn-light"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                              >
                                <svg
                                  width={13}
                                  height={14}
                                  viewBox="0 0 13 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.02273 2.33333H7.97727C7.97727 1.94656 7.82163 1.57563 7.54459 1.30214C7.26755 1.02865 6.8918 0.875 6.5 0.875C6.1082 0.875 5.73245 1.02865 5.45541 1.30214C5.17837 1.57563 5.02273 1.94656 5.02273 2.33333ZM4.13636 2.33333C4.13636 1.71449 4.38539 1.121 4.82866 0.683417C5.27192 0.245833 5.87312 0 6.5 0C7.12687 0 7.72807 0.245833 8.17134 0.683417C8.61461 1.121 8.86364 1.71449 8.86364 2.33333H12.5568C12.6744 2.33333 12.7871 2.37943 12.8702 2.46147C12.9533 2.54352 13 2.6548 13 2.77083C13 2.88687 12.9533 2.99815 12.8702 3.08019C12.7871 3.16224 12.6744 3.20833 12.5568 3.20833H11.7827L11.0636 11.7268C11.0113 12.3464 10.725 12.9241 10.2614 13.3452C9.7979 13.7662 9.191 14 8.56109 14H4.43891C3.809 14 3.2021 13.7662 2.73857 13.3452C2.27504 12.9241 1.98873 12.3464 1.93641 11.7268L1.21727 3.20833H0.443182C0.325643 3.20833 0.212918 3.16224 0.129805 3.08019C0.0466922 2.99815 0 2.88687 0 2.77083C0 2.6548 0.0466922 2.54352 0.129805 2.46147C0.212918 2.37943 0.325643 2.33333 0.443182 2.33333H4.13636ZM2.81982 11.6538C2.85361 12.0548 3.03882 12.4286 3.33872 12.7011C3.63862 12.9736 4.03131 13.1249 4.43891 13.125H8.56109C8.96869 13.1249 9.36138 12.9736 9.66128 12.7011C9.96118 12.4286 10.1464 12.0548 10.1802 11.6538L10.894 3.20833H2.10659L2.81982 11.6538ZM5.17045 5.25C5.28799 5.25 5.40072 5.29609 5.48383 5.37814C5.56694 5.46019 5.61364 5.57147 5.61364 5.6875V10.6458C5.61364 10.7619 5.56694 10.8731 5.48383 10.9552C5.40072 11.0372 5.28799 11.0833 5.17045 11.0833C5.05292 11.0833 4.94019 11.0372 4.85708 10.9552C4.77396 10.8731 4.72727 10.7619 4.72727 10.6458V5.6875C4.72727 5.57147 4.77396 5.46019 4.85708 5.37814C4.94019 5.29609 5.05292 5.25 5.17045 5.25ZM8.27273 5.6875C8.27273 5.57147 8.22604 5.46019 8.14292 5.37814C8.05981 5.29609 7.94708 5.25 7.82955 5.25C7.71201 5.25 7.59928 5.29609 7.51617 5.37814C7.43306 5.46019 7.38636 5.57147 7.38636 5.6875V10.6458C7.38636 10.7619 7.43306 10.8731 7.51617 10.9552C7.59928 11.0372 7.71201 11.0833 7.82955 11.0833C7.94708 11.0833 8.05981 11.0372 8.14292 10.9552C8.22604 10.8731 8.27273 10.7619 8.27273 10.6458V5.6875Z"
                                    fill="#F54D4D"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a
                                className="btn btn-light"
                                // href="./edit-recipe.html"
                                role="button"
                                onClick={handleEdit}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </span>
                                Edit
                              </a>{" "}
                            </div>
                          </div>
                          <div className="detail-tips">
                            <p>
                              CGather all ingredients. Preheat the oven to 375
                              degrees F (190 degrees C).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={reciepe1} alt="" />
                          </div>
                          <div className="steps-count">
                            <span>
                              <svg
                                width={48}
                                height={36}
                                viewBox="0 0 48 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1718 25.9219V34.6089C18.2045 35.6424 16.9578 36.3564 16.0661 35.8134L0.708008 27.1274L1.40645 24.5332H16.7655C17.5418 24.5332 18.1718 25.1554 18.1718 25.9219Z"
                                  fill="#BD1212"
                                />
                                <path
                                  d="M48 16.5313L24 21.2381L0 16.5313V7.14067C0 6.37409 0.63 5.75194 1.40625 5.75194H30.9159V1.38855C30.9159 0.817314 31.2694 0.305336 31.8075 0.0961002C32.3456 -0.11221 32.9578 0.0248121 33.3516 0.442357L47.6231 15.5851C47.8744 15.8517 48 16.1915 48 16.5313Z"
                                  fill="#FF5555"
                                />
                                <path
                                  d="M48 16.5312C48 16.871 47.8744 17.2108 47.6231 17.4774L33.3516 32.6202C32.5324 33.5452 30.8757 32.8964 30.9159 31.674V27.3106H1.40625C0.63 27.3106 0 26.6884 0 25.9219V16.5312H48Z"
                                  fill="#E01010"
                                />
                                <path
                                  d="M7.82955 14.3422C7.77841 13.9104 7.57102 13.5752 7.20739 13.3366C6.84375 13.0979 6.39773 12.9786 5.86932 12.9786C5.48295 12.9786 5.14489 13.0411 4.85511 13.1661C4.56818 13.2911 4.34375 13.463 4.18182 13.6817C4.02273 13.9005 3.94318 14.1491 3.94318 14.4275C3.94318 14.6604 3.99858 14.8607 4.10938 15.0283C4.22301 15.1931 4.3679 15.3309 4.54403 15.4417C4.72017 15.5496 4.90483 15.6391 5.09801 15.7101C5.29119 15.7783 5.46875 15.8337 5.63068 15.8763L6.51705 16.115C6.74432 16.1746 6.99716 16.257 7.27557 16.3621C7.55682 16.4672 7.82528 16.6107 8.08097 16.7925C8.33949 16.9715 8.55256 17.2016 8.72017 17.4829C8.88778 17.7641 8.97159 18.1093 8.97159 18.5184C8.97159 18.99 8.84801 19.4161 8.60085 19.7968C8.35653 20.1775 7.99858 20.48 7.52699 20.7045C7.05824 20.9289 6.48864 21.0411 5.81818 21.0411C5.19318 21.0411 4.65199 20.9403 4.1946 20.7385C3.74006 20.5368 3.3821 20.2556 3.12074 19.8948C2.86222 19.534 2.71591 19.115 2.68182 18.6377H3.77273C3.80114 18.9672 3.91193 19.24 4.10511 19.4559C4.30114 19.6689 4.5483 19.828 4.84659 19.9331C5.14773 20.0354 5.47159 20.0866 5.81818 20.0866C6.22159 20.0866 6.58381 20.0212 6.90483 19.8905C7.22585 19.757 7.48011 19.5724 7.66761 19.3366C7.85511 19.0979 7.94886 18.8195 7.94886 18.5013C7.94886 18.2116 7.8679 17.9758 7.70597 17.7939C7.54403 17.6121 7.33097 17.4644 7.06676 17.3508C6.80256 17.2371 6.51705 17.1377 6.21023 17.0525L5.13636 16.7456C4.45455 16.5496 3.91477 16.2698 3.51705 15.9062C3.11932 15.5425 2.92045 15.0667 2.92045 14.4786C2.92045 13.99 3.05256 13.5638 3.31676 13.2002C3.58381 12.8337 3.94176 12.5496 4.39062 12.3479C4.84233 12.1434 5.34659 12.0411 5.90341 12.0411C6.46591 12.0411 6.96591 12.142 7.40341 12.3437C7.84091 12.5425 8.1875 12.8153 8.44318 13.1618C8.7017 13.5084 8.83807 13.9019 8.85227 14.3422H7.82955ZM13.4194 14.3422V15.1945H10.0273V14.3422H13.4194ZM11.016 12.7741H12.0217V19.0127C12.0217 19.2968 12.0629 19.5099 12.1452 19.6519C12.2305 19.7911 12.3384 19.8849 12.4691 19.9331C12.6026 19.9786 12.7433 20.0013 12.891 20.0013C13.0018 20.0013 13.0927 19.9956 13.1637 19.9843C13.2347 19.9701 13.2915 19.9587 13.3342 19.9502L13.5387 20.8536C13.4705 20.8792 13.3754 20.9047 13.2532 20.9303C13.131 20.9587 12.9762 20.9729 12.7887 20.9729C12.5046 20.9729 12.2262 20.9118 11.9535 20.7897C11.6836 20.6675 11.4592 20.4814 11.2802 20.2314C11.104 19.9814 11.016 19.6661 11.016 19.2854V12.7741ZM17.6062 21.0241C16.9755 21.0241 16.4315 20.8849 15.9741 20.6064C15.5195 20.3252 15.1687 19.9331 14.9215 19.4303C14.6772 18.9246 14.555 18.3366 14.555 17.6661C14.555 16.9956 14.6772 16.4047 14.9215 15.8934C15.1687 15.3792 15.5124 14.9786 15.9528 14.6917C16.396 14.4019 16.913 14.257 17.5039 14.257C17.8448 14.257 18.1815 14.3138 18.5138 14.4275C18.8462 14.5411 19.1488 14.7258 19.4215 14.9814C19.6942 15.2343 19.9116 15.5695 20.0735 15.9871C20.2354 16.4047 20.3164 16.9189 20.3164 17.5297V17.9559H15.271V17.0866H19.2937C19.2937 16.7172 19.2198 16.3877 19.0721 16.0979C18.9272 15.8081 18.7198 15.5795 18.4499 15.4118C18.1829 15.2442 17.8675 15.1604 17.5039 15.1604C17.1033 15.1604 16.7567 15.2599 16.4641 15.4587C16.1744 15.6547 15.9513 15.9104 15.7951 16.2258C15.6388 16.5411 15.5607 16.8792 15.5607 17.24V17.8195C15.5607 18.3138 15.646 18.7329 15.8164 19.0766C15.9897 19.4175 16.2298 19.6775 16.5366 19.8564C16.8434 20.0326 17.1999 20.1206 17.6062 20.1206C17.8704 20.1206 18.109 20.0837 18.3221 20.0099C18.538 19.9331 18.7241 19.8195 18.8803 19.6689C19.0366 19.5155 19.1573 19.3252 19.2425 19.0979L20.2141 19.3706C20.1119 19.7002 19.94 19.99 19.6985 20.24C19.457 20.4871 19.1587 20.6803 18.8036 20.8195C18.4485 20.9559 18.0494 21.0241 17.6062 21.0241ZM21.8462 23.3422V14.3422H22.8178V15.382H22.9371C23.011 15.2684 23.1133 15.1235 23.244 14.9474C23.3775 14.7684 23.5678 14.6093 23.815 14.4701C24.065 14.328 24.4031 14.257 24.8292 14.257C25.3803 14.257 25.8661 14.3948 26.2866 14.6704C26.707 14.9459 27.0352 15.3366 27.271 15.8422C27.5067 16.3479 27.6246 16.9445 27.6246 17.632C27.6246 18.3252 27.5067 18.926 27.271 19.4346C27.0352 19.9403 26.7085 20.3323 26.2908 20.6107C25.8732 20.8863 25.3917 21.0241 24.8462 21.0241C24.4258 21.0241 24.0891 20.9545 23.8363 20.8153C23.5835 20.6732 23.3888 20.5127 23.2525 20.3337C23.1161 20.1519 23.011 20.0013 22.9371 19.882H22.8519V23.3422H21.8462ZM22.8349 17.615C22.8349 18.1093 22.9073 18.5454 23.0522 18.9232C23.1971 19.2982 23.4087 19.5922 23.6871 19.8053C23.9656 20.0155 24.3065 20.1206 24.7099 20.1206C25.1303 20.1206 25.4812 20.0099 25.7624 19.7883C26.0465 19.5638 26.2596 19.2627 26.4016 18.8849C26.5465 18.5042 26.619 18.0809 26.619 17.615C26.619 17.1547 26.5479 16.74 26.4059 16.3706C26.2667 15.9985 26.055 15.7045 25.771 15.4885C25.4897 15.2698 25.136 15.1604 24.7099 15.1604C24.3008 15.1604 23.957 15.2641 23.6786 15.4715C23.4002 15.676 23.19 15.963 23.0479 16.3323C22.9059 16.6988 22.8349 17.1263 22.8349 17.615ZM35.5849 12.1604V20.8877H34.5281V13.2684H34.4769L32.3462 14.6831V13.6093L34.5281 12.1604H35.5849Z"
                                  fill="#FEFEFE"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="action-btn">
                            <div>
                              <a
                                className="btn btn-light"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                              >
                                <svg
                                  width={13}
                                  height={14}
                                  viewBox="0 0 13 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.02273 2.33333H7.97727C7.97727 1.94656 7.82163 1.57563 7.54459 1.30214C7.26755 1.02865 6.8918 0.875 6.5 0.875C6.1082 0.875 5.73245 1.02865 5.45541 1.30214C5.17837 1.57563 5.02273 1.94656 5.02273 2.33333ZM4.13636 2.33333C4.13636 1.71449 4.38539 1.121 4.82866 0.683417C5.27192 0.245833 5.87312 0 6.5 0C7.12687 0 7.72807 0.245833 8.17134 0.683417C8.61461 1.121 8.86364 1.71449 8.86364 2.33333H12.5568C12.6744 2.33333 12.7871 2.37943 12.8702 2.46147C12.9533 2.54352 13 2.6548 13 2.77083C13 2.88687 12.9533 2.99815 12.8702 3.08019C12.7871 3.16224 12.6744 3.20833 12.5568 3.20833H11.7827L11.0636 11.7268C11.0113 12.3464 10.725 12.9241 10.2614 13.3452C9.7979 13.7662 9.191 14 8.56109 14H4.43891C3.809 14 3.2021 13.7662 2.73857 13.3452C2.27504 12.9241 1.98873 12.3464 1.93641 11.7268L1.21727 3.20833H0.443182C0.325643 3.20833 0.212918 3.16224 0.129805 3.08019C0.0466922 2.99815 0 2.88687 0 2.77083C0 2.6548 0.0466922 2.54352 0.129805 2.46147C0.212918 2.37943 0.325643 2.33333 0.443182 2.33333H4.13636ZM2.81982 11.6538C2.85361 12.0548 3.03882 12.4286 3.33872 12.7011C3.63862 12.9736 4.03131 13.1249 4.43891 13.125H8.56109C8.96869 13.1249 9.36138 12.9736 9.66128 12.7011C9.96118 12.4286 10.1464 12.0548 10.1802 11.6538L10.894 3.20833H2.10659L2.81982 11.6538ZM5.17045 5.25C5.28799 5.25 5.40072 5.29609 5.48383 5.37814C5.56694 5.46019 5.61364 5.57147 5.61364 5.6875V10.6458C5.61364 10.7619 5.56694 10.8731 5.48383 10.9552C5.40072 11.0372 5.28799 11.0833 5.17045 11.0833C5.05292 11.0833 4.94019 11.0372 4.85708 10.9552C4.77396 10.8731 4.72727 10.7619 4.72727 10.6458V5.6875C4.72727 5.57147 4.77396 5.46019 4.85708 5.37814C4.94019 5.29609 5.05292 5.25 5.17045 5.25ZM8.27273 5.6875C8.27273 5.57147 8.22604 5.46019 8.14292 5.37814C8.05981 5.29609 7.94708 5.25 7.82955 5.25C7.71201 5.25 7.59928 5.29609 7.51617 5.37814C7.43306 5.46019 7.38636 5.57147 7.38636 5.6875V10.6458C7.38636 10.7619 7.43306 10.8731 7.51617 10.9552C7.59928 11.0372 7.71201 11.0833 7.82955 11.0833C7.94708 11.0833 8.05981 11.0372 8.14292 10.9552C8.22604 10.8731 8.27273 10.7619 8.27273 10.6458V5.6875Z"
                                    fill="#F54D4D"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a
                                className="btn btn-light"
                                // href="./edit-recipe.html"
                                role="button"
                                onClick={handleEdit}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </span>
                                Edit
                              </a>{" "}
                            </div>
                          </div>
                          <div className="detail-tips">
                            <p>
                              CGather all ingredients. Preheat the oven to 375
                              degrees F (190 degrees C).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={reciepe1} alt="" />
                          </div>
                          <div className="steps-count">
                            <span>
                              <svg
                                width={48}
                                height={36}
                                viewBox="0 0 48 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1718 25.9219V34.6089C18.2045 35.6424 16.9578 36.3564 16.0661 35.8134L0.708008 27.1274L1.40645 24.5332H16.7655C17.5418 24.5332 18.1718 25.1554 18.1718 25.9219Z"
                                  fill="#BD1212"
                                />
                                <path
                                  d="M48 16.5313L24 21.2381L0 16.5313V7.14067C0 6.37409 0.63 5.75194 1.40625 5.75194H30.9159V1.38855C30.9159 0.817314 31.2694 0.305336 31.8075 0.0961002C32.3456 -0.11221 32.9578 0.0248121 33.3516 0.442357L47.6231 15.5851C47.8744 15.8517 48 16.1915 48 16.5313Z"
                                  fill="#FF5555"
                                />
                                <path
                                  d="M48 16.5312C48 16.871 47.8744 17.2108 47.6231 17.4774L33.3516 32.6202C32.5324 33.5452 30.8757 32.8964 30.9159 31.674V27.3106H1.40625C0.63 27.3106 0 26.6884 0 25.9219V16.5312H48Z"
                                  fill="#E01010"
                                />
                                <path
                                  d="M7.82955 14.3422C7.77841 13.9104 7.57102 13.5752 7.20739 13.3366C6.84375 13.0979 6.39773 12.9786 5.86932 12.9786C5.48295 12.9786 5.14489 13.0411 4.85511 13.1661C4.56818 13.2911 4.34375 13.463 4.18182 13.6817C4.02273 13.9005 3.94318 14.1491 3.94318 14.4275C3.94318 14.6604 3.99858 14.8607 4.10938 15.0283C4.22301 15.1931 4.3679 15.3309 4.54403 15.4417C4.72017 15.5496 4.90483 15.6391 5.09801 15.7101C5.29119 15.7783 5.46875 15.8337 5.63068 15.8763L6.51705 16.115C6.74432 16.1746 6.99716 16.257 7.27557 16.3621C7.55682 16.4672 7.82528 16.6107 8.08097 16.7925C8.33949 16.9715 8.55256 17.2016 8.72017 17.4829C8.88778 17.7641 8.97159 18.1093 8.97159 18.5184C8.97159 18.99 8.84801 19.4161 8.60085 19.7968C8.35653 20.1775 7.99858 20.48 7.52699 20.7045C7.05824 20.9289 6.48864 21.0411 5.81818 21.0411C5.19318 21.0411 4.65199 20.9403 4.1946 20.7385C3.74006 20.5368 3.3821 20.2556 3.12074 19.8948C2.86222 19.534 2.71591 19.115 2.68182 18.6377H3.77273C3.80114 18.9672 3.91193 19.24 4.10511 19.4559C4.30114 19.6689 4.5483 19.828 4.84659 19.9331C5.14773 20.0354 5.47159 20.0866 5.81818 20.0866C6.22159 20.0866 6.58381 20.0212 6.90483 19.8905C7.22585 19.757 7.48011 19.5724 7.66761 19.3366C7.85511 19.0979 7.94886 18.8195 7.94886 18.5013C7.94886 18.2116 7.8679 17.9758 7.70597 17.7939C7.54403 17.6121 7.33097 17.4644 7.06676 17.3508C6.80256 17.2371 6.51705 17.1377 6.21023 17.0525L5.13636 16.7456C4.45455 16.5496 3.91477 16.2698 3.51705 15.9062C3.11932 15.5425 2.92045 15.0667 2.92045 14.4786C2.92045 13.99 3.05256 13.5638 3.31676 13.2002C3.58381 12.8337 3.94176 12.5496 4.39062 12.3479C4.84233 12.1434 5.34659 12.0411 5.90341 12.0411C6.46591 12.0411 6.96591 12.142 7.40341 12.3437C7.84091 12.5425 8.1875 12.8153 8.44318 13.1618C8.7017 13.5084 8.83807 13.9019 8.85227 14.3422H7.82955ZM13.4194 14.3422V15.1945H10.0273V14.3422H13.4194ZM11.016 12.7741H12.0217V19.0127C12.0217 19.2968 12.0629 19.5099 12.1452 19.6519C12.2305 19.7911 12.3384 19.8849 12.4691 19.9331C12.6026 19.9786 12.7433 20.0013 12.891 20.0013C13.0018 20.0013 13.0927 19.9956 13.1637 19.9843C13.2347 19.9701 13.2915 19.9587 13.3342 19.9502L13.5387 20.8536C13.4705 20.8792 13.3754 20.9047 13.2532 20.9303C13.131 20.9587 12.9762 20.9729 12.7887 20.9729C12.5046 20.9729 12.2262 20.9118 11.9535 20.7897C11.6836 20.6675 11.4592 20.4814 11.2802 20.2314C11.104 19.9814 11.016 19.6661 11.016 19.2854V12.7741ZM17.6062 21.0241C16.9755 21.0241 16.4315 20.8849 15.9741 20.6064C15.5195 20.3252 15.1687 19.9331 14.9215 19.4303C14.6772 18.9246 14.555 18.3366 14.555 17.6661C14.555 16.9956 14.6772 16.4047 14.9215 15.8934C15.1687 15.3792 15.5124 14.9786 15.9528 14.6917C16.396 14.4019 16.913 14.257 17.5039 14.257C17.8448 14.257 18.1815 14.3138 18.5138 14.4275C18.8462 14.5411 19.1488 14.7258 19.4215 14.9814C19.6942 15.2343 19.9116 15.5695 20.0735 15.9871C20.2354 16.4047 20.3164 16.9189 20.3164 17.5297V17.9559H15.271V17.0866H19.2937C19.2937 16.7172 19.2198 16.3877 19.0721 16.0979C18.9272 15.8081 18.7198 15.5795 18.4499 15.4118C18.1829 15.2442 17.8675 15.1604 17.5039 15.1604C17.1033 15.1604 16.7567 15.2599 16.4641 15.4587C16.1744 15.6547 15.9513 15.9104 15.7951 16.2258C15.6388 16.5411 15.5607 16.8792 15.5607 17.24V17.8195C15.5607 18.3138 15.646 18.7329 15.8164 19.0766C15.9897 19.4175 16.2298 19.6775 16.5366 19.8564C16.8434 20.0326 17.1999 20.1206 17.6062 20.1206C17.8704 20.1206 18.109 20.0837 18.3221 20.0099C18.538 19.9331 18.7241 19.8195 18.8803 19.6689C19.0366 19.5155 19.1573 19.3252 19.2425 19.0979L20.2141 19.3706C20.1119 19.7002 19.94 19.99 19.6985 20.24C19.457 20.4871 19.1587 20.6803 18.8036 20.8195C18.4485 20.9559 18.0494 21.0241 17.6062 21.0241ZM21.8462 23.3422V14.3422H22.8178V15.382H22.9371C23.011 15.2684 23.1133 15.1235 23.244 14.9474C23.3775 14.7684 23.5678 14.6093 23.815 14.4701C24.065 14.328 24.4031 14.257 24.8292 14.257C25.3803 14.257 25.8661 14.3948 26.2866 14.6704C26.707 14.9459 27.0352 15.3366 27.271 15.8422C27.5067 16.3479 27.6246 16.9445 27.6246 17.632C27.6246 18.3252 27.5067 18.926 27.271 19.4346C27.0352 19.9403 26.7085 20.3323 26.2908 20.6107C25.8732 20.8863 25.3917 21.0241 24.8462 21.0241C24.4258 21.0241 24.0891 20.9545 23.8363 20.8153C23.5835 20.6732 23.3888 20.5127 23.2525 20.3337C23.1161 20.1519 23.011 20.0013 22.9371 19.882H22.8519V23.3422H21.8462ZM22.8349 17.615C22.8349 18.1093 22.9073 18.5454 23.0522 18.9232C23.1971 19.2982 23.4087 19.5922 23.6871 19.8053C23.9656 20.0155 24.3065 20.1206 24.7099 20.1206C25.1303 20.1206 25.4812 20.0099 25.7624 19.7883C26.0465 19.5638 26.2596 19.2627 26.4016 18.8849C26.5465 18.5042 26.619 18.0809 26.619 17.615C26.619 17.1547 26.5479 16.74 26.4059 16.3706C26.2667 15.9985 26.055 15.7045 25.771 15.4885C25.4897 15.2698 25.136 15.1604 24.7099 15.1604C24.3008 15.1604 23.957 15.2641 23.6786 15.4715C23.4002 15.676 23.19 15.963 23.0479 16.3323C22.9059 16.6988 22.8349 17.1263 22.8349 17.615ZM35.5849 12.1604V20.8877H34.5281V13.2684H34.4769L32.3462 14.6831V13.6093L34.5281 12.1604H35.5849Z"
                                  fill="#FEFEFE"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="action-btn">
                            <div>
                              <a
                                className="btn btn-light"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                              >
                                <svg
                                  width={13}
                                  height={14}
                                  viewBox="0 0 13 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.02273 2.33333H7.97727C7.97727 1.94656 7.82163 1.57563 7.54459 1.30214C7.26755 1.02865 6.8918 0.875 6.5 0.875C6.1082 0.875 5.73245 1.02865 5.45541 1.30214C5.17837 1.57563 5.02273 1.94656 5.02273 2.33333ZM4.13636 2.33333C4.13636 1.71449 4.38539 1.121 4.82866 0.683417C5.27192 0.245833 5.87312 0 6.5 0C7.12687 0 7.72807 0.245833 8.17134 0.683417C8.61461 1.121 8.86364 1.71449 8.86364 2.33333H12.5568C12.6744 2.33333 12.7871 2.37943 12.8702 2.46147C12.9533 2.54352 13 2.6548 13 2.77083C13 2.88687 12.9533 2.99815 12.8702 3.08019C12.7871 3.16224 12.6744 3.20833 12.5568 3.20833H11.7827L11.0636 11.7268C11.0113 12.3464 10.725 12.9241 10.2614 13.3452C9.7979 13.7662 9.191 14 8.56109 14H4.43891C3.809 14 3.2021 13.7662 2.73857 13.3452C2.27504 12.9241 1.98873 12.3464 1.93641 11.7268L1.21727 3.20833H0.443182C0.325643 3.20833 0.212918 3.16224 0.129805 3.08019C0.0466922 2.99815 0 2.88687 0 2.77083C0 2.6548 0.0466922 2.54352 0.129805 2.46147C0.212918 2.37943 0.325643 2.33333 0.443182 2.33333H4.13636ZM2.81982 11.6538C2.85361 12.0548 3.03882 12.4286 3.33872 12.7011C3.63862 12.9736 4.03131 13.1249 4.43891 13.125H8.56109C8.96869 13.1249 9.36138 12.9736 9.66128 12.7011C9.96118 12.4286 10.1464 12.0548 10.1802 11.6538L10.894 3.20833H2.10659L2.81982 11.6538ZM5.17045 5.25C5.28799 5.25 5.40072 5.29609 5.48383 5.37814C5.56694 5.46019 5.61364 5.57147 5.61364 5.6875V10.6458C5.61364 10.7619 5.56694 10.8731 5.48383 10.9552C5.40072 11.0372 5.28799 11.0833 5.17045 11.0833C5.05292 11.0833 4.94019 11.0372 4.85708 10.9552C4.77396 10.8731 4.72727 10.7619 4.72727 10.6458V5.6875C4.72727 5.57147 4.77396 5.46019 4.85708 5.37814C4.94019 5.29609 5.05292 5.25 5.17045 5.25ZM8.27273 5.6875C8.27273 5.57147 8.22604 5.46019 8.14292 5.37814C8.05981 5.29609 7.94708 5.25 7.82955 5.25C7.71201 5.25 7.59928 5.29609 7.51617 5.37814C7.43306 5.46019 7.38636 5.57147 7.38636 5.6875V10.6458C7.38636 10.7619 7.43306 10.8731 7.51617 10.9552C7.59928 11.0372 7.71201 11.0833 7.82955 11.0833C7.94708 11.0833 8.05981 11.0372 8.14292 10.9552C8.22604 10.8731 8.27273 10.7619 8.27273 10.6458V5.6875Z"
                                    fill="#F54D4D"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a
                                className="btn btn-light"
                                // href="./edit-recipe.html"
                                role="button"
                                onClick={handleEdit}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </span>
                                Edit
                              </a>{" "}
                            </div>
                          </div>
                          <div className="detail-tips">
                            <p>
                              CGather all ingredients. Preheat the oven to 375
                              degrees F (190 degrees C).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={reciepe1} alt="" />
                          </div>
                          <div className="steps-count">
                            <span>
                              <svg
                                width={48}
                                height={36}
                                viewBox="0 0 48 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1718 25.9219V34.6089C18.2045 35.6424 16.9578 36.3564 16.0661 35.8134L0.708008 27.1274L1.40645 24.5332H16.7655C17.5418 24.5332 18.1718 25.1554 18.1718 25.9219Z"
                                  fill="#BD1212"
                                />
                                <path
                                  d="M48 16.5313L24 21.2381L0 16.5313V7.14067C0 6.37409 0.63 5.75194 1.40625 5.75194H30.9159V1.38855C30.9159 0.817314 31.2694 0.305336 31.8075 0.0961002C32.3456 -0.11221 32.9578 0.0248121 33.3516 0.442357L47.6231 15.5851C47.8744 15.8517 48 16.1915 48 16.5313Z"
                                  fill="#FF5555"
                                />
                                <path
                                  d="M48 16.5312C48 16.871 47.8744 17.2108 47.6231 17.4774L33.3516 32.6202C32.5324 33.5452 30.8757 32.8964 30.9159 31.674V27.3106H1.40625C0.63 27.3106 0 26.6884 0 25.9219V16.5312H48Z"
                                  fill="#E01010"
                                />
                                <path
                                  d="M7.82955 14.3422C7.77841 13.9104 7.57102 13.5752 7.20739 13.3366C6.84375 13.0979 6.39773 12.9786 5.86932 12.9786C5.48295 12.9786 5.14489 13.0411 4.85511 13.1661C4.56818 13.2911 4.34375 13.463 4.18182 13.6817C4.02273 13.9005 3.94318 14.1491 3.94318 14.4275C3.94318 14.6604 3.99858 14.8607 4.10938 15.0283C4.22301 15.1931 4.3679 15.3309 4.54403 15.4417C4.72017 15.5496 4.90483 15.6391 5.09801 15.7101C5.29119 15.7783 5.46875 15.8337 5.63068 15.8763L6.51705 16.115C6.74432 16.1746 6.99716 16.257 7.27557 16.3621C7.55682 16.4672 7.82528 16.6107 8.08097 16.7925C8.33949 16.9715 8.55256 17.2016 8.72017 17.4829C8.88778 17.7641 8.97159 18.1093 8.97159 18.5184C8.97159 18.99 8.84801 19.4161 8.60085 19.7968C8.35653 20.1775 7.99858 20.48 7.52699 20.7045C7.05824 20.9289 6.48864 21.0411 5.81818 21.0411C5.19318 21.0411 4.65199 20.9403 4.1946 20.7385C3.74006 20.5368 3.3821 20.2556 3.12074 19.8948C2.86222 19.534 2.71591 19.115 2.68182 18.6377H3.77273C3.80114 18.9672 3.91193 19.24 4.10511 19.4559C4.30114 19.6689 4.5483 19.828 4.84659 19.9331C5.14773 20.0354 5.47159 20.0866 5.81818 20.0866C6.22159 20.0866 6.58381 20.0212 6.90483 19.8905C7.22585 19.757 7.48011 19.5724 7.66761 19.3366C7.85511 19.0979 7.94886 18.8195 7.94886 18.5013C7.94886 18.2116 7.8679 17.9758 7.70597 17.7939C7.54403 17.6121 7.33097 17.4644 7.06676 17.3508C6.80256 17.2371 6.51705 17.1377 6.21023 17.0525L5.13636 16.7456C4.45455 16.5496 3.91477 16.2698 3.51705 15.9062C3.11932 15.5425 2.92045 15.0667 2.92045 14.4786C2.92045 13.99 3.05256 13.5638 3.31676 13.2002C3.58381 12.8337 3.94176 12.5496 4.39062 12.3479C4.84233 12.1434 5.34659 12.0411 5.90341 12.0411C6.46591 12.0411 6.96591 12.142 7.40341 12.3437C7.84091 12.5425 8.1875 12.8153 8.44318 13.1618C8.7017 13.5084 8.83807 13.9019 8.85227 14.3422H7.82955ZM13.4194 14.3422V15.1945H10.0273V14.3422H13.4194ZM11.016 12.7741H12.0217V19.0127C12.0217 19.2968 12.0629 19.5099 12.1452 19.6519C12.2305 19.7911 12.3384 19.8849 12.4691 19.9331C12.6026 19.9786 12.7433 20.0013 12.891 20.0013C13.0018 20.0013 13.0927 19.9956 13.1637 19.9843C13.2347 19.9701 13.2915 19.9587 13.3342 19.9502L13.5387 20.8536C13.4705 20.8792 13.3754 20.9047 13.2532 20.9303C13.131 20.9587 12.9762 20.9729 12.7887 20.9729C12.5046 20.9729 12.2262 20.9118 11.9535 20.7897C11.6836 20.6675 11.4592 20.4814 11.2802 20.2314C11.104 19.9814 11.016 19.6661 11.016 19.2854V12.7741ZM17.6062 21.0241C16.9755 21.0241 16.4315 20.8849 15.9741 20.6064C15.5195 20.3252 15.1687 19.9331 14.9215 19.4303C14.6772 18.9246 14.555 18.3366 14.555 17.6661C14.555 16.9956 14.6772 16.4047 14.9215 15.8934C15.1687 15.3792 15.5124 14.9786 15.9528 14.6917C16.396 14.4019 16.913 14.257 17.5039 14.257C17.8448 14.257 18.1815 14.3138 18.5138 14.4275C18.8462 14.5411 19.1488 14.7258 19.4215 14.9814C19.6942 15.2343 19.9116 15.5695 20.0735 15.9871C20.2354 16.4047 20.3164 16.9189 20.3164 17.5297V17.9559H15.271V17.0866H19.2937C19.2937 16.7172 19.2198 16.3877 19.0721 16.0979C18.9272 15.8081 18.7198 15.5795 18.4499 15.4118C18.1829 15.2442 17.8675 15.1604 17.5039 15.1604C17.1033 15.1604 16.7567 15.2599 16.4641 15.4587C16.1744 15.6547 15.9513 15.9104 15.7951 16.2258C15.6388 16.5411 15.5607 16.8792 15.5607 17.24V17.8195C15.5607 18.3138 15.646 18.7329 15.8164 19.0766C15.9897 19.4175 16.2298 19.6775 16.5366 19.8564C16.8434 20.0326 17.1999 20.1206 17.6062 20.1206C17.8704 20.1206 18.109 20.0837 18.3221 20.0099C18.538 19.9331 18.7241 19.8195 18.8803 19.6689C19.0366 19.5155 19.1573 19.3252 19.2425 19.0979L20.2141 19.3706C20.1119 19.7002 19.94 19.99 19.6985 20.24C19.457 20.4871 19.1587 20.6803 18.8036 20.8195C18.4485 20.9559 18.0494 21.0241 17.6062 21.0241ZM21.8462 23.3422V14.3422H22.8178V15.382H22.9371C23.011 15.2684 23.1133 15.1235 23.244 14.9474C23.3775 14.7684 23.5678 14.6093 23.815 14.4701C24.065 14.328 24.4031 14.257 24.8292 14.257C25.3803 14.257 25.8661 14.3948 26.2866 14.6704C26.707 14.9459 27.0352 15.3366 27.271 15.8422C27.5067 16.3479 27.6246 16.9445 27.6246 17.632C27.6246 18.3252 27.5067 18.926 27.271 19.4346C27.0352 19.9403 26.7085 20.3323 26.2908 20.6107C25.8732 20.8863 25.3917 21.0241 24.8462 21.0241C24.4258 21.0241 24.0891 20.9545 23.8363 20.8153C23.5835 20.6732 23.3888 20.5127 23.2525 20.3337C23.1161 20.1519 23.011 20.0013 22.9371 19.882H22.8519V23.3422H21.8462ZM22.8349 17.615C22.8349 18.1093 22.9073 18.5454 23.0522 18.9232C23.1971 19.2982 23.4087 19.5922 23.6871 19.8053C23.9656 20.0155 24.3065 20.1206 24.7099 20.1206C25.1303 20.1206 25.4812 20.0099 25.7624 19.7883C26.0465 19.5638 26.2596 19.2627 26.4016 18.8849C26.5465 18.5042 26.619 18.0809 26.619 17.615C26.619 17.1547 26.5479 16.74 26.4059 16.3706C26.2667 15.9985 26.055 15.7045 25.771 15.4885C25.4897 15.2698 25.136 15.1604 24.7099 15.1604C24.3008 15.1604 23.957 15.2641 23.6786 15.4715C23.4002 15.676 23.19 15.963 23.0479 16.3323C22.9059 16.6988 22.8349 17.1263 22.8349 17.615ZM35.5849 12.1604V20.8877H34.5281V13.2684H34.4769L32.3462 14.6831V13.6093L34.5281 12.1604H35.5849Z"
                                  fill="#FEFEFE"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="action-btn">
                            <div>
                              <a
                                className="btn btn-light"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                              >
                                <svg
                                  width={13}
                                  height={14}
                                  viewBox="0 0 13 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.02273 2.33333H7.97727C7.97727 1.94656 7.82163 1.57563 7.54459 1.30214C7.26755 1.02865 6.8918 0.875 6.5 0.875C6.1082 0.875 5.73245 1.02865 5.45541 1.30214C5.17837 1.57563 5.02273 1.94656 5.02273 2.33333ZM4.13636 2.33333C4.13636 1.71449 4.38539 1.121 4.82866 0.683417C5.27192 0.245833 5.87312 0 6.5 0C7.12687 0 7.72807 0.245833 8.17134 0.683417C8.61461 1.121 8.86364 1.71449 8.86364 2.33333H12.5568C12.6744 2.33333 12.7871 2.37943 12.8702 2.46147C12.9533 2.54352 13 2.6548 13 2.77083C13 2.88687 12.9533 2.99815 12.8702 3.08019C12.7871 3.16224 12.6744 3.20833 12.5568 3.20833H11.7827L11.0636 11.7268C11.0113 12.3464 10.725 12.9241 10.2614 13.3452C9.7979 13.7662 9.191 14 8.56109 14H4.43891C3.809 14 3.2021 13.7662 2.73857 13.3452C2.27504 12.9241 1.98873 12.3464 1.93641 11.7268L1.21727 3.20833H0.443182C0.325643 3.20833 0.212918 3.16224 0.129805 3.08019C0.0466922 2.99815 0 2.88687 0 2.77083C0 2.6548 0.0466922 2.54352 0.129805 2.46147C0.212918 2.37943 0.325643 2.33333 0.443182 2.33333H4.13636ZM2.81982 11.6538C2.85361 12.0548 3.03882 12.4286 3.33872 12.7011C3.63862 12.9736 4.03131 13.1249 4.43891 13.125H8.56109C8.96869 13.1249 9.36138 12.9736 9.66128 12.7011C9.96118 12.4286 10.1464 12.0548 10.1802 11.6538L10.894 3.20833H2.10659L2.81982 11.6538ZM5.17045 5.25C5.28799 5.25 5.40072 5.29609 5.48383 5.37814C5.56694 5.46019 5.61364 5.57147 5.61364 5.6875V10.6458C5.61364 10.7619 5.56694 10.8731 5.48383 10.9552C5.40072 11.0372 5.28799 11.0833 5.17045 11.0833C5.05292 11.0833 4.94019 11.0372 4.85708 10.9552C4.77396 10.8731 4.72727 10.7619 4.72727 10.6458V5.6875C4.72727 5.57147 4.77396 5.46019 4.85708 5.37814C4.94019 5.29609 5.05292 5.25 5.17045 5.25ZM8.27273 5.6875C8.27273 5.57147 8.22604 5.46019 8.14292 5.37814C8.05981 5.29609 7.94708 5.25 7.82955 5.25C7.71201 5.25 7.59928 5.29609 7.51617 5.37814C7.43306 5.46019 7.38636 5.57147 7.38636 5.6875V10.6458C7.38636 10.7619 7.43306 10.8731 7.51617 10.9552C7.59928 11.0372 7.71201 11.0833 7.82955 11.0833C7.94708 11.0833 8.05981 11.0372 8.14292 10.9552C8.22604 10.8731 8.27273 10.7619 8.27273 10.6458V5.6875Z"
                                    fill="#F54D4D"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a
                                className="btn btn-light"
                                // href="./edit-recipe.html"
                                role="button"
                                onClick={handleEdit}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </span>
                                Edit
                              </a>{" "}
                            </div>
                          </div>
                          <div className="detail-tips">
                            <p>
                              CGather all ingredients. Preheat the oven to 375
                              degrees F (190 degrees C).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={reciepe1} alt="" />
                          </div>
                          <div className="steps-count">
                            <span>
                              <svg
                                width={48}
                                height={36}
                                viewBox="0 0 48 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1718 25.9219V34.6089C18.2045 35.6424 16.9578 36.3564 16.0661 35.8134L0.708008 27.1274L1.40645 24.5332H16.7655C17.5418 24.5332 18.1718 25.1554 18.1718 25.9219Z"
                                  fill="#BD1212"
                                />
                                <path
                                  d="M48 16.5313L24 21.2381L0 16.5313V7.14067C0 6.37409 0.63 5.75194 1.40625 5.75194H30.9159V1.38855C30.9159 0.817314 31.2694 0.305336 31.8075 0.0961002C32.3456 -0.11221 32.9578 0.0248121 33.3516 0.442357L47.6231 15.5851C47.8744 15.8517 48 16.1915 48 16.5313Z"
                                  fill="#FF5555"
                                />
                                <path
                                  d="M48 16.5312C48 16.871 47.8744 17.2108 47.6231 17.4774L33.3516 32.6202C32.5324 33.5452 30.8757 32.8964 30.9159 31.674V27.3106H1.40625C0.63 27.3106 0 26.6884 0 25.9219V16.5312H48Z"
                                  fill="#E01010"
                                />
                                <path
                                  d="M7.82955 14.3422C7.77841 13.9104 7.57102 13.5752 7.20739 13.3366C6.84375 13.0979 6.39773 12.9786 5.86932 12.9786C5.48295 12.9786 5.14489 13.0411 4.85511 13.1661C4.56818 13.2911 4.34375 13.463 4.18182 13.6817C4.02273 13.9005 3.94318 14.1491 3.94318 14.4275C3.94318 14.6604 3.99858 14.8607 4.10938 15.0283C4.22301 15.1931 4.3679 15.3309 4.54403 15.4417C4.72017 15.5496 4.90483 15.6391 5.09801 15.7101C5.29119 15.7783 5.46875 15.8337 5.63068 15.8763L6.51705 16.115C6.74432 16.1746 6.99716 16.257 7.27557 16.3621C7.55682 16.4672 7.82528 16.6107 8.08097 16.7925C8.33949 16.9715 8.55256 17.2016 8.72017 17.4829C8.88778 17.7641 8.97159 18.1093 8.97159 18.5184C8.97159 18.99 8.84801 19.4161 8.60085 19.7968C8.35653 20.1775 7.99858 20.48 7.52699 20.7045C7.05824 20.9289 6.48864 21.0411 5.81818 21.0411C5.19318 21.0411 4.65199 20.9403 4.1946 20.7385C3.74006 20.5368 3.3821 20.2556 3.12074 19.8948C2.86222 19.534 2.71591 19.115 2.68182 18.6377H3.77273C3.80114 18.9672 3.91193 19.24 4.10511 19.4559C4.30114 19.6689 4.5483 19.828 4.84659 19.9331C5.14773 20.0354 5.47159 20.0866 5.81818 20.0866C6.22159 20.0866 6.58381 20.0212 6.90483 19.8905C7.22585 19.757 7.48011 19.5724 7.66761 19.3366C7.85511 19.0979 7.94886 18.8195 7.94886 18.5013C7.94886 18.2116 7.8679 17.9758 7.70597 17.7939C7.54403 17.6121 7.33097 17.4644 7.06676 17.3508C6.80256 17.2371 6.51705 17.1377 6.21023 17.0525L5.13636 16.7456C4.45455 16.5496 3.91477 16.2698 3.51705 15.9062C3.11932 15.5425 2.92045 15.0667 2.92045 14.4786C2.92045 13.99 3.05256 13.5638 3.31676 13.2002C3.58381 12.8337 3.94176 12.5496 4.39062 12.3479C4.84233 12.1434 5.34659 12.0411 5.90341 12.0411C6.46591 12.0411 6.96591 12.142 7.40341 12.3437C7.84091 12.5425 8.1875 12.8153 8.44318 13.1618C8.7017 13.5084 8.83807 13.9019 8.85227 14.3422H7.82955ZM13.4194 14.3422V15.1945H10.0273V14.3422H13.4194ZM11.016 12.7741H12.0217V19.0127C12.0217 19.2968 12.0629 19.5099 12.1452 19.6519C12.2305 19.7911 12.3384 19.8849 12.4691 19.9331C12.6026 19.9786 12.7433 20.0013 12.891 20.0013C13.0018 20.0013 13.0927 19.9956 13.1637 19.9843C13.2347 19.9701 13.2915 19.9587 13.3342 19.9502L13.5387 20.8536C13.4705 20.8792 13.3754 20.9047 13.2532 20.9303C13.131 20.9587 12.9762 20.9729 12.7887 20.9729C12.5046 20.9729 12.2262 20.9118 11.9535 20.7897C11.6836 20.6675 11.4592 20.4814 11.2802 20.2314C11.104 19.9814 11.016 19.6661 11.016 19.2854V12.7741ZM17.6062 21.0241C16.9755 21.0241 16.4315 20.8849 15.9741 20.6064C15.5195 20.3252 15.1687 19.9331 14.9215 19.4303C14.6772 18.9246 14.555 18.3366 14.555 17.6661C14.555 16.9956 14.6772 16.4047 14.9215 15.8934C15.1687 15.3792 15.5124 14.9786 15.9528 14.6917C16.396 14.4019 16.913 14.257 17.5039 14.257C17.8448 14.257 18.1815 14.3138 18.5138 14.4275C18.8462 14.5411 19.1488 14.7258 19.4215 14.9814C19.6942 15.2343 19.9116 15.5695 20.0735 15.9871C20.2354 16.4047 20.3164 16.9189 20.3164 17.5297V17.9559H15.271V17.0866H19.2937C19.2937 16.7172 19.2198 16.3877 19.0721 16.0979C18.9272 15.8081 18.7198 15.5795 18.4499 15.4118C18.1829 15.2442 17.8675 15.1604 17.5039 15.1604C17.1033 15.1604 16.7567 15.2599 16.4641 15.4587C16.1744 15.6547 15.9513 15.9104 15.7951 16.2258C15.6388 16.5411 15.5607 16.8792 15.5607 17.24V17.8195C15.5607 18.3138 15.646 18.7329 15.8164 19.0766C15.9897 19.4175 16.2298 19.6775 16.5366 19.8564C16.8434 20.0326 17.1999 20.1206 17.6062 20.1206C17.8704 20.1206 18.109 20.0837 18.3221 20.0099C18.538 19.9331 18.7241 19.8195 18.8803 19.6689C19.0366 19.5155 19.1573 19.3252 19.2425 19.0979L20.2141 19.3706C20.1119 19.7002 19.94 19.99 19.6985 20.24C19.457 20.4871 19.1587 20.6803 18.8036 20.8195C18.4485 20.9559 18.0494 21.0241 17.6062 21.0241ZM21.8462 23.3422V14.3422H22.8178V15.382H22.9371C23.011 15.2684 23.1133 15.1235 23.244 14.9474C23.3775 14.7684 23.5678 14.6093 23.815 14.4701C24.065 14.328 24.4031 14.257 24.8292 14.257C25.3803 14.257 25.8661 14.3948 26.2866 14.6704C26.707 14.9459 27.0352 15.3366 27.271 15.8422C27.5067 16.3479 27.6246 16.9445 27.6246 17.632C27.6246 18.3252 27.5067 18.926 27.271 19.4346C27.0352 19.9403 26.7085 20.3323 26.2908 20.6107C25.8732 20.8863 25.3917 21.0241 24.8462 21.0241C24.4258 21.0241 24.0891 20.9545 23.8363 20.8153C23.5835 20.6732 23.3888 20.5127 23.2525 20.3337C23.1161 20.1519 23.011 20.0013 22.9371 19.882H22.8519V23.3422H21.8462ZM22.8349 17.615C22.8349 18.1093 22.9073 18.5454 23.0522 18.9232C23.1971 19.2982 23.4087 19.5922 23.6871 19.8053C23.9656 20.0155 24.3065 20.1206 24.7099 20.1206C25.1303 20.1206 25.4812 20.0099 25.7624 19.7883C26.0465 19.5638 26.2596 19.2627 26.4016 18.8849C26.5465 18.5042 26.619 18.0809 26.619 17.615C26.619 17.1547 26.5479 16.74 26.4059 16.3706C26.2667 15.9985 26.055 15.7045 25.771 15.4885C25.4897 15.2698 25.136 15.1604 24.7099 15.1604C24.3008 15.1604 23.957 15.2641 23.6786 15.4715C23.4002 15.676 23.19 15.963 23.0479 16.3323C22.9059 16.6988 22.8349 17.1263 22.8349 17.615ZM35.5849 12.1604V20.8877H34.5281V13.2684H34.4769L32.3462 14.6831V13.6093L34.5281 12.1604H35.5849Z"
                                  fill="#FEFEFE"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="action-btn">
                            <div>
                              <a
                                className="btn btn-light"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                              >
                                <svg
                                  width={13}
                                  height={14}
                                  viewBox="0 0 13 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.02273 2.33333H7.97727C7.97727 1.94656 7.82163 1.57563 7.54459 1.30214C7.26755 1.02865 6.8918 0.875 6.5 0.875C6.1082 0.875 5.73245 1.02865 5.45541 1.30214C5.17837 1.57563 5.02273 1.94656 5.02273 2.33333ZM4.13636 2.33333C4.13636 1.71449 4.38539 1.121 4.82866 0.683417C5.27192 0.245833 5.87312 0 6.5 0C7.12687 0 7.72807 0.245833 8.17134 0.683417C8.61461 1.121 8.86364 1.71449 8.86364 2.33333H12.5568C12.6744 2.33333 12.7871 2.37943 12.8702 2.46147C12.9533 2.54352 13 2.6548 13 2.77083C13 2.88687 12.9533 2.99815 12.8702 3.08019C12.7871 3.16224 12.6744 3.20833 12.5568 3.20833H11.7827L11.0636 11.7268C11.0113 12.3464 10.725 12.9241 10.2614 13.3452C9.7979 13.7662 9.191 14 8.56109 14H4.43891C3.809 14 3.2021 13.7662 2.73857 13.3452C2.27504 12.9241 1.98873 12.3464 1.93641 11.7268L1.21727 3.20833H0.443182C0.325643 3.20833 0.212918 3.16224 0.129805 3.08019C0.0466922 2.99815 0 2.88687 0 2.77083C0 2.6548 0.0466922 2.54352 0.129805 2.46147C0.212918 2.37943 0.325643 2.33333 0.443182 2.33333H4.13636ZM2.81982 11.6538C2.85361 12.0548 3.03882 12.4286 3.33872 12.7011C3.63862 12.9736 4.03131 13.1249 4.43891 13.125H8.56109C8.96869 13.1249 9.36138 12.9736 9.66128 12.7011C9.96118 12.4286 10.1464 12.0548 10.1802 11.6538L10.894 3.20833H2.10659L2.81982 11.6538ZM5.17045 5.25C5.28799 5.25 5.40072 5.29609 5.48383 5.37814C5.56694 5.46019 5.61364 5.57147 5.61364 5.6875V10.6458C5.61364 10.7619 5.56694 10.8731 5.48383 10.9552C5.40072 11.0372 5.28799 11.0833 5.17045 11.0833C5.05292 11.0833 4.94019 11.0372 4.85708 10.9552C4.77396 10.8731 4.72727 10.7619 4.72727 10.6458V5.6875C4.72727 5.57147 4.77396 5.46019 4.85708 5.37814C4.94019 5.29609 5.05292 5.25 5.17045 5.25ZM8.27273 5.6875C8.27273 5.57147 8.22604 5.46019 8.14292 5.37814C8.05981 5.29609 7.94708 5.25 7.82955 5.25C7.71201 5.25 7.59928 5.29609 7.51617 5.37814C7.43306 5.46019 7.38636 5.57147 7.38636 5.6875V10.6458C7.38636 10.7619 7.43306 10.8731 7.51617 10.9552C7.59928 11.0372 7.71201 11.0833 7.82955 11.0833C7.94708 11.0833 8.05981 11.0372 8.14292 10.9552C8.22604 10.8731 8.27273 10.7619 8.27273 10.6458V5.6875Z"
                                    fill="#F54D4D"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a
                                className="btn btn-light"
                                // href="./edit-recipe.html"
                                role="button"
                                onClick={handleEdit}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </span>
                                Edit
                              </a>{" "}
                            </div>
                          </div>
                          <div className="detail-tips">
                            <p>
                              CGather all ingredients. Preheat the oven to 375
                              degrees F (190 degrees C).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recepi-detail-steps">
                      <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                          <div className="recepi-step-number">
                            <img src={reciepe1} alt="" />
                          </div>
                          <div className="steps-count">
                            <span>
                              <svg
                                width={48}
                                height={36}
                                viewBox="0 0 48 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.1718 25.9219V34.6089C18.2045 35.6424 16.9578 36.3564 16.0661 35.8134L0.708008 27.1274L1.40645 24.5332H16.7655C17.5418 24.5332 18.1718 25.1554 18.1718 25.9219Z"
                                  fill="#BD1212"
                                />
                                <path
                                  d="M48 16.5313L24 21.2381L0 16.5313V7.14067C0 6.37409 0.63 5.75194 1.40625 5.75194H30.9159V1.38855C30.9159 0.817314 31.2694 0.305336 31.8075 0.0961002C32.3456 -0.11221 32.9578 0.0248121 33.3516 0.442357L47.6231 15.5851C47.8744 15.8517 48 16.1915 48 16.5313Z"
                                  fill="#FF5555"
                                />
                                <path
                                  d="M48 16.5312C48 16.871 47.8744 17.2108 47.6231 17.4774L33.3516 32.6202C32.5324 33.5452 30.8757 32.8964 30.9159 31.674V27.3106H1.40625C0.63 27.3106 0 26.6884 0 25.9219V16.5312H48Z"
                                  fill="#E01010"
                                />
                                <path
                                  d="M7.82955 14.3422C7.77841 13.9104 7.57102 13.5752 7.20739 13.3366C6.84375 13.0979 6.39773 12.9786 5.86932 12.9786C5.48295 12.9786 5.14489 13.0411 4.85511 13.1661C4.56818 13.2911 4.34375 13.463 4.18182 13.6817C4.02273 13.9005 3.94318 14.1491 3.94318 14.4275C3.94318 14.6604 3.99858 14.8607 4.10938 15.0283C4.22301 15.1931 4.3679 15.3309 4.54403 15.4417C4.72017 15.5496 4.90483 15.6391 5.09801 15.7101C5.29119 15.7783 5.46875 15.8337 5.63068 15.8763L6.51705 16.115C6.74432 16.1746 6.99716 16.257 7.27557 16.3621C7.55682 16.4672 7.82528 16.6107 8.08097 16.7925C8.33949 16.9715 8.55256 17.2016 8.72017 17.4829C8.88778 17.7641 8.97159 18.1093 8.97159 18.5184C8.97159 18.99 8.84801 19.4161 8.60085 19.7968C8.35653 20.1775 7.99858 20.48 7.52699 20.7045C7.05824 20.9289 6.48864 21.0411 5.81818 21.0411C5.19318 21.0411 4.65199 20.9403 4.1946 20.7385C3.74006 20.5368 3.3821 20.2556 3.12074 19.8948C2.86222 19.534 2.71591 19.115 2.68182 18.6377H3.77273C3.80114 18.9672 3.91193 19.24 4.10511 19.4559C4.30114 19.6689 4.5483 19.828 4.84659 19.9331C5.14773 20.0354 5.47159 20.0866 5.81818 20.0866C6.22159 20.0866 6.58381 20.0212 6.90483 19.8905C7.22585 19.757 7.48011 19.5724 7.66761 19.3366C7.85511 19.0979 7.94886 18.8195 7.94886 18.5013C7.94886 18.2116 7.8679 17.9758 7.70597 17.7939C7.54403 17.6121 7.33097 17.4644 7.06676 17.3508C6.80256 17.2371 6.51705 17.1377 6.21023 17.0525L5.13636 16.7456C4.45455 16.5496 3.91477 16.2698 3.51705 15.9062C3.11932 15.5425 2.92045 15.0667 2.92045 14.4786C2.92045 13.99 3.05256 13.5638 3.31676 13.2002C3.58381 12.8337 3.94176 12.5496 4.39062 12.3479C4.84233 12.1434 5.34659 12.0411 5.90341 12.0411C6.46591 12.0411 6.96591 12.142 7.40341 12.3437C7.84091 12.5425 8.1875 12.8153 8.44318 13.1618C8.7017 13.5084 8.83807 13.9019 8.85227 14.3422H7.82955ZM13.4194 14.3422V15.1945H10.0273V14.3422H13.4194ZM11.016 12.7741H12.0217V19.0127C12.0217 19.2968 12.0629 19.5099 12.1452 19.6519C12.2305 19.7911 12.3384 19.8849 12.4691 19.9331C12.6026 19.9786 12.7433 20.0013 12.891 20.0013C13.0018 20.0013 13.0927 19.9956 13.1637 19.9843C13.2347 19.9701 13.2915 19.9587 13.3342 19.9502L13.5387 20.8536C13.4705 20.8792 13.3754 20.9047 13.2532 20.9303C13.131 20.9587 12.9762 20.9729 12.7887 20.9729C12.5046 20.9729 12.2262 20.9118 11.9535 20.7897C11.6836 20.6675 11.4592 20.4814 11.2802 20.2314C11.104 19.9814 11.016 19.6661 11.016 19.2854V12.7741ZM17.6062 21.0241C16.9755 21.0241 16.4315 20.8849 15.9741 20.6064C15.5195 20.3252 15.1687 19.9331 14.9215 19.4303C14.6772 18.9246 14.555 18.3366 14.555 17.6661C14.555 16.9956 14.6772 16.4047 14.9215 15.8934C15.1687 15.3792 15.5124 14.9786 15.9528 14.6917C16.396 14.4019 16.913 14.257 17.5039 14.257C17.8448 14.257 18.1815 14.3138 18.5138 14.4275C18.8462 14.5411 19.1488 14.7258 19.4215 14.9814C19.6942 15.2343 19.9116 15.5695 20.0735 15.9871C20.2354 16.4047 20.3164 16.9189 20.3164 17.5297V17.9559H15.271V17.0866H19.2937C19.2937 16.7172 19.2198 16.3877 19.0721 16.0979C18.9272 15.8081 18.7198 15.5795 18.4499 15.4118C18.1829 15.2442 17.8675 15.1604 17.5039 15.1604C17.1033 15.1604 16.7567 15.2599 16.4641 15.4587C16.1744 15.6547 15.9513 15.9104 15.7951 16.2258C15.6388 16.5411 15.5607 16.8792 15.5607 17.24V17.8195C15.5607 18.3138 15.646 18.7329 15.8164 19.0766C15.9897 19.4175 16.2298 19.6775 16.5366 19.8564C16.8434 20.0326 17.1999 20.1206 17.6062 20.1206C17.8704 20.1206 18.109 20.0837 18.3221 20.0099C18.538 19.9331 18.7241 19.8195 18.8803 19.6689C19.0366 19.5155 19.1573 19.3252 19.2425 19.0979L20.2141 19.3706C20.1119 19.7002 19.94 19.99 19.6985 20.24C19.457 20.4871 19.1587 20.6803 18.8036 20.8195C18.4485 20.9559 18.0494 21.0241 17.6062 21.0241ZM21.8462 23.3422V14.3422H22.8178V15.382H22.9371C23.011 15.2684 23.1133 15.1235 23.244 14.9474C23.3775 14.7684 23.5678 14.6093 23.815 14.4701C24.065 14.328 24.4031 14.257 24.8292 14.257C25.3803 14.257 25.8661 14.3948 26.2866 14.6704C26.707 14.9459 27.0352 15.3366 27.271 15.8422C27.5067 16.3479 27.6246 16.9445 27.6246 17.632C27.6246 18.3252 27.5067 18.926 27.271 19.4346C27.0352 19.9403 26.7085 20.3323 26.2908 20.6107C25.8732 20.8863 25.3917 21.0241 24.8462 21.0241C24.4258 21.0241 24.0891 20.9545 23.8363 20.8153C23.5835 20.6732 23.3888 20.5127 23.2525 20.3337C23.1161 20.1519 23.011 20.0013 22.9371 19.882H22.8519V23.3422H21.8462ZM22.8349 17.615C22.8349 18.1093 22.9073 18.5454 23.0522 18.9232C23.1971 19.2982 23.4087 19.5922 23.6871 19.8053C23.9656 20.0155 24.3065 20.1206 24.7099 20.1206C25.1303 20.1206 25.4812 20.0099 25.7624 19.7883C26.0465 19.5638 26.2596 19.2627 26.4016 18.8849C26.5465 18.5042 26.619 18.0809 26.619 17.615C26.619 17.1547 26.5479 16.74 26.4059 16.3706C26.2667 15.9985 26.055 15.7045 25.771 15.4885C25.4897 15.2698 25.136 15.1604 24.7099 15.1604C24.3008 15.1604 23.957 15.2641 23.6786 15.4715C23.4002 15.676 23.19 15.963 23.0479 16.3323C22.9059 16.6988 22.8349 17.1263 22.8349 17.615ZM35.5849 12.1604V20.8877H34.5281V13.2684H34.4769L32.3462 14.6831V13.6093L34.5281 12.1604H35.5849Z"
                                  fill="#FEFEFE"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <div className="action-btn">
                            <div>
                              <a
                                className="btn btn-light"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                                role="button"
                              >
                                <svg
                                  width={13}
                                  height={14}
                                  viewBox="0 0 13 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.02273 2.33333H7.97727C7.97727 1.94656 7.82163 1.57563 7.54459 1.30214C7.26755 1.02865 6.8918 0.875 6.5 0.875C6.1082 0.875 5.73245 1.02865 5.45541 1.30214C5.17837 1.57563 5.02273 1.94656 5.02273 2.33333ZM4.13636 2.33333C4.13636 1.71449 4.38539 1.121 4.82866 0.683417C5.27192 0.245833 5.87312 0 6.5 0C7.12687 0 7.72807 0.245833 8.17134 0.683417C8.61461 1.121 8.86364 1.71449 8.86364 2.33333H12.5568C12.6744 2.33333 12.7871 2.37943 12.8702 2.46147C12.9533 2.54352 13 2.6548 13 2.77083C13 2.88687 12.9533 2.99815 12.8702 3.08019C12.7871 3.16224 12.6744 3.20833 12.5568 3.20833H11.7827L11.0636 11.7268C11.0113 12.3464 10.725 12.9241 10.2614 13.3452C9.7979 13.7662 9.191 14 8.56109 14H4.43891C3.809 14 3.2021 13.7662 2.73857 13.3452C2.27504 12.9241 1.98873 12.3464 1.93641 11.7268L1.21727 3.20833H0.443182C0.325643 3.20833 0.212918 3.16224 0.129805 3.08019C0.0466922 2.99815 0 2.88687 0 2.77083C0 2.6548 0.0466922 2.54352 0.129805 2.46147C0.212918 2.37943 0.325643 2.33333 0.443182 2.33333H4.13636ZM2.81982 11.6538C2.85361 12.0548 3.03882 12.4286 3.33872 12.7011C3.63862 12.9736 4.03131 13.1249 4.43891 13.125H8.56109C8.96869 13.1249 9.36138 12.9736 9.66128 12.7011C9.96118 12.4286 10.1464 12.0548 10.1802 11.6538L10.894 3.20833H2.10659L2.81982 11.6538ZM5.17045 5.25C5.28799 5.25 5.40072 5.29609 5.48383 5.37814C5.56694 5.46019 5.61364 5.57147 5.61364 5.6875V10.6458C5.61364 10.7619 5.56694 10.8731 5.48383 10.9552C5.40072 11.0372 5.28799 11.0833 5.17045 11.0833C5.05292 11.0833 4.94019 11.0372 4.85708 10.9552C4.77396 10.8731 4.72727 10.7619 4.72727 10.6458V5.6875C4.72727 5.57147 4.77396 5.46019 4.85708 5.37814C4.94019 5.29609 5.05292 5.25 5.17045 5.25ZM8.27273 5.6875C8.27273 5.57147 8.22604 5.46019 8.14292 5.37814C8.05981 5.29609 7.94708 5.25 7.82955 5.25C7.71201 5.25 7.59928 5.29609 7.51617 5.37814C7.43306 5.46019 7.38636 5.57147 7.38636 5.6875V10.6458C7.38636 10.7619 7.43306 10.8731 7.51617 10.9552C7.59928 11.0372 7.71201 11.0833 7.82955 11.0833C7.94708 11.0833 8.05981 11.0372 8.14292 10.9552C8.22604 10.8731 8.27273 10.7619 8.27273 10.6458V5.6875Z"
                                    fill="#F54D4D"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a
                                className="btn btn-light"
                                // href="./edit-recipe.html"
                                role="button"
                                onClick={handleEdit}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                      fill="#333333"
                                    />
                                    <path
                                      d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                      fill="#333333"
                                    />
                                  </svg>
                                </span>
                                Edit
                              </a>{" "}
                            </div>
                          </div>
                          <div className="detail-tips">
                            <p>
                              CGather all ingredients. Preheat the oven to 375
                              degrees F (190 degrees C).
                            </p>
                          </div>
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
                        <p>
                          Butter chicken is a popular Indian dish made with
                          chicken, spices, tomatoes &amp; cream. This creamy
                          &amp; authentic tasting butter chicken is the best you
                          can make at home.&nbsp;Serve butter chicken with
                          Turmeric rice, Cumin rice, basmati rice or naan.
                        </p>
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
                        <p>
                          Butter chicken is rich, full of flavour and has a
                          delicious mix of spices, so it's best paired with a
                          medium weight white wine with good acidity. Enjoy it
                          with a&nbsp;Chardonnay, Roussanne, aged Riesling,
                          Semillon or Vermentino.
                        </p>
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
                      <div className="text-end">
                        <a className="btn btn-light"  role="button">
                          {" "}
                          <span>
                            {" "}
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                fill="#333333"
                              />
                              <path
                                d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                fill="#333333"
                              />
                              <path
                                d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                fill="#333333"
                              />
                              <path
                                d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                fill="#333333"
                              />
                              <path
                                d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                fill="#333333"
                              />
                              <path
                                d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                fill="#333333"
                              />
                            </svg>
                          </span>
                          Edit
                        </a>
                      </div>
                    </div>
                    <div className="Ingredients-steps">
                      <ul>
                        <li>1&nbsp;cup&nbsp;butter, divided</li>
                        <li>1&nbsp;onion, minced</li>
                        <li>1&nbsp;tablespoon&nbsp;minced garlic</li>
                        <li>1&nbsp;(15 ounce) can&nbsp;tomato sauce</li>
                        <li>3&nbsp;cups&nbsp;heavy cream</li>
                        <li>2&nbsp;teaspoons&nbsp;salt</li>
                        <li>1&nbsp;teaspoon&nbsp;cayenne pepper</li>
                        <li>1&nbsp;teaspoon&nbsp;garam masala</li>
                        <li>
                          1½&nbsp;½&nbsp;pounds&nbsp;skinless, boneless chicken
                          breast, cut into bite-sized chunks
                        </li>
                        <li>2&nbsp;tablespoons&nbsp;vegetable oil</li>
                        <li>2&nbsp;tablespoons&nbsp;tandoori masala</li>
                      </ul>
                    </div>
                  </div>
                  <div className="Nutrition-facts Nutrition-detail">
                    <div className="heading-meal">
                      <h4>Nutrition facts</h4>
                    </div>
                    <div className="nutritions">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="recipi-details">
                            <div className="text-center">
                              <div className="">
                                <h6>860</h6>
                                <p>Calories</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="recipi-details">
                            <div className="text-center">
                              <div className="">
                                <h6>66 Gm</h6>
                                <p> Protein</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="recipi-details">
                            <div className="text-center">
                              <div className="">
                                <h6>52gm</h6>
                                <p>Fats</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="recipi-details">
                            <div className="text-center">
                              <div className="">
                                <h6>32gm</h6>
                                <p>Carbs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="recipi-details">
                            <div className="text-center">
                              <div className="">
                                <div className="">
                                  <h6>92mg</h6>
                                  <p>Cholesterol</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="recipi-details">
                            <div className="text-center">
                              <div className="">
                                <h6>247mg</h6>
                                <p>Sodiume</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-5">
                          <a >View detailed nutrition facts</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Author-info Nutrition-detail">
                  <div className="heading-meal">
                    <h4>Author info</h4>
                    <div>
                      <div className="text-end">
                        <a
                          className="btn btn-light"
                          // href="./edit-recipe.html"
                          role="button"
                          onClick={handleEdit}
                        >
                          {" "}
                          <span>
                            {" "}
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                fill="#333333"
                              />
                              <path
                                d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                fill="#333333"
                              />
                              <path
                                d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                fill="#333333"
                              />
                              <path
                                d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                fill="#333333"
                              />
                              <path
                                d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                fill="#333333"
                              />
                              <path
                                d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                fill="#333333"
                              />
                            </svg>
                          </span>
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="author-profile text-center mt-5">
                    <img src={chef} alt="" />
                    <h4 className="mt-4">Anna Cooper</h4>
                    <a href="https://www.chefannacooper.com">
                      https://www.chefannacooper.com
                    </a>
                    <div className="copy-right mt-5">
                      <p>@copyright 2021-2024</p>
                    </div>
                  </div>
                </div>
                <div className="Notes Nutrition-detail">
                  <div className="heading-meal">
                    <h4>Notes</h4>
                    <div>
                      <div className="text-end">
                        <a
                          className="btn btn-light"
                          // href="./edit-recipe.html"
                          role="button"
                          onClick={handleEdit}
                        >
                          {" "}
                          <span>
                            {" "}
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.42914 9.53695C2.31714 9.53695 2.20536 9.4943 2.11983 9.40877C1.94899 9.23792 1.94899 8.96098 2.11983 8.79014L8.95664 1.95333C9.12727 1.78248 9.40443 1.78248 9.57527 1.95333C9.74611 2.12417 9.74611 2.40111 9.57527 2.57195L2.73846 9.40877C2.65314 9.49408 2.54114 9.53695 2.42914 9.53695Z"
                                fill="#333333"
                              />
                              <path
                                d="M1.75386 12.6879C1.72345 12.6879 1.69261 12.6846 1.66176 12.678C1.42551 12.6273 1.27501 12.3947 1.32576 12.1585L2.0017 9.00782C2.05245 8.77157 2.28607 8.62151 2.52123 8.67182C2.75748 8.72257 2.90798 8.9551 2.85723 9.19135L2.18129 12.342C2.13732 12.5474 1.95576 12.6879 1.75386 12.6879Z"
                                fill="#333333"
                              />
                              <path
                                d="M4.90375 12.0113C4.79175 12.0113 4.67997 11.9687 4.59444 11.8832C4.4236 11.7123 4.4236 11.4354 4.59444 11.2645L11.4313 4.42794C11.6019 4.25709 11.879 4.25709 12.0499 4.42794C12.2207 4.59878 12.2207 4.87572 12.0499 5.04656L5.21329 11.8832C5.12775 11.9687 5.01575 12.0113 4.90375 12.0113Z"
                                fill="#333333"
                              />
                              <path
                                d="M1.75265 12.6877C1.55074 12.6877 1.3694 12.5472 1.32521 12.3418C1.27468 12.1056 1.42496 11.873 1.66121 11.8223L4.81186 11.1464C5.04833 11.0963 5.28086 11.2463 5.3314 11.4824C5.38193 11.7186 5.23165 11.9511 4.9954 12.0019L1.84474 12.6778C1.8139 12.6846 1.78305 12.6877 1.75265 12.6877Z"
                                fill="#333333"
                              />
                              <path
                                d="M10.5035 6.41216C10.3915 6.41216 10.2795 6.36951 10.1942 6.28398L7.71944 3.80926C7.5486 3.63841 7.5486 3.36148 7.71944 3.19063C7.89007 3.01979 8.16744 3.01979 8.33807 3.19063L10.8128 5.66535C10.9836 5.8362 10.9836 6.11313 10.8128 6.28398C10.7275 6.36951 10.6155 6.41216 10.5035 6.41216Z"
                                fill="#333333"
                              />
                              <path
                                d="M11.7407 5.17502C11.6287 5.17502 11.5167 5.13237 11.4312 5.04684C11.2604 4.87599 11.2604 4.59905 11.4312 4.42799C11.6747 4.18452 11.8088 3.85487 11.8088 3.50005C11.8088 3.14524 11.6747 2.81559 11.4312 2.57212C11.1875 2.32843 10.8579 2.19434 10.503 2.19434C10.1482 2.19434 9.81857 2.32843 9.5751 2.57212C9.40448 2.74296 9.12754 2.74318 8.95626 2.57212C8.78541 2.40127 8.78541 2.12434 8.95626 1.95327C9.36488 1.54443 9.91416 1.31934 10.503 1.31934C11.0917 1.31934 11.6412 1.54443 12.0498 1.95327C12.4587 2.3619 12.6838 2.91118 12.6838 3.50005C12.6838 4.08893 12.4587 4.63821 12.0498 5.04684C11.9647 5.13215 11.8527 5.17502 11.7407 5.17502Z"
                                fill="#333333"
                              />
                            </svg>
                          </span>
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <img src={notes} alt="" />
                  </div>
                  <div className="copy-right mt-5">
                    <p>
                      Boiling is a method of&nbsp;cooking&nbsp;foods by just
                      immersing them in water at 1000 C and maintaining the
                      water at that ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <>
            {/* Modal 1 */}
            <div
              className="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <button
      type="button"
      className="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    /> */}
                    <span>
                      <i
                        className="fa fa-times custom-close-icon"
                        style={{ cursor: 'pointer', marginLeft: '16rem' }}
                      />
                    </span>
                  </div>
                  <div className="modal-body">
                    <div className="delet-content">
                      <h6>Are you sure you want to delete the Step 1?</h6>
                      <button className="btn btn-light" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>No</button>
                      <button
                        className="btn btn-light"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', marginLeft: "1rem" }} >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal 2 */}
            <div
              className="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        /> */}
                    <span>
                      <i
                        className="fa fa-times custom-close-icon"
                        style={{ cursor: 'pointer', marginLeft: '16rem' }}
                      />
                    </span>
                  </div>
                  <div className="modal-body">
                    <div className="delet-content">
                      <div>
                        <span>
                          <svg
                            width={36}
                            height={36}
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width={36} height={36} rx={18} fill="#60C26F" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.7203 22.0455L10.4531 17.692L9 19.1641L14.7203 25L27 12.472L25.5571 11L14.7203 22.0455Z"
                              fill="#FEFEFE"
                            />
                          </svg>
                        </span>
                        <h5 className="mt-3">Step 1 deleted successfully</h5>
                      </div>
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        style={{ height: "37px", marginTop: "20px" }}
                      >
                        Go to Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>




  )


}
export default RecipeView;