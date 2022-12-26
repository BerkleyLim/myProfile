import { React, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function LoginModalComponent({ modal, toggle }) {

  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;

  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = `position: ""; top: "";`;
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   };
  // }, []);

  return (
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle}>Login view</ModalHeader>
      <ModalBody>
        <Card
          className="my-2"
          style={{
            width: "18rem",
          }}
        >
          <CardHeader>로그인</CardHeader>
          <CardBody>
            <p>
              Wrap a pair of <code>{`<Input>`}</code> and{" "}
              <code>{`<Label>`}</code> components in{" "}
              <code>{`<FormGroup floating>`}</code> to enable floating labels
              with Bootstrap’s textual form fields. A <code>placeholder</code>{" "}
              is required on each <code>{`<Input>`}</code> as our method of
              CSS-only floating labels uses the <code>:placeholder-shown</code>{" "}
              pseudo-element. Also note that the <code>{`<Input>`}</code> must
              come first so we can utilize a sibling selector (e.g.,{" "}
              <code>~</code>
              ).
            </p>
            <Form>
              <FormGroup floating>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup floating>
                <Label for="examplePassword" hidden>
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>
              <Button>로그인</Button>
            </Form>
          </CardBody>
          {/* <CardFooter>
            Footer
          </CardFooter> */}
        </Card>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          로그인
        </Button>
        <Button color="secondary" onClick={toggle}>
          로그아웃
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default LoginModalComponent;
