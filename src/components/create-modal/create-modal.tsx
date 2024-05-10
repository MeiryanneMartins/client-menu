import { useState } from "react";
import "./create-modal.css";
import { useMenuDataMutate } from '../../hooks/useMenuDataMutate';
import { WineData } from '../../interface/WineData';

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
  const { mutate } = useMenuDataMutate();

  const submit = () => {
    const wineData: WineData = {
      title,
      price,
      image
    }

    mutate(wineData)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre novo item</h2>
        <form className="input-container">
          <Input label="titulo" value={title} updateValue={setTitle} />
          <Input label="preço" value={price} updateValue={setPrice} />
          <Input label="imagem" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">enviar</button>
      </div>
    </div>
  );
}
