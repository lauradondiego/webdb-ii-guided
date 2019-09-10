exports.up = function(knex) {
  // create a table called fruits
  return knex.schema.createTable("fruits", tbl => {
    // this is a table called fruits
    // id column, primary key, autoincrement, integer
    tbl.increments();
    // name column: string up to 128, unique, required
    //the column is called name, 128 chars is optional here, it will be unique, and cant be null
    tbl.string("name", 128).unique().notNullable;
    // avgWeightOz column, decimal places
    tbl.decimal("avgWeightOz");
    // delicious: boolean
    tbl.boolean("delicious");
  });
};
// check the knex link he sent under schema for help with calling tbl methods
// [brackets] mean optional in the link

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits");
  // to revert changes
};
