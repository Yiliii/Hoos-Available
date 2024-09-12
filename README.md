# Project Code: Hoos-Available

Setting up React
----------------
* First, make sure you have Node JS installed. Any recent version should work. (Download page: https://nodejs.org/en/download/current)
* Open the hoos-available folder in the project. There should be a file called "package-lock.json". Delete it.
* In the terminal, cd into the hoos-available folder. Again in the terminal, run the command "npm install" (without the quotes). It will install all the react things for you. It should also make a new package-lock.json with all the react dependencies and such.

General Info about React Project Structure
------------------------------------------
* All of the main project files are in the hoos-available folder. The additional html files outside include our previous work for reference. You don't need to worry about updating those files. For example, if you want to work on the homepage, update HomePage.js at HoosAvailable>hoos-available>src>HomePage.js
* The dependencies and libraries are in the package json files and the node_modules folder. You generally don't need to worry aobut these unless you want to install dependencies.
* The main file that gets run is the App.js file. It has all the routing between pages. If you want to add new pages, you'll need to add it to the routing using <route> tags.
* The index.js file is the file that is actually getting run upon startup. Some of the css and the React/ReactDOM are imported there.
* When you're adding CSS, keep in mind that there are multiple stylesheets being used in the project. They are prioritized based on !important flags and the order in which the sheets are added (last sheet takes priority).
* We are using React Boostrap for a lot of our styles, specifically for adding components like buttons and dropdowns. You don't need to use it, but it is highly recommended for making life easier + cohesiveness with the rest of the project. Look at the react boostrap documentation for info for the components: https://react-bootstrap.netlify.app/docs/getting-started/introduction



To Run
-------
* In the terminal, cd into the hoos-available folder.
* Once there, type and run the command "npm start" (again without quotes). It may take a second to start all the servers, but then it will open a page in your browser with the website.
* If it is your first time running npm start, your computer may ask if you want to let Node JS make changes. Click allow.  
