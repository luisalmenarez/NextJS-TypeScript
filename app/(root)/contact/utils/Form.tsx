"use client";
import Button from "@/Components/Ui/Button";

const Form = () => {
  return (
    <form action="" className="max-w-2xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-5">
        <input
          type="text"
          className="w-full bg-zinc-800 outline-none py-3 px-2 rounded"
          placeholder="Nombre"
        />
        <input
          type="text"
          className="w-full bg-zinc-800 outline-none py-3 px-2 rounded"
          placeholder="Apellido"
        />
      </div>
      <div>
        <textarea
          className="w-full bg-zinc-800 outline-none py-3 px-2 rounded resize-none mb-5"
          placeholder="Mensaje"
          rows={7}
        />
        <Button type="submit" label="Enviar" onClick={() => {}} />
      </div>
    </form>
  );
};

export default Form;
