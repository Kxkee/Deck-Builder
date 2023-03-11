const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },
  async getCardById(id) {
    let result;
    const sqlQuery = 'SELECT * FROM card WHERE id=$1';

    const values = [id];
    try {
      const response = await database.query(sqlQuery,values);

      if(response.rowCount == 1) {
        result = response.rows[0];
      }
    }catch(err) {
      console.log(err);
    }
    return result;
  },
  async getCardByElem(element) {
    let result;
    const sqlQuery = 'SELECT * FROM card WHERE element=$1';

    const values = [element];
    try {
      const response = await database.query(sqlQuery, values);
        result = response.rows;

    }catch(err) {
      console.log(err);
    }
    return result;
  },
  async getCardBylvl(lvl) {
    let result;
    const sqlQuery = 'SELECT * FROM card WHERE level=$1';

    const values = [lvl];
    try {
      const response = await database.query(sqlQuery, values);
        result = response.rows;

    }catch(err) {
      console.log(err);
    }
    return result;
  },
  async getCardByValue(direction, val) {
    let result;
    const value = `value_${direction}`;
    const sqlQuery = `SELECT * FROM card WHERE ${value} >= $1`;

    const values = [val];
    try {
      const response = await database.query(sqlQuery, values);
        result = response.rows;

    }catch(err) {
      console.log(err);
    }
    return result;
  },
  async getCardByName(name) {
    let result;
    const sqlQuery = `SELECT * FROM card WHERE name LIKE '%${name}%' `;

    try {
      const response = await database.query(sqlQuery);
        result = response.rows;

    }catch(err) {
      console.log(err);
    }
    return result;
  }
};


module.exports = dataMapper;
