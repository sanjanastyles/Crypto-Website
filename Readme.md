# [Live Demo](https://sanjanastyles.github.io/Crypto-Website/)

## React

Open your VSCode and press `ctrl + J` and type `npx create-react-app amazon-clone` , amazon-clone is the name of my project, on the terminal and hit enter.
You should see the following </br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/999316178239496352/unknown.png)

and after you into the directory type `npm start` and hit enter. Runs the app in the development mode.</br>
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.</br>
`npm i react-router-dom` for routes in navbar.</br>
`npm i styled-components` </br>

## API

Visit [coingecko API](https://www.coingecko.com/en/api/documentation) documentation and generate an API endpoint as per your requirement ( read through [Token List](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit#gid=0) to provide correct information)</br>
In my case, I've used Bitcoin, Tether and Ethereum </br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/1008032850467098664/unknown.png) </br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/1008032921875140638/unknown.png) </br>

## GitHub Pages Deployment

In your terminal, initialize the local directory as a Git repository, commit all the changes, and push it to remote by running the following command in the project root.

````
git init
git add .
git commit -m "initial commit"
git remote add origin (repository remote git url here)
git push -u origin master
```

With this, your project will be pushed to GitHub.

In your project’s package.json, add a homepage field, like this:

```
"homepage": "https://myusername.github.io/my-app"
```
myusername is your GitHub username and my-app is your repository’s name.

Next, install gh-pages in your project.

npm install --save gh-pages
In your package.json, add the following scripts.

```
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
````

predeploy and deploy are the only additions to the scripts. predeploy will automatically run before deploy and make sure the latest build of the application is deployed.

Run the following command to deploy the application.

`npm run deploy`

This command will create a new branch named gh-pages in your project’s GitHub repository. You may need to set a source, which you can do under the GitHub Pages option in your repository’s settings. Set it to gh-pages branch.
