const express = require('express');
const session = require('express-session');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/details/:id', mainController.CardDetails);
router.get('/add/:id', mainController.addToDeck)
router.get('/delete/:id', mainController.deleteFromDeck)
router.get('/deck', mainController.displayDeck)
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.SearchedCards);
router.get('/search/level', searchController.SearchedCards);
router.get('/search/values', searchController.SearchedCards);
router.get('/search/name', searchController.SearchedCards);

module.exports = router;