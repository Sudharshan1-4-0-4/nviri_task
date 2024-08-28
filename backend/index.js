const express = require("express");



const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());




const initializeDBAndServer = async () => {
  try {
   
    app.listen(4001, () => {
      console.log("Server Running at http://localhost:4001/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();





const users = [
  { email: 'siddu@gmail.com', password: 'siddu', role: 'user' },
  { email: 'sudharshan@gmail.com', password: 'sudharshan', role: 'admin' }
];


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful', role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});






module.exports = app;