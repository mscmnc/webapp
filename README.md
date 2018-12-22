## WebApp. Image search application powered by [unsplash.com API](https://unsplash.com/developers) 
This is one page web application created with ReactJS, Redux.

## How to use?
 - Type your keyword.
 - Click SEARCH or SAVE.

You can save and delete your keywords from queries list. 
Click on queries and search will starts automatically. If there is no letters, buttons are disabled. 

### Live demo here: [webApp](https://mscmnc.github.io/webapp)

 
## For development mode:
```python
git clone <repoaddress>
npm install 
npm start
``` 
Fork this repo, install all necessary modules with command „npm install“. 
Get your own unsplash API from [unsplash.com](https://unsplash.com/developers) otherwise app will not work. 
If you already have your API. 
- Create a file called .env in the root of your project's directory.
- Inside the .env file, prepend REACT_APP_ to your API key name of choice and assign it. Example:
```
REACT_APP_API_KEY=your_api_key
```
- Access the API key via the process.env object. Add you API in to store>>actions>>search.js. 
```
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
```


Good luck! :)