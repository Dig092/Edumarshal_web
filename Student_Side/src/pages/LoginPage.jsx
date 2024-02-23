

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
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(../src/assets/Loginbg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  paper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 60,      // Adjust the top padding
    paddingBottom: 60,   // Adjust the bottom padding
    paddingLeft: 40,     // Adjust the left padding
    paddingRight: 40, 
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    backdropFilter: 'blur(10px)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    marginTop: theme.spacing(0), // Reduce the spacing between Remember me and Date of Birth
  },
  
  textField: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  button: {
    backgroundColor: '#004BB8',
    color: 'white',
    width: '100%',
    maxWidth: '400px',
    padding: theme.spacing(1.5),
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'skyblue',
    },
  },
  heading: {
    fontSize: '2.0rem',
    fontWeight: '550',
    marginBottom: theme.spacing(2),
    
  },
  showPasswordIcon: {
    color: theme.palette.primary.main,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  
}));

const LoginPage = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
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

        setSnackbarOpen(true); // Open Snackbar on successful login
        navigate('/');
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
    <div className={classes.root}>
      {loading && <CircularProgress className={classes.loader} />}
      <Paper className={classes.paper}>
        <div className={classes.form}>
          <h1 className={classes.heading}>Login</h1>

          <TextField
            variant="outlined"
            className={classes.textField}
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
          />

          <TextField
            variant="outlined"
            className={classes.textField}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPasswordToggle}
                    className={classes.showPasswordIcon}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            className={classes.textField}
            label=""
            type="date"
            value={dob}
            onChange={handleDateChange}
            placeholder="Enter Your Date Of Birth"
          />

<div className={classes.checkboxContainer}>
  
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  className={classes.checkbox}
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
              }
              label="Remember me"
            /></div>

          <Button className={classes.button} onClick={signIn} disabled={loading}>
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

      {/* Snackbar for successful login */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Adjust the duration as needed
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
