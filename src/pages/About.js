
import React from 'react';
import { Link } from 'react-router-dom';
import API_URL from '../api/api';

const About = () => {
    return (
        <div id="appCapsule" className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
            <div className="relative p-4">
                <div className="flex justify-between items-center mb-4">
                    <Link to="/" className="text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-purple-600">About Us</h1>
                    <div className="w-6"></div> {/* Spacer for alignment */}
                </div>
                
                <div className="rounded-[20px] p-4 mb-4 border-[3px] border-purple-400 shadow-lg backdrop-blur bg-white">
                    <div className="flex justify-center mb-4">
                        <img 
                            className="h-24 w-auto drop-shadow shadow-purple-500" 
                            src={`${API_URL}/assets/logo.png`} 
                            alt="BigLionTrade Logo"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/logo.png"; // Fallback to local logo
                            }}
                        />
                    </div>
                    
                    <h2 className="text-center font-bold text-purple-500 text-[20px] mb-3">
                        About BigLionTrade
                    </h2>
                    
                    <div className="space-y-4 text-purple-800">
                        <p className="text-justify">
                            BigLionTrade is a premier investment platform designed to help users grow their wealth through strategic investments and referral programs.
                        </p>
                        
                        <p className="text-justify">
                            Founded in 2023, we've quickly established ourselves as a trusted name in the digital investment space. Our mission is to make profitable investments accessible to everyone.
                        </p>
                        
                        <h3 className="text-lg font-semibold text-purple-600 mt-4">Our Vision</h3>
                        <p className="text-justify">
                            To become the leading global platform for accessible investment opportunities and financial growth.
                        </p>
                        
                        <h3 className="text-lg font-semibold text-purple-600 mt-4">What We Offer</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Diverse investment plans with guaranteed returns</li>
                            <li>Secure and transparent investment tracking</li>
                            <li>Lucrative referral programs with multi-level benefits</li>
                            <li>24/7 customer support</li>
                            <li>Regular payouts and withdrawals</li>
                        </ul>
                    </div>
                </div>
                
                <div className="rounded-[20px] p-4 mb-4 border-[3px] border-purple-400 shadow-lg backdrop-blur bg-white">
                    <h3 className="text-lg font-semibold text-purple-600 mb-3">Contact Us</h3>
                    <div className="space-y-2 text-purple-800">
                        <p><strong>Email:</strong> support@bigliontrade.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Office Hours:</strong> Monday to Friday, 9 AM - 5 PM EST</p>
                    </div>
                </div>
                
                <div className="rounded-[20px] p-4 border-[3px] border-purple-400 shadow-lg backdrop-blur bg-white">
                    <h3 className="text-lg font-semibold text-purple-600 mb-3">Our Team</h3>
                    <p className="text-purple-800 mb-4">
                        BigLionTrade is powered by a team of experienced financial experts and technologists dedicated to helping our users achieve their financial goals.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h4 className="font-semibold text-purple-600">John Smith</h4>
                            <p className="text-sm text-purple-500">CEO & Founder</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h4 className="font-semibold text-purple-600">Jane Doe</h4>
                            <p className="text-sm text-purple-500">CTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
