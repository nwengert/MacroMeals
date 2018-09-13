const express = require('express');
const mealsRouter = express.Router();
const Meal = require("../models/meals.js");

mealsRouter.route("/")
    .get((req, res) => {
        console.log(req.query);

        // delete req.query.intent
        delete req.query.type
        delete req.query.prep

        Meal.find(req.query, (err, meals) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(meals);
        })
    })
    .post((req, res) => {
        const newMeal = new Meal(req.body);
        console.log("hey")
        console.log(newMeal);
        newMeal.save((err, savedMeal) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(savedMeal);
        })
    })
mealsRouter.route("/:id")
    .get((req, res) => {
        Meal.findById(req.params.id, (err, foundMeal) => {
            if (err) res.status(500).send(err);
            return res.status(foundMeal);
        })
    })
    .delete((req, res) => {
        Meal.findByIdAndRemove(req.params.id, (err, removedMeal) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Meal successfully deleted",
                id: removedMeal.id
            }
            return res.status(204).send(removedMeal);
        })
    })
    .put((req, res) => {
        Meal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateMeal) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(updateMeal);
        })
    })
module.exports = mealsRouter;