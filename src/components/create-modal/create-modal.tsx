import { useState } from "react";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: unknown): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function CreateModal() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <h2>Cadastre novo item</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="title" value={price} updateValue={setPrice} />
          <Input label="title" value={image} updateValue={setImage} />
        </form>
      </div>
    </div>
  );
}
