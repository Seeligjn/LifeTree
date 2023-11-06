import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

app.use(express.json());

app.get("/api/test", (req, res) => {
  sql`SELECT * FROM test`.then((rows) => {
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
