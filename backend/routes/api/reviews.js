const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');

const router = express.Router();


//get all reviews
router.get('/', asyncHandler(async function(req, res) {
    const reviews = await Review.findAll();
    return res.json(reviews);
}));

// create a review
router.post('/', asyncHandler(async function(req, res) {
    const newReview = await Review.create(req.body);
    return res.json(newReview);
}));

//edit a review
router.put('/:id(\\d+)', asyncHandler(async function(req, res) {

    const reviewToEdit = await Review.findByPk(req.params.id);

    const {rating}   = req.body
    await reviewToEdit.update({
        rating,
    });
    const idReview = req.params.id
    const editedMarina = await Review.findByPk(idReview);

    res.json(editedMarina);
}));

//delete a review
router.delete('/:id(\\d+)', asyncHandler(async function(req, res) {

    const review = await Review.findByPk(req.params.id)
    await review.destroy();
    // const allMarinas = await Business.findAll();
    return res.json(req.params.id)
}));


module.exports = router;
