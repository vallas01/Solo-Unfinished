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



module.exports = router;
