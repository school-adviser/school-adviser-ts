import axios from 'axios';
import { getApiUrl } from '../utils/api';
import { MealType } from '../@types/meal';

const API_URL = getApiUrl('mealServiceDietInfo');

export async function getMealsBySchoolInfo(scCode: string, schoolCode: string): Promise<MealType[]> {
    try {
        const res = await axios.get(`${ API_URL }&ATPT_OFCDC_SC_CODE=${ scCode }&SD_SCHUL_CODE=${ schoolCode }`);
        return res.data.mealServiceDietInfo[1].row;
    } catch (error) {
        throw Error('Cannot find meal with given school info');
    }
}