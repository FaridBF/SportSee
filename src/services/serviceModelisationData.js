/**
 * Conversion des calories
 * @param {*} id
 * @returns
 */
export default function converToKCal(calorie) {
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

// export default { converToKCal };
