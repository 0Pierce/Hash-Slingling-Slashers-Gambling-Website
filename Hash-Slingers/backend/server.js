const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS package - run npm install cors
const userRoutes = require("./routes/userRoutes");
const authController = require("./controllers/auth.controller");
const errorController = require("./controllers/error.controller");
const userController = require("./controllers/userController");
const User = require("./models/user");

const app = express();

// This configures CORS to allow requests from the frontend
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.static(path.join(CURRENT_WORKING_DIR, "build/app")));

mongoose
  .connect(
    "mongodb+srv://hashslingers:qKrqjdz1NFQkDGT2@hash-slinging.qyqsxr4.mongodb.net/gamblingWebsite",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

app.use(express.json());

// This will log the request body for debugging
app.use((req, res, next) => {
  console.log("Request body:", req.body);
  next();
});

app.use("/api", userRoutes);

app.post("/auth/signin", authController.signIn);
app.post("/auth/signout", authController.signOut);

// Endpoint to get current balance
app.get("/api/balance", async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ balance: user.balance });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching balance", error: error.message });
  }
});

// Endpoint to update balance
app.post("/api/update-balance", async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.balance = req.body.balance;
    await user.save();
    res.json({ updatedBalance: user.balance });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating balance", error: error.message });
  }
});

app.use(errorController.notFound);
app.use(errorController.handleError);

const port = process.env.PORT || 5000;
app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error occurred starting the server:", err);
  });
