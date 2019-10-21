//Actions
const redux = require('redux') //using redux
const reduxLogger = require('redux-logger')//to use redux logger

const createStore = redux.createStore //creating a store with redux
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware//we are able to use Middleware
const logger = reduxLogger.createLogger()//no we have a logger Middleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICEREAM'


function buyCake() { //action creator
    return {
    type: BUY_CAKE
    }
}
function buyIceCream() { //action creator
    return {
    type: BUY_ICECREAM
    }
}
// const InitialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const InitialCakeState = {
    numOfCakes:10
}

const InitialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = InitialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = InitialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = InitialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger)); //creating a redux store holding the app's initial state with the method
console.log('Initial state', store.getState()); //gives an initial state of the app
const unsubscribe = store.subscribe(() => {}) //to allow app to subscribe to changes in the store
store.dispatch(buyCake())//dispatch an action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();//unsubscribe from the store