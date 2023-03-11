WHERE
What is the population of the US? (HINT: 278357000)
    SELECT name, population
    FROM country
    WHERE name = 'United States'

What is the area of the US? (HINT: 9.36352e+06)
    SELECT name, surfacearea
    FROM country
    WHERE name = 'United States'

Which countries gained their independence before 1963?
    SELECT name, indepyear
    FROM country
    WHERE indepyear < 1963

List the countries in Africa that have a population smaller than 30,000,000 and a life expectancy of more than 45? (HINT: 37 entries)

    SELECT name, population, lifeexpectancy
    FROM country
    WHERE population < 3e7
    AND lifeexpectancy > 45
    AND continent = 'Africa'

Which countries are something like a republic? (HINT: Are there 122 or 143?)

    SELECT name
    FROM country
    WHERE governmentform LIKE '%Republic'

Which countries are some kind of republic and achieved independence after 1945? (HINT: 92 entries)

    SELECT name
    FROM country
    WHERE governmentform LIKE '%Republic'
    AND indepyear > 1945

Which countries achieved independence after 1945 and are not some kind of republic? (HINT: 27 entries)

    SELECT name
    FROM country
    WHERE governmentform NOT LIKE '%Republic'
    AND indepyear > 1945

ORDER BY
Which fifteen countries have the lowest life expectancy? (HINT: starts with Zambia, ends with Sierra Leonne)

    SELECT name, lifeexpectancy
    FROM country
    ORDER BY lifeexpectancy
    LIMIT 15

Which fifteen countries have the highest life expectancy? (HINT: starts with Andorra, ends with Spain)

    SELECT name, lifeexpectancy
    FROM country
    WHERE lifeexpectancy IS NOT null
    ORDER BY lifeexpectancy DESC
    LIMIT 15

Which five countries have the lowest population density (density = population / surfacearea)? (HINT: starts with Greenland)

    SELECT name, population, surfacearea
    FROM country
    WHERE population != 0
    ORDER BY population / surfacearea
    LIMIT 5

Which countries have the highest population density?(HINT: starts with Macao)

    SELECT name, population, surfacearea
    FROM country
    WHERE population != 0
    ORDER BY population / surfacearea DESC
    LIMIT 5

Which is the smallest country by area? (HINT: .4)

    SELECT name, surfacearea
    FROM country
    WHERE population != 0
    ORDER BY surfacearea
    LIMIT 1

Which is the smallest country by population? (HINT: 50)?

    SELECT name, population
    FROM country
    WHERE population != 0
    ORDER BY population
    LIMIT 1

Which is the biggest country by area? (HINT: 1.70754e+07)

    SELECT name, surfacearea
    FROM country
    WHERE population != 0
    ORDER BY surfacearea DESC
    LIMIT 1

Which is the biggest country by population? (HINT: 1277558000)

    SELECT name, population
    FROM country
    WHERE population != 0
    ORDER BY population DESC
    LIMIT 1

Who is the most influential head of state measured by population? (HINT: Jiang Zemin)

    SELECT name, headofstate
    FROM country
    WHERE population != 0
    ORDER BY population DESC
    LIMIT 1

Subqueries: WITH
Of the countries with the top 10 gnp, which has the smallest population? (HINT: Canada)

    WITH populated_countries AS (
        SELECT name, population, gnp
        FROM country
        WHERE population > 0
        AND gnp > 0
        ORDER BY gnp DESC
        LIMIT 10
        )
    SELECT name, population, gnp
    FROM populated_countries
    ORDER BY population

Of the 10 least populated countries with permament residents (a non-zero population), which has the largest surfacearea? (HINT: Svalbard and Jan Mayen)

    WITH population_ten_lowest AS(
        SELECT name, population, surfacearea
        FROM country
        WHERE population > 0
        AND surfacearea > 0
        ORDER BY population
        LIMIT 10
    )
    SELECT name, population, surfacearea
    FROM population_ten_lowest
    ORDER BY surfacearea DESC
    LIMIT 1

Aggregate Functions: GROUP BY
Which region has the highest average gnp? (HINT: North America)

    SELECT region, AVG(gnp)
    FROM country
    WHERE gnp > 0
    GROUP BY region
    ORDER BY AVG(gnp) DESC
    LIMIT 1

Who is the most influential head of state measured by surface area? (HINT: Elisabeth II)

    SELECT headofstate, SUM(surfacearea)
    FROM country
    WHERE surfacearea > 0
    GROUP BY headofstate
    ORDER BY SUM(surfacearea) DESC
    LIMIT 1

What is the average life expectancy for all continents?

    SELECT continent, AVG(lifeexpectancy)
    FROM country
    WHERE lifeexpectancy > 0
    GROUP BY continent

What are the most common forms of government? (HINT: use count(*))

    SELECT governmentform, COUNT(governmentform)
    FROM country
    GROUP BY governmentform
    ORDER BY COUNT(governmentform) DESC

How many countries are in North America?

    SELECT continent, COUNT(continent)
    FROM country
    WHERE continent = 'North America'
    GROUP BY continent

What is the total population of all continents?

    SELECT continent, SUM(population)
    FROM country
    GROUP BY continent

Stretch Challenges
Which countries have the letter ‘z’ in the name? How many?

    SELECT name
    FROM country
    WHERE name LIKE '%z%'

Of the smallest 10 countries by area, which has the biggest gnp? (HINT: Macao)

    WITH country_area AS (
        SELECT name, surfacearea, gnp
        FROM country
        WHERE surfacearea > 0
        AND gnp > 0
        ORDER BY surfacearea
        LIMIT 10
    )
    SELECT name, gnp
    FROM country_area
    ORDER BY gnp DESC

Of the smallest 10 countries by population, which has the biggest per capita gnp?

    WITH country_pop AS (
        SELECT name, population, gnp
        FROM country
        WHERE population > 0
        AND gnp > 0
        ORDER BY population
        LIMIT 10
    )
    SELECT name, population, gnp
    FROM country_pop
    ORDER BY gnp / population DESC
    LIMIT 1

Of the biggest 10 countries by area, which has the biggest gnp?

    WITH cntry_area AS (
        SELECT name, surfacearea, gnp
        FROM country
        WHERE surfacearea > 0
        AND gnp > 0
        ORDER BY surfacearea DESC
        LIMIT 10
    )
    SELECT name, surfacearea, gnp
    FROM cntry_area
    ORDER BY gnp DESC
    LIMIT 1

Of the biggest 10 countries by population, which has the biggest per capita gnp?

    WITH cntry_pop AS (
        SELECT name, population, gnp
        FROM country
        WHERE population > 0
        AND gnp > 0
        ORDER BY population DESC
        LIMIT 10
    )
    SELECT name, population, gnp
    FROM cntry_pop
    ORDER BY gnp / population DESC
    LIMIT 1

What is the sum of surface area of the 10 biggest countries in the world? The 10 smallest?

    10 biggest:

    WITH big_area AS (
        SELECT name, surfacearea
        FROM country
        ORDER BY surfacearea DESC
        LIMIT 10
    )
    SELECT SUM(surfacearea) AS sum_area
    FROM big_area


    10 smallest:

    WITH small_area AS (
        SELECT name, surfacearea
        FROM country
        WHERE surfacearea > 0
        ORDER BY surfacearea
        LIMIT 10
    )
    SELECT SUM(surfacearea) AS sum_area
    FROM small_area

What year is this country database from? Cross reference various pieces of information to determine the age of this database.

2001-2002