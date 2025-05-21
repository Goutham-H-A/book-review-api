const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const bookId = req.params.id;

  const existing = await Review.findOne({ user: req.user.id, book: bookId });
  if (existing) return res.status(400).json({ message: 'Review already exists' });

  const review = await Review.create({ book: bookId, user: req.user.id, rating, comment });
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user.id)
    return res.status(403).json({ message: 'Unauthorized' });

  review.rating = req.body.rating;
  review.comment = req.body.comment;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user.id)
    return res.status(403).json({ message: 'Unauthorized' });

  await review.deleteOne();
  res.json({ message: 'Review deleted' });
};
