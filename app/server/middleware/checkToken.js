function checkToken (req, res, next) {
  if (!req.headers.token) {
    res.status(401).send('Missing token header');
    return;
  }
  next();
}

module.exports = checkToken;