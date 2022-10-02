import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signin.css";
const Login = () => {
    
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const history = useHistory();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const accounts = {email,password};
    //     fetch("http://localhost:9000/accounts",{
    //         method: '',
    //         headers: {"Content-Type":"application/json"},
    //         body:JSON.stringify(accounts)
    //     }).then(()=>{
    //         console.log('Added Successfully');
    //         history.push('../Admin')
    //     })
    // }
    
    async function getData(e){
        e.preventDefault();
        const response = await fetch("http://localhost:9000/accounts")
        console.log(response);
        const data= await response.json();
        console.log(data);
        history.push('../Admin');
    }


    return ( 
        <div className="Signin">
            <form onSubmit={getData}>
                 <h1>Log In</h1>
                 <div className="sign-in">
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
                <button >Log In</button>
            </form>
            
        </div>
        
     );
}
 
export default Login;


