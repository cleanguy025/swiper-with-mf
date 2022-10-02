module.exports = {
  name: 'second-remote',
  exposes: {
    './Module': 'apps/second-remote/src/app/remote-entry/entry.module.ts',
  },
};
