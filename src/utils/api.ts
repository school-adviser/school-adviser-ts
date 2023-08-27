import * as dotenv from 'dotenv';

dotenv.config();

/**
 * @description API URL을 가져옵니다.
 *
 * @example
 * getApiUrl('mealServiceDietInfo')
 *
 * @param type API 타입
 */
export function getApiUrl(type: string) {
    return `https://open.neis.go.kr/hub/${ type }?KEY=${ process.env.API_KEY }&Type=json`;
}