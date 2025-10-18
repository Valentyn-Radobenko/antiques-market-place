export function formatUkrDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Отримуємо частини (day, month, hour, minute тощо)
  const parts = formatter.formatToParts(date);
  const day = parts.find((p) => p.type === 'day')?.value ?? '';
  const month = parts.find((p) => p.type === 'month')?.value ?? '';
  const hour = parts.find((p) => p.type === 'hour')?.value ?? '';
  const minute = parts.find((p) => p.type === 'minute')?.value ?? '';

  return `${day} ${month} ${hour}:${minute}`;
}

// Приклад:
console.log(formatUkrDate(new Date('2025-01-11T08:09:00')));
// => "11 січня 08:09"
