/**
 * @description 급식 정보를 담는 인터페이스
 * @interface
 * @property {string} ATPT_OFCDC_SC_CODE 시도교육청코드
 * @property {string} ATPT_OFCDC_SC_NM 시도교육청명
 * @property {string} SD_SCHUL_CODE 표준학교코드
 * @property {string} SCHUL_NM 학교명
 * @property {string} MMEAL_SC_CODE 식사코드
 * @property {string} MMEAL_SC_NM 식사명
 * @property {string} MLSV_YMD 급식일자
 * @property {number} MLSV_FGR 급식인원수
 * @property {string} DDISH_NM 요리명
 * @property {string} ORPLC_INFO 원산지정보
 * @property {string} CAL_INFO 칼로리정보
 * @property {string} NTR_INFO 영양정보
 * @property {string} MLSV_FROM_YMD 급식시작일자
 * @property {string} MLSV_TO_YMD 급식종료일자
 */
export interface MealType {
    /**
     * @description 시도교육청코드
     * @type {string}
     *
     * @example
     * 'J10'
     */
    ATPT_OFCDC_SC_CODE: string,

    /**
     * @description 시도교육청명
     * @type {string}
     *
     * @example
     * '서울특별시교육청'
     */
    ATPT_OFCDC_SC_NM: string,

    /**
     * @description 표준학교코드
     * @type {string}
     *
     * @example
     * '7530045'
     */
    SD_SCHUL_CODE: string,

    /**
     * @description 학교명
     * @type {string}
     *
     * @example
     * '경기과학고등학교'
     */
    SCHUL_NM: string,

    /**
     * @description 식사코드
     * @type {string}
     *
     * @example
     * '1'
     */
    MMEAL_SC_CODE: string,

    /**
     * @description 식사명
     * @type {string}
     *
     * @example
     * '조식'
     */
    MMEAL_SC_NM: string,

    /**
     * @description 급식일자
     * @type {Date}
     *
     * @example
     * 2023-08-24T15:00:00.000Z
     */
    MLSV_YMD: Date | string,

    /**
     * @description 급식인원수
     * @type {number}
     *
     * @example
     * 379.00
     */
    MLSV_FGR: number,

    /**
     * @description 요리명
     * @type {string[]}
     *
     * @example
     * ['쌀밥(자율)', '중국식냉면(주식)']
     */
    DDISH_NM: string[] | string,

    /**
     * @description 원산지정보
     * @type {{ type: string, origin: string }[]}
     *
     * @example
     * '쇠고기(종류): 국내산(한우)...'
     */
    ORPLC_INFO: { type: string, origin: string }[] | string,

    /**
     * @description 칼로리정보
     * @type {string}
     *
     * @example
     * '436.9 Kcal"'
     */
    CAL_INFO: string,

    /**
     * @description 영양정보
     * @type {{ nutrient: string, amount: number }[]}
     *
     * @example
     * [{nutrient: '탄수화물(g)', amount: 60.6}]
     */
    NTR_INFO: { nutrient: string, amount: number }[] | string,

    /**
     * @description 급식시작일자
     * @type {Date}
     *
     * @example
     * '20230825'
     */
    MLSV_FROM_YMD: Date | string,

    /**
     * @description 급식종료일자
     * @type {Date}
     *
     * @example
     * '20230825'
     */
    MLSV_TO_YMD: Date | string,
}

/**
 * @description 급식 정보를 담는 인터페이스
 * @interface
 * @property {string} scCode 시도교육청코드
 * @property {string} schoolCode 표준학교코드
 * @property {string} mealCode 급식코드
 * @property {string} date 급식일자
 * @property {string} from 급식시작일자
 * @property {string} to 급식종료일자
 * @property {string[]} between 급식시작일자와 급식종료일자
 */
export interface MealParams {
    /**
     * @description 시도교육청코드
     * @type {string}
     *
     * @example
     * 'J10'
     */
    scCode: string | undefined;

    /**
     * @description 표준학교코드
     * @type {string}
     *
     * @example
     * '7530045'
     */
    schoolCode: string | undefined;

    /**
     * @description 급식코드
     * @type {string}
     *
     * @example
     * '1'
     */
    mealCode?: string | undefined;

    /**
     * @description 급식일자
     * @type {string}
     *
     * @example
     * '20230825'
     */
    date?: string | undefined;

    /**
     * @description 급식시작일자
     * @type {string}
     *
     * @example
     * '20230825'
     */
    from?: string | undefined;

    /**
     * @description 급식종료일자
     * @type {string}
     *
     * @example
     * '20230825'
     */
    to?: string | undefined;

    /**
     * @description 급식시작일자와 급식종료일자
     * @type {string[]}
     *
     * @example
     * ['20230825', '20230825']
     */
    between?: string[] | undefined;

    /**
     * @description 페이지 위치
     * @type {number}
     *
     * @example
     * 1
     */
    page?: number | undefined;

    /**
     * @description 페이지 당 신청 숫자
     * @type {number}
     *
     * @example
     * 100
     */
    pageSize?: number | undefined;
}