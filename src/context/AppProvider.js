import React,{createContext, useReducer} from 'react'


const DispatchContext = createContext()
const StateContext = createContext()

const AppProvider = ({children,}) => {
    // console.log("these are the childrens",props);

   
    const initialState = { 
        cartItems : [], 
    }

    const reducer = (state,action) => {
        
      
        switch(action.type) {
            case "add_to_cart" :
                return {
                    ...state, 
                  
                    cartItems: [...state.cartItems,action.payload], 
                } 
            default:{
                return state
            }
        }
    }


let [state,dispatch] =useReducer(reducer,initialState)
console.log("thisis",state); 
  
    return (
       
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                    {children} 
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export {AppProvider, DispatchContext,StateContext} ;
