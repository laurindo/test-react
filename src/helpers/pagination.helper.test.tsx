import * as PaginationHelper from './pagination.helper';

describe('TEST PAGINATION HELPER', () => {
    it('should return default values', () => {
        const result = PaginationHelper.getDefaultValues();
        expect(result.page).toBe(1);
        expect(result.color).toBe('');
        expect(result.manufacturer).toBe('');
        expect(result.sort).toBe('');
    });

    it('Should return getPaginationTotal', () => {
        let result = PaginationHelper.getPaginationTotal([]);
        expect(result).toBe(0);
    });

    it('Should return getTotalPageCount', () => {
        let result = PaginationHelper.getTotalPageCount({ totalPageCount: 0 });
        expect(result).toBe(0);

        result = PaginationHelper.getTotalPageCount({ totalPageCount: 1 });
        expect(result).toBe(1);

        result = PaginationHelper.getTotalPageCount({ totalPageCount: 100 });
        expect(result).toBe(100);
    });

    it('Should return getTotalCarsCount', () => {
        let result = PaginationHelper.getTotalCarsCount();
        expect(result).toBe(0);

        result = PaginationHelper.getTotalCarsCount({ totalCarsCount: 1 });
        expect(result).toBe(1);

        result = PaginationHelper.getTotalCarsCount({ totalCarsCount: 100 });
        expect(result).toBe(100);
    });

    it('Should return getSortValue', () => {
        let result = PaginationHelper.getSortValue();
        expect(result).toBe('');

        result = PaginationHelper.getSortValue('Mileage - Ascending');
        expect(result).toBe('asc');

        result = PaginationHelper.getSortValue('MilEage - DescenDing');
        expect(result).toBe('desc');
    });

    it('Should return handleSortCars', () => {
        let result = PaginationHelper.handleSortCars('mileage - ascending');
        expect(result.sort).toBe('asc');
        expect(result.page).toBe(1);
        expect(result.color).toBe('');
    });

    it('Should return handleFirstPage', () => {
        let result = PaginationHelper.handleFirstPage(2);
        expect(result.page).toBe(2);
        expect(result.color).toBe('');
    });

    it('Should return handleLastPage', () => {
        let result = PaginationHelper.handleFirstPage(100);
        expect(result.page).toBe(100);
        expect(result.color).toBe('');
    });

    it('Should return handleLastPage', () => {
        let result = PaginationHelper.handleFirstPage(100);
        expect(result.page).toBe(100);
        expect(result.color).toBe('');
    });

    it('Should return handlePreviousPage', () => {
        let result = PaginationHelper.handlePreviousPage(100);
        expect(result.page).toBe(99);
        expect(result.color).toBe('');
    });

    it('Should return handleNextPage', () => {
        let result = PaginationHelper.handleNextPage(2);
        expect(result.page).toBe(3);
        expect(result.color).toBe('');
    });
});