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
