import React from 'react';
import { Card } from 'react-bootstrap';

import './CarouselItem.css'
import nonfiction1 from '../../assets/images/nonfiction1.png'
function CarouselItem(props) {
    
    
    return (
        <Card text="black" className="mb-3 border-0 text-left flex-row flex-wrap no-gutters contain-card">
        <div className="card-horizontal">
        <Card.Img variant="top" 
        className="card-image"
        src={nonfiction1}
         alt={props.img}
         fluid
         />
         <Card.Body className="contain">
         <Card.Title className="card-title" style={{color: props.color}}>
             {props.title}
         </Card.Title>
         <Card.Text className="card-ttext" style={props.color=="white" ? {color:"#82B808"} : {color:"rgba(0,0,0,0.5)"}} 
         
         >
              by {props.author}
              <br/>
              reviewd by {props.reviewdBy}
         </Card.Text>
            
         </Card.Body>
         </div>
     </Card>
    );
}

export default CarouselItem;