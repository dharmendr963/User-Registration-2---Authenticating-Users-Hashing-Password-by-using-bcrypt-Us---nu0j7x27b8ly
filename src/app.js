app.post("/api/v1/user/register", async (req, res) => {
  try {
    const { name, email, password, DOB } = req.body;
    const user = await User.create({ name, email, password, DOB });
    res.status(200).json({ _id: user._id });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
