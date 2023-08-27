import axios from 'axios';
import {getApiUrl} from '../utils/api';
import {getDate} from "../utils/date";
import {MiddleSchoolTimetableParams, MiddleSchoolTimetableType} from "../types/timetable/middleschool";

/**
 * @description 시간표 정보를 빌드하는 클래스입니다.
 * @example
 * const timetable = await new MiddleSchoolTimetableBuilder('J10', '7581030')
 *   .withYear('2021')
 *   .build();
 */
export class MiddleSchoolTimetableBuilder {
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
     * '7530124'
     *
     * @private
     */
    private readonly schoolCode: string | undefined;

    /**
     * @description 학년도
     * @type {string}
     *
     * @example
     * '2021'
     */
    private year: string | undefined;

    /**
     * @description 학기
     * @type {string}
     *
     * @example
     * '1'
     */
    private semester: string | undefined;

    /**
     * @description 시간표일자
     * @type {string}
     *
     * @example
     * '20210825'
     */
    private date: string | undefined;

    /**
     * @description 주야과정명
     * @type {string}
     *
     * @example
     * '주간'
     */
    private dayNightCourse: string | undefined;

    /**
     * @description 학년
     * @type {string}
     *
     * @example
     * '1'
     */
    private grade: string | undefined;

    /**
     * @description 학급명
     * @type {string}
     *
     * @example
     * '1'
     */
    private class: string | undefined;

    /**
     * @description 교시
     * @type {string}
     *
     * @example
     * '1'
     */
    private period: string | undefined;

    /**
     * @description 시간표시작일자
     * @type {string}
     *
     * @example
     * '20210825'
     */
    private from: string | undefined;

    /**
     * @description 시간표종료일자
     * @type {string}
     *
     * @example
     * '20210825'
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
     * @description 학원 정보를 빌드하는 클래스입니다.
     *
     * @example
     * const timetable = await new ElementaryTimetableBuilder('J10', '7581078')
     *   .withYear('2021')
     *   .build();
     */
    constructor(scCode: string, schoolCode: string) {
        this.scCode = scCode;
        this.schoolCode = schoolCode;
        this.API_URL = getApiUrl('misTimetable');
    }

    /**
     * @description 시간표 정보를 객체 형태로 빌드합니다.
     *
     * @example
     * const timetable = await new MiddleSchoolTimetableBuilder()
     *  .withParams({
     *    scCode: 'J10'
     *  })
     *  .build();
     *
     * @param params 시간표 정보를 담은 객체입니다.
     */
    withParams = (params: MiddleSchoolTimetableParams): MiddleSchoolTimetableBuilder => {
        this.year = params.year;
        this.semester = params.semester;
        this.date = params.date;
        this.dayNightCourse = params.dayNightCourse;
        this.grade = params.grade;
        this.class = params.class;
        this.period = params.period;
        this.to = params.to;
        this.from = params.from;
        this.from = params.between?.[0];
        this.to = params.between?.[1];
        return this;
    };

    /**
     * @description 학년도를 설정합니다.
     *
     * @example
     * '2021'
     *
     * @param year 학년도
     */
    withYear = (year: string): MiddleSchoolTimetableBuilder => {
        this.year = year;
        return this;
    }

    /**
     * @description 학기를 설정합니다.
     *
     * @example
     * '1'
     *
     * @param semester 학기
     */
    withSemester = (semester: string): MiddleSchoolTimetableBuilder => {
        this.semester = semester;
        return this;
    }

    /**
     * @description 시간표일자를 설정합니다.
     *
     * @example
     * '20210825'
     *
     * @param date 시간표일자
     */
    withDate = (date: string): MiddleSchoolTimetableBuilder => {
        this.date = date;
        return this;
    }

    /**
     * @description 주야과정명을 설정합니다.
     *
     * @example
     * '주간'
     *
     * @param dayNightCourse 주야과정명
     */
    withDayNightCourse = (dayNightCourse: string): MiddleSchoolTimetableBuilder => {
        this.dayNightCourse = dayNightCourse;
        return this;
    }

