const Restaurant = require("../Model/restaurantSchema");

const searchRestaurants = async (req, res) => {
    try {
        const { cuisine, location, minRating, page = 1, limit = 10 } = req.query;

        // Build filter object
        const filter = {};
        if (cuisine) filter.cuisine = cuisine;
        if (location) filter.location = location;
        if (minRating) filter.rating = { $gte: parseFloat(minRating) };

        // Pagination
        const skip = (page - 1) * limit;

        // Get filtered results
        const [results, total, cuisines] = await Promise.all([
            Restaurant.find(filter).skip(skip).limit(parseInt(limit)),
            Restaurant.countDocuments(filter),
            Restaurant.distinct("cuisine"),
        ]);

        res.json({
            results,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / limit),
            availableCuisines: cuisines,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = searchRestaurants;
