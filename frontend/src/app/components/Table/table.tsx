import { Trash, Edit } from "lucide-react";
import Modal from "../Modal/modal";
import { useState } from "react";
import ConfirmationModal from "@/app/templates/ConfirmationModal/ConfirmationModal";
const Table = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-white font-extrabold">
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-zinc-700">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td className="flex gap-4">
              <Trash
                size={18}
                className="text-red-500 cursor-pointer"
                onClick={() => setModalOpen(true)}
              />
              <Edit size={18} className="text-amber-500 cursor-pointer" />
            </td>
          </tr>
          <tr className="hover:bg-zinc-700">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td className="flex gap-4">
              <Trash size={18} className="text-red-500 cursor-pointer" />
              <Edit size={18} className="text-amber-500 cursor-pointer" />
            </td>
          </tr>
          <tr className="hover:bg-zinc-700">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td className="flex gap-4">
              <Trash size={18} className="text-red-500 cursor-pointer" />
              <Edit size={18} className="text-amber-500 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>

      <Modal
        isModalOpen={isModalOpen}
        modalTitle="Confirmation"
        setIsModalOpen={setModalOpen}>
        <ConfirmationModal confirmationModalSubtitle="Are you sure you want to proceed with this action? It cannot be undone." />
      </Modal>
    </div>
  );
};

export default Table;
