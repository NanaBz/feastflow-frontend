<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Canteen Ordering System (FeastFlow)

## Project Overview
FeastFlow is a modern canteen ordering system that allows users to browse menu items, place orders, track their orders, and earn loyalty points. The system features user authentication, profile management, and a comprehensive ordering system with cart functionality.

## Deployment Link
Frontend Application: [FeastFlow](https://github.com/NanaBz/feastflow-frontend)
I'm not entirely sure if the frontend works individually because the backend is in a seperate repository so this is the backend: https://github.com/NanaBz/Exam

## Login Details
Test credentials for accessing the system:
- Email: testuser@example.com
- Password: password123

## Feature Checklist
✅ User Registration & Profile Management
- Secure registration and login system
- Profile management with dietary restrictions
- User preferences storage

✅ Menu Display & Customization
- Comprehensive menu display
- Item customization options
- Detailed item information (price, category)
- Note: Currently, menu item images are not displaying due to hosting limitations

✅ Ordering System with Cart
- Add/remove items from cart
- Order review and modification
- Order confirmation system
- Total calculation with discounts

✅ Order Tracking & Loyalty Program
- Real-time order status tracking
- Points earned with each order
- Point redemption system for discounts
- Tiered loyalty program:
  - 1-20 cedis = 1 point
  - 30-50 cedis = 2 points
  - 50-100 cedis = 3 points
  - 100+ cedis = 5 points
- Discount tiers:
  - 10 points = 5% discount
  - 20 points = 10% discount
  - 30 points = 15% discount
  - 40 points = 20% discount
  - 50 points = 30% discount

## Installation Instructions
To run the project locally:

1. Clone the repository:
bash
git clone https://github.com/NanaBz/feastflow-frontend.git
2. Install dependencies:
bash
cd feastflow
npm install
3. Set up environment variables:
Create a .env file with:
REACT_APP_API_URL=https://canteen-management-system-9znm.onrender.com
4. Start the development server:
bash
npm start



## API Documentation

### Core Endpoints:

1. User Management:
- POST /create_new_user_info - Register new user
- POST /login - User authentication
- GET /get_user_info/:id - Get user profile
- PUT /update_user_info/:id - Update user profile

2. Menu Management:
- GET /get_menu_items - Retrieve menu items
- POST /create_menu_item - Add new menu item
- PUT /update_menu_item/:id - Update menu item
- DELETE /delete_menu_item/:id - Remove menu item

3. Order Management:
- POST /create_order - Place new order
- GET /get_user_orders/:id - Get user's orders
- PUT /update_order_status/:id - Update order status

## Known Limitations
- Menu item images are currently not displaying due to hosting limitations
- All other features are fully functional

## Technical Stack
- Frontend: React.js
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT
- Deployment: Render

## Future Improvements
- Implement image hosting solution for menu items
- Add real-time order notifications
- Enhance mobile responsiveness
- Add payment gateway integration
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
