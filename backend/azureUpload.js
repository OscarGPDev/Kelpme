const { BlobServiceClient } = require('@azure/storage-blob');
const { v1: uuidv1} = require('uuid');
require('dotenv').config()

async function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');
    const AZURE_STORAGE_CONNECTION_STRING =
        process.env.AZURE_STORAGE_CONNECTION_STRING;

    if (!AZURE_STORAGE_CONNECTION_STRING) {
        throw Error("Azure Storage Connection string not found");
    }
    const blobServiceClient = BlobServiceClient.fromConnectionString(
        AZURE_STORAGE_CONNECTION_STRING
    );

    // Create a unique name for the container
    // const containerName = "quickstart" + uuidv1();
    const containerName = "kelpme";

    console.log("\nCreating container...");
    console.log("\t", containerName);

    // Get a reference to a container
    const containerClient = blobServiceClient.getContainerClient(containerName);
    // Create the container
    const createContainerResponse = await containerClient.create();
    console.log(
        "Container was created successfully. requestId: ",
        createContainerResponse.requestId
    );
    // Create a unique name for the blob
    const blobName = "quickstart" + uuidv1() + ".txt";

    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    console.log("\nUploading to Azure storage as blob:\n\t", blobName);

    // Upload data to the blob
    const data = "Hello, World!";
    const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
    console.log(
        "Blob was uploaded successfully. requestId: ",
        uploadBlobResponse.requestId
    );
    console.log("\nListing blobs...");

    // List the blob(s) in the container.
    for await (const blob of containerClient.listBlobsFlat()) {
        console.log("\t", blob.name);
    }

}

main()
    .then(() => console.log('Done'))
    .catch((ex) => console.log(ex.message));