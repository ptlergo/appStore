module.exports = (express) => {
  const router = express.Router();

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

  // individual routes
  router.use('/api/v1/', require('./apps')(express));
  router.use('/api/v1/', require('./users')(express));

  // GET all users
  router.get('/users', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'user1',
      },
      {
        id: 2,
        name: 'user2',
      },
    ]);
  });

  // GET user of id
  router.get('/users/:id', (req, res) => {
    res.json({
      id: 1,
      name: 'user1',
    });
  });

  return router;
};
