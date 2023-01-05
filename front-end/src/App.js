import { AppContextProvider } from './context/Provider';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

export default App;
