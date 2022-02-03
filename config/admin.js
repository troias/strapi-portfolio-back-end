module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63c59faab016df45778f4dc6843e77eb'),
  },
});
