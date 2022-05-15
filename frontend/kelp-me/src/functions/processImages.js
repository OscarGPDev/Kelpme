const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


export const convertImageToB64 = async (imagen) => ({
    "name": imagen.imagen.name,
    "file": (await toBase64(imagen.imagen)).split(',')[1],
});
