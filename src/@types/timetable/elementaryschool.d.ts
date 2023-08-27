/**
 * @description 초등학교 시간표 정보를 담는 인터페이스
 * @interface
 * @property {string} ATPT_OFCDC_SC_CODE 시도교육청코드
 * @property {string} ATPT_OFCDC_SC_NM 시도교육청명
 * @property {string} SD_SCHUL_CODE 표준학교코드
 * @property {string} SCHUL_NM 학교명
 * @property {string} AY 학년도
 * @property {string} SEM 학기
 * @property {string} ALL_TI_YMD 시간표일자
 * @property {string} GRADE 학년
 * @property {string} CLASS_NM 학급명
 * @property {string} PERIO 교시
 * @property {string} IRTR_CNTNT 수업내용
 * @property {string} LOAD_DTM 수정일
 */
export interface ElementarySchoolTimetableType {
    /**
     * @description 시도교육청코드
     * @type {string}
     *
     * @example
     * 'J10'
     */
    ATPT_OFCDC_SC_CODE: string;

    /**
     * @description 시도교육청명
     * @type {string}
     *
     * @example
     * '경기도교육청'
     */
    ATPT_OFCDC_SC_NM: string;

    /**
     * @description 표준학교코드
     * @type {string}
     *
     * @example
     * '7581078'
     */
    SD_SCHUL_CODE: string;

    /**
     * @description 학교명
     * @type {string}
     *
     * @example
     * '상인초등학교'
     */
    SCHUL_NM: string;

    /**
     * @description 학년도
     * @type {string}
     *
     * @example
     * '2021'
     */
    AY?: string;

    /**
     * @description 학기
     * @type {string}
     *
     * @example
     * '1'
     */
    SEM?: string;

    /**
     * @description 시간표일자
     * @type {Date}
     *
     * @example
     * 2023-03-05T15:00:00.000Z,
     */
    ALL_TI_YMD?: Date | string;

    /**
     * @description 학년
     * @type {string}
     *
     * @example
     * '1'
     */
    GRADE?: string;

    /**
     * @description 학급명
     * @type {string}
     *
     * @example
     * '1'
     */
    CLASS_NM?: string;

    /**
     * @description 교시
     * @type {string}
     *
     * @example
     * '1'
     */
    PERIO?: string;

    /**
     * @description 수업내용
     * @type {string}
     *
     * @example
     * '국어'
     */
    ITRT_CNTNT?: string;

    /**
     * @description 수정일
     * @type {Date}
     *
     * @example
     * 2023-03-05T15:00:00.000Z,
     */
    LOAD_DTM?: Date | string;
}

/**
 * @description 초등학교 시간표 정보를 담는 인터페이스
 * @interface
 * @property {string} year 학년도
 * @property {string} semester 학기
 * @property {string} date 시간표일자
 * @property {string} grade 학년
 * @property {string} class 학급명
 * @property {string} period 교시
 * @property {string} from 시간표시작일자
 * @property {string} to 시간표종료일자
 * @property {string[]} between 시간표시작일자와 시간표종료일자
 * @property {number} page 페이지 위치
 * @property {number} pageSize 페이지 당 신청 숫자
 */
export interface ElementarySchoolTimetableParams {
    /**
     * @description 학년도
     * @type {string}
     *
     * @example
     * '2021'
     */
    year?: string | undefined;

    /**
     * @description 학기
     * @type {string}
     *
     * @example
     * '1'
     */
    semester?: string | undefined;

    /**
     * @description 시간표일자
     * @type {string}
     *
     * @example
     * '20210825'
     */
    date?: string | undefined;

    /**
     * @description 학년
     * @type {string}
     *
     * @example
     * '1'
     */
    grade?: string | undefined;

    /**
     * @description 학급명
     * @type {string}
     *
     * @example
     * '1'
     */
    class?: string | undefined;

    /**
     * @description 교시
     * @type {string}
     *
     * @example
     * '1'
     */
    period?: string | undefined;

    /**
     * @description 시간표시작일자
     * @type {string}
     *
     * @example
     * '20210825'
     */
    from?: string | undefined;

    /**
     * @description 시간표종료일자
     * @type {string}
     *
     * @example
     * '20210825'
     */
    to?: string | undefined;

    /**
     * @description 시간표시작일자와 시간표종료일자
     * @type {string[]}
     *
     * @example
     * ['20210825', '20210825']
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