import React from 'react'
// import { Card} from 'react-bootstrap';
import './styles/drag.css'


 function DragAndDrop (props) {

  return (
    
     
     <div  className='m-5' id='
     cardContainer' >
  <img src={props.image} alt='img' className='img-fluid' />
  <h3>{props.title}</h3>
</div>

  )
}


export default DragAndDrop