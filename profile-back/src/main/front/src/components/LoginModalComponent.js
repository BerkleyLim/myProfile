import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

function LoginModalComponent({ modal, toggle }) {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`

    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])

  return (
    <Modal isOpen={modal} toggle={toggle} {...args}>
      <ModalHeader toggle={toggle}>Login view</ModalHeader>
      <ModalBody>
        <Card
          className="my-2"
          style={{
            width: '18rem'
          }}
        >
          <CardHeader>
            Header
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Go somewhere
            </Button>
          </CardBody>
          <CardFooter>
            Footer
          </CardFooter>
        </Card>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          로그인
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          로그아웃
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default LoginModalComponent