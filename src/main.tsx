import './index.css'
import { Route, Routes } from 'react-router-dom';
import ButtonUsage from './shared/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route  path='/' element={<ButtonUsage />}/>
    </Routes>

  )
}

export default App;
