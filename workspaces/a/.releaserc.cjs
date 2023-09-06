// import fs from 'fs';
// import { gitmojis } from 'gitmojis';

// const template = fs.readFileSync('./default-template-semver.hbs', 'utf-8');
// const commitTemplate = fs.readFileSync('./commit-template.hbs', 'utf-8');

/**
 * Generate release rules from gitmojis
 */
// const releaseRules = {
//   major: gitmojis.filter(({ semver }) => semver === 'major').map(({ code }) => code),
//   minor: gitmojis.filter(({ semver }) => semver === 'minor').map(({ code }) => code).concat(':new:'),
//   patch: gitmojis.filter(({ semver }) => (semver === 'patch' || semver === null)).map(({ code }) => code),
// };

module.exports = {
  extends: 'scottnath-experiments-meow/meow',
  debug: true,
  tagFormat: 'scottnath-experiments-a@${version}',
  // plugins: [
  //   [
  //     'semantic-release-gitmoji',
  //     {
  //       releaseRules,
  //       releaseNotes: {
  //         semver: true,
  //         template,
  //         partials: {
  //           commitTemplate,
  //         },
  //       }
  //     }
  //   ],
    // ["@semantic-release/exec", {
    //   "generateNotesCmd": "echo ${JSON.stringify(nextRelease)}"
    // }],
    // [
    //   "@semantic-release/github",
    //   {
    //     "successComment": false,
    //     "failComment": false
    //   }
    // ],
    // [
    //   "@semantic-release/git",
    //   {
    //     "message": "chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}"
    //   }
    // ],
    // '@semantic-release/npm',
  // ]
}