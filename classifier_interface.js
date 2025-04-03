import { Client } from 'https://cdn.jsdelivr.net/npm/@gradio/client@latest';

export async function loaded(reader) {
    const image = photo.files[0];
    const client = await Client.connect("phihungandre/sport-classifier");
    const result = await client.predict("/predict", {
        image: image,
    });

    console.log(result.data);
    const label = result.data[0]['label']; // Adjust according to the API response format
    results.innerHTML = `
    <br/><img src="${reader.result}" width="300"> 
    <p/> sport: ${label}</p> 
    <p/>probability: ${result.data[0]['confidences'][0]['confidence']}</p>`;
}
