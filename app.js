var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const multer = require('multer')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var plansRouter = require('./routes/plans');
var messagesRouter = require('./routes/message');
var blogsRouter = require('./routes/blogs');
const Blogs= require('./routes/BlogsArray');

var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


app.get('/getBlogs', (req, res) => {
  res.send(Blogs);
})




app.get('/fetchImage/:file(*)', (req, res) => {
  let file = req.params.file;
  let fileLocation = path.join('./uploads/', file);
  // res.send({image: fileLocation});
  res.sendFile(`${fileLocation}`)
})


app.use(express.static('uploads')); 
app.use('/fetch', express.static('uploads'));

app.post('/addBlog', upload.single('avatar'), function (req, res, next) {
  Blogs.push({
    image: req.body.imageName,
    by: req.body.by_blog,
    date: req.body.date_blog,
    title: req.body.title_blog,
    description: req.body.description_blog,
    readmoreLink: req.body.readmoreLink_blog
  })
  res.send(`
  <button type="button" onclick="javascript:history.back()">Back</button>
  `)
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plans', plansRouter);
app.use('/messages', messagesRouter);
app.use('/blogs', blogsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;