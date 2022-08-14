import React, { createContext, useState } from 'react'
const ProductContext = createContext()

const ProductState = (props) => {
    //states
    const [products, setProduct] = useState([])
    const [authUser, setAuthUser] = useState(null)

    //passed values
    const statesData={ products, setProduct ,authUser, setAuthUser}

    return (
        <ProductContext.Provider value={statesData}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
export { ProductContext }