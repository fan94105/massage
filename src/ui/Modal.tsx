import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { HiXMark } from "react-icons/hi2"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: var(--shadow-lg);
  border-radius: 12px;
  padding: 6rem 4rem;
  transition: all 0.5s;

  min-width: 40vw;
  max-height: 90vh;
  overflow: auto;
  overscroll-behavior: contain;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-primary-light);
  }
`

interface ModalProps {
  children: React.ReactNode
}

interface OpenProps {
  children: React.ReactElement
  target: string
}

interface WindowProps {
  children: React.ReactElement
  name: string
}

interface IModalContext {
  openName: string
  open: (name: string) => void
  close: () => void
}

const ModalContext = createContext<Partial<IModalContext>>({})

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("")

  const open = setOpenName
  const close = () => setOpenName("")

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, target }: OpenProps) {
  const { open } = useContext(ModalContext)

  return cloneElement(children, { onClick: () => open?.(target) })
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext)

  useEffect(() => {
    if (name === openName) {
      document.body.style.paddingRight = `${
        window.innerWidth - document.documentElement.offsetWidth
      }px`
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.paddingRight = "0px"
      document.body.style.overflow = ""
    }
  }, [name, openName])

  if (name !== openName) return null

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
