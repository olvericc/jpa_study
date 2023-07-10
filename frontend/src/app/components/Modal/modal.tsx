interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => boolean | void;
  modalTitle: string;
  children: React.ReactNode;
}

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  children,
  modalTitle,
}: ModalProps) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${isModalOpen ? "modal-open" : ""}`}>
      <form method="dialog" className="modal-box bg-slate-800">
        <button
          onClick={() => setIsModalOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg">{modalTitle}</h3>
        <p className="py-4">{children}</p>
      </form>
    </dialog>
  );
};

export default Modal;
