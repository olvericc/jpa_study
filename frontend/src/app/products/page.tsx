import { Button, Table } from "../components";

const Products = () => {
  return (
    <>
      <main className="flex-1 bg-zinc-800 p-6">
        <Button
          modalTitle="Modal to add an product"
          text="Add an product"
          ButtonClass="btn-neutral">
          Product
        </Button>

        <Table />
      </main>
    </>
  );
};

export default Products;
