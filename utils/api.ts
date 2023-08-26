import * as dotenv from 'dotenv';

dotenv.config();

export function getApiUrl(type: string) {
    return `https://open.neis.go.kr/hub/${ type }?KEY=${ process.env.API_KEY }&Type=json`;
}