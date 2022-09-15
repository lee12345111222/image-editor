module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf2d2aacf3a6ef32ffa30f9d05d1e8cd'),
  },
});
