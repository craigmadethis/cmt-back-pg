module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e2031afd2c1912a4ed45d1f3edc6059'),
  },
});
