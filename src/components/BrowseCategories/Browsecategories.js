import CategoryItem from '../CategoryItem/CategoryItem';
import './BrowseCategories.css'
import React, { Component } from 'react';
import { Row,Col, Container } from 'react-bootstrap';
import Loader from '../Loader/Loader';

class browsecategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: null
        }
        
    }
    

    async getCategories() {
        const url= "https://run.mocky.io/v3/2364e8ee-2ceb-418c-b95f-3bbeff0f6ba2";
         const res = await fetch(url);
        const data = await res.json();
        return data.categories;
      }
    
      async componentDidMount() {
        const data = await this.getCategories();
        this.setState({ data });
      }
    
    
    render() {
        const {data} = this.state;
        const baseUrl = '../../assets/';

        return (
            <>
            <div className="BrowseCategories">
            <Container className="ContainerBrowse">
                    <p className="titles"><span style={{fontWeight:"900"}}>Browse </span> <span style={{fontWeight:"100"}}>Our Most Popular Categories</span></p>    
                         {this.state.loading || !this.state.data ? 
                          (<Loader/>)
                    :
                      (
                          <>
                          <Row>
                                    {data.map((data) => (
                                    <Col lg={3} md={4} sm={6}>
                                        <CategoryItem
                                        key={data.id}
                                      img={baseUrl + data.image} 
                                       imgname={data.image}
                                      title={data.title}
                                        desc={data.description}/>
                                         </Col>
                                    ))}
                          </Row>  
                          </>
                      )
                }               
             </Container>
            </div>
           
             </>
        );
    }
}


export default browsecategories;