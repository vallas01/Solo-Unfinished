const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');

const router = express.Router();

const validateMarinaForm = [
    check('name')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 4})
      .withMessage('Please provide a longer name.'),
    check('state')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 4})
      .withMessage('Please provide a full state name.'),
    handleValidationErrors,
  ];

//get all marinas
router.get('/', asyncHandler(async function(req, res) {
    const businesses = await Business.findAll();
    return res.json(businesses);
}));

// create a marina
router.post('/', validateMarinaForm, asyncHandler(async function(req, res) {
    const newMarina = await Business.create(req.body);
    return res.json(newMarina)
}));

//edit a marina
router.put('/:id(\\d+)', asyncHandler(async function(req, res) {

    const marinaToEdit = await Business.findByPk(req.params.id);

    const {cost}   = req.body
    await marinaToEdit.update({
        cost,
    });
    const idMarina = req.params.id
    const editedMarina = await Business.findByPk(idMarina);

    res.json(editedMarina);
}));

//delete a marina
router.delete('/:id(\\d+)', asyncHandler(async function(req, res) {

    const marina = await Business.findByPk(req.params.id)
    await marina.destroy();
    // const allMarinas = await Business.findAll();
    return res.json(req.params.id)
}));


module.exports = router;
