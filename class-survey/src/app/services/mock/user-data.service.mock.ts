export class UserDataMockProf {
  getData(): any{
    return {  "matriculation": "PROF000",
        			"name": "Mario Rossi",
        			"courses": [
        				"COUR000"
        			],
        			"templates": [
        				"TEMP000"
        			]
        		}
  }

}

export class UserDataMockStud {
  getData(): any{
    return {
			"matriculation": "STUD002",
			"name": "NOME COGNOME",
			"questionnaires": [	]
		}
  }
}
