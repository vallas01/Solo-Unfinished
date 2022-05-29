const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Marina, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


// Get all the marinas
router.get('/', asyncHandler(async function(req, res) {
    const marinas = await Marina.findAll();
    console.log(`res.data: ${res.data}`)
    return res.json(marinas)
}));


// const validateSignup = [
    //     check('name')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a name for the marina.'),
//     check('state')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a valid state'),
//     check('country')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a country.'),
//     check('cost')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide slip cost.'),
//     check('latitude')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide the latitude.'),
//     check('longitude')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide the longitude.'),
//     handleValidationErrors
// ];





module.exports = router;
