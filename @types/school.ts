/**
 * @description 학교 정보를 담는 인터페이스
 * @interface
 * @property {string} ATPT_OFCDC_SC_CODE 시도교육청코드
 * @property {string} ATPT_OFCDC_SC_NM 시도교육청명
 * @property {string} SD_SCHUL_CODE 표준학교코드
 * @property {string} SCHUL_NM 학교명
 * @property {string} ENG_SCHUL_NM 영문학교명
 * @property {string} SCHUL_KND_SC_NM 학교종류명
 * @property {string} LCTN_SC_NM 소재지명
 * @property {string} JU_ORG_NM 관할조직명
 * @property {string} FOND_SC_NM 설립명
 * @property {string} ORG_RDNZC 도로명우편번호
 * @property {string} ORG_RDNMA 도로명주소
 * @property {string} ORG_RDNDA 도로명상세주소
 * @property {string} ORG_TELNO 전화번호
 * @property {string} HMPG_ADRES 홈페이지주소
 * @property {string} COEDU_SC_NM 남녀공학구분명
 * @property {string} ORG_FAXNO 팩스번호
 * @property {string} HS_SC_NM 고등학교구분명
 * @property {string} INDST_SPECL_CCCCL_EXST_YN 산업체특별학급유무
 * @property {string} HS_GNRL_BUSNS_SC_NM 고등학교일반실업구분명
 * @property {string} SPCLY_PURPS_HS_ORD_NM 특수목적고등학교계열명
 * @property {string} ENE_BFE_SEHF_SC_NM 에너지경제사회학교구분명
 * @property {string} DGHT_SC_NM 주야구분명
 * @property {string} FOND_YMD 설립일자
 * @property {string} FOAS_MEMRD 개교기념일
 * @property {string} LOAD_DTM 수정일
 */
export interface SchoolType {
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
     * '경기도교육청'
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
     * @description 영문학교명
     * @type {string}
     *
     * @example
     * 'yeonggi Science High School'
     */
    ENG_SCHUL_NM: string,

    /**
     * @description 학교종류명
     * @type {string}
     *
     * @example
     * '고등학교'
     */
    SCHUL_KND_SC_NM: string,

    /**
     * @description 소재지명
     * @type {string}
     *
     * @example
     * '경기도'
     */
    LCTN_SC_NM: string,

    /**
     * @description 관할조직명
     * @type {string}
     *
     * @example
     * '경기도교육청'
     */
    JU_ORG_NM: string,

    /**
     * @description 설립명
     * @type {string}
     *
     * @example
     * '공립'
     */
    FOND_SC_NM: string,

    /**
     * @description 도로명우편번호
     * @type {string}
     *
     * @example
     * '16297'
     */
    ORG_RDNZC: string,

    /**
     * @description 도로명주소
     * @type {string}
     *
     * @example
     * '경기도 수원시 장안구 수일로 135'
     */
    ORG_RDNMA: string,

    /**
     * @description 도로명상세주소
     * @type {string}
     *
     * @example
     * '(송죽동/경기과학고등학교)'
     */
    ORG_RDNDA: string,

    /**
     * @description 전화번호
     * @type {string}
     *
     * @example
     * '031-259-0400'
     */
    ORG_TELNO: string,

    /**
     * @description 홈페이지주소
     * @type {string}
     *
     * @example
     * 'www.gs.hs.kr'
     */
    HMPG_ADRES: string,

    /**
     * @description 남녀공학구분명
     * @type {string}
     *
     * @example
     * '남여공학'
     */
    COEDU_SC_NM: string,

    /**
     * @description 팩스번호
     * @type {string}
     *
     * @example
     * '031-253-2812'
     */
    ORG_FAXNO: string,

    /**
     * @description 고등학교구분명
     * @type {string}
     *
     * @example
     * '특목고'
     */
    HS_SC_NM: string,

    /**
     * @description 산업체특별학급존재여부
     * @type {boolean}
     *
     * @example
     * false
     */
    INDST_SPECL_CCCCL_EXST_YN: boolean | string,

    /**
     * @description 고등학교일반실업구분명
     * @type {string}
     *
     * @example
     * '일반계'
     */
    HS_GNRL_BUSNS_SC_NM: string,

    /**
     * @description 특수목적고등학교계열명
     * @type {string}
     *
     * @example
     * '과학계열'
     */
    SPCLY_PURPS_HS_ORD_NM: string,

    /**
     * @description 입시전후기구분명
     * @type {string}
     *
     * @example
     * '전기'
     */
    ENE_BFE_SEHF_SC_NM: string,

    /**
     * @description 주야구분명
     * @type {string}
     *
     * @example
     * '주간'
     */
    DGHT_SC_NM: string,

    /**
     * @description 설립일자
     * @type {Date}
     *
     * @example
     * 1983-01-10T15:00:00.000Z
     */
    FOND_YMD: Date | string,

    /**
     * @description 개교기념일
     * @type {Date}
     *
     * @example
     * 1983-01-10T15:00:00.000Z
     */
    FOAS_MEMRD: Date | string,

    /**
     * @description 수정일
     * @type {Date}
     *
     * @example
     * 2023-08-24T15:00:00.000Z
     */
    LOAD_DTM: Date | string
}

/**
 * @description 학교 정보를 담는 인터페이스
 * @interface
 * @property {string} scCode 시도교육청코드
 * @property {string} schoolCode 표준학교코드
 * @property {string} schoolName 학교명
 * @property {string} schoolType 학교종류명
 * @property {string} location 소재지명
 * @property {string} foundation 설립명
 */
export interface SchoolParams {
    /**
     * @description 시도교육청코드
     * @type {string}
     *
     * @example
     * 'J10'
     */
    scCode?: string | undefined;

    /**
     * @description 표준학교코드
     * @type {string}
     *
     * @example
     * '7530045'
     */
    schoolCode?: string | undefined;

    /**
     * @description 학교명
     * @type {string}
     *
     * @example
     * '경기과학고등학교'
     */
    schoolName?: string | undefined;

    /**
     * @description 학교종류명
     * @type {string}
     *
     * @example
     * '고등학교'
     */
    schoolType?: string | undefined;

    /**
     * @description 소재지명
     * @type {string}
     *
     * @example
     * '경기도'
     */
    location?: string | undefined;

    /**
     * @description 설립명
     * @type {string}
     *
     * @example
     * '공립'
     */
    foundation?: string | undefined;

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