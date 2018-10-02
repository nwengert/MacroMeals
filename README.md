# MacroMeals
User can get ingredients and their macros for a meal, after selecting their gender, intent for the meal, type of meal (low fat/carb), and method of preparation. 

Technologies Used;
React, React Router, Axios, Express, Mongoose.  

The database for this app was created with a Visual Basic program in Excel.  The program took a table of data and converted it into a json element.  Then a function in automatePost.js used Axios to loop through all 1500+ meals and post them to "meals" database.  

Each of the selections made by the user is saved into an object, which is used as props in Meal.js to query the database with Axios in a componentDidMount function.  An array of meals is returned, from which one meal is pulled using math.random.

The meal pulled from the server contains only ingredients and their measurements according to the selections made by the user.  In order to assign the macros to each of the ingredients, a series of conditional statements in Meal.js is set up to determine what the meal consists of at what amounts.  These conditional statements became rather extensive, but effectively give results that a user would be expecting.  


