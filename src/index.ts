import { ElementarySchoolTimetableParams, ElementarySchoolTimetableType } from './types/timetable/elementaryschool';
import { MiddleSchoolTimetableParams, MiddleSchoolTimetableType } from './types/timetable/middleschool';
import { HighSchoolTimetableParams, HighSchoolTimetableType } from './types/timetable/highschool';

exports.SchoolBuilder = require('./school');
exports.MealBuilder = require('./meal');
exports.AcademyBuilder = require('./academy');
exports.ElementarySchoolTimetableBuilder = require('./timetable/elementaryschool');
exports.MiddleSchoolTimetableBuilder = require('./timetable/middleschool');
exports.HighSchoolTimetableBuilder = require('./timetable/highschool');

export {
    ElementarySchoolTimetableType,
    ElementarySchoolTimetableParams,
    MiddleSchoolTimetableParams,
    MiddleSchoolTimetableType,
    HighSchoolTimetableType,
    HighSchoolTimetableParams,
};