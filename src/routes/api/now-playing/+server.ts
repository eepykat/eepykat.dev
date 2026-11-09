// src/routes/api/now-playing/+server.ts
import { json } from '@sveltejs/kit';
import { LASTFM_USERNAME, LASTFM_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const API_ROOT = 'https://ws.audioscrobbler.com/2.0/';
	const QUERY_PARAMS = `?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&limit=20&format=json`;
	const FETCH_URL = `${API_ROOT}${QUERY_PARAMS}`;

	try {
		const res = await fetch(FETCH_URL, {
			headers: {
				'User-Agent': 'KatarinaMusicHistory/1.0.0 (contact: eepykat)'
			}
		});
		
		const data = await res.json();

		
		if (!data || !data.recenttracks || !data.recenttracks.track) {
			return json({ tracks: [] });
		}

		const trackData = data.recenttracks.track;

		const tracksArray = Array.isArray(trackData) ? trackData : [trackData];

		const parsedTracks = tracksArray.map((track: any) => {
			const isPlaying = track['@attr']?.nowplaying === 'true'; //
			const imagesArray = track.image || [];
			const mediumImage = imagesArray.find((img: any) => img.size === 'medium');

			return {
				title: track.name || 'Unknown Track',
				artist: track.artist?.['#text'] || 'Unknown Artist',
				album: track.album?.['#text'] || 'Unknown Album',
				image: mediumImage?.['#text'] || '/images/default-album.png',
				isPlaying,
				date: track.date?.['#text'] || 'Listening Now'
			};
		});

		return json({ tracks: parsedTracks });
	} catch (err) {
		console.error('API Fetch failed to resolve multi-row layout:', err);
		return json({ tracks: [] });
	}
};
