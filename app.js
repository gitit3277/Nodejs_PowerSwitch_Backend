var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//Step1 
//Allows cross domain access 
///////
var cors=require("cors");


/////////////////


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//Step 2 
//import the javascript file and give it a name 
//////////////////////////////

testAPIRouter=require("./routes/testAPI");

relay_0_OFF_APIRouter=require("./routes/relay_0_turnOFF");
relay_0_ON_APIRouter=require("./routes/relay_0_turnON");
relay_0_CheckStatus=require("./routes/relay_0_revealSTATE");

relay_1_OFF_APIRouter=require("./routes/relay_1_turnOFF");
relay_1_ON_APIRouter=require("./routes/relay_1_turnON");
relay_1_CheckStatus=require("./routes/relay_1_revealSTATE");

relay_2_OFF_APIRouter=require("./routes/relay_2_turnOFF");
relay_2_ON_APIRouter=require("./routes/relay_2_turnON");
relay_2_CheckStatus=require("./routes/relay_2_revealSTATE");

relay_3_OFF_APIRouter=require("./routes/relay_3_turnOFF");
relay_3_ON_APIRouter=require("./routes/relay_3_turnON");
relay_3_CheckStatus=require("./routes/relay_3_revealSTATE");

relay_4_OFF_APIRouter=require("./routes/relay_4_turnOFF");
relay_4_ON_APIRouter=require("./routes/relay_4_turnON");
relay_4_CheckStatus=require("./routes/relay_4_revealSTATE");

relay_5_OFF_APIRouter=require("./routes/relay_5_turnOFF");
relay_5_ON_APIRouter=require("./routes/relay_5_turnON");
relay_5_CheckStatus=require("./routes/relay_5_revealSTATE");

relay_6_OFF_APIRouter=require("./routes/relay_6_turnOFF");
relay_6_ON_APIRouter=require("./routes/relay_6_turnON");
relay_6_CheckStatus=require("./routes/relay_6_revealSTATE");

relay_7_OFF_APIRouter=require("./routes/relay_7_turnOFF");
relay_7_ON_APIRouter=require("./routes/relay_7_turnON");
relay_7_CheckStatus=require("./routes/relay_7_revealSTATE");

////////////////////////////////


var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());

//Step 3
/////////////////////////////

app.use(cors());


////////////////////////////////



app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//Step 4 ,  use javascript to create webpage
/////////////////////////////////////////////////



app.use("/testAPI",testAPIRouter);

app.use("/relay_0_turnON",relay_0_ON_APIRouter);
app.use("/relay_0_turnOFF",relay_0_OFF_APIRouter);  
app.use("/relay_0_CheckStatus",relay_0_CheckStatus);

app.use("/relay_1_turnON",relay_1_ON_APIRouter);
app.use("/relay_1_turnOFF",relay_1_OFF_APIRouter);  
app.use("/relay_1_CheckStatus",relay_1_CheckStatus);

app.use("/relay_2_turnON",relay_2_ON_APIRouter);
app.use("/relay_2_turnOFF",relay_2_OFF_APIRouter);  
app.use("/relay_2_CheckStatus",relay_2_CheckStatus);

app.use("/relay_3_turnON",relay_3_ON_APIRouter);
app.use("/relay_3_turnOFF",relay_3_OFF_APIRouter);  
app.use("/relay_3_CheckStatus",relay_3_CheckStatus);

app.use("/relay_4_turnON",relay_4_ON_APIRouter);
app.use("/relay_4_turnOFF",relay_4_OFF_APIRouter);  
app.use("/relay_4_CheckStatus",relay_4_CheckStatus);

app.use("/relay_5_turnON",relay_5_ON_APIRouter);
app.use("/relay_5_turnOFF",relay_5_OFF_APIRouter);  
app.use("/relay_5_CheckStatus",relay_5_CheckStatus);

app.use("/relay_6_turnON",relay_6_ON_APIRouter);
app.use("/relay_6_turnOFF",relay_6_OFF_APIRouter);  
app.use("/relay_6_CheckStatus",relay_6_CheckStatus);

app.use("/relay_7_turnON",relay_7_ON_APIRouter);
app.use("/relay_7_turnOFF",relay_7_OFF_APIRouter);  
app.use("/relay_7_CheckStatus",relay_7_CheckStatus);



//////////////////////////////////////////////




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
