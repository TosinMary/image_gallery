import React from 'react'
import { useState } from 'react';
import {BiSearchAlt2 } from "react-icons/bi"
import { Link } from 'react-router-dom';




const data = [
    {
      id: 1,
      image: './Images/fruits1.jpg',
      title: 'Banana',
    },
    {
      id: 2,
      image: './Images/fruit2.jpg',
      title: 'Pawpaw',
    },
    {
      id: 4,
      image: './Images/fruit4.jpg',
      title: 'Watermelon',
    },
    {
      id: 5,
      image: './Images/fruit5.jpg',
      title: 'lemon',
    },
    {
      id: 6,
      image: './Images/fruit6.jpg',
      title: 'Strawberry',
    },
    {
      id: 7,
      image: './Images/fruit7.jpg',
      title: 'Apple',
    },
  ];

function Home() {
    const [images, setImages] = useState(data);

    const handleOnChange = (e) => {
        const userInput = e.target.value.toLowerCase();
      
        const filteredData = data.filter((item) =>
          item.title.toLowerCase().startsWith(userInput)
        );
      
        setImages(filteredData);
      };

      
  return (
    <>
    <div className='container' style={{ padding: '2em' }}>
      <div className='inputParent flex w-[30%] bg-black text-white rounded-lg mx-auto'>
        <input
          type='text'
          className='px-4 w-full outline-none bg-transparent'
          placeholder='Search for fruits' 
          onChange={handleOnChange}
          
        />
        <BiSearchAlt2 className='w-18 h-8 text-white' />
      </div>

      <div id='dragParent'>
        {images.map((item, index) => (
            <>
            <div className='home-page'>
            <img src={item.image}></img>
            <p>{item.title}</p>   
            </div>
            </>
        
        ))}
      </div>
      <div className='form-base'>
        { <Link to="login" className='form-base' ><p>To Access Drag and Drop Features, Proceed to <span className='form-link'>Log in</span></p></Link>}
        </div>
    </div>
    </>
  )
}

export default Home
