import GlobalStyle from './styles/global'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers'

function App() {
  return (
    <>
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
