
var burger = require("../models/burger.js");
var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index", burgersObj);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;
    console.log("id", id);
    burger.updateOne(id, function () {
      //  res.redirect("/");
    });
});

module.exports = router;