import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap/Container';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import {SortableItems} from '../DragAndDrop';
import {BiSearchAlt2, mBiSearchAlt2 } from "react-icons/bi"

const DragIt = () => {
const  [images, setImages] = useState([
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
   

])
  return (
    <>
    <div className='flex w-[30%] bg-black text-white rounded-lg mx-auto'>
        <input type='text'  className=' px-4  w-full outline-none bg-transparent ' placeholder='Search for fruits'></input>
        <BiSearchAlt2 className='w-18 h-8 text-white' />
    </div>
   <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
   >
     <SortableContext
     items={images}
     strategy={verticalListSortingStrategy}
     className ="card-item"
     >
          {images.map(items => <SortableItems key={items.id} id={items.id} image={items.image} title={items.title}/>)}
     </SortableContext>
   </DndContext>
   </>
  );
  function handleDragEnd(event){
    console.log("Drag end drop")
    const {active, over} = event;
    console.log("ACTIVE: " + active.id)
    console.log("OVER: " + over.id)

  }
}

export default DragIt;
