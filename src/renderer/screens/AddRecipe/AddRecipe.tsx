import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import { 
  arraw, chicken, chickenRecipe, frame10, frame11, frame12, frame13, 
  frame14, frame15, frame16, frame17, frame9, ginger, greentea, noodle, quikmeal 
} from '../../assets/images';
import RecipeCard from '../../components/ListCookBook';
import Sidebar from '../../components/Sidebar';
import RecipeList from '../../components/Recipelist';
import InputWithClear from '../../components/inputbax';
import './AddRecipe.css';

const AddRecipe: React.FC = () => {
    const [showModal1, setShowModal1] = useState<boolean>(false);
    const [showModal2, setShowModal2] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleCloseModal1 = () => setShowModal1(false);
    const handleShowModal1 = () => setShowModal1(true);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => {
        setShowModal1(false);
        setShowModal2(true);
    };

    const handleClick = () => {
        navigate('/viewRecipe');
    };

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files, 'hfdhfgdfgdfg');
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected file:', file);
            // Add further functionality here, like uploading the file to a server or displaying a preview
        }
    };

    const handleClicks = () => {
        navigate('/snacksDetail');
    };

    const data = [
        { id: 1, mealPic: quikmeal, mealName: "Quick Meals", created: "Created: 5 days ago" },
        { id: 2, mealPic: noodle, mealName: "snacks", created: "Created: 5 days ago" },
        { id: 3, mealPic: chicken, mealName: "Chicken recipe", created: "Created: 5 days ago" },
        { id: 4, mealPic: noodle, mealName: "snacks", created: "Created: 5 days ago" },
        { id: 5, mealPic: chicken, mealName: "Chicken recipe", created: "Created: 5 days ago" },
        { id: 6, mealPic: noodle, mealName: "snacks", created: "Created: 5 days ago" },
        { id: 7, mealPic: chicken, mealName: "Chicken recipe", created: "Created: 5 days ago" },
        { id: 8, mealPic: noodle, mealName: "snacks", created: "Created: 5 days ago" },
    ];

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed">
            <aside className="left-sidebar">

                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a onClick={handleClicks} className="text-nowrap logo-img">

                            <div className="d-flex gap-3 cook-book-heading-1"> <span className="h6"><i className="fa-solid fa-chevron-left"></i></span>
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



            </aside >
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
                            className="navbar-collapse justify-content-between px-0"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav flex-row align-items-center justify-content-start ms-5">
                                <li className="nav-item ms-5 ">
                                    <div className='ms-5'>
                                        <h5> Add Recipe</h5>
                                    </div>
                                </li>

                            </ul>
                            <ul className="navbar-nav flex-row align-items-center justify-content-end ms-5">
                                <li className="nav-item ">
                                    <div>
                                        <button className='btn btn-primary' onClick={handleShowModal2}> Save changes</button>
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
                                    <div className="col-12">
                                        <InputWithClear />
                                    </div>
                                    <hr className="dashed-2" />
                                    <div className="recepe-video-content">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
                                                <div className="vide-add add-recipe-vido">
                                                    <div className="add-images">
                                                        <div className="row">
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="add-images">
                                                        <div className="row">
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                                <div className="box-border  box-border-add">
                                                                    <p className="import">
                                                                        <button className='btn btn-light' onClick={() => document.getElementById('fileInput')?.click()}>Add image/Video</button>
                                                                    </p>
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={(e) => handleFileSelect(e)}

                                                                    />
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
                                                    <div className="recepi-step-number-add">
                                                        <input type="file" id="upload" hidden />
                                                        <label htmlFor="upload" className="upload-btn">
                                                            Add image/Video Edit
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                                                    <div className="detail-tips-add">
                                                        <div className="mb-3 add-directions">

                                                            <InputWithClear />

                                                        </div>
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
                                                <div className="d-flex justify-content-center align-items-center mt-4">
                                                    <button type="button" className="btn btn-light">
                                                        {" "}
                                                        Add More step
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
                                                    className="form-control mt-3"
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
                                                    className="form-control mt-3"
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
                                                    <div className="mb-3 edit-ingredients">
                                                        <InputWithClear />
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="mb-3 edit-ingredients">
                                                        <InputWithClear />
                                                    </div>
                                                </li>


                                            </ul>
                                            <div className="row">
                                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm">
                                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                                        <button type="button" className="btn btn-light">
                                                            {" "}
                                                            Add More step
                                                        </button>
                                                        <button type="button" className="btn btn-primary" onClick={handleShowModal2}>
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
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="recepi-step-number-add">
                                                <input type="file" id="upload" hidden />
                                                <label htmlFor="upload" className="upload-btn">
                                                    Add image/Video Edit
                                                </label>
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
                                    </div>
                                </div>
                                <div className="Notes Nutrition-detail">
                                    <div className="heading-meal">
                                        <h4>Notes</h4>
                                        <div></div>
                                    </div>
                                    <div className="recepi-step-number-add">
                                        <input type="file" id="upload" hidden />
                                        <label htmlFor="upload" className="upload-btn">
                                            Add image/Video Edit
                                        </label>
                                    </div>
                                    <div className="copy-right mt-3">
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows={3}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <>
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


    )
}

export default AddRecipe;