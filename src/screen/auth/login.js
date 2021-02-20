import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const Login = (props) => {
  return (
    <Container><br></br><br></br><br></br><br></br>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">ไอดี</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">รหัสผ่าน</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Container>
  );
}

export default Login;