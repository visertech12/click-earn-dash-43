import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './context/AuthContext';

const API_BASE_URL = 'https://api.cashxdream.online';

const BigLionTrade = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/v3/home-page`);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Destructure the data safely
    const { general, data: pageData } = data || {};
    const plans = pageData?.plans || []; // Ensure plans is an array
    const isLoggedIn = !!user; // Use the user state from AuthContext

    return (
        <div id="appCapsule">
            <div className="relative">
                <div className="relative z-[2] backdrop-blur">
                    <div className="p-4 flex justify-center">
                        <a className="_flex_ce3u2_19 flex-shrink-0 _items-center_ce3u2_27" href="https://bigliontrade.com/">
                            <img className="_h-8_ce3u2_405 _w-auto_ce3u2_403 _drop-shadow_ce3u2_397 shadow-purple-500 _mx-2_ce3u2_165" 
                                src={`${API_BASE_URL}/assets/${general.site_logo}`} 
                                alt={general.site_title} />
                            <h1 className="_text-[18px]_ce3u2_310 _font-semibold_ce3u2_73 text-purple-500">{general?.site_title}</h1>
                        </a>
                    </div>

                    <div className="relative">
                        <div className="rounded-[20px] p-2.5 my-[4px] border-[3px] border-purple-400 shadow-lg backdrop-blur">
                            <div className="container bg-transparent mx-auto px-[8px] pt-[10px] rounded-t-[30px]">
                                <h1 className="text-center font-bold text-purple-500 text-[20px]">Joining Bonus 15Rs BigLionTrade</h1>
                                <p className="text-justify font-normal text-purple-600 text-[14px]">
                                    {general?.site_description}
                                </p>
                            </div>

                            <div className="my-4">
                                <div className="grid grid-cols-2 gap-3 px-5">
                                    {/* Only show Login and Register buttons if the user is not logged in */}
                                    {!isLoggedIn && (
                                        <>
                                            <Link className="relative overflow-hidden bg-white p-2 py-3.5 shadow-md shadow-purple-500/80 rounded-r-[20px] flex justify-center border-[2px] border-purple-400 hover:bg-purple-500 text-white" to="/login">
                                                <span className="relative z-[2] font-bold text-purple-500 hover:text-white">Login</span>
                                            </Link>
                                            <Link className="relative overflow-hidden bg-white p-2 py-3.5 shadow-md shadow-purple-500/80 rounded-r-[20px] flex justify-center border-[2px] border-purple-400 hover:bg-purple-500 text-white" to="/register">
                                                <span className="relative z-[2] font-bold text-purple-500 hover:text-white">Register</span>
                                            </Link>
                                        </>
                                    )}
                                </div>
                                <div className="mt-2 px-5">
                                    <Link 
                                        className="relative overflow-hidden bg-white p-2 py-2.5 shadow-md shadow-purple-500/80 rounded-[20px] flex justify-center border-[2px] border-purple-400 hover:bg-purple-500 w-full"
                                        to="/about"
                                    >
                                        <span className="relative z-[2] font-bold text-purple-500 hover:text-white">About Us</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-[10px] pb-[10px]">
                        <div className="swiper mySwiper py-5">
                            <div className="swiper-wrapper">
                                {pageData?.slider_images?.map((image, index) => (
                                    <div
                                        className={`swiper-slide${index === 1 ? ' swiper-slide-active' : ''}`}
                                        data-swiper-slide-index={index}
                                        key={image}
                                        style={{ width: '220px', marginRight: '20px' }}
                                    >
                                        <div className="bg-purple-100 shadow-md h-[150px] w-[250px] rounded-[10px] border-[2px] border-purple-400 p-2">
                                            <img className="rounded-50px" src={image} alt={`Slider Image ${index + 1}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className="mb-4">
                            <h1 className="text-center font-bold text-purple-500 text-[20px]">BigLionTrade Profitable Plans</h1>
                            <h1 className="text-center font-semibold text-purple-500/90 text-[12px]">The plans we offer are specifically made for you.</h1>
                        </div>
                        <div className="grid gap-2">
                            {plans.length > 0 ? plans.map((plan) => (
                                <div key={plan.id} className="bg-gradient-to-l from-purple-600 to-purple-600 relative rounded-[20px] p-2.5 my-[35px] shadow-lg ms-[30px]">
                                    <div className="relative z-[2]">
                                        <div className="relative z-[1] flex items-center gap-2">
                                            <div className="ms-[-40px] mt-[-15px] my-auto w-[100px] h-[100px] rounded-[30px] bg-purple-300 p-[1px] shadow-md">
                                                <img className="rounded-full" src={`${API_BASE_URL}/assets/${plan.icon}`} alt={`Plan Icon ${plan.name}`} />
                                            </div>
                                            <div className="flex-auto">
                                                <h1 className="text-[20px] text-nowrap truncate font-semibold mb-3 flex items-center gap-2">{plan.name}</h1>
                                                <div className="flex gap-2 justify-between">
                                                    <div className="text-left">
                                                        <h1 className="text-purple-50 drop-shadow-md font-semibold text-[15px]">Daily Profit</h1>
                                                        <h1 className="text-[11px] font-normal text-white drop-shadow-md">
                                                            <span className="text-[15px] font-bold">{plan.daily_profit}</span> Rs
                                                        </h1>
                                                    </div>
                                                    <div className="text-center">
                                                        <h1 className="text-purple-50 drop-shadow-md font-semibold text-[15px]">Plan Amount</h1>
                                                        <h1 className="text-[11px] font-normal text-white drop-shadow-md">
                                                            <span className="text-[15px] font-bold">{plan.amount}</span> Rs
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between mt-2">
                                                    <div className="text-left">
                                                        <h1 className="text-purple-50 drop-shadow-md font-semibold text-[15px]">Total Profit</h1>
                                                        <h1 className="text-[11px] font-normal text-white drop-shadow-md">
                                                            <span className="text-[15px] font-bold">{plan.total_profit}</span> Rs
                                                        </h1>
                                                    </div>
                                                    <div className="text-center">
                                                        <h1 className="text-purple-50 drop-shadow-md font-semibold text-[15px]">Plan Validity</h1>
                                                        <h1 className="text-[11px] font-normal text-white drop-shadow-md">
                                                            <span className="text-[14px] font-bold">{plan.validity_days}</span> Days
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-start my-2">
                                                    <h1 className="text-purple-50 font-semibold text-[15px] drop-shadow-md">Referral Bonus:</h1>
                                                    <div>
                                                        {/* Check for referral_bonus existence before accessing its properties */}
                                                        {plan.referral_bonus ? (
                                                            <>
                                                                <h1 className="text-[13px] text-white font-bold drop-shadow-md">Level 1: {plan.referral_bonus.level1}%</h1>
                                                                <h1 className="text-[13px] text-white font-bold drop-shadow-md">Level 2: {plan.referral_bonus.level2}%</h1>
                                                                <h1 className="text-[13px] text-white font-bold drop-shadow-md">Level 3: {plan.referral_bonus.level3}%</h1>
                                                            </>
                                                        ) : (
                                                            <h1 className="text-[13px] text-white font-bold drop-shadow-md">No Referral Bonus</h1>
                                                        )}
                                                    </div>
                                                </div>
                                                <Link to="/plans" className="btn btn-primary mt-3">
                                                    View Plan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="text-center text-purple-500">No plans available.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigLionTrade;
