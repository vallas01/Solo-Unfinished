const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');

const router = express.Router();


//get all marinas
router.get('/', asyncHandler(async function(req, res) {
    const businesses = await Business.findAll();
    return res.json(businesses);
}));

// create a marina
router.post('/', asyncHandler(async function(req, res) {
    const newMarina = await Business.create(req.body);
    console.log('***********BACKEND POST AFTER ADD TO DB************',newMarina);
    return res.json(newMarina)
    // return res.redirect(`/api/marinas/${newMarina.id}`)
}));


module.exports = router;
