function differenceDate(nextDate: string) {
  const updatedNextDate = nextDate.split('.').reverse().join('-');
  const nextDateObj = new Date(updatedNextDate);
  const nowDate = new Date();
  const farkMilisaniye = Number(nextDateObj) - Number(nowDate);
  const dayCount = Math.round(farkMilisaniye / (1000 * 60 * 60 * 24));
  return dayCount;
}

export default {differenceDate};
