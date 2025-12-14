import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./app/store";
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "@/app/features/users/usersSlice";
import type { User } from "./types/user";
import UserForm from "@/app/features/users/UserForm";
import UserTable from "@/app/features/users/UserTable";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const [editingUser, setEditingUser] = useState<User | undefined>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = (user: User) => {
    if (editingUser) {
      dispatch(updateUser(user));
    } else {
      dispatch(addUser({ ...user, id: Date.now() }));
    }
    setEditingUser(undefined);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center p-10">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  if (error)
    return <div className="p-4 bg-red-100 text-red-700 rounded">{error}</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-2 text-center">Users Dashboard</h1>{" "}
      <p className="text-center text-gray-500 mb-6">
        Manage users: Add, Edit, Delete, All updates in real-time
      </p>
      <UserForm onSubmit={handleSubmit} editingUser={editingUser} />
      <UserTable
        users={data}
        onEdit={(u) => setEditingUser(u)}
        onDelete={(id) => dispatch(deleteUser(id))}
      />
    </div>
  );
}
