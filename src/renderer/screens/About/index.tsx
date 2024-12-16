import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    grp5,
    grp4,
    grp3,
    grp2,
    grp1,
    grp8,
    grp7,
    grp6,
    frame13,
    frame10,
    frame11,
    frame12,
    frame14,
    frame9,
    frame15,
    frame16,
    frame17, 
    arraw,
    noodle,
    ginger,
} from '../../assets/images';

import './Dashboard.css';
// import { Stores, addData, initDB } from '../../dbconfig/Offlinedb';

const Home: React.FC = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     initDB().then((result) => {
    //         if (result) {
    //             console.log('Database initialized successfullyyy2');
    //         } else {
    //             console.log('Failed to initialize database');
    //         }
    //     });
    // }, []);

    const handleclick = async () => {
        const list = [
            {
                id: 2,
                image: noodle,
                title: "Snacks",
                icon: arraw,
                "recipe-time": "Created: 5 days ago",
                "recipe-content": "26 recipe’s"
            },
            {
                id: 3,
                image: ginger,
                title: "Chicken recipe",
                icon: arraw,
                "recipe-time": "Created: 5 days ago",
                "recipe-content": "26 recipe’s"
            },
            {
                id: 4,
                title: "Snacks",
                image: noodle,
                icon: arraw,
                "recipe-time": "Created: 5 days ago",
                "recipe-content": "26 recipe’s"
            },
            {
                id: 5,
                image: noodle,
                title: "Snacks",
                icon: arraw,
                "recipe-time": "Created: 5 days ago",
                "recipe-content": "26 recipe’s"
            },
            {
                id: 6,
                image: ginger,
                title: "Chicken recipe",
                icon: arraw,
                "recipe-time": "Created: 5 days ago",
                "recipe-content": "26 recipe’s"
            },
        ];

        try {
            // await initDB();
            console.log('Database initialized successfullyr');
            navigate('/cookbook');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleShoping = () => {
        navigate('/shopingList');
    };

    const dashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <div className="container d-flex flex-column vh-100 p-0 ">
                <div className="search-bar">
                    <div className="searching">
                        <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" placeholder="search" />
                    </div>
                </div>

                <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="card-box-container">
                            <div className="card-box">
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp5} alt="grp-5" onClick={handleclick} />
                                        <p className="content">Cookbooks</p>
                                    </div>
                                </div>
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp4} alt="grp-4" />
                                        <p className="content">Meals</p>
                                    </div>
                                </div>
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp3} alt="grp-2" onClick={handleShoping} />
                                        <p className="content">Shopping</p>
                                    </div>
                                </div>
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp2} alt="grp-2" />
                                        <p className="content">Tips</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-box">
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp1} alt="grp-1" />
                                        <p className="content">Favorites</p>
                                    </div>
                                </div>
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp8} alt="grp-5" />
                                        <p className="content">MasterList</p>
                                    </div>
                                </div>
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp7} alt="grp-5" />
                                        <p className="content">Sync</p>
                                    </div>
                                </div>
                                <div className="card text-center p-3">
                                    <div>
                                        <img src={grp6} alt="grp-6" />
                                        <p className="content">Backup</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                        <img src={frame10} alt="frame-13" onClick={handleclick} />
                                    </div>
                                </button>
                                <button className="btn btn-light d-flex flex-column align-items-center">
                                    <div className="res-app3 res-app">
                                        <img src={frame11} alt="frame-11" />
                                    </div>
                                </button>
                                <button className="btn btn-light d-flex flex-column align-items-center">
                                    <div className="res-app4 res-app dashboard">
                                        <img src={frame12} alt="frame-12" onClick={handleShoping} />
                                    </div>
                                </button>
                                <button className="btn btn-light d-flex flex-column align-items-center">
                                    <div className="app-pic5 res-app">
                                        <img src={frame17} alt="frame-13" />
                                    </div>
                                </button>
                                <button className="btn btn-light d-flex flex-column align-items-center">
                                    <div className="app-pic6 res-app">
                                        <img src={frame14} alt="frame-14" />
                                    </div>
                                </button>
                                <button className="btn btn-light d-flex flex-column align-items-center">
                                    <div className="app-pic7 res-app">
                                        <img src={frame9} alt="frame-9" />
                                    </div>
                                </button>
                                <button className="btn btn-light d-flex flex-column align-items-center">
                                    <div className="app-pic8 res-app">
                                        <img src={frame15} alt="frame-15" />
                                    </div>
                                </button>
                                <button className="btn btn-light d-flex flex-column align-items-center">
                                    <div className="app-pic8 res-app">
                                        <img src={frame16} alt="frame-16" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Home;
