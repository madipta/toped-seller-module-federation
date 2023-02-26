module.exports = {
  name: 'discussion',
  exposes: {
    './Routes': 'apps/discussion/src/app/remote-entry/entry.routes.ts',
  },
};
