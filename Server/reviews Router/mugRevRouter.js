const express = require('express');
const router = express.Router();
const Mug_Review = require('../reviews Model/mugRevModel');
const Mug = require('../models/mugModel');
const { isAuth } = require('../utils');

router.post('/', isAuth, async (req, res) => {
    const { rating, comment, title, mugId } = req.body;

    try {
        const mug = await Mug.findById(mugId);
        if (!mug) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const review = new Mug_Review({
            rating: Number(rating),
            title,
            comment,
            mug: mugId,
            user: req.user._id, // Assuming user is authenticated
        });

        const createdReview = await review.save();

        // Update product's reviews array and numReviews
        mug.mugreviews.push(createdReview._id);
        mug.numReviews = mug.mugreviews.length;

        // Save the updated product
        await mug.save();

        // Fetch the updated product with populated reviews
        const updatedMug = await Mug.findById(mugId).populate('mugreviews').exec();

        // Calculate the new average rating
        const reviewRatings = updatedMug.mugreviews.map(review => review.rating);
        const newRating = reviewRatings.reduce((acc, r) => acc + r, 0) / reviewRatings.length;

        // Update product's rating
        updatedMug.rating = newRating;
        await updatedMug.save();

        res.status(201).json({ message: 'Review created successfully', review: createdReview });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
