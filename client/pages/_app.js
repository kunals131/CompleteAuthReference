import '../styles/globals.css'
import { Provider } from 'react-redux';
import reducers from '../redux/reducers';
import { applyMiddleware, createStore } from 'redux';


const store = createStore(reducers)

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
