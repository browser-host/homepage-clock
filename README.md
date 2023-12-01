
# Custom Browser Homepage
This is a rebuild of my previous custom browser homepage that I build using React.js and Tailwind CSS instead of plain HTML, JS, and CSS.

Tech used:
- React.js
- Tailwind CSS
- gh-pages
- react-icons

Looks like this currently:
![image](https://github.com/browser-host/homepage-clock/assets/92818054/24bdcf7a-58d6-4a86-866d-a30bcdffee06)

Check out the live version:
https://browser-host.github.io/homepage-clock/

## How to make it yours:
1. Clone the project.
2. Run `npm install` in the project directory to install packages.
3. Find the `getWeatherData()` function **(src/App.js, line 254)** and change the api key in the get request to your own free key from weatherapi.com.
4. Change the location in the get request query headers to your own local city **(src/App.js, line 256)**.
6. Run `npm run deploy` to build the app.
5. Setup a remote github repository with Github Pages and select deploy from branch.
7. Select the 'gh-pages' branch as the branch to deploy from.
8. Use a browser plugin to set your site as the browser's homepage (I use New Tab Homepage for Firefox).
9. Make any other changes you want, remember to run `npm run deploy` to see your changes live.



