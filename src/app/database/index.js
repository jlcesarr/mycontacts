import pg from 'pg';
import dotenv from "dotenv"

if(process.env.NODE_ENV != "production"){
  dotenv.config();
}

const client = new pg.Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

client.connect()
.then(() => console.log("Database is ready!"))
.catch(() => {
  console.log("Database connection failed! Exiting process...")
  process.exit()
});

export async function execQuery(query, values) {

  const { rows } = await client.query(query, values);
  return rows;
}
