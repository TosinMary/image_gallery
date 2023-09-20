import React, { useState } from 'react';

function DragAndDrop(props) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData('text/plain', props.index);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
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
        <img src={props.image} alt='img' className='img-fluid' />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default DragAndDrop;
