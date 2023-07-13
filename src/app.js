const express = require('express');
const app = express();

// Import the User model/schema
const { User } = require('./models');

// Middleware to parse JSON in the request body
app.use(express.json());

// User registration route
app.post('/api/v1/user/register', async (req, res) => {
  const { name, email, password, DOB } = req.body;

  try {
    // Create a new user using the User model
    const user = new User({
      name,
      email,
      password,
      DOB
    });
  
    // Save the user to the database
    await user.save();
  
    // Return the user's _id if registration is successful
    res.status(200).json({ _id: user._id });
  } catch (error) {
    // Return the error message with a 404 status if there was an error in registration
    res.status(404).json({ error: error.message });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
