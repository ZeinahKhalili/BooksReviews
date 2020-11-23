import React, { Component } from 'react';
import BrowseCategories from '../../components/BrowseCategories/Browsecategories'
import CustomCarousel from '../../components/Carousel/CustomCarousel';
import backgroundFiction from '../../assets/images/backgroundFiction.jpg'
import backgroundSelf from '../../assets/images/backgroundSelf.jpg'

import './Books.css'
class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: null,
            data2: null,
            data3: null,
            data4: null,
        }
    }
    

    async getData1() {
        const url="https://run.mocky.io/v3/fb82143c-d710-4139-9be7-4742bd1c4adb";
         const res = await fetch(url);
        const data = await res.json();
        return data.books;
    }
    async getData2() {
        const url="https://run.mocky.io/v3/2b1a9afd-78d3-4820-93bd-827b1d0d3b1f";
         const res = await fetch(url);
        const data = await res.json();
        return data.books;
    }
    async getData3() {
        const url="https://run.mocky.io/v3/47e7d381-e002-4ce3-81fb-b211c15469e8"
         const res = await fetch(url);
        const data = await res.json();
        return data.books;
    }
    async getData4() {
        const url="https://run.mocky.io/v3/564792b8-1a2b-40ef-8820-dbb9399349a8"
         const res = await fetch(url);
        const data = await res.json();
        return data.books;
    }
   
    async componentDidMount() {
        const data1 = await this.getData1();
        const data2 = await this.getData2();
        const data3 = await this.getData3();
        const data4 = await this.getData4();
        this.setState({ data1,data2,data3,data4 });
    }
    
    render() {
        const {data1, data2, data3, data4}= this.state;
        return (
            <>
            <BrowseCategories/>
            <CustomCarousel dataa={data1} title="Nonfiction" backgroundcolor="#F6F6F6" color="black"/>
            <CustomCarousel dataa={data2} title="Fiction" backgroundImg={`url(${backgroundFiction})`} color="white"/>
            <CustomCarousel dataa={data3} title="Children's" backgroundcolor="#F6F6F6" color="black"/>
            <CustomCarousel dataa={data4} title="Self Improvement" backgroundImg={`url(${backgroundSelf})`} color="white"/>
            </>
           );
    }
}

export default Books;