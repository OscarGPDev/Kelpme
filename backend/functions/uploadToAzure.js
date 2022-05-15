const {BlobServiceClient} = require('@azure/storage-blob');
const {v1: uuidv1} = require('uuid');
const Readable = require('stream').Readable
require('dotenv').config()
/*
    This function uploads a file object to azure, the parameter must be an object that contains: filename, file(the file data in b64)
* */
async function uploadToAzure({file, filename}) {
    const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
    if (!AZURE_STORAGE_CONNECTION_STRING) {
        throw Error("Azure Storage Connection string not found");
    }
    const blobServiceClient = BlobServiceClient.fromConnectionString(
        AZURE_STORAGE_CONNECTION_STRING
    );
    const containerName = process.env.CONTAINER_NAME;
    const containerClient = blobServiceClient.getContainerClient(containerName);
    // Create a unique name for the blob
    const blobName = `${uuidv1()}-${filename}`;
    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    console.log("\nUploading to Azure storage as blob:\n\t", blobName);
    const imgBuffer = Buffer.from(file, 'base64')
    const s = new Readable()
    s.push(imgBuffer)
    s.push(null)
    const uploadBlobResponse = await blockBlobClient.uploadStream(s, s.length);
    return blockBlobClient.url;
}
module.exports ={uploadToAzure}