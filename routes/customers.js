const express = require("express");

const router = express.Router();

const Customers = require("../models/customer");



//test
router.get("/test", (req, res) => res.send("Customer routes working"));

router.post("/", (req, res) => {
    Customers.create(req.body)
        .then(() => res.json({ msg: "Customer added successfully" }))
        .catch(() => res.status(400).json({ msg: "Custommer adding failed" }));
});

router.get("/", (req, res) => {

    Customers.find()
        .then((customers) => res.json(customers))
        .catch(() => rex.status(400).json({ msg: "No employee" }));
});

router.get("/:id", (req, res) => {
    Customers.findById(req.params.id)
        .then((customers) => res.json(customers))
        .catch(() => res.status(400).json({ msg: "cannot find this customer" }))
});

router.put("/:id", (req, res) => {
    Customers.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json({ msg: "Update successfully" }))
        .catch(() => res.status(400).json({ msg: "Update fail" }))
        ;
});

router.delete("/:id", (req, res) => {
    Customers.findByIdAndDelete(req.params.id).then(() =>
        res
            .json({ msg: "Delete successfully" }))
            .catch(() => res.status(400).json({ msg: "Delete fail" }));
});

module.exports = router;