// const fs = require('fs');
// const { google } = require('googleapis');

// const fs = require('fs');

// const GOOGLE_API_FOLDER_ID = '100VAF-jkqZilitPVBO1D-4OWQozCWpcs'

// async function uploadFile(){
//     try{
//         const auth = new google.auth.GoogleAuth({
//             keyFile: './googlekey.json',
//             scopes: ['https://www.googleapis.com/auth/drive']
//         })

//         const driveService = google.drive({
//             version: 'v3',
//             auth
//         })
//         const fileMetaData = {
//             'name': 'snowplace.jpg',
//             'parents': [GOOGLE_API_FOLDER_ID]
//         }

//         const media = {
//             mimeType: 'image/jpg',
//             body: fs.createReadStream('./snow.jpg')
//         }

//         const response = await driveService.files.create({
//             resource: fileMetaData,
//             media: media,
//             field: 'id'
//         })
//         return response.data.id

//     }catch(err){
//         console.log('Upload file error', err)
//     }
// }

// uploadFile().then(data => {
//     console.log(data)
//     //https://drive.google.com/uc?export=view&id=
// })




// driveService.js
const fs = require('fs');
const { google } = require('googleapis');

const GOOGLE_API_FOLDER_ID =process.env.GOOGLE_DRIVE_API_FOLDER_ID 
 // Replace with your folder ID

const auth = new google.auth.GoogleAuth({
  keyFile: './googlekey.json', // Path to your service account key file
  scopes: ['https://www.googleapis.com/auth/drive.file']
});

const driveService = google.drive({ version: 'v3', auth });

async function uploadFileToDrive(filePath, fileName, mimeType) {
  try {
    const fileMetaData = {
      name: fileName,
      parents: [GOOGLE_API_FOLDER_ID]
    };

    const media = {
      mimeType: mimeType,
      body: fs.createReadStream(filePath)
    };

    const response = await driveService.files.create({
      resource: fileMetaData,
      media: media,
      fields: 'id'
    });
    return response.data.id;
  } catch (err) {
    console.log('Upload file error', err);
    throw err;
  }
}

module.exports = { uploadFileToDrive };
