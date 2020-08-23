/**
 * Get a version of a word with no accents or uppercase letters.
 *
 * @example getLowerNoAccentWord("roda") // "roda"
 * @example getLowerNoAccentWord("Éder") // "eder"
 * @example getLowerNoAccentWord("Extremo") // "extremo"
 * @example getLowerNoAccentWord("êxodo") // "exodo"
 * @example getLowerNoAccentWord("bárbara") // "barbara"
 * @example getLowerNoAccentWord("órgãos") // "orgaos"
 * @example getLowerNoAccentWord("à") // "a"
 * @example getLowerNoAccentWord("perseverança") // "perseveranca"
 * @example getLowerNoAccentWord("ídolo") // "idolo"
 * @example getLowerNoAccentWord("miúda") // "miuda"
 * @example getLowerNoAccentWord("lápis-lazúli") // "lapis-lazuli"
 */
export default word => {
  return word
    .toLowerCase()
    .replace(/é|ê/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ú/g, 'u')
    .replace(/ó|õ|ô/g, 'o')
    .replace(/á|à|ã/g, 'a')
    .replace(/ç/g, 'c');
};
