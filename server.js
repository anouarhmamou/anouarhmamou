 const { resolveSoa } = require('dns')
const http = require('http')

  const server = http.createServer((req,res)=>{
    
    res.end()
  })

   server.listen(5000)