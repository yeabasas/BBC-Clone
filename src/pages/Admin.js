import './Admin.css'
import { useState } from "react";
import Sidebar from '../Sidebars/side.js'
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>
const Admin = () => {
    const [title,setTitle] = useState('');
    const [shortDescription,setShortDescription] = useState('');
    const [image,setImage] = useState('');
    const [author,setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,author,shortDescription,image};
        
        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
        })
    }

    return ( 
        <section>
            <Sidebar/>
            <h1>DashBoard</h1>
     
            {/* <div class="container">
                <aside>
                    <div class="sidebar">
                        <a href="#"className="qwe">erererre
                        <ul className="btn">
                           <li><a href="">hkgvhgvmvb</a></li>
                           <li><a href="">hkgvhgvmvb</a></li>
                           <li><a href="">hkgvhgvmvb</a></li>
                           <li><a href="">hkgvhgvmvb</a></li>
                        </ul>
                        </a>
                        <a href="#">
                            <h3>Edit News</h3>
                        </a>
                        
                        <a href="#">
                            <h3>Messages</h3>
                        </a>
                        <a href="#">
                            <h3>Products</h3>
                        </a>
                        
                        <a href="#">
                            <h3>Setting</h3>
                        </a>
                        {('.qwe').click(function(){
                            ('nav ul .btn').toggleClass("");
                        })}
                    </div>
                </aside>
            </div> */}
        </section>            
    );
}
 
export default Admin;