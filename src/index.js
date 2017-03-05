const logger = require('winston');

const isDebug = () => {
  return process.env.NODE_ENV !== 'production'
};

module.exports = (err, req, res, next) => {

  logger.error(err);

  res.set('Content-Type', 'application/json');

  if (err && err.code === 'validation') {
      res.status(400);
      res.json({
          data: req.body,
          error: err
      });
  } else if (err && err.name === 'UnauthorizedError' || err.code === 'unauthorized') {
      res.status(401);
      res.json({
          error: {
              code: 'unauthorized',
              message: err.message ? err.message : 'Unauthorized access',
              trace: isDebug() ? err.stack : undefined
          }
      });
  } else {
      res.status(500);
      res.json({
          data: req.body,
          error: {
              code: 'system_error',
              message: 'Unknown system error',
              trace: isDebug() ? err.stack : undefined
          }
      });
  }

};
