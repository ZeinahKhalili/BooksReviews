import React, { Component } from 'react';
import BrowseCategories from '../../components/BrowseCategories/Browsecategories'
import CustomCarousel from '../../components/Carousel/CustomCarousel';
import backgroundFiction from '../../assets/images/backgroundFiction.jpg'
import backgroundSelf from '../../assets/images/backgroundSelf.jpg'

import './Books.css'
class Books extends Component {
    render() {
        return (
            <>
            <BrowseCategories/>
            <CustomCarousel url="https://run.mocky.io/v3/fb82143c-d710-4139-9be7-4742bd1c4adb" title="Nonfiction" backgroundcolor="#F6F6F6" color="black"/>
            <CustomCarousel url="https://run.mocky.io/v3/2b1a9afd-78d3-4820-93bd-827b1d0d3b1f" title="Fiction" backgroundImg={`url(${backgroundFiction})`} color="white"/>
            <CustomCarousel url="https://run.mocky.io/v3/47e7d381-e002-4ce3-81fb-b211c15469e8" title="Children's" backgroundcolor="#F6F6F6" color="black"/>
            <CustomCarousel url="https://run.mocky.io/v3/564792b8-1a2b-40ef-8820-dbb9399349a8" title="Self Improvement" backgroundImg={`url(${backgroundSelf})`} color="white"/>
            </>
           );
    }
}

export default Books;