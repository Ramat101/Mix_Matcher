/**
 * 
 *   LEGEND:
 *   
 *   + = match
 *   - = maybe
 *   x = no match
 * 
 *   MOCK DATA:
 * 
 *     0 1 2 3 4 5  
 *   0 x - x x x +
 *   1 + x - x + +
 *   2 + x x + x +
 *   3 + x + x - +
 *   4 + + x x x -
 *   5 + x x x x x 
 * 
 */

export const MOCK_EVENT_FEEDBACK_FORM = [
    {
       "Timestamp":"2023/07/25 1:53:38 PM AST",
       "Name (Optional)":"Name 0",
       "Email":"example@gmail.com",
       "What did you like about the event?":"",
       "How can we improve future events?":"",
       "Suggestions for future event themes?":"",
       "Comments?":"",
       "Name 0":"Not interested at this time" ,
       "Name 1":"Maybe",
       "Name 2":"Not interested at this time",
       "Name 3":"Not interested at this time",
       "Name 4":"Not interested at this time",
       "Name 5":"Interested"
    },
    {
       "Timestamp":"2023/07/25 1:55:10 PM AST",
       "Name (Optional)":"Name 3",
       "Email":"example@gmail.com",
       "What did you like about the event?":"",
       "How can we improve future events?":"",
       "Suggestions for future event themes?":"",
       "Comments?":"",
       "Name 0":"Interested",
       "Name 1":"Not interested at this time",
       "Name 2":"Interested",
       "Name 3":"Not interested at this time",
       "Name 4":"Maybe",
       "Name 5":"Interested"
    },
    {
       "Timestamp":"2023/07/25 1:55:55 PM AST",
       "Name (Optional)":"Name 4",
       "Email":"example@gmail.com",
       "What did you like about the event?":"",
       "How can we improve future events?":"",
       "Suggestions for future event themes?":"",
       "Comments?":"",
       "Name 0":"Interested",
       "Name 1":"Interested",
       "Name 2":"Not interested at this time",
       "Name 3":"Not interested at this time",
       "Name 4":"Not interested at this time",
       "Name 5":"Maybe"
    },
    {
       "Timestamp":"2023/07/25 1:56:22 PM AST",
       "Name (Optional)":"Name 5",
       "Email":"example@gmail.com",
       "What did you like about the event?":"",
       "How can we improve future events?":"",
       "Suggestions for future event themes?":"",
       "Comments?":"",
       "Name 0":"Interested",
       "Name 1":"Not interested at this time",
       "Name 2":"Not interested at this time",
       "Name 3":"Not interested at this time",
       "Name 4":"Not interested at this time",
       "Name 5":"Not interested at this time"
    },
    {
       "Timestamp":"2023/07/25 1:58:21 PM AST",
       "Name (Optional)":"Name 1",
       "Email":"example@gmail.com",
       "What did you like about the event?":"",
       "How can we improve future events?":"",
       "Suggestions for future event themes?":"",
       "Comments?":"",
       "Name 0":"Interested",
       "Name 1":"Not interested at this time",
       "Name 2":"Maybe",
       "Name 3":"Not interested at this time",
       "Name 4":"Interested",
       "Name 5":"Interested"
    },
    {
       "Timestamp":"2023/07/25 1:59:26 PM AST",
       "Name (Optional)":"Name 2",
       "Email":"example@gmail.com",
       "What did you like about the event?":"",
       "How can we improve future events?":"",
       "Suggestions for future event themes?":"",
       "Comments?":"",
       "Name 0":"Interested",
       "Name 1":"Not interested at this time",
       "Name 2":"Not interested at this time",
       "Name 3":"Interested",
       "Name 4":"Not interested at this time",
       "Name 5":"Interested"
    },
    {
       "Timestamp":"2023/07/25 4:05:48 PM AST",
       "Name (Optional)":"",
       "Email":"",
       "What did you like about the event?":"I didn't like it",
       "How can we improve future events?":"Quit",
       "Suggestions for future event themes?":"",
       "Comments?":"",
       "Name 0":"",
       "Name 1":"",
       "Name 2":"",
       "Name 3":"",
       "Name 4":"",
       "Name 5":""
    }
 ];

 export const MOCK_MATCHES = {
  "Name 0": {
    name: "Name 0",
    email: "example@gmail.com",
    Interested: ["Name 5"],
    Maybe: ["Name 3", "Name 4", "Name 1", "Name 2"],
  },
  "Name 3": {
    name: "Name 3",
    email: "example@gmail.com",
    Interested: ["Name 2"],
    Maybe: [],
  },
  "Name 4": {
    name: "Name 4",
    email: "example@gmail.com",
    Interested: ["Name 1"],
    Maybe: ["Name 3"],
  },
  "Name 5": {
    name: "Name 5",
    email: "example@gmail.com",
    Interested: ["Name 0"],
    Maybe: ["Name 4", "Name 3", "Name 1", "Name 2"],
  },
  "Name 1": {
    name: "Name 1",
    email: "example@gmail.com",
    Interested: ["Name 4"],
    Maybe: ["Name 0"],
  },
  "Name 2": {
    name: "Name 2",
    email: "example@gmail.com",
    Interested: ["Name 3"],
    Maybe: ["Name 1"],
  }
};

export const MOCK_RESULTS = [
   {
      "name": "Name 0",
      "email": "example@gmail.com",
      "Interested": ["Name 5"],
      "Maybe": ["Name 3", "Name 4", "Name 1", "Name 2"]
   },
   {
      "name": "Name 3",
      "email": "example@gmail.com",
      "Interested": ["Name 2"],
      "Maybe": []
   },
   {
      "name": "Name 4",
      "email": "example@gmail.com",
      "Interested": ["Name 1"],
      "Maybe": ["Name 3"]
   },
   {
      "name": "Name 5",
      "email": "example@gmail.com",
      "Interested": ["Name 0"],
      "Maybe": ["Name 4", "Name 3", "Name 1", "Name 2"]
   },
   {
      "name": "Name 1",
      "email": "example@gmail.com",
      "Interested": ["Name 4"],
      "Maybe": ["Name 0"]
   },
   {
      "name": "Name 2",
      "email": "example@gmail.com",
      "Interested": ["Name 3"],
      "Maybe": ["Name 1"]
   }
];
 