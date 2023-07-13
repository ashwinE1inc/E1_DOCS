import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'
import { useNavigate } from 'react-router-dom';
function AddTenant() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
 const navigate = useNavigate();
  const onSubmit = (data) => {
    const storedTenants = JSON.parse(localStorage.getItem('tenants')) || [];
  const updatedTenants = [...storedTenants, data];
  localStorage.setItem('tenants', JSON.stringify(updatedTenants));
    reset();
    navigate('/')
  };

  return (
    <>
      <Container className='my-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <h1>Add Tenant</h1>
            <Col lg='6' className='mt-5'>
              <label htmlFor='name' className='mb-3'>Tenant Name</label>
              <input {...register('name', { required: true })} type='text' id='name' placeholder="Name" className='form-control' />
              {errors.name && <p className='error mt-2'>Tenant Name is required.</p>}
            </Col>
            <Col lg='6' className='mt-5'>
              <label htmlFor='endpoint' className='mb-3'>End Point</label>
              <input {...register('endpoint', {required: true})} type='text' id='endpoint' placeholder="End Point" className='form-control' />
              {errors.endpoint && <p className='error mt-2'>Endpoint is required.</p>}
            </Col>
            <Col lg='6' className='mt-5'>
              <label htmlFor='username' className='mb-3'>Username</label>
              <input {...register('username', {required: true})} type='text' id='username' placeholder="Username" className='form-control' />
              {errors.username && <p className='error mt-2'>Username is required.</p>}
            </Col>
            <Col lg='6' className='mt-5'>
              <label htmlFor='password' className='mb-3'>Password</label>
              <input {...register('password', {required: true})} type='password' id='password' placeholder="Password" className='form-control' />
              {errors.password && <p className='error mt-2'>Password is required.</p>}
            </Col>
            <Col lg='12' className='mt-5'>
              <button type='submit' className='primary-sbmt'> Submit</button>
            </Col>
            
          </Row>
        </form>
      </Container>
    </>
  );
}

export default AddTenant;
