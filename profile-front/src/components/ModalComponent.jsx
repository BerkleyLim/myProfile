import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Portal from './Portal'

// 참조 :  https://medium.com/@bestseob93/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AA%A8%EB%8B%AC-react-modal-%EB%A7%8C%EB%93%A4%EA%B8%B0-bd003458e9d
const CloseButton = () => <FontAwesomeIcon icon={faTimes} />;
export default function ModalComponent({ className, visible, children, onClose, maskClosable, closable }) {
    // <i class="fas fa-times"></i>
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }
    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    useEffect(() => {
      document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    
      return () => {
        const scrollY = document.body.style.top
        document.body.style.cssText = `position: ""; top: "";`
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }, [])

    return (
      <Portal elementId="modal-root">
        <ModalOverlay visible={visible}/>
        <ModalWrapper 
            className={className} 
            tabIndex="-1" 
            visible={visible}
            onClick={maskClosable ? onMaskClick : null}>

            <ModalInner tabIndex="0" className="modal-inner">
                {closable && <CloseButton className="modal-close" onClick={close} />}
                {children}
            </ModalInner>
        </ModalWrapper>
      </Portal>
    )
}


// ModalComponent.defaultProps = {
//   closable: true,
//   maskClosable: true,
//   visible: false
// }



ModalComponent.propTypes = {
    visible: propTypes.bool,
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 800px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  `
  
  // max-width: 1000px;

