try {
  var conn = new Mongo();

  var db = conn.getDB("CengageDb");
  
  db.PlayersNames.update({"Name":"Kamran"}, {$set: {"Name":"Kamran"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Alex"}, {$set: {"Name":"Alex"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Josh"}, {$set: {"Name":"Josh"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Max"}, {$set: {"Name":"Max"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Roy"}, {$set: {"Name":"Roy"}}, {upsert:true});
  db.PlayersNames.update({"Name":"John"}, {$set: {"Name":"John"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Jane"}, {$set: {"Name":"Jane"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Adam"}, {$set: {"Name":"Adam"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Monty"}, {$set: {"Name":"Monty"}}, {upsert:true});
  db.PlayersNames.update({"Name":"David"}, {$set: {"Name":"David"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Bill"}, {$set: {"Name":"Bill"}}, {upsert:true});
  db.PlayersNames.update({"Name":"Steve"}, {$set: {"Name":"Steve"}}, {upsert:true});

  print('Created Players records');

  db.Verbs.update({"Verb":"arrivare"}, {$set: {"Verb":"arrivare"}}, {upsert:true});
  db.Verbs.update({"Verb":"andare"}, {$set: {"Verb":"andare"}}, {upsert:true});
  db.Verbs.update({"Verb":"uscire"}, {$set: {"Verb":"uscire"}}, {upsert:true});
  db.Verbs.update({"Verb":"entrare"}, {$set: {"Verb":"entrare"}}, {upsert:true});
  db.Verbs.update({"Verb":"venire"}, {$set: {"Verb":"venire"}}, {upsert:true});
  db.Verbs.update({"Verb":"essere"}, {$set: {"Verb":"essere"}}, {upsert:true});
  db.Verbs.update({"Verb":"diventare"}, {$set: {"Verb":"diventare"}}, {upsert:true});
  db.Verbs.update({"Verb":"partire"}, {$set: {"Verb":"partire"}}, {upsert:true});
  db.Verbs.update({"Verb":"stare"}, {$set: {"Verb":"stare"}}, {upsert:true});
  db.Verbs.update({"Verb":"scendere"}, {$set: {"Verb":"scendere"}}, {upsert:true});
  db.Verbs.update({"Verb":"salire"}, {$set: {"Verb":"salire"}}, {upsert:true});
  db.Verbs.update({"Verb":"tornare"}, {$set: {"Verb":"tornare"}}, {upsert:true});
  db.Verbs.update({"Verb":"nascere"}, {$set: {"Verb":"nascere"}}, {upsert:true});
  db.Verbs.update({"Verb":"morire"}, {$set: {"Verb":"morire"}}, {upsert:true});
  db.Verbs.update({"Verb":"rimanere"}, {$set: {"Verb":"rimanere"}}, {upsert:true}); 

  print('Created Verbs records');

  db.createCollection("PlayersScores");
   
  print('Created PlayersScores collection2');
} catch(err) {
  print(`Error occurred - ${err}`);
}