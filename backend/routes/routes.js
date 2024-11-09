import express from 'express';
import signUpRoute from './SignUp.js';
import signInRoute from './SignIn.js';
import fetchProducts from './FetchProducts.js'



const router = express.Router();

router.use('/signup', signUpRoute);
router.use('/signin', signInRoute);
router.use('/fetchproducts', fetchProducts);


// Add a product to the user's wishlist
// router.post('/wishlist', async (req, res) => {
//     const { userId, productId } = req.body;

//     if (!userId || !productId) {
//         return res.status(400).json({ error: "userId and productId are required" });
//     }

//     try {
//         // Add product to user's wishlist
//         await Account.findByIdAndUpdate(userId, { $addToSet: { wishlist: productId } });
//         res.json({ message: "Product added to wishlist" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
// // Fetch user's wishlist
// router.get('/wishlist', async (req, res) => {
//     const { userId } = req.body;

//     if (!userId) {
//         return res.status(400).json({ error: "userId is required" });
//     }

//     try {
//         // Find user and populate their wishlist
//         const user = await Account.findById(userId).populate('wishlist');
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.json(user.wishlist);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


export default router;
