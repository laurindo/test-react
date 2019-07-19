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
  return { page: 1, color: '', manufacturer: '', sort: 'desc' };
};

const getPaginationTotal = (data: []) => {
    if (!data) { return 0; }
    return data.length;
};

const getTotalPageCount = (data: { totalPageCount: 0 }) => {
    return data.totalPageCount;
};

const getTotalCarsCount = (data: { totalCarsCount: 0 }) => {
  return data.totalCarsCount;
};

const getSortValue = (value: string) => {
  if (value.toLowerCase() === 'mileage - ascending') {
    return 'asc';
  } else if (value.toLowerCase() === 'mileage - descending') {
    return 'desc';
  }
  return '';
};

export { getDefaultValues, getPaginationTotal, getTotalPageCount, getTotalCarsCount, getSortValue };
