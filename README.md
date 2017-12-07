# Burger Chow Down! :hamburger:

https://dry-gorge-46097.herokuapp.com/index

### About

Burger Restaurant application that lets users input the names of burgers they'd like to order... and then devour them!

### Technologies

This application follows the MVC design pattern; Node and MySQL are used to query and route data in the application, and Handlebars to generate the HTML.

* MySQL
* Node
* Express
* Handlebars
* Autochthonous ORM



### Screenshot
![](https://user-images.githubusercontent.com/28759418/33695905-bde8bd0a-dacd-11e7-8722-392e8a940cf5.png)


#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

