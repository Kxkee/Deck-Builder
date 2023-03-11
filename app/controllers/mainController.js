const dataMapper = require('../dataMapper.js');
const { get } = require('../router.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  async CardDetails(req, res) {
    const id = req.params.id;

    const card = await dataMapper.getCardById(id);

    if(card) {
      res.locals.card = card;
      res.locals.title = 'Detail de la carte'
      res.render('cardDetails');
    }else {
      console.log('erreur');
    }
  },
  displayDeck(req, res) {
    res.locals.deck = req.session.deck;
    res.locals.title = 'Voici votre deck :'
    res.render('deck');
  },
  async addToDeck(req, res) {
    const id = req.params.id;
    res.locals.title = 'Voici votre deck :'
    if(req.session.deck){
      if(req.session.deck.length <5) {
        const card = await dataMapper.getCardById(id);
        const isAlreadyIn = req.session.deck.find(elem => elem.id == id)
      if(!isAlreadyIn) {
        req.session.deck.push(card);
      }
      }
    }else {
      const card = await dataMapper.getCardById(id);
      req.session.deck = [card];
      
    }
    res.locals.deck = req.session.deck;
    res.render('deck');
  },
  async deleteFromDeck(req, res) {
    res.locals.title ='Voici votre Deck :'

    req.session.deck = req.session.deck.filter(element => element.id != req.params.id);
      
      res.redirect("/deck");

  }
  
};

module.exports = mainController;
