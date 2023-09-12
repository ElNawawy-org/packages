import eagle from './assets/eagle.png';
import ministryBuilding from './assets/ministryBuilding.jpg';
import location from './assets/location.svg';
import person from './assets/person.png';

// TODO: replace any with type of array of objects

export const areas: any = [
  {
    id: 1,
    buildingImg: ministryBuilding,
    name: 'وزارة الخارجية',
    eagle: eagle,
    location: location,
    description: 'عنوان الوزارة وتفصيلة بسيطة جدا عنها هنا',
  },
  {
    id: 2,
    buildingImg: ministryBuilding,
    name: 'وزارة التربية والتعليم',
    eagle: eagle,
    location: location,
    description: 'عنوان الوزارة وتفصيلة بسيطة جدا عنها هنا',
  },
  {
    id: 3,
    buildingImg: ministryBuilding,
    name: 'وزارة الزراعة',
    eagle: eagle,
    location: location,
    description: 'عنوان الوزارة وتفصيلة بسيطة جدا عنها هنا',
  },
  {
    id: 4,
    buildingImg: ministryBuilding,
    name: 'مبني القدس',
    eagle: eagle,
    location: location,
    description: 'عنوان الوزارة وتفصيلة بسيطة جدا عنها هنا',
  },
];

export const members: any = [
  {
    id: 1,
    name: 'محمد مصطفي علي',
    position: 'منصب العضو',
    img: person,
  },
  {
    id: 2,
    name: 'محمد مصطفي علي',
    position: 'منصب العضو',
    img: person,
  },
  {
    id: 3,
    name: 'محمد مصطفي علي',
    position: 'منصب العضو',
    img: person,
  },
  {
    id: 4,
    name: 'محمد مصطفي علي',
    position: 'منصب العضو',
    img: person,
  },
];
