import { getApiUrl } from '../../utils/api';
import axios from 'axios';
import { TimetableType } from '../../@types/timetable';

export class HighSchoolBuilder {
    private readonly API_URL: string;
    private readonly scCode: string | undefined;
    private readonly schoolCode: string | undefined;
    private grade: number | undefined;
    private classNum: number | undefined;
    private date: string | undefined;

    constructor(scCode: string, schoolCode: string) {
        this.API_URL = getApiUrl('hisTimetable');
        this.scCode = scCode;
        this.schoolCode = schoolCode;
    }

    setGrade(grade: number): HighSchoolBuilder {
        this.grade = grade;
        return this;
    }

    setClassNum(num: number): HighSchoolBuilder {
        this.classNum = num;
        return this;
    }

    setDate(date: string): HighSchoolBuilder {
        this.date = date;
        return this;
    }


    async build(): Promise<TimetableType[]> {
        try {
            let url = `${ this.API_URL }&ATPT_OFCDC_SC_CODE=${ this.scCode }&SD_SCHUL_CODE=${ this.schoolCode }`;
            if (this.grade !== undefined) {
                url += `&GRADE=${ this.grade }`;
            }
            if (this.classNum !== undefined) {
                url += `&CLASS_NM=${ this.classNum }`;
            }

            if (this.date !== undefined) {
                url += `&ALL_TI_YMD=${ this.date }`;
            }

            const res = await axios.get(url);
            return res.data.hisTimetable[1].row;
        } catch (error) {
            throw new Error('Cannot find school with given school info');
        }
    }
}
