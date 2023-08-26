/**
 * @description 학원 정보를 담는 인터페이스
 * @interface
 * @property {string} ATPT_OFCDC_SC_CODE 시도교육청코드
 * @property {string} ATPT_OFCDC_SC_NM 시도교육청명
 * @property {string} ADMST_ZONE_NM 행정구역명
 * @property {string} ACA_INSTI_SC_NM 학원교습소명
 * @property {string} ACA_ASNUM 학원지정번호
 * @property {string} ACA_NM 학원명
 * @property {Date} ESTBL_YMD 개설일자
 * @property {Date} REG_YMD 등록일자
 * @property {string} REG_STTUS_NM 등록상태명
 * @property {string} CAA_BEGIN_YMD 휴원시작일자
 * @property {string} CAA_END_YMD 휴원종료일자
 * @property {number} TOFOR_SMTOT 정원합계
 * @property {number} DTM_RCPTN_ABLTY_NMPR_SMTOT 일시수용능력인원합계
 * @property {string} REALM_SC_NM 분야명
 * @property {string} LE_ORD_NM 교습계열명
 * @property {string} LE_CRSE_LIST_NM 교습과정목록명
 * @property {string} LE_CRSE_NM 교습과정명
 * @property {string} PSNBY_THCC_CNTNT 인당수강료내용
 * @property {boolean} THCC_OTHBC_YN 수강료공개여부
 * @property {boolean} BRHS_ACA_YN 기숙사학원여부
 * @property {string} FA_RDNZC 도로명우편주소
 * @property {string} FA_RDNMA 도로명주소
 * @property {string} FA_RDNDA 도로명상세주소
 * @property {Date} LOAD_DTM 수정일
 */
export interface AcademyType {
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
     * @description 행정구역명
     * @type {string}
     *
     * @example
     * '가평군'
     */
    ADMST_ZONE_NM: string;

    /**
     * @description 학원교습소명
     * @type {string}
     *
     * @example
     * '교습소
     */
    ACA_INSTI_SC_NM: string;

    /**
     * @description 학원지정번호
     * @type {string}
     *
     * @example
     * '3000055155'
     */
    ACA_ASNUM: string;

    /**
     * @description 학원명
     * @type {string}
     *
     * @example
     * '가평필아트미술교습소'
     */
    ACA_NM: string;

    /**
     * @description 개설일자
     * @type {Date}
     *
     * @example
     * 2015-03-02T15:00:00.000Z
     */
    ESTBL_YMD: Date | string;

    /**
     * @description 등록일자
     * @type {Date}
     *
     * @example
     * 2015-03-02T15:00:00.000Z
     */
    REG_YMD: Date | string;

    /**
     * @description 등록상태명
     * @type {string}
     *
     * @example
     * '개원'
     */
    REG_STTUS_NM: string;

    /**
     * @description 휴원시작일자
     * @type {string}
     *
     * @example
     * 'null'
     */
    CAA_BEGIN_YMD: string;

    /**
     * @description 휴원종료일자
     * @type {string}
     *
     * @example
     * '99991231
     */
    CAA_END_YMD: string;

    /**
     * @description 정원합계
     * @type {number}
     *
     * @example
     * 49
     */
    TOFOR_SMTOT: number;

    /**
     * @description 일시수용능력인원합계
     * @type {number}
     *
     * @example
     * 8
     */
    DTM_RCPTN_ABLTY_NMPR_SMTOT: number;

    /**
     * @description 분야명
     * @type {string}
     *
     * @example
     * '예능(대)'
     */
    REALM_SC_NM: string;

    /**
     * @description 교습계열명
     * @type {string}
     *
     * @example
     * '예능(중)'
     */
    LE_ORD_NM: string;

    /**
     * @description 교습과정목록명
     * @type {string}
     *
     * @example
     * '미술'
     */
    LE_CRSE_LIST_NM: string;

    /**
     * @description 교습과정명
     * @type {string}
     *
     * @example
     * '미술'
     */
    LE_CRSE_NM: string;

    /**
     * @description 인당수강료내용
     * @type {{name: string, price: number}[]}
     *
     * @example
     * [{name: '미술1', price: 10000}, {name: '미술2', price: 10000}]
     */
    PSNBY_THCC_CNTNT: { name: string, price: number }[] | string;

    /**
     * @description 수강료공개여부
     * @type {boolean}
     *
     * @example
     * true
     */
    THCC_OTHBC_YN: boolean | string;

    /**
     * @description 기숙사학원여부
     * @type {boolean}
     *
     * @example
     * false
     */
    BRHS_ACA_YN: boolean | string;

    /**
     * @description 도로명우편주소
     * @type {string}
     *
     * @example
     * '12417'
     */
    FA_RDNZC: string;

    /**
     * @description 도로명주소
     * @type {string}
     *
     * @example
     * '경기도 가평군 가평읍 석봉로 163'
     */
    FA_RDNMA: string;

    /**
     * @description 도로명상세주소
     * @type {string}
     *
     * @example
     * '102호 (가평읍)'
     */
    FA_RDNDA: string;

    /**
     * @description 수정일
     * @type {Date}
     *
     * @example
     * 2023-06-26T15:00:00.000Z
     */
    LOAD_DTM: Date | string;
}

/**
 * @description 학원 정보를 담는 인터페이스
 * @interface
 * @property {string} scCode 시도교육청코드
 * @property {string} zoneName 행정구역명
 * @property {string} academyNumber 학원지정번호
 * @property {string} academyName 학원명
 * @property {string} realm 분야명
 * @property {string} learningField 교습계열명
 * @property {string} course 교습과정명
 * @property {number} page 페이지 위치
 * @property {number} pageSize 페이지 당 신청 숫자
 */
export interface AcademyParams {
    /**
     * @description 시도교육청코드
     * @type {string}
     *
     * @example
     * 'J10'
     */
    scCode: string;

    /**
     * @description 행정구역명
     * @type {string}
     *
     * @example
     * '가평군'
     */
    zoneName: string;

    /**
     * @description 학원지정번호
     * @type {string}
     *
     * @example
     * '3000055155'
     */
    academyNumber: string;

    /**
     * @description 학원명
     * @type {string}
     *
     * @example
     * '가평필아트미술교습소'
     */
    academyName: string;

    /**
     * @description 분야명
     * @type {string}
     *
     * @example
     * '예능(대)'
     */
    realm: string;

    /**
     * @description 교습계열명
     * @type {string}
     *
     * @example
     * '예능(중)'
     */
    learningField: string;

    /**
     * @description 교습과정명
     * @type {string}
     *
     * @example
     * '미술'
     */
    course: string;

    /**
     * @description 페이지 위치
     * @type {number}
     *
     * @example
     * 1
     */
    page: number;

    /**
     * @description 페이지 당 신청 숫자
     * @type {number}
     *
     * @example
     * 100
     */
    pageSize: number;
}