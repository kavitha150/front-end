// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Paper, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff, AccountCircle } from "@mui/icons-material";
// import "./LoginSignup.css";

// const LoginSignup = () => {
//     const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
//     const [isFormOpen, setIsFormOpen] = useState(false); // Toggle form visibility
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

//     // Toggle between Login and Signup form
//     const toggleForm = () => {
//         setIsSignup(!isSignup);
//         setFormData({ email: "", password: "", confirmPassword: "" });
//     };

//     // Handle input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isSignup && formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//         alert(`${isSignup ? "Signup" : "Login"} Successful!`);
//         setIsFormOpen(false); // Close the form after submission
//     };

//     return (
//         <div>
//             {/* User Icon to Open the Form */}
//                <IconButton onClick={() => setIsFormOpen(true)} className="user-icon">
//                     <AccountCircle fontSize="large" />
//               </IconButton>

           

//             {/* Display the Login/Signup Form */}
//             {isFormOpen && (
//                 <Container maxWidth="xs">
//                     <Paper elevation={6} className="login-container">
//                         <Typography variant="h5" className="login-title">
//                             {isSignup ? "Create an Account" : "Welcome Back"}
//                         </Typography>

//                         <form onSubmit={handleSubmit} className="login-form">
//                             <TextField
//                                 fullWidth
//                                 label="Email"
//                                 name="email"
//                                 type="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                                 margin="normal"
//                             />

//                             <TextField
//                                 fullWidth
//                                 label="Password"
//                                 name="password"
//                                 type={showPassword ? "text" : "password"}
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                                 margin="normal"
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             <IconButton onClick={() => setShowPassword(!showPassword)}>
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />

//                             {isSignup && (
//                                 <TextField
//                                     fullWidth
//                                     label="Confirm Password"
//                                     name="confirmPassword"
//                                     type={showPassword ? "text" : "password"}
//                                     value={formData.confirmPassword}
//                                     onChange={handleChange}
//                                     required
//                                     margin="normal"
//                                 />
//                             )}

//                             <Button type="submit" variant="contained" color="primary" fullWidth className="login-button">
//                                 {isSignup ? "Sign Up" : "Login"}
//                             </Button>

//                             <Typography className="toggle-text" onClick={toggleForm} style={{ cursor: "pointer" }}>
//                                 {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//                             </Typography>

//                             {/* Close Button */}
//                             <Typography
//                                 className="close-text"
//                                 onClick={() => setIsFormOpen(false)}
//                                 style={{ cursor: "pointer", textAlign: "center", marginTop: "10px" }}
//                             >
//                                 Close
//                             </Typography>
//                         </form>
//                     </Paper>
//                 </Container>
//             )}
//         </div>
//     );
// };

// export default LoginSignup;


// import React, { useState } from "react";
// import {
//     Container,
//     TextField,
//     Button,
//     Typography,
//     Paper,
//     IconButton,
//     InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff, AccountCircle } from "@mui/icons-material";


// import "./LoginSignup.css";

// const LoginSignup = () => {
//     const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
//     const [isFormOpen, setIsFormOpen] = useState(false); // Toggle form visibility
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

//     // Toggle between Login and Signup form
//     const toggleForm = () => {
//         setIsSignup(!isSignup);
//         setFormData({ email: "", password: "", confirmPassword: "" });
//     };

//     // Handle input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isSignup && formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//         alert(`${isSignup ? "Signup" : "Login"} Successful!`);
//         setIsFormOpen(false); // Close the form after submission
//     };

//     return (
//         <div>
//             {/* Header Section */}
//             <header className="header">
//                 <IconButton onClick={() => setIsFormOpen(true)} className="user-icon">
//                     <AccountCircle fontSize="large" />
//                 </IconButton>
//             </header>

//             {/* Display the Login/Signup Form */}
//             {isFormOpen && (
//                 <Container maxWidth="xs">
//                     <Paper elevation={6} className="login-container">
//                         <Typography variant="h5" className="login-title">
//                             {isSignup ? "Create an Account" : "Welcome Back"}
//                         </Typography>

//                         <form onSubmit={handleSubmit} className="login-form">
//                             <TextField
//                                 fullWidth
//                                 label="Email"
//                                 name="email"
//                                 type="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                                 margin="normal"
//                             />

//                             <TextField
//                                 fullWidth
//                                 label="Password"
//                                 name="password"
//                                 type={showPassword ? "text" : "password"}
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                                 margin="normal"
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             <IconButton onClick={() => setShowPassword(!showPassword)}>
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />

//                             {isSignup && (
//                                 <TextField
//                                     fullWidth
//                                     label="Confirm Password"
//                                     name="confirmPassword"
//                                     type={showPassword ? "text" : "password"}
//                                     value={formData.confirmPassword}
//                                     onChange={handleChange}
//                                     required
//                                     margin="normal"
//                                 />
//                             )}

//                             <Button type="submit" variant="contained" color="primary" fullWidth className="login-button">
//                                 {isSignup ? "Sign Up" : "Login"}
//                             </Button>

//                             <Typography className="toggle-text" onClick={toggleForm} style={{ cursor: "pointer" }}>
//                                 {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//                             </Typography>

//                             {/* Close Button */}
//                             <Typography
//                                 className="close-text"
//                                 onClick={() => setIsFormOpen(false)}
//                                 style={{ cursor: "pointer", textAlign: "center", marginTop: "10px" }}
//                             >
//                                 Close
//                             </Typography>
//                         </form>
//                     </Paper>
//                 </Container>
//             )}
//         </div>
//     );
// };

// export default LoginSignup;

import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Paper,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, AccountCircle } from "@mui/icons-material"; // Import icons
import "./LoginSignup.css";

const LoginSignup = () => {
    const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
    const [isFormOpen, setIsFormOpen] = useState(false); // Toggle form visibility
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

    // Toggle between Login and Signup form
    const toggleForm = () => {
        setIsSignup(!isSignup);
        setFormData({ email: "", password: "", confirmPassword: "" });
    };

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert(`${isSignup ? "Signup" : "Login"} Successful!`);
        setIsFormOpen(false); // Close the form after submission
    };

    return (
        <div>
            {/* User Icon to Open the Form */}
            <IconButton onClick={() => setIsFormOpen(true)} style={{ fontSize: "2rem",backgroundColor:"white",marginTop:"-293px",marginLeft:"1300px"}}>
  
                <AccountCircle fontSize="large" />
            </IconButton>

            {/* Display the Login/Signup Form */}
            {isFormOpen && (
                <Container maxWidth="xs">
                    <Paper elevation={6} className="login-container">
                        <Typography variant="h5" className="login-title">
                            {isSignup ? "Create an Account" : "Welcome Back"}
                        </Typography>

                        <form onSubmit={handleSubmit} className="login-form">
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={handleChange}
                                required
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {isSignup && (
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    margin="normal"
                                />
                            )}

                            <Button type="submit" variant="contained" color="primary" fullWidth className="login-button">
                                {isSignup ? "Sign Up" : "Login"}
                            </Button>

                            <Typography className="toggle-text" onClick={toggleForm} style={{ cursor: "pointer" }}>
                                {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                            </Typography>

                            {/* Close Button */}
                            <Typography
                                className="close-text"
                                onClick={() => setIsFormOpen(false)}
                                style={{ cursor: "pointer", textAlign: "center", marginTop: "10px" }}
                            >
                                Close
                            </Typography>
                        </form>
                    </Paper>
                </Container>
            )}
        </div>
    );
};

export default LoginSignup;
