# MERN Proshop

- add meta description
- add title
- add font awesome CDN
- change favicon
- delete App.css

Go to bootswatch.com

- download bootstrap.min.css
- paste inside frontend/

Import bootstrap to main.js

Add react bootstrap
`npm install react-bootstrap`

serving products BACKEND routes
`http://localhost:5000/api/products/2`
git commit -m 'serving products - backend routes'

Import Data
`npm run data:import`

## Fix: error from errorhandler Cast to ObjectId failed for value to \_id instead of id

```
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params._id)
```

Redux
install redux devtool
$npm i redux react-redux redux-thunk redux-devtools-extension
store.js

- redux
  - createStore
  - combineReducers
  - applyMiddleware
- redux-thunk
  - thunk
- redux-devtools-extension
  - composeWithDevTools

Redux Flow
Start with the constants
Create a reducer
Add the reducer to the Store
Create Action
Go to the UI implement
import useDispatch,useSelector
useDispatch
import Actions
dispatch an Action
useSelector to get the state
useSelector state thru reducer from the store
destructure the state from useSelector

## Fix error - need to be \_id

```
productRoutes.js

router.get(
  '/:_id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params._id)
```
