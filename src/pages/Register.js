import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext'; // Importing useAuth

const RegistrationPage = () => {
    const { register, login } = useAuth(); // Destructure the register and login functions
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
          
            await register(username, phone, password);

          
            await login(username, password);
            navigate('/dashboard'); 
        } catch (error) {
            console.error('Registration error:', error);
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen text-white">
            <div>
                <div>
                    <img
                        className="w-full"
                        src="./logo.png"
                        alt="Description of the image"
                    />
                </div>
                <div className="relative mt-5"></div>
                <div className="relative mt-5">
                    <div>
                        <h1 className="text-center font-bold text-[30px] text-purple-600">BigLionTrade Register</h1>
                        <h1 className="text-center font-bold text-[13px] text-purple-400/70">Register new Account BigLionTrade</h1>
                    </div>
                </div>
                <div className="flex flex-col justify-center px-6 pb-8 lg:px-8 mt-[50px]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-3">
                            {error && <p className="text-red-500 text-center">{error}</p>}
                            <div className="_relative_ce3u2_15 _mb-2_ce3u2_493">
                                <div className="_absolute_ce3u2_346 _inset-y-0_ce3u2_411 _start-0_ce3u2_627 _flex_ce3u2_19 _items-center_ce3u2_27 _ps-3.5_ce3u2_624 _pointer-events-none_ce3u2_630">
                                    <i className="fi fi-sr-user text-purple-600 _leading-[0px]_ce3u2_306"></i>
                                </div>
                                <input
                                    type="text"
                                    className="bg-transparent text-purple-500 _text-sm_ce3u2_214 _rounded-lg_ce3u2_243 _w-full_ce3u2_247 ps-[50px] _p-2.5_ce3u2_505 border-2 border-purple-500 focus:outline-2 focus:outline-transparent border-[0px] !bg-purple-100 text-purple-600 focus:outline-none p-4 !rounded-[13px] placeholder:text-purple-600"
                                    placeholder="Write username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="_relative_ce3u2_15 _mb-2_ce3u2_493">
                                <div className="_absolute_ce3u2_346 _inset-y-0_ce3u2_411 _start-0_ce3u2_627 _flex_ce3u2_19 _items-center_ce3u2_27 _ps-3.5_ce3u2_624 _pointer-events-none_ce3u2_630">
                                    <i className="fi fi-sr-phone-call text-purple-600 _leading-[0px]_ce3u2_306"></i>
                                </div>
                                <input
                                    type="text"
                                    className="bg-transparent text-purple-500 _text-sm_ce3u2_214 _rounded-lg_ce3u2_243 _w-full_ce3u2_247 ps-[50px] _p-2.5_ce3u2_505 border-2 border-purple-500 focus:outline-2 focus:outline-transparent border-[0px] !bg-purple-100 text-purple-600 focus:outline-none p-4 !rounded-[13px] placeholder:text-purple-700"
                                    placeholder="Write phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="_relative_ce3u2_15 _mb-2_ce3u2_493">
                                <div className="_absolute_ce3u2_346 _inset-y-0_ce3u2_411 _start-0_ce3u2_627 _flex_ce3u2_19 _items-center_ce3u2_27 _ps-3.5_ce3u2_624 _pointer-events-none_ce3u2_630">
                                    <i className="fi fi-sr-key text-purple-600 _leading-[0px]_ce3u2_306"></i>
                                </div>
                                <input
                                    type="password"
                                    className="bg-transparent text-purple-500 _text-sm_ce3u2_214 _rounded-lg_ce3u2_243 _w-full_ce3u2_247 ps-[50px] _p-2.5_ce3u2_505 border-2 border-purple-500 focus:outline-2 focus:outline-transparent border-[0px] !bg-purple-100 text-purple-600 focus:outline-none p-4 !rounded-[13px] placeholder:text-purple-600"
                                    placeholder="Write password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className={`_w-full_ce3u2_247 _py-3_ce3u2_170 _font-semibold_ce3u2_73 _text-white_ce3u2_196 _rounded-[10px]_ce3u2_56 _shadow-lg_ce3u2_439 _my-2_ce3u2_502 bg-gradient-to-r hover:bg-gradient-to-l from-purple-400 to-purple-600 _shadow-md_ce3u2_498 shadow-purple-600 _py-3_ce3u2_170 rounded-r-[20px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={loading}
                                >
                                    <div className="flex font-bold text-white items-center justify-center gap-3 px-6">
                                        {loading ? 'Registering...' : 'Register'}
                                    </div>
                                </button>
                            </div>
                        </form>
                        <p className="absolute bottom-[30px] left-[50%] translate-x-[-50%] mt-[2px] text-center text-sm text-gray-400">
                            Already have an account? 
                            <Link to="/login" className="font-semibold leading-6 text-purple-600 hover:text-purple-500 ps-1">
                                Login Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
