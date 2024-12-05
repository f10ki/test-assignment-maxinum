<h1>test-assignment-maxinum<h1>
<p>My test assignment for the company MC. </p>
<p>Напишите простую форму ввода расходов. Таблица transactions: id, dateTime, sum, category, comment.
Форма: Дата (календарь), Сумма, Категория (из списка, любые пару-тройку вариантов можете накидать), Комментарий
React, Express, Nest, SQL.</p>

<h2>Install<h2>

<p>2. Install PostgreSQL. Create table transactions:</p>
<code>
  CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  sum NUMERIC(10,2) NOT NULL,
  category VARCHAR(50) NOT NULL,
  comment TEXT
);
</code>

<h2>Stack<h2>
<p>Client: react - js, tailwindcss axios</p>
<p>Server: express, cors, axios, pg, dotenv </p>
<p>DB: postgressql</p>
