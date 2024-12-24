# Netflix Clone - React, TypeScript, and Vite

A fully functional Netflix clone built with React, TypeScript, and Vite. This project features user authentication, profile management, movie browsing, trailers, search functionality (powered by ChatGPT), and more.

# Table of Contents

- [Author](#author)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#project-setup)
  - [Clone the repository](#1-clone-the-repository)
  - [Go to the project directory](#2-go-to-the-project-directory)
  - [Install dependencies](#3-install-dependencies)
  - [Set up environment variables](#4-set-up-environment-variables)
  - [Set up Firebase](#5-set-up-firebase)
  - [Set up TMDB API](#6-set-up-tmdb-api)
  - [Set up ChatGPT API (Optional)](#7-set-up-chatgpt-api-optional)
  - [Run the project](#8-run-the-project)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Firebase Authentication](#firebase-authentication)
- [Movie Features](#movie-features)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Optimizations](#optimizations)
- [Contributing](#contributing)
- [Status](#status)
- [Inspiration](#inspiration)
- [Support](#support)
- [Feedback](#feedback)
- [Related Projects](#related-projects)
- [Screenshots](#screenshots)
- [License](#license)
- [Demo](#demo)
- [Social Links](#social-links)


## Author

This project is developed by:

- [Saddam Arbaa](https://github.com/saddamarbaa)
<!--- [Team Member Name](https://github.com/team-member)-->

For more information, visit [GitHub Profile](https://github.com/saddamarbaa).


## Features

- **User Authentication**:
  - Sign up and sign in with email/password.
  - Login with Google.
  - Sign out
  - Login with Netflix (to be implemented).

- **Profile Management**:
  - Update user profiles.
  - Add, remove user profile (to be implemented).

- **Movie Categories**:
  - View all Netflix Originals.
  - Top Rated Series for You.
  - Browse through different movie categories, including:
    - Romance Movies
    - Action Movies
    - War Movies
    - Comedy Movies
    - Horror Movies
    - Crime Movies
    - Documentaries
    - Drama Movies
    - Mystery Movies
    - Family Movies
    - History Movies
    - Music Movies
    - Science Fiction Movies
    - Adventure Movies
    - Animation Movies
    - Western Movies
    - Fantasy Movies

- **Movie Viewing Features**:
  - Watch trailers for movies.
  - Search for movies with ChatGPT-powered recommendations for advanced movie suggestions.

- **UI Features**:
  - Fully responsive UI for all devices.
  - Smooth animations and transitions for better user experience.

- **Dark and Light Mode**:
  - Support for dark and light themes (to be implemented).

- **Watchlist & Favorites**:
  - Users can manage their watchlist and favorite movies (to be implemented).

- **Movie Data**:
  - Movie browsing powered by the TMDB API.
  - Display detailed movie information (ratings, genres, etc.).
  
- **Advanced Search**:
  - Search functionality using ChatGPT for personalized movie recommendations.


- **Stripe Checkout/Payments**:
  - Secure payment gateway integration using Stripe for subscription or rental payments (to be implemented).

- **Firebase**:
  - Use Firebase for user authentication and storing user data.
  - Integration with Firebase for real-time data sync and cloud functions. (to be implemented).
  - Firebase hosting options (optional for deployment).
  
- **Multilingual Support**:
  - The app supports multiple languages, allowing users to switch between languages for a more personalized experience.


## Movie Features
The following movie features are included:

- **Netflix Originals**: View a list of Netflix originals.
- **Movie Categories**: Browse through categories like Top Rated, Action, Comedy, etc.
- **Movie Trailers**: Watch movie trailers before deciding what to watch.
- **Search**: Search movies by title.
- **ChatGPT Recommendations**: Get personalized movie recommendations based on preferences.


## Technologies Used

### Core Dependencies

- **Redux Toolkit**: State management tool for React applications.
- **React Router**: Declarative routing for React applications.
- **Firebase**: Backend-as-a-Service platform for user authentication and database management.
- **Firebase Hooks**: React hooks for integrating Firebase with React applications.
- **OpenAI**: API for utilizing GPT-powered functionalities like movie recommendations.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Hook Form**: Library for managing form state and validation in React.
- **Yup**: Schema validation library for form validation in combination with React Hook Form.
- **Movie Trailer**: A package for retrieving movie trailers using the TMDB API.
- **React Lazy Load Image Component**: A component for lazy loading images in React applications.
- **React YouTube**: A React component for embedding YouTube videos (used for trailers).


### Development Dependencies

- **Tailwind CSS**: Utility-first CSS framework for building responsive designs.
- **TypeScript**: Superset of JavaScript that adds static types for better development experience.
- **Vite**: Next-generation front-end tool that offers fast and optimized development builds.



## Project Setup



### 1. Clone the Repository
To get started, clone the repository to your local machine using the following command:

git clone https://github.com/saddamarbaa/netflix-clone-app-react-typescript.git

```bash
git clone https://github.com/saddamarbaa/netflix-clone-app-react-typescript.git
```

### 2. Go to the project directory

```bash
cd netflix-clone-app-react-typescript.git
```


### 3. Install Dependencies
Once you’ve cloned the repository, navigate to the project folder and install the required dependencies:

```bash
npm install
```



### 4. Set Up Environment Variables
Once you’ve cloned the repository, navigate to the project folder and install the required dependencies:

Copy `.env.example` to `.env` and update the necessary values.


### 5. Set up Firebase
For user authentication, you'll need to set up Firebase:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Enable Firebase Authentication (Email/Password and Google).
4. Copy the Firebase config and add it to the `.env` file in your project.

### 6. Set up TMDB API
To fetch movie data, you'll need to set up TMDB API:

1. Go to the [TMDB API website](https://www.themoviedb.org/documentation/api).
2. Create an account and generate an API key.
3. Add your API key to the `.env` file in your project.

### 7. Set up ChatGPT API (Optional)
To enable advanced movie recommendations, set up ChatGPT API (Optional):

1. Go to the [OpenAI website](https://openai.com/).
2. Create an account and generate an API key.
3. Add your API key to the `.env` file in your project.

### 8. Run the Project
Once the setup is complete, you can run the project locally using:

```bash
  npm run dev
```

This will start the development server, and you can view the app in your browser at `http://localhost:3000`.



## Scripts
Here are the key scripts used in the project:

- `npm run dev`: Runs the application in development mode.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run format`: Automatically formats the code using Prettier.

## Firebase Authentication
To enable user authentication, Firebase Authentication is used. It allows users to sign up, sign in with email/password, and sign in with Google.

### Steps:
1. Set up Firebase in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Email/Password and Google Sign-In methods.
3. Add Firebase credentials to `.env` as mentioned in the "Environment Variables" section.


## Environment Variables

To configure the project, you'll need to add the necessary environment variables. Follow these steps:

1. Copy `.env.example` to `.env`.
2. Add your Firebase, TMDB API, and OpenAI API keys to the `.env` file.

Here are the environment variables you need to set:

```env
# Firebase Configuration
VITE_REACT_APP_FIREBASE_API_KEY=""
VITE_REACT_APP_AUTH_DOMAIN=""
VITE_REACT_APP_PROJECT_ID=""
VITE_REACT_APP_STORAGE_BUCKET=""
VITE_REACT_APP_MESSAGING_SENDER_ID=""
VITE_REACT_APP_APP_ID=""

# TMDB API Configuration
VITE_REACT_APP_TMDB_API_KEY=""
VITE_REACT_APP_TMDB_API_ACCESS_TOKEN=""

# OpenAI (ChatGPT) API Configuration (Optional)
VITE_REACT_CHAT_GPT_API_KEY=""
```



## **Deployment**

To deploy this application, follow these steps:

### **Deploying to Production**

1. **Prepare Environment Variables**:
   Ensure that the necessary environment variables are set up in your production environment. For this project, you will need:

   - `VITE_REACT_APP_FIREBASE_API_KEY`: Your Firebase API Key.
   - `VITE_REACT_APP_AUTH_DOMAIN`: Firebase Auth Domain.
   - `VITE_REACT_APP_PROJECT_ID`: Firebase Project ID.
   - `VITE_REACT_APP_STORAGE_BUCKET`: Firebase Storage Bucket.
   - `VITE_REACT_APP_MESSAGING_SENDER_ID`: Firebase Messaging Sender ID.
   - `VITE_REACT_APP_APP_ID`: Firebase App ID.
   - `VITE_REACT_APP_TMDB_API_KEY`: TMDB API Key for fetching movie data.
   - `VITE_REACT_APP_TMDB_API_ACCESS_TOKEN`: TMDB API Access Token for authenticated requests.

   **Important**: Copy the provided `.env.example` file to a new `.env` file, and fill in the necessary values for your production environment.

2. **Push your code to a Git repository**:
   If you are using a service like GitHub, GitLab, or Bitbucket, push your code to a remote repository.

3. **Set up a Hosting Service**:
   You can deploy the app on platforms like:

   ### **Vercel**:
   - Install the Vercel CLI and log in.
     ```bash
     npm i -g vercel
     vercel login
     ```
   - Create a production build of your app.
     ```bash
     npm run build
     ```
   - Deploy the app using the Vercel CLI.
     ```bash
     vercel --prod
     ```
   - Set the necessary environment variables in the Vercel dashboard under the **Environment Variables** section.
   - To enable automatic deployment whenever you push code to the repository, check the [Vercel documentation](https://vercel.com/docs) for instructions on setting up **Automatic Deployment**.

   ### **Netlify**:
   - Install the Netlify CLI and log in.
     ```bash
     npm i -g netlify-cli
     netlify login
     ```
   - Build the project for production.
     ```bash
     npm run build
     ```
   - Deploy the app using the Netlify CLI.
     ```bash
     netlify deploy --prod
     ```
   - Set the environment variables in the Netlify dashboard under the **Site Settings > Build & Deploy > Environment Variables** section.
   - To enable automatic deployment whenever you push code to the repository, check the [Netlify documentation](https://docs.netlify.com/) for instructions on setting up **Auto Deployment**.

4. **Set up Firebase**:
   - Ensure that your Firebase project is properly configured. This includes enabling Firebase Authentication, Firestore, and Storage as needed.
   - Use Firebase Console to manage the environment and production configuration.
   - Ensure the environment variables are correctly set in your deployment platform for Firebase services to function properly.

5. **Additional Considerations**:
   - **Security**: Ensure that sensitive information (like API keys) is stored securely using environment variables on your hosting platform.
   - **Build Process**: Always run `npm run build` before deploying to production to generate optimized production-ready code.

Once deployed, your application will be live, and you can access it through the provided URL from Vercel or Netlify.



## **Optimizations**

- **Debounce Implementation**:Added a debounce mechanism to optimize search input handling by delaying the execution of the search function until the user stops typing for a specified time (500ms). This reduces unnecessary search calls and improves performance during real-time searching.
- **Memoization**: `useMemo`, `React.memo`
- **Lazy Loading Images**: `react-lazy-load-image-component`
- **Code-Splitting**: React (using `React.lazy` and `Suspense`)
- **Suspense Component**: React `Suspense` for code splitting and async rendering
- **Function Components**: Used function components for better performance and readability
- **React Hooks**: Utilized `useState`, `useEffect`, `useMemo`, and other React hooks for state management and side-effects
- **React `useEffect` Cleanup**: Implemented cleanup functions in `useEffect` to avoid memory leaks and unnecessary rerenders
- **Server-side Rendering (Next.js)**: **TODO** (To implement in future version for improved SEO and initial load time)


## **Contributing**

We welcome contributions from the community! If you'd like to contribute to the Netflix Clone project, please follow these steps:

We appreciate all contributions, including bug fixes, enhancements, and suggestions for new features.


### **How to Contribute**

1. **Fork the repository**:

   - Go to the project repository on GitHub and click on the **Fork** button to create a copy of the repository under your own GitHub account.

2. **Clone the repository**:

   - Clone your forked repository to your local machine:
   
 ```bash
git clone https://github.com/saddamarbaa/netflix-clone-app-react-typescript.git
```

3. **Create a new branch**:

   - Create a new branch for your feature or bug fix:
     ```bash
     git checkout -b your-feature-branch
     ```

4. **Make your changes**:

   - Make your changes or additions to the project. Be sure to write clear, concise commit messages explaining your changes.

5. **Test your changes**:

   - Run tests and ensure everything works as expected.

6. **Commit your changes**:

   - Stage and commit your changes:
     ```bash
     git add .
     git commit -m "Add/Update feature description"
     ```

7. **Push your changes**:

   - Push your changes to your forked repository:
     ```bash
     git push origin your-feature-branch
     ```

8. **Create a Pull Request (PR)**:
   - Go to the **Pull Requests** tab of the original repository and click **New Pull Request**.
   - Select your branch and explain the changes you've made.
   - Submit the PR for review.

### **Code of Conduct**

By participating in this project, you agree to abide by the project's Code of Conduct. Please be respectful and kind to other contributors.

### **Issues and Bugs**

If you find a bug or want to request a feature:

1. **Check the issues**: Before opening a new issue, check if the problem or feature request already exists.
2. **Report a bug or request a feature**: If the issue hasn’t been reported, create a new issue with a clear description of the problem or feature request. Please include:
   - Steps to reproduce the issue (if applicable)
   - Expected and actual behavior
   - Any error messages or logs
   

### **Documentation**

If you're contributing to the documentation:

1. Ensure that any new or updated features are properly documented in the **README.md**.
2. Ensure that any API changes are reflected in the API documentation.

### **Thanks for your contributions!**

Your contributions help improve this project and make it better for everyone. Thank you for your help!


## **Status**

- **Current Status**: This project is in **active development**.
- **Upcoming Features**:
  - **Dark Mode**: A feature allowing users to toggle between light and dark themes.
  - **Favorites**: Users will be able to save their favorite shows or movies for easy access later.
  - **Content Filtering**: Implement a system for users to filter content based on genres, release years, and ratings.
  - **Notifications**: Users will receive notifications for new releases, trending shows, or updates to their favorite movies and TV shows.
- **Contributions**: Contributions are welcome! See the [Contributing](#contributing) section for more.
- **Known Issues**:
  - Issue 1: Need to implement rating and review functionality for shows/movies.
  - Issue 2: Enhance UI/UX for mobile responsiveness.
  - See the [GitHub Issues page] for more.


## Inspiration

This project was inspired by Netflix's platform, with an additional focus on building a modern, feature-rich web application using React, TypeScript, and Vite. The idea is to replicate core features while adding innovative enhancements like ChatGPT-powered recommendations.

## Support

If you encounter any issues while setting up or using the app, feel free to raise an issue on the GitHub repository, and we will do our best to assist you. Alternatively, you can contact us via email or through social media.

## Feedback

We value your feedback and would love to hear from you! If you have any suggestions, improvements, or bugs to report, please feel free to:

- Open an issue on the [GitHub Issues page].
- Send us an email at [netflixgpt@example.com].

Your feedback helps us improve the project and provide a better experience for everyone.


## License


This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute the code, but please ensure you follow the terms of the license. See the [LICENSE](LICENSE) file for more details.


## Social Links

[![linkedin](https://img.shields.io/badge/linkedin-Code?style=for-the-badge&logo=linkedin&logoColor=white&color=0077B5)](https://www.linkedin.com/in/saddamarbaa/)

[![twitter](https://img.shields.io/badge/twitter-Code?style=for-the-badge&logo=twitter&logoColor=white&color=1DA1F2)](https://twitter.com/ArbaaSaddam)


## Demo

You can view the live demo of this project [here](https://netflix-clone-app-react-typescript-wvrc.vercel.app/).





## Related Projects


### TMDB Clone App
- [**GitHub Repo**](https://github.com/saddamarbaa/imdb-clone-app-next13-typescript)
- A movie discovery app built with React.js, Next.js, TypeScript, and Tailwind CSS, replicating the functionality of TMDB. It allows users to browse, search, and view details of movies and TV shows using TMDB's public API.

---

### **Hulu Clone App** built with React Js, Next Js, TypeScript, Redux, Tailwind CSS, Vercel Hosting, with complete user authentication
- [**GitHub Repo**](https://github.com/saddamarbaa/Hulu-clone-app-next.js-typeScript)
- A clone of Hulu's frontend with features like user authentication, TV show/movie management, and search functionality.

---

### **Netflix Clone API** built with Node.js, Express, and MongoDB
- [**GitHub Repo**](https://github.com/saddamarbaa/netflix-clone-api)
- A clone of Netflix's backend API that allows you to manage movies, users, and subscriptions, with features such as authentication and content management.

---



### Open Source Blog REST API
- [**GitHub Repo**](https://github.com/saddamarbaa/node-express-mongodb-typescript-blog-rest-api)
- A powerful RESTful API built with Node.js, Express, MongoDB, and TypeScript for managing blog posts, user authentication, and content moderation. Includes features like filtering, pagination, sorting, and full-text search. Easily customizable and scalable for various use cases.

---



### **Front-End Mentor Rest Countries API Challenge app** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/rest-countries-app-nextjs-typescript)
- An app displaying country data using the Rest Countries API, built with Next.js, React, and TypeScript.

---

### **Google Clone App** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/google-clone-app-nex-js-typeScript)
- A Google homepage clone with search functionality and responsive design, built with React, Next.js, and TypeScript.

---

### **Realtor Clone App** built with React Js + TypeScript + Tailwind CSS + Vercel Hosting + Firebase
- [**GitHub Repo**](https://github.com/saddamarbaa/realtor-clone-app-react-typescript)
- A realtor platform clone with property listings, user authentication, and Firebase backend.

---

### **Twitter Clone App** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/twitter-clone-app-nextjs-typescript)
- A Twitter clone app with tweet management, user authentication, and real-time updates, built with React and Next.js.

---

### **LinkedIn Clone App** built with React Js + TypeScript + Redux + Styled Components + Material-UI + Firebase Realtime Database + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/LinkedIn-clone-app-react-typescript)
- A LinkedIn clone with user authentication, profile management, and job posting features, using React and Firebase.

---

### **Instagram Clone App** built with React Js + Next Js + TypeScript + Redux + Tailwind CSS + Heroicons
- [**GitHub Repo**](https://github.com/saddamarbaa/Instagram-clone-app-nex-js)
- A clone of Instagram with features like image upload, user authentication, and post interactions built with React and Next.js.

---

### **Facebook Clone App** built with React Js + Next Js + TypeScript + Redux + Styled Components
- [**GitHub Repo**](https://github.com/saddamarbaa/facebook-clone-app-nex-js)
- A Facebook clone with user authentication, post creation, and social interaction features, using React and Redux.

---

### **Messenger Clone App** built with React Js + Next Js + Redux + Styled Components + Material-UI
- [**GitHub Repo**](https://github.com/saddamarbaa/messenger-clone-app-nex-js)
- A real-time messaging app clone with user authentication and message functionality, built with React, Next.js, and Material-UI.

---

### **Gmail Clone App** built with React Js + Next Js + TypeScript + Styled Components + Material-UI + Firebase Realtime Database + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/Gmail-clone-app-nex-js)
- A Gmail clone with email management, inbox UI, and user authentication, built with React and Firebase.

---

### **Signal Clone App** built with React Native + TypeScript + Expo + React Navigation + Firebase Realtime Database + User Authentication + Passwordless Authentication with Magic Link
- [**GitHub Repo**](https://github.com/saddamarbaa/signal-clone-app-reactnative-typescript)
- A Signal clone app with secure messaging, user authentication, and passwordless login using Magic Link, built with React Native.

---

### **WhatsApp Clone App** built with React Js + React Context API + Styled Components + Material-UI + Firebase Realtime Database + Firebase Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/whatsapp-clone)
- A WhatsApp clone featuring real-time messaging, user authentication, and Firebase backend, built with React.

---

### **Slack Clone App** built with React Js + Next Js + Styled Components + firebase-hooks + Material-UI
- [**GitHub Repo**](https://github.com/saddamarbaa/slack-clone-app-nex-js)
- A Slack clone with channel management, real-time messaging, and user authentication, built with React, Next.js, and Firebase.

---

### **Airbnb Clone App** built with React Js + Next Js + Redux + Tailwind CSS
- [**GitHub Repo**](https://github.com/saddamarbaa/airbnb-clone-app-nex-js)
- A clone of Airbnb with property listings, booking functionality, and responsive design, built with React and Next.js.

---

### **Amazon Clone App** built with React Js + TypeScript + Redux + Styled Components
- [**GitHub Repo**](https://github.com/saddamarbaa/amazon-clone-app-react-typescript)
- A clone of Amazon's frontend with product listings, cart management, and user authentication, built with React and TypeScript.

---

### **Tesla Clone App** built with React Js + TypeScript + Redux + Styled Components + Material-UI + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/tesla-clone-app-react-typescript)
- A Tesla clone with car management, user authentication, and an interactive UI, built with React and TypeScript.

---



## Screenshots

## Home Page 
![image](https://user-images.githubusercontent.com/51326421/122394282-ff9a8b00-cf9f-11eb-8ed5-1d10afa3be27.png)

##  Welcoming Page 
![image](https://user-images.githubusercontent.com/51326421/122414571-712f0500-cfb1-11eb-93dc-3778fcb49aad.png)



##  Sign in page 
![image](https://user-images.githubusercontent.com/51326421/122414725-8e63d380-cfb1-11eb-84f7-f9e3a26b88e1.png)




## Edit Profile Page
![image](https://user-images.githubusercontent.com/51326421/122415024-c1a66280-cfb1-11eb-95f1-259bc66f4b03.png)









