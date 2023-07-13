import React, {useEffect, useState} from 'react'
import { Container, Button, Row, Col, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './styles.css'
function Tenant() {
  const navigate = useNavigate();

  const handleAddTenantClick = () => {
    navigate('/addtenant');
  }

  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const storedTenants = JSON.parse(localStorage.getItem('tenants'));
    if (storedTenants){
      setTenants(storedTenants)
    }
  }, []);


  return (
    <>
    <Container className='my-3'>
      <Row>
        <Col lg="6">
          <h4> Tenants </h4>
        </Col>
        <Col lg="6">
          <Button variant='primary' onClick={handleAddTenantClick} style={{float: 'right'}} > Add Tenant </Button>
        </Col>
      </Row>
      {tenants.length > 0 ? (
        <Table bordered className='my-5'>
        <thead>
          <tr>
            <th>Tenant Name</th>
            <th>End Point</th>
            <th>Username</th>
            <th>Password</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant, index) => (
            <tr key={index}>
              <td>{tenant.name}</td>
              <td>{tenant.endpoint}</td>
              <td>{tenant.username}</td>
              <td>{tenant.password}</td>
              <td><p className='new-clr'>Active </p></td>
            </tr>
          ))}
        </tbody>
      </Table>
      ) : (
        <p> No Tenants Found </p>
      )}
    </Container>
    </>
  )
}

export default Tenant