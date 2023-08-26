import axios from 'axios';
import { getApiUrl } from '../utils/api';
import { AcademyParams, AcademyType } from '../@types/academy';
import { getDate } from '../utils/date';

/**
 * @description 학 정보를 빌드하는 클래스입니다.
 * @example
 * const academy = await new AcademyBuilder()
 *   .withScCode('J10')
 *   .build();
 */
export class AcademyBuilder {
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
     * @description 행정구역명
     *
     * @example
     * '교습소'
     *
     * @private
     */
    private zoneName: string | undefined;

    /**
     * @description 학원지정번호
     *
     * @example
     * '3000055155'
     *
     * @private
     */
    private academyNumber: string | undefined;

    /**
     * @description 학원명
     *
     * @example
     * '가평필아트미술교습소'
     *
     * @private
     */
    private academyName: string | undefined;

    /**
     * @description 분야명
     *
     * @example
     * '예능(대)'
     *
     * @private
     */
    private realm: string | undefined;

    /**
     * @description 교습계열명
     *
     * @example
     * '예능(중)'
     *
     * @private
     */
    private learningField: string | undefined;

    /**
     * @description 교습과정명
     *
     * @example
     * '미술'
     *
     * @private
     */
    private course: string | undefined;

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
     * const academy = await new AcademyBuilder()
     *   .withScCode('J10')
     *   .build();
     */
    constructor(scCode: string) {
        this.scCode = scCode;
        this.API_URL = getApiUrl('acaInsTiInfo');
    }

    /**
     * @description 학원 정보를 객체 형태로 빌드합니다.
     *
     * @example
     * const academy = await new AcademyBuilder()
     *  .withParams({
     *    scCode: 'J10'
     *  })
     *  .build();
     *
     * @param params 학원 정보를 담은 객체입니다.
     */
    withParams = (params: AcademyParams): AcademyBuilder => {
        this.zoneName = params.zoneName;
        this.academyNumber = params.academyNumber;
        this.academyName = params.academyName;
        this.realm = params.realm;
        this.learningField = params.learningField;
        this.course = params.course;
        this.page = params.page;
        this.pageSize = params.pageSize;
        return this;
    };

    /**
     * @description 행정구역명을 설정합니다.
     *
     * @example
     * '1'
     *
     * @param zoneName 행정구역명
     */
    withZoneName = (zoneName: string): AcademyBuilder => {
        this.zoneName = zoneName;
        return this;
    };

    /**
     * @description 학원지정번호를 설정합니다.
     *
     * @example
     * '3000055155'
     *
     * @param academyNumber 학원지정번호
     */
    withAcademyNumber = (academyNumber: string): AcademyBuilder => {
        this.academyName = academyNumber;
        return this;
    };

    /**
     * @description 분야명을 설정합니다.
     *
     * @example
     * '예능(대)'
     *
     * @param realm 분야명
     */
    withRealm = (realm: string): AcademyBuilder => {
        this.realm = realm;
        return this;
    };

    /**
     * @description 학원명을 설정합니다.
     *
     * @example
     * '가평필아트미술교습소'
     *
     * @param academyName 학원명
     */
    withAcademyName = (academyName: string): AcademyBuilder => {
        this.academyName = academyName;
        return this;
    };

    /**
     * @description 교습계열명을 설정합니다.
     *
     * @example
     * '예능(중)'
     *
     * @param learningField 교습계열명
     */
    withLearningField = (learningField: string): AcademyBuilder => {
        this.learningField = learningField;
        return this;
    };

    /**
     * @description 교습과정명을 설정합니다.
     *
     * @example
     * '미술'
     *
     * @param course 교습과정명
     */
    withCourse = (course: string): AcademyBuilder => {
        this.course = course;
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
    withPage = (page: number): AcademyBuilder => {
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
    withPageSize = (pageSize: number): AcademyBuilder => {
        this.pageSize = pageSize;
        return this;
    };

    /**
     * @description API URL을 반환합니다.
     *
     * @example
     * 'https://open.neis.go.kr/hub/acaInsTiInfo?KEY=...&Type=json'
     *
     * @returns {string} API URL
     */
    url = (): string => {
        let url = this.API_URL;

        if (this.scCode) {
            url += `&ATPT_OFCDC_SC_CODE=${ this.scCode }`;
        }

        if (this.zoneName) {
            url += `&ADMST_ZONE_NM=${ this.zoneName }`;
        }

        if (this.academyNumber) {
            url += `&ACA_ASNUM=${ this.academyNumber }`;
        }

        if (this.academyName) {
            url += `&ACA_NM=${ this.academyName }`;
        }

        if (this.realm) {
            url += `&REALM_SC_NM=${ this.realm }`;
        }

        if (this.learningField) {
            url += `&LE_ORD_NM=${ this.learningField }`;
        }

        if (this.course) {
            url += `&LE_CRSE_NM=${ this.course }`;
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
     * @description 설정한 정보를 바탕으로 학원 정보를 빌드합니다.
     *
     * @example
     * const academy = await new AcademyBuilder()
     *   .withScCode('J10')
     *   .build();
     *
     * @returns {Promise<<AcademyType>[]>} 학원 정보를 담은 객체입니다.
     * @throws {Error} 학원 정보를 불러오지 못했을 경우 에러를 던집니다.
     * @see {@link https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN15920190423094641415608&infSeq=2} API 정보
     */
    build = async (): Promise<AcademyType[]> => {
        try {

            const res = await axios.get(this.url());

            const data = res.data.acaInsTiInfo[1].row;
            data.forEach((academy: AcademyType) => {

                if (typeof academy.THCC_OTHBC_YN === 'string') {
                    academy.THCC_OTHBC_YN = academy.THCC_OTHBC_YN === 'Y';
                }

                if (typeof academy.ESTBL_YMD === 'string') {
                    academy.ESTBL_YMD = getDate(academy.ESTBL_YMD);
                }

                if (typeof academy.REG_YMD === 'string') {
                    academy.REG_YMD = getDate(academy.REG_YMD);
                }

                if (academy.FA_RDNDA.startsWith(', ')) {
                    academy.FA_RDNDA = academy.FA_RDNDA.slice(2);
                }

                if (typeof academy.PSNBY_THCC_CNTNT === 'string') {
                    academy.PSNBY_THCC_CNTNT = academy.PSNBY_THCC_CNTNT.split(',').map((info: string) => {
                        info.trim();
                        return {
                            name: info.split(':')[0].trim(),
                            price: parseInt(info.split(':')[1].trim()),
                        };
                    });
                }

                if (typeof academy.BRHS_ACA_YN === 'string') {
                    academy.BRHS_ACA_YN = academy.BRHS_ACA_YN === 'Y';
                }

                if (typeof academy.LOAD_DTM === 'string') {
                    academy.LOAD_DTM = getDate(academy.LOAD_DTM);
                }
            });

            return data;
        } catch (error) {
            throw new Error('Cannot find academy with given info');
        }
    };
}
