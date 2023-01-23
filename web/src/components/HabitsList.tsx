import * as Checkbox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { api } from '../services/axiosClient';

interface Props {
  date: Date;
}

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

export function HabitsList({ date }: Props) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  async function getHabitsInfo() {
    const response = await api.get<HabitsInfo>('/day', {
      params: {
        date: date.toISOString(),
      },
    });

    setHabitsInfo(response.data);
  }

  const { mutate } = useMutation(async (id: string) => {
    await api.patch(`/habits/${id}/toggle`);

    getHabitsInfo();
  });

  useEffect(() => {
    getHabitsInfo();
  }, []);

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habit) => (
        <Checkbox.Root
          key={habit.id}
          checked={habitsInfo.completedHabits.includes(habit.id)}
          onCheckedChange={() => mutate(habit.id)}
          disabled={isDateInPast}
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

          <span
            className="font-semibold text-white leading-tight
							group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"
          >
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  );
}
