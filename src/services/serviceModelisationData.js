//Data modeling service

/**
 * Calorie Conversion
 * @param {*} data
 * @returns {number}
 */
export function converToKCal(calorie) {
  const kiloCal = calorie / 1000;
  return kiloCal.toFixed(3);
}

/**
 * Percentage conversion
 * @param {*} data
 * @returns {number}
 */
export function converToPercent(score) {
  let nombre = score;
  let pourcentage = nombre * 100; //Multiplication by 100 to convert to percentage
  return pourcentage + '%';
}

/**
 * Function to retrieve only the day of a date
 * @param {*} data
 * @returns {string}
 */
export function converToDate(date) {
  // Create a Date object from the character string representing the date
  const maDate = new Date(date);
  // Extract the day of the month corresponding to this date
  const jour = maDate.getDate();
  // Display the day of the month
  return jour.toString();
}

/**
 * Function to display only the first letter of the retrieved day
 * @param {*} data
 * @returns {string}
 */
export function getDayOfWeek(day) {
  const daysOfWeek = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
  ];
  const dayString = daysOfWeek[day - 1];
  return dayString.charAt(0);
}

/**
 * Function translate a specific object from English to French
 * @param {*}
 *  @returns {string}
 */
export function translateEnglishToFrench(text) {
  const dictionary = {
    energy: 'Energie',
    strength: 'Force',
    intensity: 'Intensité',
    speed: 'Vitesse',
    cardio: 'Cardio',
    endurance: 'Endurance'
  };

  const translatedWords = text.split(' ').map((word) => {
    const translatedWord = dictionary[word];
    return translatedWord ? translatedWord : word;
  });
  return translatedWords.join(' ');
}

export default {
  converToKCal,
  getDayOfWeek,
  converToDate,
  converToPercent,
  translateEnglishToFrench
};
