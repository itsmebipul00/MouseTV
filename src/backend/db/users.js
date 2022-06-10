import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
	{
		_id: '8c2c8857-c914-4f7a-acab-389890ce2d87',
		username: 'Bipul',
		email: 'itsmebipul00@gmail.com',
		password: 'itsmebipul00@gmail.com',
		likes: [],
		watchlater: [],
		playlists: [],
		history: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
]
