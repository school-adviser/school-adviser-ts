/**
 * @description 문자열을 Date 객체로 변환합니다.
 *
 * @example
 * getDate('20230825');
 *
 * @param {string} date
 *
 * @returns {Date}
 */
export function getDate(date: string): Date {
    const dateString = date.trim();

    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1;
    const day = parseInt(dateString.substring(6, 8), 10);

    return new Date(year, month, day);
}