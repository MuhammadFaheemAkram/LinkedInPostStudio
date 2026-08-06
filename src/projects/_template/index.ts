import { defineProject } from '../../lib/factories';
import { templateProjectMeta } from './project';
import post01 from './post01';
// import post02 from './post02';  // add posts here as you write them

/**
 * Bundle the project. `defineProject` merges the metadata into each post and
 * derives post numbers (1/N) from the array order below.
 *
 * When ready, import this in `src/projects/index.ts` and add it to `projects`.
 */
export const templateProject = defineProject(templateProjectMeta, [
  post01,
  // post02,
]);

export default templateProject;
