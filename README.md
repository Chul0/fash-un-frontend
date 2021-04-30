# fash-un-frontend
Solo Project 3 (Frontend)
## About this app
**Fash-un app is a fashion show coverage where you can explore runway shows, and create mood boards to save inspiring looks**

## Wireframes
<details>
<summary>Click to see wireframes</summary>

![1](./wireframes/1.png)
![1](./wireframes/2.png)
![1](./wireframes/3.png)
![1](./wireframes/4.png)
![1](./wireframes/5.png)
![1](./wireframes/6.png)
![1](./wireframes/7.png)
</details>

## User Stories

- When I go onto the first page, I see homepage,login and signup buttons.
- I can sign-up with name, email, password, username.
- When I login all brand covers are shown, I can filter this list using a search bar, there are my mood board, sign-out and profile buttons. 
- When I click a brand, it redirects me to another page and shows this brand's fashion show images.
- I can see a comment section where I can leave comments and see other's comments.
- If I click an image, it shows me a detail look and there is a save button.
- I can go to my board and see my saved images with delete buttons.
- In my profile page, I can see pre-populated profile info, and I can edit/delete my profile.

## Frontend components tree
<details>
<summary>Click to see</summary>

![1](./ERD:TREE/componentTree.png)

</details>

## ERD
<details>
<summary>Click to see</summary>

![1](./ERD:TREE/ERD.png)

</details>

## HTTP Routes
<details>
<summary>Click to see</summary>

[Users]

| Method | Path                   | Purpose                                | Note                       |
|--------|------------------------|----------------------------------------|----------------------------|
| GET    | /users                 | Get user profile info                  | use auth headers for userId|
| GET    | /users/myboard       | Show saved contents in my board          | use auth headers for userId|
| POST   | /users                 | Sign-up                                |
| POST   | /users/login           | Log-in                                 |
| PUT    | /users/profile         | Edit user profile info                 |use auth headers for userId |
| DELETE | /users/                | Delete user account                    | use auth headers for userId|


[Brand] * /:id/ refers to the id of whatever that comes before /:id/ *
| Method | Path                   | Purpose                         | Note                                    |
|--------|------------------------|---------------------------------|-----------------------------------------|
| GET    | /brands                | Get brand list from api         | 
| GET    | /brands/:id            | Brand contents and comments     |Fetch brandContents, and include comments|  
| POST   | /brandContent/:id      | User can save images            |
| DELETE | /brandContent/:id      | User can delete saved images    |


[Comment]
| Method | Path                   | Purpose                         |
|--------|------------------------|---------------------------------|
| POST   | /brand/:id/comments    | Leave comments                  |


</details>

## MVP checklist 
- Can I sign up, sign in and sign out?
- Can I see all brand list and its contents?
- Can I see my board? (save brand contents, list it in my board)

### Stretch goals
- Can I find a brand through search bar?
- Can I leave comments and see them?
- Can I edit and delete my comments?
- Can I see my profile and edit/delete it?
</details>

## Work flow
<details>
<summary>Click to see </summary>

1. Work on backend and frontend synchronously.
2. Setup (react dependencies, sequelize, express, etc)
3. Make database, add constraints/validations, associations.
4. Set front/backend servers and run them.
5. Controllers and Routers in backend.
6. All functionalities in frontend using(context, components, props)
7. CRUD 
     <p>[Create]</p>

    - Signup
    - Signin
    - Save brand images  
    - Leave comments 

    <p>[Read]</p>

    - All brand list
    - Collection images(single brand view)
    - Detail view(single photo)
    - User profile info
    - Mood board(saved images)
    - All comment list

    <p>[Update]</p>

    - User profile info edit

    <p>[Delete]</p>
    
    - Delete user account
    - Delete images from mood board 

8. Signout functionality.
9. Styling up browser with CSS.
</details>

## Credit
### API
### Photos


## Set Up Cheat sheet 
<details><summary>Click to see </summary>



<details><summary>Frontend</summary>
<p>

- Dependencies

1. react-router-dom
1. axios
1. react-dotenv (if you decide to use this)

- Frontend setup
1. yarn create react-app your_app_name
1. yarn install (if you clone down and use a repo that already has a react app)
1. yarn add Dependencies to React app folder!!(written above) 
1. adjust index.js 
`import {BrowserRouter} from 'react-router-dom'`
```
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);
```
1. Create .env in the root and add `REACT_APP_BACKEND_URL=Your-API-URL`(if you choose to use the builtin env instead of react-dotenv)
1. .gitignore(node_modules, .env(if you use dotenv))
1. Wipe up unneeded code in App.js
1. `Console.log(process.env.REACT_APP_BACKEND_URL)` in App.js to see if the server is running 

</p>

</details>



<details><summary>Backend</summary>
<p>

- Dependencies

1. cors
1. dotenv
1. express (http verb and route)
1. morgan
1. pg (is needed to create db(sequelize db:create))
1. rowdy-logger (a tool that gives a quick summary of all routes)
1. axios
1. sequelize 
1. sequelize-cli

- backend setup

1. npm i -y
1. npm init 
1. npm install dependencies(written above)
1. .gitignore (add node_modules, config/config.json, .env(if you use react-dotenv))
1. sequelize init (To create config, migrations, models, and seeders) 
1. adjust config
1. adjust script in package.json(npm run dev will not run if you don't add this)
```
"start": "node server.js",
"dev": "nodemon server.js"
```
1. create database (sequelize db:create)
1. create sequelize models
   - sequelize model:generate --name tableName --attributes columnName:dataType,columnName:dataType,columnName:dataType
1. Check models, add unique constraints to migration (other validations should be added to models)
1. sequelize db:migrate
1. make associations to models
1. make server.js
1. make controllers, routers folders

1. Command Line
   - npm run dev (run backend server)
   - or node server.js

   

1. Reference
   - https://github.com/SEI-SEA-1-25/intro-to-sequelize
   - https://github.com/SEI-ATL-3-8/intro-to-express


```
const express = require('express')
const app = express()

app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})
```

1. test with postman that server is running(nodemon server.js or npm run dev)
1. create routes and controllers

</p>

</details>


<details><summary>UseContext</summary>
<p>

1. Create your store (the context)

```
import {useState, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [color,setColor] = useState('red')

    const state = {
        userState: [user,setUser],
        fetchUser: fetchUser,
        colorState: [color,setColor]
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
```

1. Wrap your app in the Context(store) Provider

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from './context/UserContext'
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

1. Any child component should follow these steps to access the store

   ![alt text](./ERD:TREE/childcomponent.png)

</p>
</details>
</details>