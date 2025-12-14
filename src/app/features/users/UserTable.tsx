import React from "react";
import type { User } from "@/types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<Props> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-150">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-gray-50 transition">
              <TableCell className="truncate max-w-37.5">{user.name}</TableCell>
              <TableCell className="truncate max-w-50">{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="flex gap-2 flex-wrap">
                <Button variant="outline" onClick={() => onEdit(user)}>
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => onDelete(user.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
