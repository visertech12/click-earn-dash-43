import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login, error, user } = useAuth();
    const [usernameOrPhone, setUsernameOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/dashboard'); 
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login(usernameOrPhone, password);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="appCapsule" className="flex flex-col items-center justify-center min-h-screen">
            <div>
                <img className="w-full" src="logo.png" alt="BigLionTrade Logo" />
            </div>

            <div className="relative mt-5">
                <h1 className="text-center font-bold text-[30px] text-purple-600">Welcome to BigLionTrade</h1>
                <h2 className="text-center font-bold text-[13px] text-purple-400/70">Login to your account</h2>
            </div>

            <div className="mt-[50px] w-full max-w-sm">
                <form className="space-y-3" onSubmit={handleLogin}>
                    {error && <div className="text-red-500 text-center" aria-live="polite">{error}</div>}

                    {}
                    <div className="relative mb-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i className="fi fi-sr-user text-purple-600"></i>
                        </div>
                        <input
                            type="text"
                            className="bg-transparent text-purple-500 text-sm rounded-lg w-full pl-10 p-2.5 border-2 border-purple-500 focus:border-purple-600"
                            placeholder="Mobile number or username"
                            value={usernameOrPhone}
                            onChange={(e) => setUsernameOrPhone(e.target.value)} 
                            required
                        />
                    </div>

                    {}
                    <div className="relative mb-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i className="fi fi-sr-lock text-purple-700"></i>
                        </div>
                        <input
                            type="password"
                            className="bg-transparent text-purple-500 text-sm rounded-lg w-full pl-10 p-2.5 border-2 border-purple-500 focus:border-purple-600"
                            placeholder="Write your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="flex justify-center pt-10">
                        <button
                            type="submit"
                            className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r hover:bg-gradient-to-l from-purple-400 to-purple-600 shadow-md"
                            disabled={loading} 
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <span className="loader" /> {}
                                </span>
                            ) : (
                                <span>Log In</span>
                            )}
                        </button>
                    </div>
                </form>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Don't have an account?
                    <Link to="/register" className="font-semibold leading-6 text-purple-400 hover:text-purple-600 pl-1">
                        Register Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
