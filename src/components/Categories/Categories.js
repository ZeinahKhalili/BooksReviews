
import {React, useEffect,useState} from 'react';
import category1 from '../../assets/images/category1.png'
import Loader from '../Loader/Loader';
function Categories(props) {

    const [category, setCategory] = useState(null);
    const i =props.match.params.id;

    useEffect(async () => {
       const response = await fetch("https://run.mocky.io/v3/2364e8ee-2ceb-418c-b95f-3bbeff0f6ba2");
        const data = await response.json();
        const item = data.categories[i-1]; 
        setCategory(item);
    }, []);
    

    
    return (
        <div>
            {category?
                <div>
                    Category id: {category.id} <br/>
                    Category title: {category.title} <br/>
                    <img src={`../../assets/${category.image}}`}/> <br/>
                    alt: {category.image}
                </div>
            :
            <Loader/>
            } 
        </div>
    );
}

export default Categories;