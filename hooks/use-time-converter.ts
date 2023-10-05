export const useTimeConverter = (time: Date) => {
  const d = new Date(time)
    .toLocaleDateString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .split(", ");
  return {
    time: d[1],
    date: d[0],
  };
};
