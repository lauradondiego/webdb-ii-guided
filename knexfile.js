// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3", // this is in your package.json
    useNullAsDefault: true, // used for sqlite
    connection: {
      // an object or a string
      filename: "./data/produce.db3" // from the root folder, not from here. so only 1 dot
    }
  }
};
