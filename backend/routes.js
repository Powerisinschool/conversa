const express = require('express');
const router = express.Router();

// Middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
})

// Routes
router.get('/', (req, res) => {
	console.log('GET /');
	res.json({ message: 'Hello, World!' });
});

router.get('/register', (req, res) => {
	// console.log('POST /register');
	// console.log(req.body);

	if (!req.body || !req.body.username || !req.body.password) {
		console.log("Some parameters are missing");
		console.log("Expected:");
		console.log(`{\n	username: "exampleuser",\n	password: "secretpassword",\n}`);
	}

	res.json({
		message: `User, ${req.body.username} registered successfully!`,
		user: {
			id: "user-id",
			username: `${req.body.username}`
		}
	});
})

module.exports = router;