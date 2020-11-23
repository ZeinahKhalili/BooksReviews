import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './CategoryItem.css'
import category1 from '../../assets/images/category1.png'

function CategoryItem(props) {


    return (
        <Card text="black"
              className="mb-3 border-0 text-left card-style">
            <div className="horiz">
                <img top width="100em"
                    className="img-cat"
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


export default CategoryItem;