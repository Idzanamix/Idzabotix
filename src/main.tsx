import './index.css'
import { Main } from './shared/Main';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './shared/Loader';

const GameLazy = lazy(() => import('./shared/Game/Game'));
const LoginFormLazy = lazy(() => import('./shared/LoginForm/LoginForm'));
const ErrorBannerLazy = lazy(() => import('./shared/ErrorBanner/ErrorBanner'));


const App = () => {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LoginFormLazy />} />
          <Route path='/game/:userId' element={<GameLazy />} />
          <Route path='*' element={<ErrorBannerLazy massage='ERROR 404: page not found' />} />
        </Routes>
      </Suspense>
    </Main>
  )
}

export default App;

