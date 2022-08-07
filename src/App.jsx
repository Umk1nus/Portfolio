import Layout from "./layout/Layout"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Project} from './pages/Project/Project'
import {Main} from './pages/Main/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/proj" element={<Project/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
