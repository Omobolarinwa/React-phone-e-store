import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";
// import { detailProduct } from '../data';
 
class Details extends Component {
   render() {
      return (
          <ProductConsumer>
              {value => {
                  const {id, company, img ,info, price, title, inCart} = 
                  value.detailProduct;
                  return (
                      <div className="container py-5">
                          {/* title */}
                          <div className="row">
                            <div className="col-10 mx-auto text-centre
                            text-slanted text-blue my-5">
                              <h1>{title}</h1>
                            </div>
                         </div>
                         {/* product info */}
                         <div className="row">
                             <div className="col-10 mx-auto col-md-6 my-3">
                                 <img src={img} className="img-fluid" alt="product" />
                             </div>
                             {/* product text */}
                             <div className="col-10 mx-auto col-md-6 my-3
                             text-capitalize">
                                 <h2>model : {title}</h2>
                                 <h4 className="text-title text-uppercase 
                                 text-muted mt-3 mb-2">
                                     made by : <span className="text-uppercase">
                                         {company}
                                     </span>
                                 </h4>
                                 <h4 className="text-blue">
                                     <strong>
                                         price: <span>$</span>
                                         {price}
                                     </strong>
                                 </h4>
                                 <p className="font-weight-bold mt-3 mb-0">
                                     Some info about the Product:
                                 </p>
                                 <p className="text-muted lead">{info}</p>
                                 {/* buttons */}
                                 <Link to="/">
                                     <ButtonContainer>
                                         Back to product
                                     </ButtonContainer>
                                 </Link>
                                 <ButtonContainer
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                         {inCart ? "in Cart" : "add to Cart"}
                                 </ButtonContainer>
                             </div>
                         </div>
                      </div>
                  );
              }}
          </ProductConsumer>
      )
   }
}

export default Details