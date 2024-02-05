import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../App.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('rememberedUsername');
        const storedPassword = localStorage.getItem('rememberedPassword');
        const storedDob = localStorage.getItem('rememberedDob');
        const storedRememberMe = localStorage.getItem('rememberMe');

        if (storedRememberMe && storedUsername && storedPassword && storedDob) {
            setUsername(storedUsername);
            setPassword(storedPassword);
            setDob(storedDob);
            setRememberMe(true);
        }
    }, []);

    const signIn = async () => {
        try {
            // Format date to "dd-mm-yyyy"
            const formattedDate = dob.split('-').reverse().join('-');

            let item = { username, password, dob: formattedDate };
            console.warn(item);

            const response = await axios.post('https://akgec-edu.onrender.com/v1/student/login', item, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                withCredentials: true,
            });
                if (response.status === 200) {
                    if (rememberMe) {
                        localStorage.setItem('rememberedUsername', username);
                        localStorage.setItem('rememberedPassword', password);
                        localStorage.setItem('rememberedDob', dob);
                        localStorage.setItem('rememberMe', true);
                    } else {
                        localStorage.removeItem('rememberedUsername');
                        localStorage.removeItem('rememberedPassword');
                        localStorage.removeItem('rememberedDob');
                        localStorage.removeItem('rememberMe');
                    }
                    // Use the headers in the Axios request
                    const result2 = await axios.post('https://akgec-edu.onrender.com/v1/student/login', item,{withCredentials:true});
            
                    // login();
                    navigate('/Dashboard');
                    console.log();

                toast.success('Login successful!', { position: 'top-right' });
            } else {
                toast.error('Invalid Credentials');
                console.error('Login failed');
            }
        } catch (error) {
            console.error('An error occurred during login', error);
        }
    };

    const handleDateChange = (e) => {
        setDob(e.target.value);
    };

    return (
        <div
            style={{
                backgroundImage: 'url(../src/assets/Loginbg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                className="backdrop-blur-md"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '40px',
                    borderRadius: '10px',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <span className="text-center text-4xl font-semibold ">
                    <center>Login</center>
                </span>

                <div className="font-sans text-base pt-4 md:pt-8 font-medium">
                    <span className="pl-2 text-sm">Username</span>
                    <br />
                    <div className="w-full pt-2 pb-3 ">
                        <input
                            className="w-full p-3 pl-4 border border-black rounded-md font-normal text-sm bg-transparent focus:outline-none placeholder-black"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Your Username"
                        />
                    </div>
                    <span className="pl-2 text-sm"> Password</span>
                    <div className="w-full pt-2 pb-3 relative">
                        <input
                            className="w-full p-3 pl-4 border border-black rounded-md font-normal text-sm bg-transparent focus:outline-none placeholder-black"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Your password"
                        />
                    </div>
                    <span className="pl-2 text-sm">D.O.B </span>
                    <div className="w-full relative">
                        <div className="relative">
                            <input
                                className="w-full p-3 pl-4 border border-black rounded-md font-normal text-sm bg-transparent focus:outline-none placeholder-black"
                                type="date"
                                value={dob}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 md:pt-2 ">
                        <div className="text-sm pt-2 md:pt-0">
                            <input
                                type="checkbox"
                                className="opacity-50 form-checkbox border border-black"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />{' '}
                            <span className="opacity-100">Remember me</span>
                        </div>
                    </div>
                    <br />
                    <button className="bg-[#004BB8] text-white w-full md:w-80 p-2.5 mb-2 rounded-md hover:bg-sky-700 active:bg-sky-900 focus:outline-none focus:ring" onClick={signIn}>
                        Login
                    </button>
                </div>
                <br />
                <div className="text-center pt-2 font-normal text-sm ">
                    <span className="font-semibold">Forgot Your Password?{' '}</span>
                    <Link to="/register" className="text-[#dae9ff] font-normal underline">
                        Reset Password
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;