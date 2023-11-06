import './style.css';

import Card from 'react-bootstrap/Card';

import CartData from './CardData';
import { Fragment, useState } from 'react';

import { addToCart } from '../redux/features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import toast from 'react-hot-toast';



const Home = () => {
    const [cartData, setCartData] = useState(CartData);
    const dispatch = useDispatch();

    //add to cart
    const send=(e)=>{
        dispatch(addToCart(e));
        toast.success('Item added In Your Cart')
    }

    return (
        <>
            <section className='iteam_section mt-4 container'>
                <h2 style={{ fontWeight: 400, color:'white', textAlign:'center'}}>We are always here to serve you <span className='bx bxs-dish' style={{verticalAlign:'sub', fontSize: '3rem'}}></span></h2>

                <div className='row mt-4 d-flex justify-content-around align-items-center'>
                    {
                        cartData.map((element, index) => {
                            return (
                                <Fragment key={index}>
                                    <Card style={{ width: '22rem', border: 'none' }} className='hove mb-4'>

                                        <div className='img-div'>
                                        <Card.Img variant='top' className='cd' src={element.imgdata} />
                                        </div>

                                        <div className='card_body'>
                                            <div className='upper_data d-flex justify-content-between align-items-center'>
                                                <h4 className='mt-2'>{element.dish}</h4>
                                                <span>{element.rating}</span>
                                            </div>
                                            <div className='lower_data d-flex justify-content-between'>
                                                <h5>{element.address}</h5>
                                                <span>{element.price}</span>
                                            </div>

                                            <div className='extra'></div>

                                            <div className='last_data d-flex justify-content-between align-items-center'>
                                                <img src={element.arrimg} className='limg' alt='' />

                                                <button className='mt-2 mb-2 button' onClick={()=>send(element)}>Add to Cart</button>

                                                <img src={element.delimg} className='laimg' alt='' />
                                            </div>
                                        </div>
                                    </Card>
                                </Fragment>
                            )
                        })
                    }

                </div>
            </section>
        </>
    );
}
export default Home;