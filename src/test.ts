import { SchoolBuilder } from './school';

const getSchool = () => {
    return new SchoolBuilder()
        .withParams({
            schoolCode: '7581030',
        }).build();
};

getSchool().then((school) => {
    console.log(school);
});