// Subject island stimuli file

const all_stimuli = [
  {
    "lexicalization": 1,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the announcer think the speech by would interrupt the big game?",
    "unique_id": 1011,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 1,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the speech by the corrupt politician would interrupt the big game?",
    "unique_id": 1012,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 1,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the announcer think would interrupt the big game?",
    "unique_id": 1013,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 1,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the corrupt politician would interrupt the big game?",
    "unique_id": 1014,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 1,
    "polarity": "base",
    "sentence": "The announcer thought the speech by the corrupt politician would interrupt the big game. Was the speech by the corrupt politician?",
    "unique_id": 1015,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 1,
    "polarity": "negated",
    "sentence": "The announcer didn’t think the speech by the corrupt politician would interrupt the big game. Was the speech by the corrupt politician?",
    "unique_id": 1016,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 2,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the critic think the movie by would win the Oscar for best picture?",
    "unique_id": 1021,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 2,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the movie by the controversial director would win the Oscar for best picture?",
    "unique_id": 1022,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 2,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the critic think would win the Oscar for best picture?",
    "unique_id": 1023,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 2,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the controversial director would win the Oscar for best picture?",
    "unique_id": 1024,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 2,
    "polarity": "base",
    "sentence": "The critic thought the movie by the controversial director would win the Oscar for best picture. Was the movie by the controversial director?",
    "unique_id": 1025,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 2,
    "polarity": "negated",
    "sentence": "The critic didn’t think the movie by the controversial director would win the Oscar for best picture. Was the movie by the controversial director?",
    "unique_id": 1026,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 3,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the nurse think the report by would modify the procedure?",
    "unique_id": 1031,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 3,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the report by the famous doctor would modify the procedure?",
    "unique_id": 1032,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 3,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the nurse think would modify the procedure?",
    "unique_id": 1033,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 3,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the famous doctor would modify the procedure?",
    "unique_id": 1034,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 3,
    "polarity": "base",
    "sentence": "The nurse thought the report by the famous doctor would modify the procedure. Was the report by the famous doctor?",
    "unique_id": 1035,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 3,
    "polarity": "negated",
    "sentence": "The nurse didn’t think the report by the famous doctor would modify the procedure. Was the report by the famous doctor?",
    "unique_id": 1036,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 4,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the dancer think the video by would promote the ballet company?",
    "unique_id": 1041,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 4,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the video by the YouTube influencer would promote the ballet company?",
    "unique_id": 1042,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 4,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the dancer think would promote the ballet company?",
    "unique_id": 1043,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 4,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the YouTube influencer would promote the ballet company?",
    "unique_id": 1044,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 4,
    "polarity": "base",
    "sentence": "The dancer thought the video by the YouTube influencer would promote the ballet company. Was the video by the YouTube influencer?",
    "unique_id": 1045,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 4,
    "polarity": "negated",
    "sentence": "The dancer didn’t think the video by the YouTube influencer would promote the ballet company. Was the video by the YouTube influencer?",
    "unique_id": 1046,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 5,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the journalist think the documentary by would influence public opinion?",
    "unique_id": 1051,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 5,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the documentary by the independent filmmaker would influence public opinion?",
    "unique_id": 1052,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 5,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the journalist think would influence public opinion?",
    "unique_id": 1053,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 5,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the independent filmmaker would influence public opinion?",
    "unique_id": 1054,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 5,
    "polarity": "base",
    "sentence": "The journalist thought the documentary by the independent filmmaker would influence public opinion. Was the documentary by the independent filmmaker?",
    "unique_id": 1055,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 5,
    "polarity": "negated",
    "sentence": "The journalist didn’t think the documentary by the independent filmmaker would influence public opinion. Was the documentary by the independent filmmaker?",
    "unique_id": 1056,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 6,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the coach think the strategy by would improve the team’s performance?",
    "unique_id": 1061,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 6,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the strategy by the new assistant would improve the team’s performance?",
    "unique_id": 1062,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 6,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the coach think would improve the team’s performance?",
    "unique_id": 1063,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 6,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the new assistant would improve the team’s performance?",
    "unique_id": 1064,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 6,
    "polarity": "base",
    "sentence": "The coach thought the strategy by the new assistant would improve the team’s performance. Was the strategy by the new assistant?",
    "unique_id": 1065,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 6,
    "polarity": "negated",
    "sentence": "The coach didn’t think the strategy by the new assistant would improve the team’s performance. Was the strategy by the new assistant?",
    "unique_id": 1066,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 7,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the investor think the proposal by would increase company profits?",
    "unique_id": 1071,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 7,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the proposal by the financial analyst would increase company profits?",
    "unique_id": 1072,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 7,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the investor think would increase company profits?",
    "unique_id": 1073,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 7,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the financial analyst would increase company profits?",
    "unique_id": 1074,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 7,
    "polarity": "base",
    "sentence": "The investor thought the proposal by the financial analyst would increase company profits. Was the proposal by the financial analyst?",
    "unique_id": 1075,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 7,
    "polarity": "negated",
    "sentence": "The investor didn’t think the proposal by the financial analyst would increase company profits. Was the proposal by the financial analyst?",
    "unique_id": 1076,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 8,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the editor think the article by would attract more readers?",
    "unique_id": 1081,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 8,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the article by the investigative reporter would attract more readers?",
    "unique_id": 1082,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 8,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the editor think would attract more readers?",
    "unique_id": 1083,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 8,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the investigative reporter would attract more readers?",
    "unique_id": 1084,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 8,
    "polarity": "base",
    "sentence": "The editor thought the article by the investigative reporter would attract more readers. Was the article by the investigative reporter?",
    "unique_id": 1085,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 8,
    "polarity": "negated",
    "sentence": "The editor didn’t think the article by the investigative reporter would attract more readers. Was the article by the investigative reporter?",
    "unique_id": 1086,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 9,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the chef think the recipe by would become internationally popular?",
    "unique_id": 1091,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 9,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the recipe by the culinary expert would become internationally popular?",
    "unique_id": 1092,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 9,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the chef think would become internationally popular?",
    "unique_id": 1093,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 9,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the culinary expert would become internationally popular?",
    "unique_id": 1094,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 9,
    "polarity": "base",
    "sentence": "The chef thought the recipe by the culinary expert would become internationally popular. Was the recipe by the culinary expert?",
    "unique_id": 1095,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 9,
    "polarity": "negated",
    "sentence": "The chef didn’t think the recipe by the culinary expert would become internationally popular. Was the recipe by the culinary expert?",
    "unique_id": 1096,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 10,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the architect think the design by would transform the city skyline?",
    "unique_id": 1101,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 10,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the design by the award-winning architect would transform the city skyline?",
    "unique_id": 1102,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 10,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the architect think would transform the city skyline?",
    "unique_id": 1103,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 10,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the award-winning architect would transform the city skyline?",
    "unique_id": 1104,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 10,
    "polarity": "base",
    "sentence": "The architect thought the design by the award-winning architect would transform the city skyline. Was the design by the award-winning architect?",
    "unique_id": 1105,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 10,
    "polarity": "negated",
    "sentence": "The architect didn’t think the design by the award-winning architect would transform the city skyline. Was the design by the award-winning architect?",
    "unique_id": 1106,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 11,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the publisher think the manuscript by would become a bestseller?",
    "unique_id": 1111,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 11,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the manuscript by the debut novelist would become a bestseller?",
    "unique_id": 1112,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 11,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the publisher think would become a bestseller?",
    "unique_id": 1113,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 11,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the debut novelist would become a bestseller?",
    "unique_id": 1114,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 11,
    "polarity": "base",
    "sentence": "The publisher thought the manuscript by the debut novelist would become a bestseller. Was the manuscript by the debut novelist?",
    "unique_id": 1115,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 11,
    "polarity": "negated",
    "sentence": "The publisher didn’t think the manuscript by the debut novelist would become a bestseller. Was the manuscript by the debut novelist?",
    "unique_id": 1116,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 12,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the engineer think the blueprint by would improve bridge stability?",
    "unique_id": 1121,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 12,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the blueprint by the structural consultant would improve bridge stability?",
    "unique_id": 1122,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 12,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the engineer think would improve bridge stability?",
    "unique_id": 1123,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 12,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the structural consultant would improve bridge stability?",
    "unique_id": 1124,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 12,
    "polarity": "base",
    "sentence": "The engineer thought the blueprint by the structural consultant would improve bridge stability. Was the blueprint by the structural consultant?",
    "unique_id": 1125,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 12,
    "polarity": "negated",
    "sentence": "The engineer didn’t think the blueprint by the structural consultant would improve bridge stability. Was the blueprint by the structural consultant?",
    "unique_id": 1126,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 13,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the judge think the testimony by would change the verdict?",
    "unique_id": 1131,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 13,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the testimony by the key eyewitness would change the verdict?",
    "unique_id": 1132,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 13,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the judge think would change the verdict?",
    "unique_id": 1133,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 13,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the key eyewitness would change the verdict?",
    "unique_id": 1134,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 13,
    "polarity": "base",
    "sentence": "The judge thought the testimony by the key eyewitness would change the verdict. Was the testimony by the key eyewitness?",
    "unique_id": 1135,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 13,
    "polarity": "negated",
    "sentence": "The judge didn’t think the testimony by the key eyewitness would change the verdict. Was the testimony by the key eyewitness?",
    "unique_id": 1136,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 14,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the programmer think the software update by would fix the security issue?",
    "unique_id": 1141,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 14,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the software update by the lead developer would fix the security issue?",
    "unique_id": 1142,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 14,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the programmer think would fix the security issue?",
    "unique_id": 1143,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 14,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the lead developer would fix the security issue?",
    "unique_id": 1144,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 14,
    "polarity": "base",
    "sentence": "The programmer thought the software update by the lead developer would fix the security issue. Was the software update by the lead developer?",
    "unique_id": 1145,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 14,
    "polarity": "negated",
    "sentence": "The programmer didn’t think the software update by the lead developer would fix the security issue. Was the software update by the lead developer?",
    "unique_id": 1146,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 15,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the historian think the discovery by would reshape ancient history?",
    "unique_id": 1151,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 15,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the discovery by the field archaeologist would reshape ancient history?",
    "unique_id": 1152,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 15,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the historian think would reshape ancient history?",
    "unique_id": 1153,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 15,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the field archaeologist would reshape ancient history?",
    "unique_id": 1154,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 15,
    "polarity": "base",
    "sentence": "The historian thought the discovery by the field archaeologist would reshape ancient history. Was the discovery by the field archaeologist?",
    "unique_id": 1155,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 15,
    "polarity": "negated",
    "sentence": "The historian didn’t think the discovery by the field archaeologist would reshape ancient history. Was the discovery by the field archaeologist?",
    "unique_id": 1156,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 16,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the pilot think the signal by would delay the departure?",
    "unique_id": 1161,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 16,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the signal by the air traffic controller would delay the departure?",
    "unique_id": 1162,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 16,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the pilot think would delay the departure?",
    "unique_id": 1163,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 16,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the signal by the air traffic controller would delay the departure?",
    "unique_id": 1164,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 16,
    "polarity": "base",
    "sentence": "The pilot thought the signal by the air traffic controller would delay the departure. Was the signal by the air traffic controller?",
    "unique_id": 1165,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 16,
    "polarity": "negated",
    "sentence": "The pilot didn’t think the signal by the air traffic controller would delay the departure. Was the signal by the air traffic controller?",
    "unique_id": 1166,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 17,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the mechanic think the repair by would extend the engine’s lifespan?",
    "unique_id": 1171,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 17,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the repair by the senior technician would extend the engine’s lifespan?",
    "unique_id": 1172,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 17,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the mechanic think would extend the engine’s lifespan?",
    "unique_id": 1173,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 17,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the senior technician would extend the engine’s lifespan?",
    "unique_id": 1174,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 17,
    "polarity": "base",
    "sentence": "The mechanic thought the repair by the senior technician would extend the engine’s lifespan. Was the repair by the senior technician?",
    "unique_id": 1175,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 17,
    "polarity": "negated",
    "sentence": "The mechanic didn’t think the repair by the senior technician would extend the engine’s lifespan. Was the repair by the senior technician?",
    "unique_id": 1176,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 18,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the zoologist think the study by would protect endangered species?",
    "unique_id": 1181,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 18,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the study by the conservation team would protect endangered species?",
    "unique_id": 1182,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 18,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the zoologist think would protect endangered species?",
    "unique_id": 1183,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 18,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the conservation team would protect endangered species?",
    "unique_id": 1184,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 18,
    "polarity": "base",
    "sentence": "The zoologist thought the study by the conservation team would protect endangered species. Was the study by the conservation team?",
    "unique_id": 1185,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 18,
    "polarity": "negated",
    "sentence": "The zoologist didn’t think the study by the conservation team would protect endangered species. Was the study by the conservation team?",
    "unique_id": 1186,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 19,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the translator think the revision by would clarify the contract terms?",
    "unique_id": 1191,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 19,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the revision by the legal expert would clarify the contract terms?",
    "unique_id": 1192,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 19,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the translator think would clarify the contract terms?",
    "unique_id": 1193,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 19,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the legal expert would clarify the contract terms?",
    "unique_id": 1194,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 19,
    "polarity": "base",
    "sentence": "The translator thought the revision by the legal expert would clarify the contract terms. Was the revision by the legal expert?",
    "unique_id": 1195,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 19,
    "polarity": "negated",
    "sentence": "The translator didn’t think the revision by the legal expert would clarify the contract terms. Was the revision by the legal expert?",
    "unique_id": 1196,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 20,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the principal think the training program by would improve student outcomes?",
    "unique_id": 1201,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 20,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the training program by the education specialist would improve student outcomes?",
    "unique_id": 1202,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 20,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the principal think would improve student outcomes?",
    "unique_id": 1203,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 20,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the education specialist would improve student outcomes?",
    "unique_id": 1204,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 20,
    "polarity": "base",
    "sentence": "The principal thought the training program by the education specialist would improve student outcomes. Was the training program by the education specialist?",
    "unique_id": 1205,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 20,
    "polarity": "negated",
    "sentence": "The principal didn’t think the training program by the education specialist would improve student outcomes. Was the training program by the education specialist?",
    "unique_id": 1206,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 21,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the landlord think the renovation by would raise the property value?",
    "unique_id": 1211,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 21,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the renovation by the construction manager would raise the property value?",
    "unique_id": 1212,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 21,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the landlord think would raise the property value?",
    "unique_id": 1213,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 21,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the construction manager would raise the property value?",
    "unique_id": 1214,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 21,
    "polarity": "base",
    "sentence": "The landlord thought the renovation by the construction manager would raise the property value. Was the renovation by the construction manager?",
    "unique_id": 1215,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 21,
    "polarity": "negated",
    "sentence": "The landlord didn’t think the renovation by the construction manager would raise the property value. Was the renovation by the construction manager?",
    "unique_id": 1216,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 22,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the hotel manager think the review by would increase reservations?",
    "unique_id": 1221,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 22,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the review by the travel blogger would increase reservations?",
    "unique_id": 1222,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 22,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the hotel manager think would increase reservations?",
    "unique_id": 1223,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 22,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the travel blogger would increase reservations?",
    "unique_id": 1224,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 22,
    "polarity": "base",
    "sentence": "The hotel manager thought the review by the travel blogger would increase reservations. Was the review by the travel blogger?",
    "unique_id": 1225,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 22,
    "polarity": "negated",
    "sentence": "The hotel manager didn’t think the review by the travel blogger would increase reservations. Was the review by the travel blogger?",
    "unique_id": 1226,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 23,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the museum director think the donation by would expand the exhibition space?",
    "unique_id": 1231,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 23,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the donation by the private collector would expand the exhibition space?",
    "unique_id": 1232,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 23,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the museum director think would expand the exhibition space?",
    "unique_id": 1233,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 23,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the private collector would expand the exhibition space?",
    "unique_id": 1234,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 23,
    "polarity": "base",
    "sentence": "The museum director thought the donation by the private collector would expand the exhibition space. Was the donation by the private collector?",
    "unique_id": 1235,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 23,
    "polarity": "negated",
    "sentence": "The museum director didn’t think the donation by the private collector would expand the exhibition space. Was the donation by the private collector?",
    "unique_id": 1236,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 24,
    "structure": "island",
    "dependency_length": "long",
    "sentence": "Who did the news anchor think the statement by would calm the public?",
    "unique_id": 1241,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 24,
    "structure": "island",
    "dependency_length": "short",
    "sentence": "Who thought the statement by the company spokesperson would calm the public?",
    "unique_id": 1242,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 24,
    "structure": "nonisland",
    "dependency_length": "long",
    "sentence": "Who did the news anchor think would calm the public?",
    "unique_id": 1243,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 24,
    "structure": "nonisland",
    "dependency_length": "short",
    "sentence": "Who thought the company spokesperson would calm the public?",
    "unique_id": 1244,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 24,
    "polarity": "base",
    "sentence": "The news anchor thought the statement by the company spokesperson would calm the public. Was the statement by the company spokesperson?",
    "unique_id": 1245,
    "item_type": "negation_test"
  },
  {
    "lexicalization": 24,
    "polarity": "negated",
    "sentence": "The news anchor didn’t think the statement by the company spokesperson would calm the public. Was the statement by the company spokesperson?",
    "unique_id": 1246,
    "item_type": "negation_test"
  },
  {
    "sentence": "What did Wendy bake for the party?",
    "unique_id": 2001,
    "item_type": "filler_good"
  },
  {
    "sentence": "Who did Liam invite to the picnic?",
    "unique_id": 2002,
    "item_type": "filler_good"
  },
  {
    "sentence": "Which book did Maya finish last night?",
    "unique_id": 2003,
    "item_type": "filler_good"
  },
  {
    "sentence": "Where did the children hide the treasure?",
    "unique_id": 2004,
    "item_type": "filler_good"
  },
  {
    "sentence": "What did the barista spill on the counter?",
    "unique_id": 2005,
    "item_type": "filler_good"
  },
  {
    "sentence": "Which picture did the curator hang in the gallery?",
    "unique_id": 2006,
    "item_type": "filler_good"
  },
  {
    "sentence": "Where did the neighbors see the comet last night?",
    "unique_id": 2007,
    "item_type": "filler_good"
  },
  {
    "sentence": "What did the mechanic replace in the engine?",
    "unique_id": 2008,
    "item_type": "filler_good"
  },
  {
    "sentence": "Which movie did Carla watch on Friday?",
    "unique_id": 2009,
    "item_type": "filler_good"
  },
  {
    "sentence": "Where did the hikers set up their tent?",
    "unique_id": 2010,
    "item_type": "filler_good"
  },
  {
    "sentence": "Whose jacket did Alex find in the library?",
    "unique_id": 2011,
    "item_type": "filler_good"
  },
  {
    "sentence": "Which song did the band play as an encore?",
    "unique_id": 2012,
    "item_type": "filler_good"
  },
  {
    "sentence": "When did the train leave the station?",
    "unique_id": 2013,
    "item_type": "filler_good"
  },
  {
    "sentence": "Which cookies did the baker put on the tray?",
    "unique_id": 2014,
    "item_type": "filler_good"
  },
  {
    "sentence": "Who did the coach choose as captain?",
    "unique_id": 2015,
    "item_type": "filler_good"
  },
  {
    "sentence": "What did the cat knock off the shelf?",
    "unique_id": 2016,
    "item_type": "filler_good"
  },
  {
    "sentence": "Who did the rumor that dancing liked nobody believe?",
    "unique_id": 2017,
    "item_type": "filler_bad"
  },
  {
    "sentence": "What the tourists taking photos were of shouting did confuse?",
    "unique_id": 2018,
    "item_type": "filler_bad"
  },
  {
    "sentence": "When the cat jumped that scared loudly the child was?",
    "unique_id": 2019,
    "item_type": "filler_bad"
  },
  {
    "sentence": "What did the neighbor that barking dog kept complain about nobody?",
    "unique_id": 2020,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Who the doctor that nervous looked yesterday treated did?",
    "unique_id": 2021,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Why did raining was when the kids outside played?",
    "unique_id": 2022,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Who did the chair that broken completely sat on the chair?",
    "unique_id": 2023,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Why the pilot said turbulence during was everyone panicking?",
    "unique_id": 2024,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Which restaurant the friends to last summer went closing is now did?",
    "unique_id": 2025,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Who the bride during crying was the ceremony guests smiling did?",
    "unique_id": 2026,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Where the suitcase that broken handle had left was did you?",
    "unique_id": 2027,
    "item_type": "filler_bad"
  },
  {
    "sentence": "What the letter that important very was mailed nobody did?",
    "unique_id": 2028,
    "item_type": "filler_bad"
  },
  {
    "sentence": "What did seem the girl that crying was in the hallway?",
    "unique_id": 2029,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Who the manager said forgot did the keys actually?",
    "unique_id": 2030,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Why the waiter spilled was everyone the coffee laughing?",
    "unique_id": 2031,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Which song that the band to rehearsed never finished was?",
    "unique_id": 2032,
    "item_type": "filler_bad"
  },
  {
    "polarity": "base",
    "sentence": "The student read the new history book in the library. Was there a new history book in the library?",
    "unique_id": 3001,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The student didn't read the new history book in the library. Was there a new history book in the library?",
    "unique_id": 3009,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "Emily bought fresh vegetables at the supermarket. Were there fresh vegetables at the supermarket?",
    "unique_id": 3002,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "Emily didn't buy fresh vegetables at the supermarket. Were there fresh vegetables at the supermarket?",
    "unique_id": 3010,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The librarian organized the new books on the shelf. Were there new books on the shelf?",
    "unique_id": 3003,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The librarian didn't organize the new books on the shelf. Were there new books on the shelf?",
    "unique_id": 3011,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "Anna watered the plants on the balcony. Were there plants on the balcony?",
    "unique_id": 3004,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "Anna didn't water the plants on the balcony. Were there plants on the balcony?",
    "unique_id": 3012,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The teacher posted the new schedule on the board. Was there a new schedule on the board?",
    "unique_id": 3005,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The teacher didn't post the new schedule on the board. Was there a new schedule on the board?",
    "unique_id": 3013,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The hikers caught the rare bird near the lake. Was there a rare bird near the lake?",
    "unique_id": 3006,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The hikers didn't catch the rare bird near the lake. Was there a rare bird near the lake?",
    "unique_id": 3014,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "Ben took pictures of the ancient statue. Was there an ancient statue?",
    "unique_id": 3007,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "Ben didn't take pictures of the ancient statue. Was there an ancient statue?",
    "unique_id": 3015,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The professor updated the lecture slides online. Were there lecture slides online?",
    "unique_id": 3008,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The professor didn't update the lecture slides online. Were there lecture slides online?",
    "unique_id": 3016,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The journalist reviewed the important documents in the office. Were there important documents in the office?",
    "unique_id": 3017,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The journalist didn't review the important documents in the office. Were there important documents in the office?",
    "unique_id": 3025,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The musician tuned the old piano in the practice hall. Was there an old piano in the practice hall?",
    "unique_id": 3018,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The musician didn't tune the old piano in the practice hall. Was there an old piano in the practice hall?",
    "unique_id": 3026,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The coach reserved the practice field for the team. Was there a practice field for the team?",
    "unique_id": 3019,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The coach didn't reserve the practice field for the team. Was there a practice field for the team?",
    "unique_id": 3027,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "Christine bought the heavy suitcase. Was there a heavy suitcase?",
    "unique_id": 3020,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "Christine didn't buy the heavy suitcase. Was there a heavy suitcase?",
    "unique_id": 3028,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "Maria polished the silver jewelry in the display case. Was there silver jewelry in the display case?",
    "unique_id": 3021,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "Maria didn't polish the silver jewelry in the display case. Was there silver jewelry in the display case?",
    "unique_id": 3029,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The assistant labeled the confidential folders in the archive. Were there confidential folders in the archive?",
    "unique_id": 3022,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The assistant didn't label the confidential folders in the archive. Were there confidential folders in the archive?",
    "unique_id": 3030,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "Frank found the missing wallet under the table. Was there a missing wallet under the table?",
    "unique_id": 3023,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "Frank didn't find the missing wallet under the table. Was there a missing wallet under the table?",
    "unique_id": 3031,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "base",
    "sentence": "The clerk sorted the returned packages at the counter. Were there returned packages at the counter?",
    "unique_id": 3024,
    "item_type": "filler_negation_test"
  },
  {
    "polarity": "negated",
    "sentence": "The clerk didn't sort the returned packages at the counter. Were there returned packages at the counter?",
    "unique_id": 3032,
    "item_type": "filler_negation_test"
  }
];

window.all_stimuli = [...all_stimuli];
