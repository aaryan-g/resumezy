# RESUMEZY
Resume builder using MERN stack


## Day 1 (27/01/2024) : Frontend Setup
### 1. Setup the react app for frontend.
  * Installed Axios and Ant Design React UI Library.
  * Imported associated libraries.

### 2. Created routing and a folder structure. Created following folders in src/client:
  * components
  * pages
  * resources
And created routes to Home, Register and Login pages inside src/client/App.js


## Day 2 (28/01/2024) : Layout Setup
  * Created a default layout for landing/home page.
  * Applied styles to home page using authentication.css and defaultLayout.css from resources folder.
  * Imported custom font and Bootstrap css.


## Backend Setup
### 1. Node 
  * Installed Express.js, Mongoose and Nodemon.
  * Created backend entrypoint (server.js).

### 2. Mongo Connection
  * Created a database using MongoDB.
  * Established connection with cluster using MongoDB Compass.
  * Integrated database connection with backend (dbConnect.js).
  * Created a user schema (RESUMEZY/models/userModel.js).

### 3. Authentication APIs
  * Defined routes '/login' and '/register' to handle POST requests (RESUMEZY/routes/userRoute.js).

## Day 3 (31/01/2024) : Authentication
* Created authentication (login and register) pages and established links between them.
* Performed API integration.

## Day 4 (2/2/2024): Loaders and Protected Routes
* Added AntD Spinner component on login and register pages during authentication/loading.
* Created protected routes to home, login and register pages (RESUMEZY/client/src/App.js).
* Customised navigation bar on header page.

## Day 5 (5/2/2024): Update Profile UI
* Created a Profile page file and imported AntD tabs (client/src/pages/Profile.js).
* Created separate pages (.js) for Personal Info, Skills and Experience tabs.
* Imported dynamic forms from AntD library for Skills and Experience pages.

## Day 6 (6/2/2024): Update Profile API Integration
* Extended user model for newly added details in User profile.
* Wrote API for updating User profile.

## Day 7 (12/2/2024): Password Encryption
* Used hashing and salting for password encryption using 'bcrypt' NodeJS library.

## Day 8 (16/2/2024): Templates Creation
* Configured folder structure for templates.
* Created a simple template layout and linked it to User Profile Info.

## Day 9 (16/2/2024): Templates and Home Page
* Displayed template catalog on Home page.
* Established navigation from Home page to Template page.

## Day 10: (18/2/2024): Print Resume
* Used react-to-print npm package for print functionality.
* Tweeked the template for a cleaner converted resume pdf.

## Day 11: (28/2/2024) : More Profile Fields and Resume Templates
* Added Github and LinkedIn URL fields in "Personal Information" tab, new dynamic form section for Certifications in "Skills and Education" tab of User Profile.
* Created a new "Achievements and Hobbies" Tab in User Profile. Inculcated information entered in newly created form sections on the templates.
* Created Templates 2, 3 and 4 and displated their previews on home page. Used Material UI for fonts and icons displayed on the templates.
