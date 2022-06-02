const mongoose = require('mongoose')
const Course = require('../models/course.model')

const connectionString = process.env.NODE_ENV === 'production'
  ? process.env.DB_REMOTE_PROD
  : process.env.DB_REMOTE_DEV

mongoose.connect(connectionString)

Course.collection.drop()

const courses = [
  {
    title: 'Angular',
    price: 9.99,
    duration: 6.5
  },
  {
    title: 'React',
    price: 9.39,
    duration: 6.5
  },
  {
    title: 'Bootstrap',
    price: 9.99,
    duration: 10.25
  },
  {
    title: 'Javascript',
    price: 300,
    duration: 8
  },
  {
    title: 'SASS',
    price: 9.99,
    duration: 6.5
  }

]

Course
  .create(courses)
  .then(coursesCreated => {
    console.log(`Created ${coursesCreated.length} courses`)
    mongoose.connection.close()
  })
  .catch(error => console.log('An error occured', error))
