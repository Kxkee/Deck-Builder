const dataMapper = require('../dataMapper.js');

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },
  async SearchedCards(req, res) {
    const data = req.query;
    if(data.element) {

      const elem = data.element;
      const card = await dataMapper.getCardByElem(elem);

    if(card) {
      res.locals.cards = card;
      res.locals.title = `Carte d'élement de type ${elem}`;
      res.render('searchedCards');
    }else {
      console.log('erreur');
    }
    } else if (data.level) {

      const level = data.level;
      const card = await dataMapper.getCardBylvl(level);

    if(card) {
      res.locals.cards = card;
      res.locals.title = `Voici les cartes de niveaux ${level}`;
      res.render('searchedCards');
    }else {
      console.log('erreur');
    }
    } else if (data.direction) {

      const direction = data.direction;
      const value = data.value;
      const card = await dataMapper.getCardByValue(direction, value);

    if(card) {
      res.locals.cards = card;
      res.locals.title = `Voici les cartes de direction ${direction} et de valeurs ${value}`;
      res.render('searchedCards');
    }
  } else if (data.name) {

    const name = data.name;
    const card = await dataMapper.getCardByName(name);

    if(card) {
      res.locals.cards = card;
      res.locals.title = `Carte contenant '${name}' dedans`;
      res.render('searchedCards');
    }else {
      console.log('erreur');
    }
  }
  }

};

module.exports = searchController;