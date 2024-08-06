import './index.css'
import { Main } from './shared/Main';

import { Container, NoSsr } from '@mui/material';
import LoginForm from './shared/LoginForm/LoginForm';

// const TOKEN = process.env.TOKEN;




const App = () => {



  return (
    <NoSsr>
      <Container>
        <Main>
          <LoginForm />
        </Main>
      </Container>
    </NoSsr>
  )
}

export default App;

