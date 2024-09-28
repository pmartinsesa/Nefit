export const getMonth = (date: Date) => {
  const monthName = date.toLocaleString("pt-BR", { month: "long" });
  return monthName;
};