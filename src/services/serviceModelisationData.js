/**
 * Conversion des calories
 * @param {*} id
 * @returns
 */
export function converToKCal(calorie) {
  const kiloCal = calorie / 1000;
  return kiloCal.toFixed(3);
}

/**
 * Conversion en pourcentage
 * @param {*} id
 * @returns
 */
export function converToPercent(score) {
  let nombre = score; // Le nombre à convertir en pourcentage
  let pourcentage = nombre * 100; // Multiplication par 100 pour convertir en pourcentage
  return pourcentage + '%';
}

export function converToDate(date) {
  // Créer un objet Date à partir de la chaîne de caractères représentant la date
  const maDate = new Date(date);
  // Extraire le jour du mois correspondant à cette date
  const jour = maDate.getDate();
  // Afficher le jour du mois
  return jour.toString();
}

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
