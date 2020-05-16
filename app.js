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

var testAPIRouter=require("./routes/testAPI");



switch001_relay_0_OFF_APIRouter=require("./routes/switch001_relay_0_turnOFF");
switch001_relay_0_ON_APIRouter=require("./routes/switch001_relay_0_turnON");
switch001_relay_0_CheckStatus=require("./routes/switch001_relay_0_revealSTATE");


//switch001_relay_0_CheckStatus=require("./routes/switch001_relay_0_revealSTATE")(parameter_1);

switch001_relay_1_OFF_APIRouter=require("./routes/switch001_relay_1_turnOFF");
switch001_relay_1_ON_APIRouter=require("./routes/switch001_relay_1_turnON");
switch001_relay_1_CheckStatus=require("./routes/switch001_relay_1_revealSTATE");

switch001_relay_2_OFF_APIRouter=require("./routes/switch001_relay_2_turnOFF");
switch001_relay_2_ON_APIRouter=require("./routes/switch001_relay_2_turnON");
switch001_relay_2_CheckStatus=require("./routes/switch001_relay_2_revealSTATE");

switch001_relay_3_OFF_APIRouter=require("./routes/switch001_relay_3_turnOFF");
switch001_relay_3_ON_APIRouter=require("./routes/switch001_relay_3_turnON");
switch001_relay_3_CheckStatus=require("./routes/switch001_relay_3_revealSTATE");

switch001_relay_4_OFF_APIRouter=require("./routes/switch001_relay_4_turnOFF");
switch001_relay_4_ON_APIRouter=require("./routes/switch001_relay_4_turnON");
switch001_relay_4_CheckStatus=require("./routes/switch001_relay_4_revealSTATE");

switch001_relay_5_OFF_APIRouter=require("./routes/switch001_relay_5_turnOFF");
switch001_relay_5_ON_APIRouter=require("./routes/switch001_relay_5_turnON");
switch001_relay_5_CheckStatus=require("./routes/switch001_relay_5_revealSTATE");

switch001_relay_6_OFF_APIRouter=require("./routes/switch001_relay_6_turnOFF");
switch001_relay_6_ON_APIRouter=require("./routes/switch001_relay_6_turnON");
switch001_relay_6_CheckStatus=require("./routes/switch001_relay_6_revealSTATE");

switch001_relay_7_OFF_APIRouter=require("./routes/switch001_relay_7_turnOFF");
switch001_relay_7_ON_APIRouter=require("./routes/switch001_relay_7_turnON");
switch001_relay_7_CheckStatus=require("./routes/switch001_relay_7_revealSTATE");

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

app.use("/switch001_relay_0_turnON",switch001_relay_0_ON_APIRouter);
app.use("/switch001_relay_0_turnOFF",switch001_relay_0_OFF_APIRouter);  
app.use("/switch001_relay_0_CheckStatus",switch001_relay_0_CheckStatus);

app.use("/switch001_relay_1_turnON",switch001_relay_1_ON_APIRouter);
app.use("/switch001_relay_1_turnOFF",switch001_relay_1_OFF_APIRouter);  
app.use("/switch001_relay_1_CheckStatus",switch001_relay_1_CheckStatus);

app.use("/switch001_relay_2_turnON",switch001_relay_2_ON_APIRouter);
app.use("/switch001_relay_2_turnOFF",switch001_relay_2_OFF_APIRouter);  
app.use("/switch001_relay_2_CheckStatus",switch001_relay_2_CheckStatus);

app.use("/switch001_relay_3_turnON",switch001_relay_3_ON_APIRouter);
app.use("/switch001_relay_3_turnOFF",switch001_relay_3_OFF_APIRouter);  
app.use("/switch001_relay_3_CheckStatus",switch001_relay_3_CheckStatus);

app.use("/switch001_relay_4_turnON",switch001_relay_4_ON_APIRouter);
app.use("/switch001_relay_4_turnOFF",switch001_relay_4_OFF_APIRouter);  
app.use("/switch001_relay_4_CheckStatus",switch001_relay_4_CheckStatus);

app.use("/switch001_relay_5_turnON",switch001_relay_5_ON_APIRouter);
app.use("/switch001_relay_5_turnOFF",switch001_relay_5_OFF_APIRouter);  
app.use("/switch001_relay_5_CheckStatus",switch001_relay_5_CheckStatus);

app.use("/switch001_relay_6_turnON",switch001_relay_6_ON_APIRouter);
app.use("/switch001_relay_6_turnOFF",switch001_relay_6_OFF_APIRouter);  
app.use("/switch001_relay_6_CheckStatus",switch001_relay_6_CheckStatus);

app.use("/switch001_relay_7_turnON",switch001_relay_7_ON_APIRouter);
app.use("/switch001_relay_7_turnOFF",switch001_relay_7_OFF_APIRouter);  
app.use("/switch001_relay_7_CheckStatus",switch001_relay_7_CheckStatus);



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
