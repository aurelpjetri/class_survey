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
	var req_path = req._parsedUrl.pathname
	var req_query = req.query

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

				// taking the information of the user (return 404 if the previous research is failed)
				if (found) {
					var reg_users = db[user['role']]
					for (var idx in reg_users) {
						var reg_user = reg_users[idx]
						if (reg_user.matriculation === user.matriculation) {
							delete reg_user.templates	//if templates does not exists this operation is useless
							res.jsonp( {'role': user['role'], 'user': reg_user} )
						}
					}
				} else { res.sendStatus(403) }
			} else {	// add new entity
				res.sendStatus(200)
			}
		 	break
		case 'GET':
			switch (req_path) {
				case '/template':
				var found = false
				var professors = db.professors
				for (var idx in professors) {
					var prof = professors[idx]
					if (prof.matriculation == req_query.matriculation) {
						res.jsonp( prof.templates )
						found = true
						break
					}
				}
				if (!found) { res.sendStatus(404) }
				break
				case '/course':
					var found = false
					var courses = db.course
					for (var idx in courses) {
						var course = courses[idx]
						if (course.code == req_query.code) {
							res.jsonp( course )
							found = true
							break
						}
					}
					if (!found) { res.sendStatus(404) }
					break
				case '/questionnaire':
					var found = false
					var questionnaires = db.questionnaire
					for (var idx in questionnaires) {
						var questionnaire = questionnaires[idx]
						if (questionnaire.code == req_query.id) {
							res.jsonp( questionnaires )
							found = true
							break
						}
					}
					if (!found) { res.sendStatus(404) }
					break
				case '/questionnaire/question':
					var found = false
					var questions = db[req_query.type+'_question']
					for (var idx in questions) {
						var question = questions[idx]
						if (question.id == req_query.id) {
							res.jsonp( question )
							found = true
							break
						}
					}
					if (!found) { res.sendStatus(404) }
					break
				case '/questionnaire/question/answer':
					var found = false
					var answers = db.answer
					for (var idx in answers) {
						var answer = answers[idx]
						if (answer.questionnaireID == req_query.questionnaire) {
							if (answer.number_of_the_question == req_query.number) {
								res.jsonp( answer )
								found = true
								break
							}
						}
					}
					if (!found) { res.sendStatus(404) }
					break
				default:
					res.sendStatus(400)
			}
			break
		case 'DELETE':
			if (req_path == '/template') {
				var status = 2
				var templates = db.template
				for (var idx in templates) {
					var template = templates[idx]
					if (template.id == req_query.id) {
						if (template.creator == req_query.professor) {
							templates.splice(idx, 1)
							res.jsonp( template )
							status = 0
						}
						else { status = 1 }
						break
					}
				}
				if (status == 2) {
					res.sendStatus(404)
				}
				else { if (status == 1) { res.sendStatus(403) } }
			} else { sendStatus(400) }
			break
		default:
			res.sendStatus(501)
	}
} )

server.listen(3000, () => { console.log('\nJSON Server is Running on http://localhost:3000') })

/*
	method: req.method,
	path: req._parsedUrl.path,
	query: req.query,
	body: req.body
*/
