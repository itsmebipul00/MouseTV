import { v4 as uuid } from 'uuid'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: 'children',
	},
	{
		_id: uuid(),
		categoryName: 'action',
	},
	{
		_id: uuid(),
		categoryName: 'comedy',
	},
	{
		_id: uuid(),
		categoryName: 'drama',
	},
	{
		_id: uuid(),
		categoryName: 'fantasy',
	},
	{
		_id: uuid(),
		categoryName: 'horror',
	},
	{
		_id: uuid(),
		categoryName: 'mystery',
	},
	{
		_id: uuid(),
		categoryName: 'romance',
	},
]
