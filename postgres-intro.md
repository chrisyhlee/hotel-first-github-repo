# Intro to Databases and Postgresql

```ruby
class Student
    def initialize(name, cohort)
        @name = name
        @cohort = cohort
    end
end

Student.new('Chris', 'Hotel')
Student.new('Heath', 'Foxtrot')
Student.new('Nicole', 'Delta')
```

## Databases
    - way of storing data in an organized way
    - Postgres is a Relational database
        - rows and columns
    - schema : representation of the database layout

PK : Primary key
 - ID of each 'row' in database
 - each 'row' is an instance; each instance has a PK
 - usually a number in Rails

Model : defines the columns and types of data stored (like a class)
    - each row is a set of information (instance of class; object)

## Postgresql

- domain specific
- talks to databases
- open source
- Object-Relational Database Management System
    - OOP approach to programming

$ psql
    - get into psql in terminal
$ \l
    - lists all databases on your local

pgAdmin4
- Query Tool
    - input
    - SELECT * FROM country
    - SELECT name, continent FROM country
    - SELECT name, continent, population FROM country LIMIT 10
    - SELECT name, continent, population FROM country WHERE continent = 'North America'
    - SELECT name, continent, population FROM country WHERE continent != 'Asia' OR population < 1e6
    - SELECT name, continent, population
      FROM country
      WHERE continent LIKE '%America'
      
- Data Output
    - output