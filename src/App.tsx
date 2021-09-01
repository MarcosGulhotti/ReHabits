import GlobalStyle from './styles/global'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster />
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <Router />
      </Providers>
    </BrowserRouter>
    </>
  );
}

export default App;
