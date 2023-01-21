import dayjs from 'dayjs';

export function generateDates() {
	// pega o primeiro dia do ano e armazena
  const firstDayOfTheYear = dayjs().startOf('year');

	// pega o dia de hoje
  const today = new Date();

	// array que irá armazenar todas as datas
	const dates = [];

	// array que iremos usar para comparação
  let compareDate = firstDayOfTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
	}

	return dates;
}
