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

const handleFilterCars = async (callback: Function, filter: Object = getDefaultValues()) => {
  callback(filter);
};

const handleSortCars = (value: string, filter: Object = getDefaultValues()) => {
  const newFilter = { ...getDefaultValues(), sort: getSortValue(value)};
  return newFilter;
};

const handleFirstPage = (value: number, filter: Object = getDefaultValues()) => {
  const newFilter = { ...getDefaultValues(), page: value};
  return newFilter;
};

const handleLastPage = (value: number, filter: Object = getDefaultValues()) => {
  const newFilter = { ...getDefaultValues(), page: value};
  return newFilter;
};

const handlePreviousPage = (pageNumber: number, filter: Object = getDefaultValues()) => {
  const newPageNumber = pageNumber - 1;
  const newFilter = { ...getDefaultValues(), page: newPageNumber};
  return newFilter;
};

function handleNextPage(pageNumber: number, filter: Object = getDefaultValues()) {
  const newPageNumber = pageNumber + 1;
  const newFilter = { ...getDefaultValues(), page: newPageNumber};
  return newFilter;
}

export { 
  getDefaultValues, 
  getPaginationTotal, 
  getTotalPageCount, 
  getTotalCarsCount, 
  getSortValue,
  handleFilterCars,
  handleSortCars,
  handleFirstPage,
  handleLastPage,
  handlePreviousPage,
  handleNextPage,
};
