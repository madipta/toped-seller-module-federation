module.exports = {
  name: 'chat',
  exposes: {
    './Routes': 'apps/chat/src/app/remote-entry/entry.routes.ts',
  },
};
