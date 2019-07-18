/** 
 * Pagination Example
 * @example
 * {
    page: 1,
    sort: 'desc',
    manufacturer: 'Audi',
    color: 'red'
  }
*/
const getDefaultValues = () => {
  return { page: 1, color: '', manufacturer: '' };
};

const getPaginationTotal = (data: []) => {
    if (!data) { return 0; }
    return data.length;
};

const getResultTotal = (data: { totalPageCount: 0 }) => {
    return data.totalPageCount;
};

export { getDefaultValues, getPaginationTotal, getResultTotal };
