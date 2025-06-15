import React from 'react'
import { useSelector } from 'react-redux'
import Nav from './Nav';

const SinglePage = () => {
    const product = useSelector(state => state.singelpage_combine.data)
    console.log(product);

    return (
        <div>
            <Nav />
            {/* <img src={product.image[0]} alt="" /> */}
        </div>
    )
}

export default SinglePage
