import { allModels as SRSModels } from '@/constants/models/srs';

import { srsTags } from '@/constants/models/srs';
import { ICreator } from '@/interfaces/ICreator';

export const allModels = [
  ...SRSModels
];

export const creators: ICreator[] = [
  // aliases should be used for creators with different names in MMF and Kickstarter, such as 'Mini Dreams' on Kickstarter and 'Astland' in MMF
  { id: 1, creator: 'Sync Ratio Systems', alias: '', imgSrc: '/models/srs/logo.jpg', imgAlt: 'Sync Ratio Systems logo', tags: srsTags }
]
