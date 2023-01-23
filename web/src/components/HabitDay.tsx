import { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { HabitsList } from './HabitsList';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import dayjs from 'dayjs';

interface HabitDayProps {
  defaultCompleted?: number;
  amount?: number;
  date: Date;
}

export function HabitDay({ amount = 0, defaultCompleted = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const completePercent = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format('DD/MM');
  const dayOfWeek = dayjs(date).format('dddd');

  const formattedDatOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

  function handleCompletedChanged(completed: number) {
    setCompleted(completed);
  }

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
          <span className="font-semibold text-zinc-400">{formattedDatOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

          <ProgressBar progress={completePercent} />

          <HabitsList date={date} handleCompletedChanged={handleCompletedChanged} />

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
