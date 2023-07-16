import { useState } from "react";
import { Table, Button } from "../components";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateUser = () => {
    //create user logic
    closeModal();
  };

  return (
    <>
      <main className="flex-1 bg-zinc-800 p-6">
        <Button
          modalTitle="Add User Modal"
          buttonText="Add a User"
          buttonClass="btn-neutral"
          isModalOpen={isModalOpen}
          handleButtonClick={handleButtonClick}
          closeModal={closeModal}>
          <div className="space-y-6 flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="name..."
              className="input input-bordered w-full max-w-xs input-sm bg-slate-700"
            />

            <input
              type="text"
              placeholder="email..."
              className="input input-bordered w-full max-w-xs input-sm bg-slate-700"
            />

            <input
              type="text"
              placeholder="role..."
              className="input input-bordered w-full max-w-xs input-sm bg-slate-700"
            />
          </div>

          <div className="flex gap-4 mt-4 justify-center">
            <button className={`btn btn-neutral`} onClick={closeModal}>
              Cancel
            </button>

            <button className={`btn btn-neutral`} onClick={handleCreateUser}>
              Create
            </button>
          </div>
        </Button>
        <Table />
      </main>
    </>
  );
};

export default Users;
