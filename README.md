# ECommerce React Template

As an owner of a small business, I need a simple and responsive website using React that I can use to sell my products. 

This template used React, MongoDB, Mongoose ORM, and customized React-Bootstrap components. A user is able to fork this repository and create their own ECommerce site for a business by uploading items to the Mongo database with a simple form. The front-end has easy styling and customization options within one file to suit any brand. By utilizing the built-in PayPal payment system, customers can place orders throught the site, recieve email confirmation of their purchase, and store administrators recieve notice of a purchase. 

## Contributing 

* Mary Jacobs
* Michelle Owodunni 
* Paul Chheang 
* Amira Chikhaoui 
* Patrick Brown 

## Live Site on Heroku
[Live Site](https://les-meilleurs-ecommerce.herokuapp.com/)

![LesMeiulleurs Custom Styling Gif](https://github.com/owodu001/ecommerce/blob/master/client/src/LesMeilleuresSTYLE.gif?raw=true)

---
# Setting Up Your Store 

### Installing package dependencies

```javascript
// Install dependencies for server & client
npm install && npm run client-install
```

### Starting the Server & Client (React App)

```javascript
// Run client & server with concurrently. Run command below from the project's root folder
npm start

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

### Database Setup & Product Management. 

The database is setup in the config/key.js file in line 1: ``` mongoURI: process.env.MONGODB_URI || "mongodb://localhost/our_store" ```

Product environment will use mongoURI: process.env.MONGODB_URI and 
development environment will use ”mogodb://localhost/our_store”, in which “our_store” is the name of the database instance that mogoDB will automatically create.

### Secret Key for Encrypting Login Token

The secret key is also setup in config/key.js file in the line 2: ```secretOrKey: process.env.SECRET || "$3Cr3T" ``` .

Production environment will automatically generate the key and development evironment will use "$3Cr3t" for this setup example.

## Deployement

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.

---
## Paypal Setup

1. Go to [Paypal Developer Account](https://developer.paypal.com/developer/accounts/) to create an account  
    with PayPal. In order to process transactions and manage your application you must have a business account. 
2. Once you create a developer Sandbox account you will click on the myApps & Credentials on the left hand 
    side.
3. Click on the blue Button to create an App and fill out the requested information.
4. You will receive a client Key which you will need to copy and paste into the file on line 23 
    “PayPalButton.js” in the Client - SRC - Components - PayPal folder. 
5. Please read Paypal terms of use.

 ---
## Design Customization
Your store's appearance is highly customizable. The main components we suggest starting off styling live within /client/src/app.css. If you wish to customize your store even further, each react component has its own style sheet within client/src/components/... that can be used to customize even further. 

Jump to [/client/src/App.css](#anchor)

#### Fonts
To customize your store's fonts, select 1-3 styles from <https://fonts.google.com> then copy the embed font link in <link> tags into the <head> of /client/public/index.html.

Jump to [/client/public/index.html](#anchor)

To change fonts across the site, you will need to edit /client/src/app.css. This file is where the main element colors and styles live.

#### Colors 
Within /client/src/app.css - you can adjust colors in common places by finding all instances of the same color, and editing them together. 

---
## Technologies Used

* Node.js
* React
* MongoDB & Mongoose ORM
* React-bootstrap component library

## Future Developments 
 + Add Accessibility features.
 + Incorporate SEO optimization features. 
 + Add Pagination for larger stores.
 + Add additioanal sort and filter functionality.
 + Toggle thumbnail views on product details page. 
 + Add more complexity to an authenticated administrative view and incorporate additional content   
    management tools. 

## Challenges

One of the challenges our group faced was to incorporated PayPal into our application. We ended up using a PayPal button from Stack Overflow that would allow us to use it with React. The other problem we had to solve with PayPal was adding the total merchindise prices from our website shopping cart and sending the correct amount to PayPal. As a group this was the first large project with React and it was difficult for us to translate our skills with vanilla JavaScript to React. Another set back we had was starting with the Grommet component library and realizing that library didn't have all of the functionality we wanted. We decided to use the React-Bootstrap library. This was the first time we had used authentication in an application and we had issues getting it set up.

### License

[MIT](https://choosealicense.com/licenses/mit/)
 

