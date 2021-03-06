define({ "api": [
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetingplanner/allUsers",
    "title": "to  get all users.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                    {\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-08-03T02:53:20.000Z\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 8985835946,\n            \"email\": \"manojprabhakar675@gmail.com\",\n            \"lastName\": \"prabhakar\",\n            \"firstName\": \"manoj\",\n            \"userId\": \"DzYMlk2Fh\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "MeetingPlanner",
    "name": "GetApiV1MeetingplannerAllusers"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetingplanner/getAllMeetings/:userId/:adminId",
    "title": "api for  getAllMeetings.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminId",
            "description": "<p>adminId of the admin. (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"modifiedOn\": \"2018-08-15T04:14:01.000Z\",\n            \"createdOn\": \"2018-08-15T04:14:01.000Z\",\n            \"adminId\": \"4sk6CVnFY\",\n            \"adminName\": \"Manoj Meeting Admin\",\n            \"purpose\": \"check meeting\",\n            \"time\": \"12\",\n            \"place\": \"Nellore\",\n            \"userId\": \"DzYMlk2Fh\",\n            \"meetingId\": \"X_sLSPCVc\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/planner.js",
    "groupTitle": "MeetingPlanner",
    "name": "GetApiV1MeetingplannerGetallmeetingsUseridAdminid"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetingplanner/createMeeting",
    "title": "api for  createMeeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminId",
            "description": "<p>adminId of the admin. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "place",
            "description": "<p>place of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>time of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": "<p>time of the admin. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"error\": false,\n    \"message\": \"Meeting Created\",\n    \"status\": 200,\n    \"data\": {\n        \"modifiedOn\": \"2018-08-16T02:28:38.000Z\",\n        \"createdOn\": \"2018-08-16T02:28:38.000Z\",\n        \"adminId\": \"4sk6CVnFY\",\n        \"adminName\": \"Manoj Meeting Admin\",\n        \"purpose\": \"check meeting\",\n        \"time\": \"2pm\",\n        \"place\": \"Nellore\",\n        \"userId\": \"DzYMlk2Fh\",\n        \"meetingId\": \"d1CS5iT8i\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/planner.js",
    "groupTitle": "MeetingPlanner",
    "name": "PostApiV1MeetingplannerCreatemeeting"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetingplanner/deleteMeeting/:meetingId",
    "title": "api for  deleteMeeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the meeting.  (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Deleted Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/planner.js",
    "groupTitle": "MeetingPlanner",
    "name": "PostApiV1MeetingplannerDeletemeetingMeetingid"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetingplanner/forgot",
    "title": "to forgot password user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "forgotEmail",
            "description": "<p>forgotEmail of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Reset Link Sent to your mail\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"resetPasswordToken\": \"e7dd6cd10df03c1f833c0b90a70fd7b8da05ee50\",\n        \"resetPasswordExpires\": \"2018-07-22T12:29:39.018Z\",\n        \"_id\": \"kjdsdggfdg\",\n        \"email\": \"manojprabhaka@gmail.com\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "MeetingPlanner",
    "name": "PostApiV1MeetingplannerForgot"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetingplanner/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "MeetingPlanner",
    "name": "PostApiV1MeetingplannerLogin"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetingplanner/logout",
    "title": "to logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "MeetingPlanner",
    "name": "PostApiV1MeetingplannerLogout"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetingplanner/reset",
    "title": "to reset user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "resetPassword",
            "description": "<p>resetPassword of the user. (auth headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "resetPasswordToken",
            "description": "<p>resetPasswordToken of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Password Updated Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "MeetingPlanner",
    "name": "PostApiV1MeetingplannerReset"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetingplannner/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"SignUp Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "MeetingPlanner",
    "name": "PostApiV1MeetingplannnerSignup"
  },
  {
    "group": "MeetingPlanner",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meetingplanner/editMeeting/:meetingId",
    "title": "api for  editMeeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the meeting.  (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Edited Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/planner.js",
    "groupTitle": "MeetingPlanner",
    "name": "PutApiV1MeetingplannerEditmeetingMeetingid"
  }
] });
