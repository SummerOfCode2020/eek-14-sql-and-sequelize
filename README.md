# SQL and Sequelize

We have a set of JS files and SQL files that are meant to serve as a reference for SQL and Sequelize.

## What do we want to know SQL and Sequelize

SQL is ...

- is a generic term for structured databases.
- different than SoL
- the language of database communication

See these resources

- <https://www.w3schools.com/sql/>
- <https://www.w3schools.com/sql/sql_ref_keywords.asp>

Sequelize is not just one thing. Sequelize is ...

- the name of a node module
- also a command line tool, aka "CLI"

There are two related tools by the same name. Each has unique functionality and they work together.

## Sequelize is a node module for ORM or Object-relational Mapping

Used to map JS Objects to SQL Tables and SQL

See ...

- <https://github.com/sequelize/sequelize>
- <https://en.wikipedia.org/wiki/Object-relational_mapping>

The ORM can be used in two cases ...

- In the case that you are starting a project from scratch, including your database, Sequelize can be used to automate the creation of every table in your database in place of using SQL or a GUI.

- In the case that you will use Sequelize to connect to an existing database with tables and data, that works as well!

Sequelize ORM has got you covered in both cases.

## Sequelize CLI command line interface

Used to execute JS formatted schema migrations from the terminal in the case that you are using the CLI to manage your tables and database structure.

See ...

- <https://en.wikipedia.org/wiki/Schema_migration>
- <https://github.com/sequelize/cli>
- <https://en.wikipedia.org/wiki/Command-line_interface>

We will cover migrations in the migrations repo for sake of keeping code samples focused.
