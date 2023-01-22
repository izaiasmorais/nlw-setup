import { Check } from 'phosphor-react';

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="block font-semibold">
        Qual o seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="Exercício, dormir 8h, etc..."
        autoFocus
        className="p-4 mt-3 placeholder:text-zinc-400 bg-zinc-800 rounded-lg
				text-white"
      />

      <label htmlFor="" className="block leading-tight mt-4 font-semibold">
        Qual a recorrência?
      </label>

      <button
        type="submit"
        className="flex mt-6 items-center bg-green-600 w-full rounded-lg	py-4
				font-semibold justify-center gap-3 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
