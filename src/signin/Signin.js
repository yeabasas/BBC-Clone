import { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import "./signin.css";
const Signin = () => {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const [userBirthDate,setUserBirthDate] = useState();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const accounts = {username,userBirthDate,email,password};
        fetch("http://localhost:9000/accounts",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(accounts)
        }).then(()=>{
            console.log('Added Successfully');
            history.push('/')
        })
    }
    return ( 
        <div className="Signin">
            <form onSubmit={handleSubmit}>
                 <h1>Sign Up</h1>
                 <div className="sign-in">
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        placeholder="User Name"
                        onChange={(e)=> setUserName(e.target.value)}
                    />
                    <input 
                        type="date"
                        name="Date-of-Birth"
                        value={userBirthDate}
                        placeholder="Date of birth"
                        onChange={(e)=> setUserBirthDate(e.target.value)}
                    />
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button>Sign Up</button>
            </form>
            <div className="have-account">
                <Link to="/Login">Already Have An Account?</Link>
            </div>
        </div>
        
     );
}
 
export default Signin;






















// import { useEffect, useState } from "react";
// import "./signin.css";

// const Signin = () => {
//     const initialValues ={username:'',password:''}
//     const [formValues,setFormValues] = useState(initialValues)
//     const [formErrors,setFormErrors] = useState({})  
//     const [isSubmit ,setIsSubmit] = useState(false)
    
//     const handleChange =(e)=>{
//         const {name,value}=e.target;
//         setFormValues({...formValues,[name]:value});
//     };

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         setFormErrors(validate(formValues))
//         setIsSubmit(true);
//     };
//     useEffect(()=>{
//         if(Object.keys(formErrors).length === 0 && isSubmit){
//             console.log(formValues);
//             console.log(formErrors)
//         }
//     },[formErrors]);

//     const validate =(values)=>{
//         const errors = {};
        
//         if(!values.username){
//             errors.username="username is required"
//         }
//         if(!values.password){
//             errors.password="password is required"
//         }
//         return errors;
//     };
    
//     return ( 
//         <div className="Signin">
//             <pre>{JSON.stringify(formValues,undefined,2)}</pre>
//             <form onSubmit={handleSubmit}>
//                 <h1>Sign In</h1>
//                 <div className="sign-in">
//                     <input 
//                         type="text"
//                         name="username"
//                         value={formValues.username}
//                         placeholder="Username"
//                         onChange={handleChange}
//                     />
//                     <input 
//                         type="password"
//                         name="password"
//                         value={formValues.password}
//                         placeholder="Password"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button>Login</button>
//             </form>
//         </div>
//      );
// }
 
// export default Signin;