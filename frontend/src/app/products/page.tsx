import { useState } from "react";
import { Table, Button } from "../components";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateProduct = () => {
    // Lógica para criar um produto aqui
    closeModal();
  };

  return (
    <>
      <main className="flex-1 bg-zinc-800 p-6">
        <Button
          modalTitle="Add Product Modal"
          buttonText="Add a Product"
          buttonClass="btn-neutral"
          isModalOpen={isModalOpen}
          handleButtonClick={handleButtonClick}
          closeModal={closeModal}>
          <div className="space-y-6 flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Product name..."
              className="input input-bordered w-full max-w-xs input-sm bg-slate-700"
            />

            <input
              type="number"
              placeholder="Price..."
              className="input input-bordered w-full max-w-xs input-sm bg-slate-700"
            />

            <input
              type="text"
              placeholder="Description..."
              className="input input-bordered w-full max-w-xs input-sm bg-slate-700"
            />
          </div>

          <div className="flex gap-4 mt-4 justify-center">
            <button className={`btn btn-neutral`} onClick={closeModal}>
              Cancel
            </button>

            <button className={`btn btn-neutral`} onClick={handleCreateProduct}>
              Create
            </button>
          </div>
        </Button>
        <Table />
      </main>
    </>
  );
};

export default Products;
