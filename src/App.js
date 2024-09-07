
import React, { useState } from "react";
import "./App.css";
const App=()=> {
    const[activeSection,setActiveSection]=useState('about');
    const[images,setImages]=useState(['https://via.placeholder.com/300']);
    

    const handleImageUpload=(event)=>{
     const file=event.target.files[0];
     if(file){
        const reader= new FileReader();
        reader.onloadend=()=>{
            setImages(prevImages=>[...prevImages,reader.result]);
        };
        reader.readAsDataURL(file);
     };
      
    };
    const triggerFileUpload=()=>{
        document.getElementById('file-upload').click();
     };
    return(
        <div className="page">
            <div className="box"></div>
                <div className="right-container">
                    <div className="about-me">
                        <div className="navbar">
                            <button onClick={()=>setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About me</button>
                            <button onClick={()=>setActiveSection('experience')}className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
                            <button onClick={()=>setActiveSection('recommended')}className={activeSection === 'recommended' ? 'active' : ''}>Recommended</button>
                        </div>
                        <div className="content">
                            {activeSection ==='about'&& <p>Hello! I’m Dave, <br/>
                                    your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                                    I was born and raised in Albany,
                                    NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella.
                                    Both of them are just starting school, so my calender is usually blocked between 9-10 AM. </p>}
                            {activeSection === 'experience' && <p>This is the Experience content.</p>}
                            {activeSection === 'recommended' && <p>This is the Recommended content.</p>}
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="gallery-header">
                        <h3> Gallery</h3>
                        </div>
                        <div className="gallery-carousel">
                            {
                            images.map((src,index)=>(
                                <img key={index} src={src} alt={`Uploaded ${index}`} className="gallery-image"/>
                                ))
                            }
                        </div>
                        <input type="file" id="file-upload" accept="image/*" style={{display:'none'}} onChange={handleImageUpload} />
                        <button onClick={triggerFileUpload} className="add-image-button">Add image</button>
                    </div>
                </div>
        </div>
       
    );
}
export default App;