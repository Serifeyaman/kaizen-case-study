function differenceDate(nextDate: string | undefined) {
  if (nextDate === null || nextDate === undefined) {
    return '';
  }
  const updatedNextDate = nextDate.split('.').reverse().join('-');
  const nextDateObj = new Date(updatedNextDate);
  const nowDate = new Date();
  const differenceMs = Number(nextDateObj) - Number(nowDate);
  const dayCount = Math.round(differenceMs / (1000 * 60 * 60 * 24));
  return dayCount;
}

export default {differenceDate};
