const fs = require("fs");

const initializeSQL = async (sql) => {
  const createTablesPath = "transactions/Initialization/CreateTables.sql";
  const seedTablesPath = "transactions/Initialization/SeedTables.sql";

  const createTables = fs.readFileSync(createTablesPath, "utf-8");
  console.log("Creating tables");
  await sql.unsafe(createTables);
  console.log("Tables created");
  console.log("Seeding tables");
  const seedTables = fs.readFileSync(seedTablesPath, "utf-8");
  await sql.unsafe(seedTables);
  console.log("Tables seeded");
};

module.exports = { initializeSQL };
