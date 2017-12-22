# setwd("~/Documents/FLAGCX/Projects/Automation/Laura")

library("rvest")

# Example using IMDB
it_movie <- html("http://www.imdb.com/title/tt1396484/")

# Rating
it_movie %>%
  html_node("strong span") %>%
  html_text() %>%
  as.numeric()

# Cast
it_movie %>%
  html_nodes("#titleCast table.cast_list span") %>%
  html_text()

# Get table
it_movie %>%
  html_nodes("table") %>%
  .[[2]] %>%
  html_table()

it_movie %>%
  html_nodes('#titleStoryLine div.inline.canwrap span') %>%
  html_text()

# Specifying the url for desired website to be scrapped
url <- 'https://en.wikipedia.org/wiki/It_(2017_film)'

# Reading the HTML code from the website
webpage_wiki <- read_html(url)

webpage_wiki %>%
  html_nodes('#bodyContent #mw-content-text div.mw-parser-output span') %>%
  html_text()

data_html <- html_nodes(webpage_wiki, '#bodyContent.mw-content-text span')

rank_data_html <- html_nodes(webpage,'.text-primary')

lapply(paste0('https://en.wikipedia.org/wiki/', 1920:2015, '_NFL_season'), 
       function(url){ 
         url %>% read_html() %>% 
           html_nodes(xpath = '//span[contains(@id, "tandings")]/following::*[@title="Winning percentage" or text()="PCT"]/ancestor::table') %>% 
           html_table(fill = TRUE)
       })

