

const ADD_CART = 'cart/ADD_CART';
const REMOVE_CART = 'cart/REMOVE_CART'

export default function cartReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state}
    switch (action.type) {
        case ADD_CART:
            if (action.productId=== null){
                const product = {count:1};
                product.id = action.productId;
                console.log(product)
                nextState[action.productId] = product}
            // }else{nextState[action.productId].count += 1}
            return nextState;
        case REMOVE_CART:
            delete nextState[action.productId];
            return nextState;
        default:
            return nextState;
    }
}

export const addCart = productId => {
    return {
        type: ADD_CART,
        productId
    }
} 

export const removeCart = productId => {
    return {
        type: REMOVE_CART,
        productId
    }
} 