const mongoose = require('mongoose')

module.exports = {
  isTeacher: (req, res, next) => req.currentUser.role === 'Teacher' ? next() : res.status(403).json({ message: 'Unauthorized' }),
  isAdmin: (req, res, next) => req.currentUser.role === 'Admin' ? next() : res.status(403).json({ message: 'Unauthorized' }),
  isValidId: (req, res, next) => mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.status(404).json({ message: 'Invalid ID' })
}
