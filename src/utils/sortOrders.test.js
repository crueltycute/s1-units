import React from 'react'
import { sortByItemCount, sortByItemNames, sortOrders, sortByDate } from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('length1 > length2', () => {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('length1 < length2', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('non objects input', () => {
		const order1 = 1;
		const order2 = 2;

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('no items in objects', () => {
		const order1 = {
			test: '',
		};

		const order2 = {
			test: '',
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	})

	it('equal null length', () => {
		const order1 = {
			items: [],
		};

		const order2 = {
			items: [],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	})
});

describe('sortByDate function', () => {
	it('date1 == date2', () => {
		const date1 = {
			date: 1,
		};

		const date2 = {
			date: 1,
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(0);
	});

	it('date1 > date2', () => {
		const date1 = {
			date: 2,
		};

		const date2 = {
			date: 1,
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(-1);
	});

	it('date1 < date2', () => {
		const date1 = {
			date: 1,
		};

		const date2 = {
			date: 2,
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(1);
	});

	it('non objects input', () => {
		const date1 = 1;
		const date2 = 2;

		const result = sortByDate(date1, date2);

		expect(result).toBe(0);
	});

	it('no date in object', () => {
		const date1 = {
			test: '',
		};

		const date2 = {
			test: '',
		};

		const result = sortByDate(date1, date2);

		expect(result).toBe(0);
	});

	it('null orders', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

});

describe('sortOrders function', () => {
	it('null order', () => {
		const order = null;

		const sortType = null;

		const result = sortOrders(order, sortType);

		expect(result).toBeUndefined()
	});
});

describe('sortByItemNames function', () => {
	it('order1 == order2', () => {
		const order1 = {
			items: [1],
		};
		const order2 = {
			items: [1],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 > order2', () => {
		const order1 = {
			items: [10],
		};
		const order2 = {
			items: [1],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('order1 < order2', () => {
		const order1 = {
			items: [1],
		};
		const order2 = {
			items: [10],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	it('non object input', () => {
		const order1 = 'kek';
		const order2 = 'lul';

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('no items in input', () => {
		const order1 = {
			kek: 'kek'
		};
		const order2 = {
			lul: 'lul'
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('null order', () => {
		const order1 = null;
		const order2 = null;

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});
});  