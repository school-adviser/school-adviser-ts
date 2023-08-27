import axios from 'axios';
import { SchoolParams, SchoolType } from './types/school';
import { getApiUrl } from './utils/api';
import { getDate } from './utils/date';

/**
 * @description 학교 정보를 빌드하는 클래스입니다.
 * @example
 * const school = await new SchoolBuilder()
 *   .withScCode('B10')
 *   .withSchoolName('서울대학교')
 *   .build();
 */
export class SchoolBuilder {
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
    private scCode: string | undefined;

    /**
     * @description 표준학교코드
     *
     * @example
     * '7530045'
     *
     * @private
     */
    private schoolCode: string | undefined;

    /**
     * @description 학교명
     *
     * @example
     * '경기과학고등학교'
     *
     * @private
     */
    private schoolName: string | undefined;

    /**
     * @description 학교종류명
     *
     * @example
     * '고등학교'
     *
     * @private
     */
    private schoolType: string | undefined;

    /**
     * @description 소재지명
     *
     * @example
     * '경기도'
     *
     * @private
     */
    private location: string | undefined;

    /**
     * @description 설립명
     *
     * @example
     * '공립'
     *
     * @private
     */
    private foundation: string | undefined;

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
     * @description 학교 정보를 빌드하는 클래스입니다.
     *
     * @example
     * const school = await new SchoolBuilder()
     *   .withScCode('J10')
     *   .withSchoolName('경기과학고등학교')
     *   .build();
     */
    constructor() {
        this.API_URL = getApiUrl('schoolInfo');
    }

    /**
     * @description 학교 정보를 객체 형태로 빌드합니다.
     *
     * @example
     * const schoolName = await new SchoolBuilder()
     *  .withParams({
     *    scCode: 'J10',
     *    schoolName: '경기과학고등학교'
     *  })
     *  .build();
     *
     * @param params 학교 정보를 담은 객체입니다.
     */
    withParams = (params: SchoolParams): SchoolBuilder => {
        this.scCode = params.scCode;
        this.schoolCode = params.schoolCode;
        this.schoolName = params.schoolName;
        this.schoolType = params.schoolType;
        this.location = params.location;
        this.foundation = params.foundation;
        this.page = params.page;
        this.pageSize = params.pageSize;
        return this;
    };

    /**
     * @description 시도교육청코드를 설정합니다.
     *
     * @example
     * 'J10'
     *
     * @param scCode 시도교육청코드
     */
    withScCode = (scCode: string): SchoolBuilder => {
        this.scCode = scCode;
        return this;
    };

    /**
     * @description 표준학교코드를 설정합니다.
     *
     * @example
     * '7530045'
     *
     * @param schoolCode 표준학교코드
     */
    withSchoolCode = (schoolCode: string): SchoolBuilder => {
        this.schoolCode = schoolCode;
        return this;
    };

    /**
     * @description 학교명을 설정합니다.
     *
     * @example
     * '경기과학고등학교'
     *
     * @param schoolName 학교명
     */
    withSchoolName = (schoolName: string): SchoolBuilder => {
        this.schoolName = schoolName;
        return this;
    };

    /**
     * @description 학교종류명을 설정합니다.
     *
     * @example
     * '고등학교'
     *
     * @param schoolType 학교종류명
     */
    withSchoolType = (schoolType: string): SchoolBuilder => {
        this.schoolType = schoolType;
        return this;
    };

    /**
     * @description 소재지명을 설정합니다.
     *
     * @example
     * '경기도'
     *
     * @param location 소재지명
     */
    withLocation = (location: string): SchoolBuilder => {
        this.location = location;
        return this;
    };

    /**
     * @description 설립명을 설정합니다.
     *
     * @example
     * '공립'
     *
     * @param foundation 설립명
     */
    withFoundation = (foundation: string): SchoolBuilder => {
        this.foundation = foundation;
        return this;
    };

    /**
     * @description 페이지 위치를 설정합니다.
     *
     * @example
     * 1
     *
     * @param page 페이지 위치
     */
    withPage = (page: number): SchoolBuilder => {
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
    withPageSize = (pageSize: number): SchoolBuilder => {
        this.pageSize = pageSize;
        return this;
    };

    /**
     * @description API URL을 반환합니다.
     *
     * @example
     * 'https://open.neis.go.kr/hub/schoolInfo?KEY=...&Type=json'
     *
     * @returns {string} API URL
     */
    url = (): string => {
        let url = this.API_URL;

        if (this.scCode) {
            url += `&ATPT_OFCDC_SC_CODE=${ this.scCode }`;
        }

        if (this.schoolCode) {
            url += `&SD_SCHUL_CODE=${ this.schoolCode }`;
        }

        if (this.schoolName) {
            url += `&SCHUL_NM=${ this.schoolName }`;
        }

        if (this.schoolType) {
            url += `&SCHUL_KND_SC_NM=${ this.schoolType }`;
        }

        if (this.location) {
            url += `&LCTN_SC_NM=${ this.location }`;
        }

        if (this.foundation) {
            url += `&FOND_SC_NM=${ this.foundation }`;
        }

        if (this.page) {
            url += `&pIndex=${ this.page }`;
        }

        if (this.pageSize) {
            url += `&pSize=${ this.pageSize }`;
        }

        return url;
    };

    /**
     * @description 설정한 정보를 바탕으로 학교 정보를 빌드합니다.
     *
     * @example
     * const school = await new SchoolBuilder()
     *   .withScCode('J10')
     *   .withSchoolName('경기과학고등학교')
     *   .build();
     *
     * @returns {Promise<SchoolType[]>} 학교 정보를 담은 객체입니다.
     * @throws {Error} 학교 정보를 불러오지 못했을 경우 에러를 던집니다.
     * @see {@link https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17020190531110010104913&infSeq=1} API 정보
     */
    build = async (): Promise<SchoolType[]> => {
        try {
            const res = await axios.get(this.url());

            const data = res.data.schoolInfo[1].row;
            data.forEach((school: SchoolType) => {
                if (typeof school.INDST_SPECL_CCCCL_EXST_YN === 'string') {
                    school.INDST_SPECL_CCCCL_EXST_YN = school.INDST_SPECL_CCCCL_EXST_YN === 'Y';
                }

                if (typeof school.FOND_YMD === 'string') {
                    school.FOND_YMD = getDate(school.FOND_YMD);
                }

                if (typeof school.FOAS_MEMRD === 'string') {
                    school.FOAS_MEMRD = getDate(school.FOAS_MEMRD);
                }
                if (typeof school.LOAD_DTM === 'string') {
                    school.LOAD_DTM = getDate(school.LOAD_DTM);
                }

            });

            return data;
        } catch (error) {
            throw new Error('Cannot find school with given info');
        }
    };
}
