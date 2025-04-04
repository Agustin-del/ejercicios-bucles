const dateLimit = '1997-8-3'
const dates = ['1984-18-2', '1998-3-2', '1973-15-7', '2024-31-10', '2081-1-9']

for(let i = 0; i < dates.length; i++){
  if(dates[i] >= dateLimit) console.log(dates[i])
}
