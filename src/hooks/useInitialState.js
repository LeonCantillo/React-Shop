import { useState } from 'react'

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    
    const removeFromCart = (payload) => {
        const indexToRemove = state.cart.findIndex(item => item.id === payload.id);
      
        if (indexToRemove !== -1) {
      
          setState({
            ...state,
            cart: 
            [...state.cart.slice(0, indexToRemove), ...state.cart.slice(indexToRemove + 1)]
          });
        }
      }
      

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState