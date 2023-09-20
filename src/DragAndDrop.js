import React from 'react'
import DragIt from './component/DragIt';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card,} from 'react-bootstrap';



export function SortableItems (props) {


  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({id: props.id})

  const style = {
    transform:  CSS.Transform.toString(transform),
    transition
  }



  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
     
     <Card body className='m-5' style={{ maxWidth: '18rem' }}>
  <img src={props.image} alt='img' className='img-fluid' />
  <h3>{props.title}</h3>
</Card>

    </div>
  )
}


