import './App.css'
import { Employee } from './component/Employee';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { EditData } from './component/EditEmp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddEmp } from './component/AddEmp';
import { Container, NavLink , Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'



function App() {
  return (
    <div >

      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <NavLink  className='btn btn-dark' href='/employe'>employee</NavLink><br /> <br />
              <NavLink className="btn btn-dark" href='/add'>add employee</NavLink><br /> <br />
            </Nav>
          </Container>
        </Navbar>

        <Route exact path='/employe' component={Employee} />
        <Route path='/edit/:id' component={EditData} />
        <Route path='/add' component={AddEmp} />

      </Router>

    </div>
  );
}
export default App;

{/* <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar> */}