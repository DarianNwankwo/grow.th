const router = require("express").Router();


router.get("/", (req, res) => {
  res.json({
    message: "Grow.th API Version 1"
  })
})


module.exports = router;