    /**
     * @description 학년을 설정합니다.
     *
     * @example
     * '1'
     *
     * @param grade 학년
     */
    withGrade = (grade: string): MiddleSchoolTimetableBuilder => {
        this.grade = grade;
        return this;
    }

    /**
     * @description 학급명을 설정합니다.
     *
     * @example
     * '1'
     *
     * @param class_ 학급명
     */
    withClass = (class_: string): MiddleSchoolTimetableBuilder => {
        this.class = class_;
        return this;
    }

    /**
     * @description 교시를 설정합니다.
     *
     * @example
     * '1'
     *
     * @param period 교시
     */
    withPeriod = (period: string): MiddleSchoolTimetableBuilder => {
        this.period = period;
        return this;
    }

    /**
     * @description 시간표시작일자를 설정합니다.
     *
     * @example
     * '20210825'
     *
     * @param from 시간표시작일자
     */
    withFrom = (from: string): MiddleSchoolTimetableBuilder => {
        this.from = from;
        return this;
    }

    /**
     * @description 시간표종료일자를 설정합니다.
     *
     * @example
     * '20210825'
     *
     * @param to 시간표종료일자
     */
    withTo = (to: string): MiddleSchoolTimetableBuilder => {
        this.to = to;
        return this;
    }

    /**
     * @description 시간표시작일자와 시간표종료일자를 설정합니다.
     *
     * @example
     * ['20210825', '20210825']
     *
     * @param between 시간표시작일자와 시간표종료일자
     */
    withBetween = (between: [string, string]): MiddleSchoolTimetableBuilder => {
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
    withPage = (page: number): MiddleSchoolTimetableBuilder => {
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
    withPageSize = (pageSize: number): MiddleSchoolTimetableBuilder => {
        this.pageSize = pageSize;
        return this;
    };

    /**
     * @description API URL을 반환합니다.
     *
     * @example
     * 'https://open.neis.go.kr/hub/hisTimetable?KEY=...&Type=json'
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

        if (this.year) {
            url += `&AY=${this.year}`;
        }

        if (this.semester) {
            url += `&SEM=${this.semester}`;
        }

        if (this.date) {
            url += `&ALL_TI_YMD=${this.date}`;
        }

        if (this.dayNightCourse) {
            url += `&DGHT_CRSE_SC_NM=${this.dayNightCourse}`;
        }

        if (this.grade) {
            url += `&GRADE=${this.grade}`;
        }

        if (this.class) {
            url += `&CLASS_NM=${this.class}`;
        }

        if (this.period) {
            url += `&PERIO=${this.period}`;
        }

        if (this.from) {
            url += `&TI_FROM_YMD=${this.from}`;
        }

        if (this.to) {
            url += `&TI_TO_YMD=${this.to}`;
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
     * @description 설정한 정보를 바탕으로 시간표 정보를 빌드합니다.
     *
     * @example
     * const timetable = await new MiddleSchoolTimetableBuidler('J10', '7530124')
     *   .withYear('2021')
     *   .build();
     *
     * @returns {Promise<<MiddleSchoolTimetableType>[]>} 시간표 정보를 담은 객체입니다.
     * @throws {Error} 시간표 정보를 불러오지 못했을 경우 에러를 던집니다.
     * @see {@link https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN15120190408165334348844&infSeq=2} API 정보
     */
    build = async (): Promise<MiddleSchoolTimetableType[]> => {
        try {
            const res = await axios.get(this.url());

            console.log(this.url())

            const data = res.data.misTimetable[1].row;
            data.forEach((timetable: MiddleSchoolTimetableType) => {
                if (typeof timetable.ALL_TI_YMD === 'string') {
                    timetable.ALL_TI_YMD = getDate(timetable.ALL_TI_YMD);
                }

                if (typeof timetable.LOAD_DTM === 'string') {
                    timetable.LOAD_DTM = getDate(timetable.LOAD_DTM);
                }

                if (timetable.ITRT_CNTNT && timetable.ITRT_CNTNT.startsWith('-')) {
                    timetable.ITRT_CNTNT = timetable.ITRT_CNTNT.slice(1);
                }
            });

            return data;
        } catch (error) {
            throw new Error('Cannot find timetable with given info');
        }
    };
}
