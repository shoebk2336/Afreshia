import '@mantine/core/styles.css'
import './App.css';
import { store } from './components/Redux/Store';
import { Routers } from './components/Routers/Routers';
import { Provider } from 'react-redux';


function App() {
  return (
    <>
    <Provider store={store}>
    <Routers/>
    </Provider>
    </>
    
  );
}

export default App;
