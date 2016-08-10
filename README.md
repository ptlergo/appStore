#App Store
App Store API using RESTful architecture.

##INSTALL
*Install all package dependencies*
```
npm install
```

*install all command line tools*
```
npm i -g mocha
```

##ENDPOINTS
*All Users, and Apps routes.*

###Routes for apps

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/apps|Get all apps|[{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00", }, { id: 2, title: "app2", description: "2nd app", releaseDate: "2016-08-04T16:52:49+00:00", }]|
|GET|/api/v1/apps/:id|Get a single app|{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00" }|
|GET|/api/v1/users/:id/apps|Get all apps from a single user|[{"id":2,"title":"Direct Research Producer","description":"logistical","releaseDate":"(899) 823-0205","createdAt":"2016-08-09T23:47:48.000Z","updatedAt":"2016-08-09T23:51:17.000Z","appId":2,"artassets":[{"id":0,"title":"24031","srcLink":"http://lorempixel.com/640/480","createdAt":"2016-08-09T23:46:28.000Z","updatedAt":"2016-08-09T23:50:16.000Z","appArtId":2}]},{"id":4,"title":"Forward Markets Planner","description":"neutral","releaseDate":"(502) 984-9532","createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:53:34.000Z","appId":2,"artassets":[]}]|
|POST|/api/v1/apps/|Create an app|1|
|POST|/api/v1/apps/:id|Update an app|1|
|DELETE|/api/v1/apps/:id|Delete an app|1|

###Routes for users

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/users|Get all users|[[{"id":2,"name":"Xavier Greenholt","age":26290,"createdAt":"2016-08-09T23:47:49.000Z","updatedAt":"2016-08-09T23:47:49.000Z"},{"id":3,"name":"Patsy Witting","age":92096,"createdAt":"2016-08-09T23:47:52.000Z","updatedAt":"2016-08-09T23:47:52.000Z"},{"id":4,"name":"Kylie Smitham","age":71034,"createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:47:55.000Z"},{"id":5,"name":"Zora Nienow","age":97830,"createdAt":"2016-08-09T23:47:59.000Z","updatedAt":"2016-08-09T23:47:59.000Z"},{"id":6,"name":"Ambrose Green","age":31495,"createdAt":"2016-08-09T23:48:04.000Z","updatedAt":"2016-08-09T23:48:04.000Z"}]|
|GET|/api/v1/users/:id|Get a single user|{"id":2,"name":"Xavier Greenholt","age":26290,"createdAt":"2016-08-09T23:47:49.000Z","updatedAt":"2016-08-09T23:47:49.000Z","apps":[{"id":2,"title":"Direct Research Producer","description":"logistical","releaseDate":"(899) 823-0205","createdAt":"2016-08-09T23:47:48.000Z","updatedAt":"2016-08-09T23:51:17.000Z","appId":2,"artassets":[{"id":0,"title":"24031","srcLink":"http://lorempixel.com/640/480","createdAt":"2016-08-09T23:46:28.000Z","updatedAt":"2016-08-09T23:50:16.000Z","appArtId":2}]},{"id":4,"title":"Forward Markets Planner","description":"neutral","releaseDate":"(502) 984-9532","createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:53:34.000Z","appId":2,"artassets":[]}]}|
|POST|/api/v1/users/|Create a user|1|
|POST|/api/v1/users/:id|Update a user|1|
|DELETE|/api/v1/users/:id|Delete a user|1|

###Routes for art assets

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/artassets/|Get all art assets|[{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }, { id: 2, title: "art2", srcLink: "http://i.imgur.com/QQ3O6PO.jpg", }]|
|GET|/api/v1/artassets/:id|Get a single art asset|{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }|
|POST|/api/v1/artassets/|Create an art asset|1|
|POST|/api/v1/artassets/:id|Update an art asset|1|
|DELETE|/api/v1/artassets/:id|Delete an art asset|1|

##DATABASE
```
mysql.server start
```
*Sample Environmental Variables in .env*
```
DB_NAME=DatabaseSample
DB_USER=user
DB_PASS=password
DB_HOST=localhost
DB_SCHEMA=mysql
DB_PORT=0000

```

##RUN SERVER
*Default port is '3000' [http://localhost:3000](http://localhost:3000)*

```
node src/server.js
```

##RUN UNIT TESTS
*run unit tests to test API functions*
```
mocha
```
