import './Admin.css'
import { useState } from "react";
import Sidebar from '../Sidebars/side.js'
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>
const AddNews = () => {
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
            <div className="create">
                <form onSubmit={handleSubmit}>
                    <h2>Add News</h2>
                    <input 
                        type="text" 
                        required
                        value={title}
                        placeholder="The News Title"
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <input 
                        type="text" 
                        required
                        value={author}
                        placeholder="Author of the news"
                        onChange={(e)=>setAuthor(e.target.value)}
                    />
                    <textarea 
                        type="text"
                        required
                        value={shortDescription}
                        placeholder="Short Description About The News"
                        onChange={(e)=>setShortDescription(e.target.value)}
                    ></textarea>
                    <input 
                        type="file"
                        onChange={(e)=>setImage(e.target.value)}
                        />
                        <button>submit</button>
                </form>
            </div>
            </section>            
    );
}
 
export default AddNews;