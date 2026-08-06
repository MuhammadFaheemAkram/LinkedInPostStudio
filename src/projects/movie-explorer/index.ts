import { defineProject } from '../../lib/factories';
import { movieExplorerMeta } from './project';
import post01 from './post01';
import post02 from './post02';
import post03 from './post03';
import post04 from './post04';
import post05 from './post05';
import post06 from './post06';
import post07 from './post07';
import post08 from './post08';

export const movieExplorer = defineProject(movieExplorerMeta, [
  post01,
  post02,
  post03,
  post04,
  post05,
  post06,
  post07,
  post08,
]);

export default movieExplorer;
