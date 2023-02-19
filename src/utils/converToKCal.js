function converToKCal(calorie) {
  const kiloCal = calorie / 1000;
  return kiloCal.toFixed(3);
}

export default converToKCal;
