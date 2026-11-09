// src/env.ts
import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	LASTFM_USERNAME: {},
	LASTFM_API_KEY: {}
});
