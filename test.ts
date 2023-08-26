import {SchoolType} from "./@types/school";
import {SchoolBuilder} from "./school-adviser/school";
import {ElementaryTimetableBuilder} from "./school-adviser/timetable/elementaryschool";

(async () => {
    let schools: SchoolType[] = await new SchoolBuilder()
        .withScCode('J10')
        .withSchoolName('상인초')
        .build();

    let timetable = await new ElementaryTimetableBuilder(schools[0].ATPT_OFCDC_SC_CODE, schools[0].SD_SCHUL_CODE)
        .withBetween(['20210825', '20230825'])
        .withPage(1)
        .withPageSize(1)
        .build();

    console.log(timetable);
})();