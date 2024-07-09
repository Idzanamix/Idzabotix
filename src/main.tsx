import './index.css'
import { ProviderApollo } from './app/providers/Apollo/ApolloProvider.tsx'
import { RepositorySection } from './shared/RepositorySection/RepositorySection.tsx'
import { MountedBrowserRouter } from './app/providers/Router/Router.tsx'
import { ReduxProvider } from './app/providers/Redux/Redux.tsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Error } from './shared/errorBanners/Error.tsx'
import { Layout } from './shared/Layout/Layout.tsx'
import { Header } from './shared/header/Header.tsx'
import { Main } from './shared/Main/Main.tsx'
import { RepositoryPage } from './shared/RepositorySection/RepositoryPage/RepositoryPage.tsx'

const App = () => {
  return (
    <ReduxProvider>
      <ProviderApollo>
        <MountedBrowserRouter>
          <Layout>
            <Header />
            <Main>
              <Routes>
                <Route path='/repository' element={<RepositorySection />} />
                <Route path='/repository/search' element={<RepositorySection />} />
                <Route path='/repository/search/:request' element={<RepositorySection />} />
                <Route path='/repository/:id' element={<RepositoryPage />} />
                <Route path='/' element={<Navigate to={'/repository'} />} />
                <Route path='/oauth' element={<Navigate to={'/'} />} />
                <Route path='*' element={<Error massage='ERROR 404: page not found' />} />
              </Routes>
            </Main>
          </Layout>
        </MountedBrowserRouter>
      </ProviderApollo>
    </ReduxProvider>
  )
}

export default App;
