import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  IconButton,
  InputAdornment,
  CircularProgress,
  Snackbar,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MuiAlert from '@mui/lab/Alert';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loader from "../components/Loader";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = Cookies.get('rememberedUsername');
    const storedPassword = Cookies.get('rememberedPassword');
    const storedDob = Cookies.get('rememberedDob');
    const storedRememberMe = Cookies.get('rememberMe');
  
    if (storedRememberMe && storedUsername && storedPassword && storedDob) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setDob(storedDob);
      setRememberMe(true);
    }
  }, []);
  

  const signIn = async () => {
    try {
      setLoading(true);
  
      const formattedDate = dob.split('-').reverse().join('-');
      const item = { username, password, dob: formattedDate };
  
      const response = await axios.post(
        'https://akgec-edu.onrender.com/v1/student/login',
        item,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          withCredentials: true,
        }
      );
  
      if (response.status === 200) {
        if (rememberMe) {
          // Store information in cookies
          Cookies.set('rememberedUsername', username);
          Cookies.set('rememberedPassword', password);
          Cookies.set('rememberedDob', dob);
          Cookies.set('rememberMe', true);
        } else {
          // Remove cookies if "Remember me" is not checked
          Cookies.remove('rememberedUsername');
          Cookies.remove('rememberedPassword');
          Cookies.remove('rememberedDob');
          Cookies.remove('rememberMe');
        }
  
        setSnackbarOpen(true);
        navigate('/dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleDateChange = (e) => {
    setDob(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(../src/assets/Loginbg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {loading && <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
      <Paper
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          paddingTop: 60,
          paddingBottom: 60,
          paddingLeft: 40,
          paddingRight: 40,
          borderRadius: '10px',
          width: '100%',
          maxWidth: '400px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontSize: '2.0rem', fontWeight: '550', marginBottom: '16px' }}>Login</h1>

          <TextField
            variant="outlined"
            style={{ width: '100%', marginBottom: '24px' }}
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            autoComplete="username"
          />

          <TextField
            variant="outlined"
            style={{ width: '100%', marginBottom: '24px' }}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPasswordToggle}
                    style={{ color: '#004BB8' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            style={{ width: '100%', marginBottom: '24px' }}
            label=""
            type="date"
            value={dob}
            onChange={handleDateChange}
            placeholder="Enter Your Date Of Birth"
          />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '0' }}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
              }
              label="Remember me"
            />
          </div>

          <Button
            style={{
              backgroundColor: '#004BB8',
              color: 'white',
              width: '100%',
              maxWidth: '400px',
              padding: '12px',
              borderRadius: '5px',
              '&:hover': {
                backgroundColor: 'skyblue',
              },
            }}
            onClick={signIn}
            disabled={loading}
          >
            Login
          </Button>

          <div className="text-center pt-4 font-normal text-sm ">
            <span className="font-semibold">Forgot Your Password?{' '}</span>
            <Link to="/register" className="text-[#dae9ff] font-normal underline">
              Reset Password
            </Link>
          </div>
        </div>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success" elevation={6} variant="filled">
          Successfully logged in!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;


// import React, { useState, useEffect } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import '../App.css';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [dob, setDob] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUsername = localStorage.getItem('rememberedUsername');
//         const storedPassword = localStorage.getItem('rememberedPassword');
//         const storedDob = localStorage.getItem('rememberedDob');
//         const storedRememberMe = localStorage.getItem('rememberMe');

//         if (storedRememberMe && storedUsername && storedPassword && storedDob) {
//             setUsername(storedUsername);
//             setPassword(storedPassword);
//             setDob(storedDob);
//             setRememberMe(true);
//         }
//     }, []);

//     const signIn = async () => {
//         try {
//             // Format date to "dd-mm-yyyy"
//             const formattedDate = dob.split('-').reverse().join('-');

//             let item = { username, password, dob: formattedDate };
//             console.warn(item);

//             const response = await axios.post('https://akgec-edu.onrender.com/v1/student/login', item, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                 },
//                 withCredentials: true,
//             });
//                 if (response.status === 200) {
//                     if (rememberMe) {
//                         localStorage.setItem('rememberedUsername', username);
//                         localStorage.setItem('rememberedPassword', password);
//                         localStorage.setItem('rememberedDob', dob);
//                         localStorage.setItem('rememberMe', true);
//                     } else {
//                         localStorage.removeItem('rememberedUsername');
//                         localStorage.removeItem('rememberedPassword');
//                         localStorage.removeItem('rememberedDob');
//                         localStorage.removeItem('rememberMe');
//                     }
//                     // Use the headers in the Axios request
//                     const result2 = await axios.post('https://akgec-edu.onrender.com/v1/student/login', item,{withCredentials:true});
            
//                     // login();
//                     navigate('/dashboard');
//                     console.log();

//                 toast.success('Login successful!', { position: 'top-right' });
//             } else {
//                 toast.error('Invalid Credentials');
//                 console.error('Login failed');
//             }
//         } catch (error) {
//             console.error('An error occurred during login', error);
//         }
//     };

//     const handleDateChange = (e) => {
//         setDob(e.target.value);
//     };

//     return (
//         <div
//             style={{
//                 backgroundImage: 'url(../src/assets/Loginbg.png)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//             }}
//         >
//             <div
//                 className="backdrop-blur-md"
//                 style={{
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     padding: '40px',
//                     borderRadius: '10px',
//                     width: '100%',
//                     maxWidth: '400px',
//                 }}
//             >
//                 <span className="text-center text-4xl font-semibold ">
//                     <center>Login</center>
//                 </span>

//                 <div className="font-sans text-base pt-4 md:pt-8 font-medium">
//                     <span className="pl-2 text-sm">Username</span>
//                     <br />
//                     <div className="w-full pt-2 pb-3 ">
//                         <input
//                             className="w-full p-3 pl-4 border border-black rounded-md font-normal text-sm bg-transparent focus:outline-none placeholder-black"
//                             type="text"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             placeholder="Enter Your Username"
//                         />
//                     </div>
//                     <span className="pl-2 text-sm"> Password</span>
//                     <div className="w-full pt-2 pb-3 relative">
//                         <input
//                             className="w-full p-3 pl-4 border border-black rounded-md font-normal text-sm bg-transparent focus:outline-none placeholder-black"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Enter Your password"
//                         />
//                     </div>
//                     <span className="pl-2 text-sm">D.O.B </span>
//                     <div className="w-full relative">
//                         <div className="relative">
//                             <input
//                                 className="w-full p-3 pl-4 border border-black rounded-md font-normal text-sm bg-transparent focus:outline-none placeholder-black"
//                                 type="date"
//                                 value={dob}
//                                 onChange={handleDateChange}
//                             />
//                         </div>
//                     </div>

//                     <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 md:pt-2 ">
//                         <div className="text-sm pt-2 md:pt-0">
//                             <input
//                                 type="checkbox"
//                                 className="opacity-50 form-checkbox border border-black"
//                                 checked={rememberMe}
//                                 onChange={() => setRememberMe(!rememberMe)}
//                             />{' '}
//                             <span className="opacity-100">Remember me</span>
//                         </div>
//                     </div>
//                     <br />
//                     <button className="bg-[#004BB8] text-white w-full md:w-80 p-2.5 mb-2 rounded-md hover:bg-sky-700 active:bg-sky-900 focus:outline-none focus:ring" onClick={signIn}>
//                         Login
//                     </button>
//                 </div>
//                 <br />
//                 <div className="text-center pt-2 font-normal text-sm ">
//                     <span className="font-semibold">Forgot Your Password?{' '}</span>
//                     <Link to="/register" className="text-[#dae9ff] font-normal underline">
//                         Reset Password
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;
