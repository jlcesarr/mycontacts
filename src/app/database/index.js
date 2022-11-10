import pg from 'pg';

const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

export async function execQuery(query, values) {
  const { rows } = await client.query(query, values);
  return rows;
}
