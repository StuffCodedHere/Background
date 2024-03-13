const express = require("express")
const http = require("http")
const path = require("path")

const app = express()
const server = http.createServer(app)

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")))

// Handle incoming requests to change the background color
app.post("/Background", (req, res) => {
 // Implement your logic here to change the background color
 // This is where you'll update the background color for all users
 // For now, let's just send a success response
 res.sendStatus(200)
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`)
})
