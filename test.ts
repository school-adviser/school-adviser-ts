import { SchoolBuilder } from './school-adviser/school';
import { SchoolType } from './@types/school';
import { MealType } from './@types/meal';
import { MealBuilder } from './school-adviser/meal';

(async () => {
    let schools: SchoolType[] = await new SchoolBuilder()
        .withSchoolName('경기과학고등학교').build();

    console.log(schools);

    let meals: MealType[] = await new MealBuilder(schools[0].ATPT_OFCDC_SC_CODE, schools[0].SD_SCHUL_CODE)
        .withDate('20230825').build();

    console.log(meals[0]);
})();