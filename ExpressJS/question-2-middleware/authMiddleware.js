//This code checks the authentication without any authentication URL
//It is checked with local settings. I have tested with postman with headers key and value
const checkAuthentication = (req, res, next) => {
  try {
    if (req.headers['abhishek-auth'] === 'authenticated') {
      req.userID = 'UserID';
      next();
    } else {
      res.status(401).json({ error: 'User is not authenticated' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default checkAuthentication;



