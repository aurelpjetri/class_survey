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
					var found = false
					possible_user = ['professor', 'student']
					var idx = 0
					while ( (idx < possible_user.length) && !(found) ) {
						users = db[possible_user[idx]]
						if (users != undefined) {
							for (var usr_idx in users) {
								user = users[usr_idx]
								if (req_body.matriculation == user.matriculation) {
									if (req_body.password == user.password) {
										res.jsonp( {'user': user} )
										found = true; break;
									}
								}
							}
						}
						idx = idx + 1
					}
					if (!found) { res.sendStatus(404) }
				} else {	// add new entity

				}
			break
		case 'GET':
			res.jsonp( {body: req_body} )
			break
		case 'DELETE':
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
