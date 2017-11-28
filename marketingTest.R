### Marketing Test to automate spreadsheets

# setwd("~/Documents/FLAGCX/Projects/Automation/marketing_test")
library('gdata')
library('plyr')
library('reshape')
library('ggplot2')

data_mkt1 <- read.xls("MarketingData.xlsx", header = T, sheet = 1)

data_mkt2 <- read.xls("WA_Fn-UseC_-Marketing-Campaign-Eff-UseC_-FastF.xlsx", header = T, sheet = 1)

# Test deployment

data_mkt3 <- read.csv("WA_Retail-SalesMarketing_-ProfitCost.csv")
data_mkt3 <- na.omit(data_mkt3)
data_mkt3Brazil <- subset(data_mkt3, Year >= 2004 & Retailer.country == 'Brazil')

summary(data_mkt3Brazil$Product.line)
summary(data_mkt3Brazil$Year)

# Setting a new dataframe (year and revenue) and some exploratory analysis

df1 <- data_mkt3Brazil[, c("Year", "Revenue")]
df1 <- na.omit(df1)

x <- unique(df1$Year);

y <- with(df1, tapply(df1$Revenue, list(df1$Year), FUN = sum))

A <- matrix(c(x, y), nrow = 4, ncol = 2)

mydf1 <- as.data.frame(matrix(c(x, y), nrow = 4, ncol = 2))
colnames(mydf1)[1] <- 'Year'
colnames(mydf1)[2] <- 'Revenue'

mydf2 <- table(mydf1$Year, mydf1$Revenue)
barplot(mydf2, main = "Revenue by year", xlab = "Years", ylab = "Revenue", col = c("darkblue", "green", "red", "orange"))

mydf3 <- as.data.frame(mydf2)

ggplot(mydf1, aes(Year, Revenue/1000000)) + geom_bar(stat = "identity", position = "dodge", fill = c("darkgreen", "darkred", "darkblue", "darkorange"))

ggplot(mydf1, aes(Year, Revenue/1000000)) + 
  geom_line(colour = c("darkgreen", "darkred", "darkblue", "darkorange"), size = 1.5) +
  geom_point(colour = "gray", size = 4, shape = 21, fill = "white")

ggplot(mydf1, aes(Year, Revenue/1000000)) + 
  geom_line(colour = "darkgray", linetype = "dashed", size = 1.0) +
  geom_point(colour = "gray", size = 4, shape = 21, fill = "white")

plot(mydf1)
summary(mydf1)

library(googlesheets)
library(dplyr)

# to connect to Google spreadsheets and authenticate
gs_ls()

# to consume data from a spreadsheet or edit it, you must first register it

marketingTest <- gs_title("marketingTest")

# to upload an existing worksheet (mydf1) into
# an existing spreadsheet (marketingTest) creating a new worksheet

marketingTest <- marketingTest %>%
  gs_ws_new(ws_title = "revenue per year", input = mydf1,
            trim = TRUE, verbose = TRUE)

marketingTest <- marketingTest %>%
  gs_ws_new(ws_title = "revenue Brazil", input = df1,
            trim = TRUE, verbose = TRUE)

marketingTest <- marketingTest %>%
  gs_ws_new(ws_title = "data marketing 1", input = data_mkt1,
            trim = TRUE, verbose = TRUE)

marketingTest <- marketingTest %>% 
  gs_ws_new(ws_title = "data marketing 3", input = data_mkt3,
            trim = TRUE, verbose = TRUE)

marketingTest <- marketingTest %>%
  gs_ws_new(ws_title = "data marketin 3 Brazil", input = data_mkt3Brazil,
            trim = TRUE, verbose = TRUE)

# delete worksheet

marketingTest <- marketingTest %>%
  gs_ws_delete(ws = "revenue per year", verbose = TRUE)

marketingTest <- marketingTest %>%
  gs_ws_delete(ws = "revenue Brazil", verbose = TRUE)

marketingTest <- marketingTest %>%
  gs_ws_delete(ws = "data marketing 3", verbose = TRUE)

