import '../styles/globals.css'
import { Provider } from 'react-redux';
import reducers from '../redux/reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Error from './Error';

const store = createStore(reducers, applyMiddleware(thunk))

function MyApp({ Component, pageProps }) {
  
  return <Provider store={store}>
    <Error/>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
