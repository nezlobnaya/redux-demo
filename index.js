//Actions

const redux = require('redux') //using redux
const createStore = redux.createStore //creating a store with redux
const BUY_CAKE = 'BUY_CAKE'


function buyCake() { //action creator
    return {
    type: BUY_CAKE,
    info: 'First redux action'
    }
}

const InitialState = {
    numOfCakes: 10
}

const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer); //creating a redux store holding the app's initial state with the method
console.log('Initial state', store.getState()); //gives an initial state of the app
const unsubscribe = store.subscribe(() => console.log('updated store', store.getState())) //to allow app to subscribe to changes in the store
store.dispatch(buyCake())//dispatch an action
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe();//unsubscribe from the store