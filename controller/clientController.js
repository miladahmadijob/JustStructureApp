/* eslint no-underscore-dangle: 0 */
let dotenv =require( 'dotenv');
let { Client } =require( 'pg');

dotenv.config();

class ClientController {
  constructor() {
    this._connectionString = process.env.DATABASE_URL;
    this._client = new Client({
      connectionString: this._connectionString,
    });
    this._client.connect()
      .then(() => console.log('Connection successful'))
      .catch(err => console.log(err.message));
  }
}

module.exports = ClientController;
