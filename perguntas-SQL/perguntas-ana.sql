#Quais os anos que tiveram o maior número de lançamento de jogos na steam
USE steam;
	SELECT 
    COUNT(name) AS games_quantity,
    YEAR(release_date) AS release_year
FROM
    steam
GROUP BY YEAR(release_date)
ORDER BY games_quantity DESC

#Seleção dos jogos mais bem avaliados lançados em 2013, que foi o ano que houveram mais lançamentos de jogos:
use steam
SELECT 
    name, release_date, positive_ratings
FROM
    steam
WHERE
    release_date LIKE '2013%'
ORDER BY positive_ratings DESC