import axios from 'axios';
import {getApiUrl} from '../utils/api';
import {MealParams, MealType} from '../@types/meal';
import {getDate} from '../utils/date';

/**
 * @description 급식 정보를 빌드하는 클래스입니다.
 * @example
 * const meal = await new MealBuilder()
 *   .withScCode('B10')
 *   .withSchoolCode('7530045')
 *   .build();
 */
export class MealBuilder {
    /**
     * @description API URL
     *
     * @private
     */
    private readonly API_URL: string;

    /**
     * @description 시도교육청코드
     *
     * @example
     * 'J10'
     *
     * @private
     */
    private readonly scCode: string | undefined;

    /**
     * @description 표준학교코드
     *
     * @example
     * '7530045'
     *
     * @private
     */
    private readonly schoolCode: string | undefined;

    /**
     * @description 식사코드
     *
     * @example
     * 1
     *
     * @private
     */
    private mealCode: string | undefined;

    /**
     * @description 급식일자
     *
     * @example
     * '20230825'
     *
     * @private
     */
    private date: string | undefined;

    /**
     * @description 급식시작일자
     *
     * @example
     * '20230825'
     *
     * @private
     */
    private from: string | undefined;

    /**
     * @description 급식종료일자
     *
     * @example
     * '20230825'
     *
     * @private
     */
    private to: string | undefined;

    /**
     * @description 페이지 위치
     *
     * @example
     * 1
     *
     * @private
     */
    private page: number | undefined;

    /**
     * @description 페이지 당 신청 숫자
     *
     * @example
     * 100
     *
     * @private
     */
    private pageSize: number | undefined;


    /**
     * @description 급식 정보를 빌드하는 클래스입니다.
     *
     * @example
     * const meal = await new MealBuilder()
     *   .withScCode('J10')
     *   .withSchoolName('경기과학고등학교')
     *   .build();
     */
    constructor(scCode: string, schoolCode: string) {
        this.scCode = scCode;
        this.schoolCode = schoolCode;
        this.API_URL = getApiUrl('mealServiceDietInfo');
    }

    /**
     * @description 급식 정보를 객체 형태로 빌드합니다.
     *
     * @example
     * const meal = await new MealBuilder()
     *  .withParams({
     *    scCode: 'J10',
     *    schoolName: '경기과학고등학교'
     *  })
     *  .build();
     *
     * @param params 급식 정보를 담은 객체입니다.
     */
    withParams = (params: MealParams): MealBuilder => {
        this.mealCode = params.mealCode;
        this.date = params.date;
        this.from = params.from;
        this.to = params.to;
        this.from = params.between?.[0];
        this.to = params.between?.[1];
        this.page = params.page;
        this.pageSize = params.pageSize;
        return this;
    };

    /**
     * @description 급식코드를 설정합니다.
     *
     * @example
     * '1'
     *
     * @param mealCode 급식코드
     */
    withMealCode = (mealCode: string): MealBuilder => {
        this.mealCode = mealCode;
        return this;
    };

    /**
     * @description 급식일자를 설정합니다.
     *
     * @example
     * '20230825'
     *
     * @param date 급식일자
     */
    withDate = (date: string): MealBuilder => {
        this.date = date;
        return this;
    };

    /**
     * @description 급식시작일자를 설정합니다.
     *
     * @example
     * '20230825'
     *
     * @param from 급식시작일자
     */
    withFrom = (from: string): MealBuilder => {
        this.from = from;
        return this;
    };

    /**
     * @description 급식종료일자를 설정합니다.
     *
     * @example
     * '20230825'
     *
     * @param to 급식종료일자
     */
    withTo = (to: string): MealBuilder => {
        this.to = to;
        return this;
    };

    /**
     * @description 급식시작일자와 급식종료일자를 설정합니다.
     *
     * @example
     * ['20230825', '20230825']
     *
     * @param between 급식시작일자와 급식종료일자
     */
    withBetween = (between: [string, string]): MealBuilder => {
        this.from = between[0];
        this.to = between[1];
        return this;
    }

