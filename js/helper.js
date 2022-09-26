/**
 * Función para crear la fecha del post
 * @return {`${number}/${number}/${number} - ${number}:${number}:${number}`}
 */
export const dateSocial = () => {
  const dateObj = new Date();
  const month = dateObj.getMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const hour = (dateObj.getUTCHours()) - 3;
  const minutes = dateObj.getUTCMinutes();
  const seconds = dateObj.getUTCSeconds();
  return `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;
};

/**
 * Función para ordenar los post por la fecha
 * @param posts
 * @return {*}
 */
export const orderByDate = (posts) => posts.sort((a, b) => a.date - b.date);
