import { Users, PackageSearch } from "lucide-react";

interface SideNavProps {
  currentPage: string;
  setCurrentPage: any;
}

const SideNav = ({ currentPage, setCurrentPage }: SideNavProps) => {
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      <aside className="h-screen w-72 bg-zinc-900 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        <nav className="flex flex-col space-y-5 mt-12">
          <div
            className={`flex items-center gap-2 text-sm font-semibold cursor-pointer ${
              currentPage === "users" ? "text-amber-500" : ""
            }`}
            onClick={() => handlePageChange("users")}>
            <Users />
            Users
          </div>

          <div
            className={`flex items-center gap-2 text-sm font-semibold cursor-pointer ${
              currentPage === "products" ? "text-amber-500" : ""
            }`}
            onClick={() => handlePageChange("products")}>
            <PackageSearch />
            Products
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideNav;
