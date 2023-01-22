import { Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';

const weekDayList = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export function NewHabitForm() {
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [title, setTitle] = useState('');

  function createNewHabit(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      weekDays,
    });
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const newWeekDays = weekDays.filter((day) => day === weekDay);

      setWeekDays(newWeekDays);
    } else {
      const newWeekDays = [...weekDays, weekDay];

      setWeekDays(newWeekDays);
    }
  }

  return (
    <form className="w-full flex flex-col mt-6" onSubmit={(e) => createNewHabit(e)}>
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
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="" className="block leading-tight mt-4 font-semibold">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {weekDayList.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            onCheckedChange={() => handleToggleWeekDay(index)}
            className="flex items-center gap-3 group"
          >
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center
							bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500
							group-data-[state=checked]:border-green-500"
            >
              <Checkbox.Indicator>
                <Check size={20} color="white" />
              </Checkbox.Indicator>
            </div>

            <span className="text-white leading-tight">{weekDay}</span>
          </Checkbox.Root>
        ))}
      </div>

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
