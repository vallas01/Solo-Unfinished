const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Marina, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for the marina.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid state'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a country.'),
    check('cost')
        .exists({ checkFalsy: true })
        .withMessage('Please provide slip cost.'),
    check('latitude')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the latitude.'),
    check('longitude')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the longitude.'),
    handleValidationErrors
];

// Get all the marinas
router.get('/', asyncHandler(async (req, res) => {
    const { token } = req.cookies;
    console.log(token);

    const business = await Marina.findAll({ order: [['id', 'ASC']] })

    return res.json({ marina })
})

)

router.post(
    '/',
    validateSignup, requireAuth,
    asyncHandler(async (req, res) => {
        const { name, state, country, cost, longitude, latitude, imagePath } = req.body;
        const marina = await Marina.create({ name, state, country, cost, longitude, latitude, imagePath });


        return res.json({ marina });
    }),
);

module.exports = router;
