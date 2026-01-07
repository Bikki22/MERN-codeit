import UsersTable from "@/components/admin/userManagement/UsersTable";
import React from "react";

const UserManagementPage = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <h2 className="font-semibold text-2xl text-gray-700 mb-5">
        User Management
      </h2>

      <UsersTable />
    </div>
  );
};

export default UserManagementPage;
