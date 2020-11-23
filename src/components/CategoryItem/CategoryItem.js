import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './CategoryItem.css'
import category1 from '../../assets/images/category1.png'

function CategoryItem(props) {


    return (
        <Card text="black" className="mb-3 border-0 text-left card-style">
           <div className="horiz">
            <img top width="100em"
             className="img-cat"
           // src={require( `${ props.img }` )} 
          // src={props.img}
           src={category1}
            alt={props.img}
            fluid
            />
            <Card.Body className="contain">
            <Card.Title className="title">
                {props.title}
            </Card.Title>
            <Card.Text>
                  {props.desc}
            </Card.Text>
               
            </Card.Body>
            </div>
        </Card>
    );
}
//            <img src={`../../assets/${props.img}`} alt={props.imgname}/>
//  <img src={require(`../../assets/${props.img}`)}/>


export default CategoryItem;