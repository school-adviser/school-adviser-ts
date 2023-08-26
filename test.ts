import { SchoolBuilder } from './school-adviser/school';
import { SchoolType } from './@types/school';

(async () => {
    let schools: SchoolType[] = await new SchoolBuilder()
        .withName('경기과학고')
        .withParams({
            scCode: 'J10',
        }).build();

    console.log(schools);
})();