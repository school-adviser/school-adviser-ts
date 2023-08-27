import { SchoolBuilder } from './school';
import { MealBuilder } from './meal';

const getSchool = () => {
    return new SchoolBuilder()
        .withParams({
            schoolCode: '7581030',
        }).build();
};

getSchool().then((school) => {
    new MealBuilder(school[0].ATPT_OFCDC_SC_CODE, school[0].SD_SCHUL_CODE)
        .withPageSize(1)
        .withDate('20220505').build().then((meal) => {
        console.log(meal);
    });
});