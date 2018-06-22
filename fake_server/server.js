console.log("Initialization...")
const path = require("path")
const db_path = path.join(__dirname, "database.json")
console.log(" -> Database path: " + db_path)
const db = require(db_path)
const json_server = require("json-server")
const server = json_server.create()
const middlewares = json_server.defaults()

console.log("Binding...")
server.use(json_server.bodyParser)
server.use(middlewares)

server.use( (req, res, next) => {
	var req_body = req.body
	var req_path = req._parsedUrl.path
	switch (req.method) {
		case 'POST':
				if (req_path == '/authentication') {	// login information
					var user = undefined

					// searching in registered users (professor or student)
					var users = db.authentication
					var found = false
					var idx = 0
					while ( (idx < users.length) && !(found) ) {
						user = users[idx]
						if (req_body.matriculation == user.matriculation) {
							if (req_body.password == user.password) {
								found = true
							}
						}
						idx = idx + 1
					}

					// taking the information of the user (return 404 if the research fails)
					if (found) {
						var reg_users = db[user['role']]
						for (var idx in reg_users) {
							var reg_user = reg_users[idx]
							if (reg_user.matriculation === user.matriculation) {
								res.jsonp( {'role': user['role'], 'user': reg_user} )
							}
						}
					} else { res.sendStatus(404) }
				} else {	// add new entity
						res.sendStatus(501)
				}
			break
		case 'GET':
			res.jsonp( {body: req_body} )
			break
		case 'DELETE':
			res.jsonp( {body: req_body} )
			break
		default:
			res.sendStatus(501)
	}
} )

server.listen(3000, () => { console.log('\nJSON Server is Running on http://localhost:3000') })

/*
  const router = json_server.router(db_path)

	if (req.method === 'GET' || req.method === 'POST') {
		console.log(req)
		res.jsonp({
			method: req.method,
			path: req._parsedUrl.path,
			query: req.query,
			body: req.body
		})
	}
	else { next() }

	server.use(router) */
