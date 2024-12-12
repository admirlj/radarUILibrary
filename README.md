# Custom UI Library project

# Description:
This is a small project that acts as UI library component consisting of UI components that can be reused across some project by other developers. Modular way of structure offers ability to grow in something bigger with adding new components and functionality. Can be implemented alongside with other styling library without conflicts with other CSS classes (by using SASS nesting and scoped CSS rules as mentioned in BEM directives).
Most of the project is written in TS and SCSS, and it uses functional controlled components.

- App.tsx file is the main file where all the components Button and TextField are being used for basic flow.
- styles directory contains all style related files (_variables.scss, _mixins.scss and main.scss) main acting as master style file that pulls other files with prefix _.
- components directory contains ui directory with two main components Button and TextField and, icon directory that holds SVG components that can be used for example on Button component.



# Installation
1: Clone the repository
- https://github.com/admirlj/radarUILibrary.git
2: Install all dependencies
- npm i / npm install
3: Run the project
- npm run dev
