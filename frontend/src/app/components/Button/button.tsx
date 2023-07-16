import { ReactNode } from "react";
import Modal from "../Modal/modal";

interface ButtonProps {
  buttonText: string;
  buttonClass: string;
  modalTitle: string;
  isModalOpen: boolean;
  handleButtonClick: () => void;
  closeModal: () => void;
  children: ReactNode;
}

const Button = ({
  buttonText,
  buttonClass,
  modalTitle,
  isModalOpen,
  handleButtonClick,
  closeModal,
  children,
}: ButtonProps) => {
  return (
    <>
      <button className={`btn ${buttonClass} mb-4`} onClick={handleButtonClick}>
        {buttonText}
      </button>

      <Modal
        modalTitle={modalTitle}
        isModalOpen={isModalOpen}
        setIsModalOpen={closeModal}>
        {children}
      </Modal>
    </>
  );
};

export default Button;
