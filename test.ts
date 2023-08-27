import {MiddleSchoolTimetableType} from "./@types/timetable/middleschool";
import {MiddleSchoolTimetableBuilder} from "./school-adviser/timetable/middleschool";

(async () => {
    let schools: MiddleSchoolTimetableType[] = await new MiddleSchoolTimetableBuilder('J10', '7581030')
        .withPage(1)
        .withPageSize(5)
        .build();

    console.log(schools);
})();