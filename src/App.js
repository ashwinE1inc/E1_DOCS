
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbars from './Components/Navbars';
import {  Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tenant from './Pages/Tenant'
import ExtractDocs from './Pages/extractDocs'
import Monitor from './Pages/Monitor'
import Help from './Pages/Help'
import uploadDocument from './Pages/uploadDocument'
import userManagement from './Pages/userManagement'
import AddTenant from './Components/addTenant';


function App() {
  return (
    <Router>
      <Navbars />
      <div className='container-fluid'>
        <Row>
          <Sidebar />
          <Col lg={9}>
          <Routes>
            <Route exact path='/' Component={Tenant} />
            <Route exact path='/extractdocs' Component={ExtractDocs} />
            <Route exact path='/monitor' Component={Monitor} />
            <Route exact path='/help' Component={Help} />
            <Route exact path='/uploaddocs' Component={uploadDocument} />
            <Route exact path='/usermanagement' Component={userManagement} />
            <Route exact path='/addtenant' Component={AddTenant} />
          </Routes>
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
