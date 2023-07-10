import { AlertCircle } from "lucide-react";

interface ConfirmationModalProps {
  confirmationModalSubtitle: string;
}
const ConfirmationModal = ({
  confirmationModalSubtitle,
}: ConfirmationModalProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center bg-red-500/30 rounded-full">
        <AlertCircle size={40} className="text-red-500" />
      </div>

      <span className="text-slate-200 font-semibold mt-3">
        {confirmationModalSubtitle}
      </span>

      <div className="flex gap-4 mt-4">
        <button className={`btn btn-neutral`} onClick={() => alert("test")}>
          Cancel
        </button>

        <button className={`btn btn-neutral `} onClick={() => alert("test")}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