    /**
     * @description 페이지 위치를 설정합니다.
     *
     * @example
     * 1
     *
     * @param page 페이지 위치
     */
    withPage = (page: number): MealBuilder => {
        this.page = page;
        return this;
    };

    /**
     * @description 페이지 당 신청 숫자를 설정합니다.
     *
     * @example
     * 100
     *
     * @param pageSize 페이지 당 신청 숫자
     */
    withPageSize = (pageSize: number): MealBuilder => {
        this.pageSize = pageSize;
        return this;
    };

    /**
     * @description API URL을 반환합니다.
     *
     * @example
     * 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=...&Type=json'
     *
     * @returns {string} API URL
     */
    url = (): string => {
        let url = this.API_URL;

        if (this.scCode) {
            url += `&ATPT_OFCDC_SC_CODE=${this.scCode}`;
        }

        if (this.schoolCode) {
            url += `&SD_SCHUL_CODE=${this.schoolCode}`;
        }

        if (this.mealCode) {
            url += `&SD_SCHUL_CODE=${this.mealCode}`;
        }

        if (this.date) {
            url += `&MLSV_YMD=${this.date}`;
        }

        if (this.from) {
            url += `&MLSV_FROM_YMD=${this.from}`;
        }

        if (this.to) {
            url += `&MLSV_TO_YMD=${this.to}`;
        }

        if (this.page) {
            url += `&pIndex=${this.page}`;
        }

        if (this.pageSize) {
            url += `&pSize=${this.pageSize}`;
        }

        return url;
    };

    /**
     * @description 설정한 정보를 바탕으로 급식 정보를 빌드합니다.
     *
     * @example
     * const name = await new MealBuilder()
     *   .withScCode('J10')
     *   .withSchoolName('경기과학고등학교')
     *   .build();
     *
     * @returns {Promise<<MealType>[]>} 급식 정보를 담은 객체입니다.
     * @throws {Error} 급식 정보를 불러오지 못했을 경우 에러를 던집니다.
     * @see {@link https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17320190722180924242823&infSeq=1} API 정보
     */
    build = async (): Promise<MealType[]> => {
        try {

            const res = await axios.get(this.url());

            const data = res.data.mealServiceDietInfo[1].row;
            data.forEach((meal: MealType) => {
                if (typeof meal.MLSV_YMD === 'string') {
                    meal.MLSV_YMD = getDate(meal.MLSV_YMD);
                }

                if (typeof meal.DDISH_NM === 'string') {
                    meal.DDISH_NM = meal.DDISH_NM.split('<br/>').map((dish: string) => dish.trim());
                }

                if (typeof meal.ORPLC_INFO === 'string') {
                    meal.ORPLC_INFO = meal.ORPLC_INFO.split('<br/>').map((info: string) => {
                        info.trim();
                        return {
                            type: info.split(':')[0].trim(),
                            origin: info.split(':')[1].trim(),
                        };
                    });
                }

                if (typeof meal.NTR_INFO === 'string') {
                    meal.NTR_INFO = meal.NTR_INFO.split('<br/>').map((info: string) => {
                        info.trim();
                        return {
                            nutrient: info.split(':')[0].trim(),
                            amount: parseFloat(info.split(':')[1].trim()),
                        };
                    });
                }

                if (typeof meal.MLSV_FROM_YMD === 'string') {
                    meal.MLSV_FROM_YMD = getDate(meal.MLSV_FROM_YMD);
                }

                if (typeof meal.MLSV_TO_YMD === 'string') {
                    meal.MLSV_TO_YMD = getDate(meal.MLSV_TO_YMD);
                }
            });

            return data;
        } catch (error) {
            throw new Error('Cannot find meal with given info');
        }
    };
}
