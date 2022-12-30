import { createGlobalStyle } from 'styled-components';
import { Header } from './components/header/header';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <>
      <GlobalReset />
      <AppRoutes />
    </>
  );
}

const GlobalReset = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
`

export default App;
