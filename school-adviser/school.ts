import axios from 'axios';
import { SchoolParams, SchoolType } from '../@types/school';
import { getApiUrl } from '../utils/api';

/**
 * @description 학교 정보를 빌드하는 클래스입니다.
 * @example
 * const name = await new SchoolBuilder()
 *   .withScCode('B10')
 *   .withName('서울대학교')
 *   .build();
 */
export class SchoolBuilder {
    /**
     * @description API URL
     * @private
     */
    private readonly API_URL: string;

    /**
     * @description 시도교육청코드
     * @example 'J10'
     * @private
     */
    private scCode: string | undefined;

    /**
     * @description 표준학교코드
     * @example '7530045'
     * @private
     */
    private code: string | undefined;

    /**
     * @description 학교명
     * @example '경기과학고등학교'
     * @private
     */
    private name: string | undefined;

    /**
     * @description 학교종류명
     * @example '고등학교'
     * @private
     */
    private schoolType: string | undefined;

    /**
     * @description 소재지명
     * @example '경기도'
     * @private
     */
    private location: string | undefined;

    /**
     * @description 설립명
     * @example '공립'
     * @private
     */
    private foundation: string | undefined;

    /**
     * @description 학교 정보를 빌드하는 클래스입니다.
     * @example
     * const name = await new SchoolBuilder()
     *   .withScCode('J10')
     *   .withName('경기과학고등학교')
     *   .build();
     */
    constructor() {
        this.API_URL = getApiUrl('schoolInfo');
    }

    /**
     * @description 학교 정보를 객체 형태로 빌드합니다.
     * @example
     * const name = await new SchoolBuilder()
     *  .withParams({
     *    scCode: 'J10',
     *    name: '경기과학고등학교'
     *  })
     *  .build();
     * @param params 학교 정보를 담은 객체입니다.
     */
    withParams = (params: SchoolParams): SchoolBuilder => {
        this.scCode = params.scCode;
        this.code = params.code;
        this.name = params.name;
        this.schoolType = params.schoolType;
        this.location = params.location;
        this.foundation = params.foundation;
        return this;
    };

    /**
     * @description 시도교육청코드를 설정합니다.
     * @example 'J10'
     * @param code 시도교육청코드
     */
    withScCode = (code: string): SchoolBuilder => {
        this.scCode = code;
        return this;
    };

    /**
     * @description 표준학교코드를 설정합니다.
     * @example '7530045'
     * @param code 표준학교코드
     */
    withCode = (code: string): SchoolBuilder => {
        this.code = code;
        return this;
    };

    /**
     * @description 학교명을 설정합니다.
     * @example '경기과학고등학교'
     * @param name 학교명
     */
    withName = (name: string): SchoolBuilder => {
        this.name = name;
        return this;
    };

    /**
     * @description 학교종류명을 설정합니다.
     * @example '고등학교'
     * @param schoolType 학교종류명
     */
    withSchoolType = (schoolType: string): SchoolBuilder => {
        this.schoolType = schoolType;
        return this;
    };

    /**
     * @description 소재지명을 설정합니다.
     * @example '경기도'
     * @param location 소재지명
     */
    withLocation = (location: string): SchoolBuilder => {
        this.location = location;
        return this;
    };

    /**
     * @description 설립명을 설정합니다.
     * @example '공립'
     * @param foundation 설립명
     */
    withFoundation = (foundation: string): SchoolBuilder => {
        this.foundation = foundation;
        return this;
    };

    /**
     * @description 설정한 정보를 바탕으로 학교 정보를 빌드합니다.
     * @example
     * const name = await new SchoolBuilder()
     *   .withScCode('J10')
     *   .withName('경기과학고등학교')
     *   .build();
     * @returns {Promise<SchoolType[]>} 학교 정보를 담은 객체입니다.
     * @throws {Error} 학교 정보를 불러오지 못했을 경우 에러를 던집니다.
     * @see {@link https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17020190531110010104913&infSeq=1} API 정보
     */
    build = async (): Promise<SchoolType[]> => {
        try {
            let url = this.API_URL;

            if (this.scCode) {
                url += `&ATPT_OFCDC_SC_CODE=${ this.scCode }`;
            }

            if (this.code) {
                url += `&SD_SCHUL_CODE=${ this.code }`;
            }

            if (this.name) {
                url += `&SCHUL_NM=${ this.name }`;
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

            const res = await axios.get(url);

            return res.data.schoolInfo[1].row;
        } catch (error) {
            throw new Error('Cannot find name with given info');
        }
    };
}
