import {React, useState} from "react";
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
  Input
} from "reactstrap";

function LoginModalComponent(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
            <Form>
              <FormGroup>
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
              <FormGroup>
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
              <Button>Submit</Button>
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
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          로그아웃
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default LoginModalComponent;
