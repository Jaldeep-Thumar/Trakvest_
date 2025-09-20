// File: api/debug.cjs
const fs = require('fs');
const path = require('path');

// This is a standard Vercel serverless function export
module.exports = (req, res) => {
  try {
    // Get the absolute path of the directory where this file is located
    const apiDirectory = path.resolve(__dirname);

    // Read all the file names synchronously from that directory
    const filesInApiFolder = fs.readdirSync(apiDirectory);

    // Send a success response with the list of files
    res.status(200).json({
      message: "Success! Files found in the /api directory:",
      directory: apiDirectory,
      files: filesInApiFolder,
    });
  } catch (error) {
    // If something goes wrong, send an error response
    res.status(500).json({ 
        message: "Failed to read the directory.",
        error: error.message 
    });
  }
};