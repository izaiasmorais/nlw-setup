import { Plus, X } from 'phosphor-react';
import logoImage from '../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewHabitForm } from './NewHabitForm';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={String(logoImage)} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="border-2 border-violet-500 items-center gap-3
					font-semibold rounded-lg px-6 py-4 flex hover:border-violet-300
					transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700
					focus:ring-offset-background focus:ring-offset-2"
          onClick={() => {}}
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />
          <Dialog.Content
            className="bg-zinc-900 w-full max-w-md p-10 rounded-2xl
					 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Dialog.Close className="absolute right-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} arial-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
