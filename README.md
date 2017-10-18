# Habit Builder - Front End [![Build Status](https://travis-ci.org/sanjaynelson/habitual.svg?branch=master)](https://travis-ci.org/sanjaynelson/habitual) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Installation

### Mac:
To get started, your local machine will need to have [Node](https://nodejs.org/en/download/) installed. While Node's npm does have the capability to handle dependencies, [Yarn](https://yarnpkg.com/lang/en/docs/install/) has proved a simpler option.

If you do not have either node or yarn installed, follow these installations steps:

```brew install node```

```brew install yarn```

If you have either program, please ensure that the latest updates are installed, please ensure that you have the latest upgrades by replacing the word ```install``` for ```upgrade``` in the example above.

After these initial installations, clone the repository:
```git clone https://github.com/markfranciose/habitual-front```

navigate to the cloned directory: 
```cd habitual-front```

Use yarn to install the dependencies:
```yarn install```

After everything is installed, run the application by entering the following command:
```react-native run-ios```

The first time it runs, expect the proccess to take 3-6 minutes.  It is important to let the full process take place.  If the emulator pops up, **please do not open the program**.  XCode's simulator will automatically open the app when everything has been compiled.

*This application has been developed for Mac and iOS only.  Functionality on Android and Window/Linux-based systems is not guaranteed.*

## History
The Habitual app is the idea of Mark Franciose who remembers telling a fellow colleage that habit change was more or less impossible.  On reflection of that piece of mis-placed advice, a team was assembled under Mark's vision to make habit change not only possible, but enjoyable and easy.  As part of the final project for DevBootcamp whose curriculum was mostly web-application based, the team decided to build this solution on the React-Native framework.  The group had 8 days to learn and build this application having no prior knowledge of mobile application development.  The information in this repository is a reflection of that work.

## Current State
The Habitual application is a mobile solution with an API backend to help users accomplish a longer-term goals through small and steady habit reminders and progress statistics.  A user can add or delete however many habits they wish and is reminded of that habit daily at the time of their choosing upon the creation of the habit.

## Future Features
On reflection of the current state of the application and the completion of the 8 days, the next steps towards this application more market ready include:
- Accessing habits through multiple devices
- Enabling more flexibility with reminders and the displaying of statistics
- A more thorough dive into data visualization through the D3.js and React-ART framework

## Contributors
- Mark Franciose [@markfranciose](https://github.com/markfranciose)
- Tony Rodriguez [@tony-rodriguez](https://github.com/tony-rodriguez)
- Matthew Cataldi [@mjcataldi](https://github.com/mjcataldi)
- Sanjay Nelson [@sanjaynelson](https://github.com/sanjaynelson)

[Presentation via Prezi.com](https://prezi.com/p/dug3illzq9i0/)
