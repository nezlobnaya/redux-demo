import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <CakeContainer />
       <HookCakeContainer />
       <IceCreamContainer />
       <HookIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
