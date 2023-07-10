import { Table, Button } from "../components";

const Users = () => {
  return (
    <>
      <main className="flex-1 bg-zinc-800 p-6">
        <Button
          modalTitle="User Modal"
          text="Add an user"
          ButtonClass="btn-neutral">
          User
        </Button>
        <Table />
      </main>
    </>
  );
};

export default Users;
