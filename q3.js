const channels = [ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ]
  
  
      const ans = channels.reduce(function(acc,curr){
          acc[curr.channel] = acc[curr.channel] || [ ];
          acc[curr.channel].push(curr);
          return acc;
      },{});
      console.log(ans)