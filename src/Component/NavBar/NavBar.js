import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';


function NavBar(props) {
    const [query,setQuery]=useState("");
    
    const handleSubmit=(e)=>{
   
    props.getData(query)
    
        
}
   
  return (
    <Navbar expand="lg" className=" " style={{borderRadius:"10pxs" ,backgroundColor:"#F0F0F0"}}>
      <Container fluid>
       
          <Form className="d-flex" style={{marginLeft:"2rem",height:"2rem"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
            <Button variant="outline" style={{height:"2rem"}}   onClick={handleSubmit}>Search</Button>
          </Form>
       
      </Container>
    </Navbar>
  );
}

export default NavBar;