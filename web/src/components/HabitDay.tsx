import { ProgressBar } from './ProgressBar';
import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { Check } from 'phosphor-react';

interface HabitDayProps {
  completed?: number;
  amount?: number;
  date: Date;
}

export function HabitDay({ amount = 0, completed = 0 }: HabitDayProps) {
  const completePercent = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 rounded-lg border-2', {
          'bg-zinc-900 border-zinc-800': completePercent === 0,
          'bg-violet-900 border-violet-700': completePercent > 0 && completePercent < 20,
          'bg-violet-800 border-violet-600': completePercent >= 20 && completePercent < 40,
          'bg-violet-700 border-violet-500': completePercent >= 40 && completePercent < 60,
          'bg-violet-600 border-violet-500': completePercent >= 60 && completePercent < 80,
          'bg-violet-500 border-violet-400': completePercent >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">sábado</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">21/01</span>

          <ProgressBar progress={completePercent} />

          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center
							bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500
							group-data-[state=checked]:border-green-500"
              >
                <Checkbox.Indicator>
                  <Check size={20} color="white" />
                </Checkbox.Indicator>
              </div>

              <span
                className="font-semibold text-white leading-tight
							group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"
              >
                Dormir 8 horas
              </span>
            </Checkbox.Root>
          </div>

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
