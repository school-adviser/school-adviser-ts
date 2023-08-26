import {AcademyType} from "./@types/academy";
import {AcademyBuilder} from "./school-adviser/academy";

(async () => {
    let academies: AcademyType[] = await new AcademyBuilder('J10')
        .withAcademyName('감성채움피아노교습소')
        .build();

    console.log(academies);
})();