import './index.css'
import { Main } from './shared/Main';
import { Route, Routes } from 'react-router-dom';
import { Container, Input } from '@mui/material';


const App = () => {
  return (
    <Container>
      <Main>
        <Routes>
          <Route path='/' element={<div></div>} />
        </Routes>
        <Input />
      </Main>
    </Container>
  )
}

export default App;

