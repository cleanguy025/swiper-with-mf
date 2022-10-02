module.exports = {
  name: 'first-remote',
  exposes: {
    './Module': 'apps/first-remote/src/app/remote-entry/entry.module.ts',
  },
};
