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
                    //cartItems: [...state.cartItems,action.payload.img, action.payload.title] 
                    cartItems: [...state.cartItems,action.payload], 
                } 
            default:{
                return state
            }
        }
    }

    //step 1
let [state,dispatch] =useReducer(reducer,initialState)
console.log("thisis",state); //state ivde kittunnnd ithilcartItems il img um title um indu athayth njml cartItems il array set aaytund 
  
    return (
        // step 6
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                    {/* <h1>This is the App provider</h1> */} {/*ee oru h1 ne mathram ereact kaanullu eni ithinullile children aaytulla header,hero,specialdishes,filteredDishes ithellm konduvernm athinu vendi props.children koduthu */}
                    {/* {props.children} */}
                    {children} {/*appProvideril il wrap cheytha contents render aavnenkil children aayt props vayi set cheytu koduknem*/}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export {AppProvider, DispatchContext,StateContext} ;
//eni ella itethineyu wrap cheyyenm ennal mathrame ee context ne  menus il ellm kodukkan patullu