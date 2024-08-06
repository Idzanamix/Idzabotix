import './index.css'
import { Main } from './shared/Main';
import { Route, Routes } from 'react-router-dom';
import { Container, NoSsr } from '@mui/material';
import LoginForm from './shared/LoginForm/LoginForm';

// const TOKEN = process.env.TOKEN;




const App = () => {



  return (
    <NoSsr>
      <Container>
        <Main>
          <Routes>
            <Route path='/' element={<LoginForm />} />
          </Routes>
        </Main>
      </Container>
    </NoSsr>
  )
}

export default App;

