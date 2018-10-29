This project shows a fully functioning Spring Boot application which exposes a REST interface that can be used to fetch a list of entities from a MySQL database and render the same in a React based client side application.

# Running this application
1. Create a database and a user using the following commands:
```
CREATE DATABASE contactsdb;
CREATE USER 'john'@'localhost' identified by 'yourpasswordhere';
GRANT ALL ON contactsdb.* to 'john'@'localhost';
```

2. Import this project into Eclipse or Visual Studio Code

3. Run the webpack bundler in watch mode using:

```
npx webpack --watch
```

4. Configure application.properties with the appropriate values
5. Run the DemoApplication from your IDE
6. Access your application at: [http://localhost:8080/](http://localhost:8080/)