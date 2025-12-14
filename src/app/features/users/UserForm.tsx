import React, { useState, useEffect } from "react";
import type { User } from "@/types/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onSubmit: (user: User) => void;
  editingUser?: User;
}

const UserForm: React.FC<Props> = ({ onSubmit, editingUser }) => {
  const [form, setForm] = useState<User>({
    id: 0,
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (editingUser) setForm(editingUser);
  }, [editingUser]);

  const handleChange = (field: keyof User, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-6">
      <Input
        placeholder="Name"
        className="w-full md:w-1/4"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <Input
        placeholder="Email"
        className="w-full md:w-1/4"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <Input
        placeholder="Phone"
        className="w-full md:w-1/4"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <Button className="w-full md:w-auto" onClick={() => onSubmit(form)}>
        {editingUser ? "Update" : "Add"}
      </Button>
    </div>
  );
};

export default UserForm;
