import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./login.css";

function LoginModalComponent({ modal, toggle, children }) {
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`

  //   return () => {
  //     const scrollY = document.body.style.top
  //     document.body.style.cssText = `position: ""; top: "";`
  //     window.scrollTo(0, parseInt(scrollY || '0') * -1)
  //   }
  // }, [])
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`

  //   return () => {
  //     const scrollY = document.body.style.top
  //     document.body.style.cssText = `position: ""; top: "";`
  //     window.scrollTo(0, parseInt(scrollY || '0') * -1)
  //   }
  // }, [])

  return (
    <Modal
      // aria-labelledby="contained-modal-title-vcenter"
      // size="xl"
      isOpen={modal}
      toggle={toggle}
      backdrop={true}
      modalClassName='modal-inner'
      wrapClassName='modal-wrapper'
      backdropClassName='modal-overlay'
      contentClassName="login"
      fade={true}
      // autoFocus={true}
      // className="modal"
      centered={true}
      container="#modal-root"
      // container=".container"
      // fullscreen
    >
      <ModalHeader toggle={toggle} closeButton>로그인</ModalHeader>
      <ModalBody>
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
        </Form>
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
