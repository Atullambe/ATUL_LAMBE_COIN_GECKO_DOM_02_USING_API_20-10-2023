
// const get_api=
async function main(){
    await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false") 
    .then (response => response.json())
    .then(dataJason => {console.log(dataJason);
        dataJason.map(async row =>{ 
           await console.log(row);
            console.log(row.name);
            console.log(row.id);
            // document.querySelector("#userInfo").insertAdjacentHTML(`beforeend`,name)
            const percentage=(Math.round(row.high_24h-row.low_24h-row.price_change_percentage_24h)/100);
            console.log(percentage);
        const change= percentage <=-0 ? "negative":"positive"
    
    
       
             document.querySelector("#table1").innerHTML += `
                <tr>
                  <td>
                    <img src="${row.image}" alt="${row.name}" style="width: 20px; height: 20px; vertical-align: middle; margin-right:10px;">
                    ${row.id}
                  </td>
                  <td>${row.symbol}</td>
                  <td>$${row.current_price}</td>
                  <td>$${row.circulating_supply}</td>
                  <td class=${change}>${percentage}%</td>
                  <td>MKT cap:$${row.total_volume}</td>
                </tr>
              `;
            
    
        })
        
    
    }
    )
    .catch(error => console.log(error))
    
    }
    main();
    
      