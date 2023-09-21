import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';

function DragAndDrop(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
          
  },[])


  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', props.index);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsDragging(true);
    setLoading(true);
    setTimeout(() => {
     setLoading(false);
          }, 1000)
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const toIndex = props.index;

    props.onDrop(fromIndex, toIndex);
  };
  

  return (
    <div
      className={`draggable ${isDragging ? 'dragging' : ''}`}
      draggable='true'
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div style={{ marginTop: '2em' }}>
      <FadeLoader color={"#D21B"} loading={loading} size={2} height={10} width={4} />
        <img src={props.image} alt='img' className='img-fluid' />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default DragAndDrop;
