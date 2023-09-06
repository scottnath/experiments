// import { gitmojis } from 'gitmojis';

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
  tagFormat: 'scottnath-experiments-b@${version}',
}