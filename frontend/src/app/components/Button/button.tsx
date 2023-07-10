"use client";

import { ReactNode, useState } from "react";
import Modal from "../Modal/modal";

interface buttonProps {
  text: string;
  ButtonClass: string;
  modalTitle: string;
  children: ReactNode;
}

const Button = ({ text, ButtonClass, modalTitle, children }: buttonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={`btn ${ButtonClass} mb-4`}
        onClick={() => setIsModalOpen(true)}>
        {text}
      </button>

      <Modal
        modalTitle={modalTitle}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}>
        {children}
      </Modal>
    </>
  );
};

export default Button;
