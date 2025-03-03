import React, { useState } from "react";
import getUsersInfo from "../api/hooks/getUsersInfo";

function UserList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data, isLoading, error } = getUsersInfo(page, search, itemsPerPage);

  return (
    <div>
      <input
        type="number"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(e.target.value)}
        placeholder="Items per page"
      />
      {/* ...existing code to display users... */}
    </div>
  );
}

export default UserList;
