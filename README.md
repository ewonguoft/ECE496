# ECE496 - University of Toronto - Final Design

This is a mobile app that connect the nearby people.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install the following software and packages to setup the lanuguage.

```
go online and learn to install react-native
```

### Installing

To setup the development environment, install the following:

Install StackNavigator

```
npm install
npm install --save react-navigation
```

Install react-native-map-api

```
npm install react-native-maps --save
react-native link react-native-maps
```
Ensure that you have Google Play Services installed:

```
You can check it by openning your Android Studio->Tools->Android->SDK Manager
Then select 'SDK Tools' tag and look for 'Google Play Services'.
If it is unchecked, check it and then click 'Apply' and it will be installed.
```

Download and install MongoDB:
```
https://www.mongodb.com/download-center#community
```

How to setup MongoDB:
```
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
```

In server directory run the following commands:
```
npm install express body-parser ejs --save
```

```
npm install mongojs --save
```

```
npm install nodemon -g
```

Install firebase:
```
Under the root directory of the app, run:
npm install --save firebase
```

To use firebase dependency in your code:
```
import firebase from 'firebase'
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
