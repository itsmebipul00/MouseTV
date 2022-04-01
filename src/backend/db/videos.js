/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { v4 as uuid } from 'uuid'

export const videos = [
	{
		_id: uuid(),
		title: 'Toy Story 4',
		description:
			'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that’s Andy or Bonnie. But when Bonnie adds a reluctant new toy called “Forky” to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy',
		poster: 'assets/toy-story-4.webp',
		url: 'https://www.youtube.com/watch?v=wmiIUN-7qhE',
		views: '65M',
		duration: '2:27',
		uploaded: 'Mar 19, 2019',
		category: 'children',
	},
	{
		_id: uuid(),
		title: 'Toy Story 4',
		description:
			'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that’s Andy or Bonnie. But when Bonnie adds a reluctant new toy called “Forky” to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy',
		poster: 'assets/toy-story-4.webp',
		url: 'https://www.youtube.com/watch?v=wmiIUN-7qhE',
		views: '65M',
		duration: '2:27',
		uploaded: 'Mar 19, 2019',
		category: 'children',
	},
	{
		_id: uuid(),
		title: 'Dishoom',
		description:
			'When India’s top batsman goes missing in the Middle East, two cops from either side of the Arabian Sea team up for a 36-hour manhunt. Here’s presenting the official trailer of the most awaited film',
		poster: 'assets/action-dishoom.webp',
		url: 'https://www.youtube.com/watch?v=DU6IdS2gVog',
		views: '24M',
		duration: '3:18',
		uploaded: 'Jun 1, 2016',
		category: 'action',
	},
	{
		_id: uuid(),
		title: 'Dishoom',
		description:
			'When India’s top batsman goes missing in the Middle East, two cops from either side of the Arabian Sea team up for a 36-hour manhunt. Here’s presenting the official trailer of the most awaited film',
		poster: 'assets/action-dishoom.webp',
		url: 'https://www.youtube.com/watch?v=DU6IdS2gVog',
		views: '24M',
		duration: '3:18',
		uploaded: 'Jun 1, 2016',
		category: 'action',
	},
	{
		_id: uuid(),
		title: 'Housefull 4',
		description:
			'Three brothers are set to marry three sisters. However, a peek into the distant past reveals to one of the brothers that their brides have been mixed up in their current reincarnation.',
		poster: 'assets/comedy-housefull.webp',
		url: 'https://www.youtube.com/watch?v=gcHH34cEl3Y',
		views: '119M',
		duration: '3:36',
		uploaded: 'Sep 27, 2019',
		category: 'comedy',
	},
	{
		_id: uuid(),
		title: 'Housefull 4',
		description:
			'Three brothers are set to marry three sisters. However, a peek into the distant past reveals to one of the brothers that their brides have been mixed up in their current reincarnation.',
		poster: 'assets/comedy-housefull.webp',
		url: 'https://www.youtube.com/watch?v=gcHH34cEl3Y',
		views: '119M',
		duration: '3:36',
		uploaded: 'Sep 27, 2019',
		category: 'comedy',
	},
	{
		_id: uuid(),
		title: 'Hum do hamre do',
		description:
			'Hum do Hamare do story is about a couple who adopt their parents.',
		poster: 'assets/drama-humdo.webp',

		url: 'https://www.youtube.com/watch?v=t3efdEAkMgQ',
		views: '44M',
		duration: '2:48',
		uploaded: 'Oct 11, 2021',
		category: 'drama',
	},
	{
		_id: uuid(),
		title: 'Hum do hamre do',
		description:
			'Hum do Hamare do story is about a couple who adopt their parents.',
		poster: 'assets/drama-humdo.webp',
		url: 'https://www.youtube.com/watch?v=t3efdEAkMgQ',
		views: '44M',
		duration: '2:48',
		uploaded: 'Oct 11, 2021',
		category: 'drama',
	},
	{
		_id: uuid(),
		title: 'Dil Bechara',
		description:
			'Dil Bechara is a story of Kizie and Manny, two ordinary people with an extraordinary love story. Both have a tragic twist to their lives. That was the start of exploring a funny, thrilling and tragic business of being alive and in love',
		poster: 'assets/romance-dilb.webp',
		url: 'https://www.youtube.com/watch?v=GODAlxW5Pes',
		views: '95M',
		duration: '2:43',
		uploaded: 'Jul 6, 2020',
		category: 'romance',
	},
	{
		_id: uuid(),
		title: 'Dil Bechara',
		description:
			'Dil Bechara is a story of Kizie and Manny, two ordinary people with an extraordinary love story. Both have a tragic twist to their lives. That was the start of exploring a funny, thrilling and tragic business of being alive and in love',
		poster: 'assets/romance-dilb.webp',
		url: 'https://www.youtube.com/watch?v=GODAlxW5Pes',
		views: '95M',
		duration: '2:43',
		uploaded: 'Jul 6, 2020',
		category: 'romance',
	},
	{
		_id: uuid(),
		title: 'Cruella',
		description:
			'Estella is a young and clever grifter who is determined to make a name for herself in the fashion world.',
		poster: 'assets/crullea-horror.webp',
		url: 'https://www.youtube.com/watch?v=gmRKv7n2If8',
		views: '21M',
		duration: '1:32',
		uploaded: 'Feb 17, 2021',
		category: 'horror',
	},
	{
		_id: uuid(),
		title: 'Cruella',
		description:
			'Estella is a young and clever grifter who is determined to make a name for herself in the fashion world.',
		poster: 'assets/crullea-horror.webp',
		url: 'https://www.youtube.com/watch?v=gmRKv7n2If8',
		views: '21M',
		duration: '1:32',
		uploaded: 'Feb 17, 2021',
		category: 'horror',
	},
	{
		_id: uuid(),
		title: 'SHAN-CHI',
		description:
			'Martial-arts master Shang-Chi confronts the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
		poster: 'assets/shang-chi-fantasy.webp',
		url: 'https://www.youtube.com/watch?v=gmRKv7n2If8',
		views: '29M',
		duration: '1:58',
		uploaded: 'Jun 25, 2021',
		category: 'fantasy',
	},
	{
		_id: uuid(),
		title: 'SHAN-CHI',
		description:
			'Martial-arts master Shang-Chi confronts the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
		poster: 'assets/shang-chi-fantasy.webp',
		url: 'https://www.youtube.com/watch?v=gmRKv7n2If8',
		views: '29M',
		duration: '1:58',
		uploaded: 'Jun 25, 2021',
		category: 'fantasy',
	},
]
