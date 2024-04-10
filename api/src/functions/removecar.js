const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');
app.http('removecar',{
  
