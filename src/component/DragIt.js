import React from 'react';
import { useState } from 'react';
import DragAndDrop from '../DragAndDrop';
import {BiSearchAlt2, mBiSearchAlt2 } from "react-icons/bi"

const data = [
    {
        id: 1,
        image: "./Images/fruits1.jpg",
        title: "Banana"
    },
    {
        id: 2,
        image: "./Images/fruit2.jpg",
        title: "Pawpaw"
    },
    {
        id: 4,
        image: "./Images/fruit4.jpg",
        title: "Watermelon"
    },
    {
        id: 5,
        image: "./Images/fruit5.jpg",
        title: "lemon"
    },
    {
        id: 6,
        image: "./Images/fruit6.jpg",
        title: "Strawberry"
    },
    {
        id: 7,
        image: "./Images/fruit7.jpg",
        title: "Apple"
    },
   

]

const DragIt = () => {
const  [images, setImages] = useState(data)


const handleOnChange = (e) => {
    const userInput = e.target.value.toLowerCase();
  
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().startsWith(userInput)
    );
  
    setImages(filteredData);
  };
  
  return (
    <div className='container' style={{padding:'2em'}}>

    <div className='flex w-[30%] bg-black text-white rounded-lg mx-auto'>
        <input type='text'  className=' px-4  w-full outline-none bg-transparent ' onChange={handleOnChange} placeholder='Search for fruits'></input>
        <BiSearchAlt2 className='w-18 h-8 text-white' />
    </div>

   
    <div style={{display:'flex', flexWrap:'wrap' ,flexDirection:'row', gap:'2em'}}>
        {images.map(items => 
             <DragAndDrop key={items.id} id={items.id} image={items.image} title={items.title}/>)}
  </div>
   </div>
  );


}

export default DragIt;
