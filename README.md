# Classificateur d'Images de Sport

Ce projet est un classificateur d'images de sport, permettant de prédire le type de sport représenté sur une image donnée. Il est basé sur une API que j'ai créée avec [Gradio](https://gradio.app/) et déployée sur [Hugging Face Spaces](https://huggingface.co/spaces).

## Fonctionnalités

- Téléchargez une image depuis votre appareil.
- L'API analyse l'image et retourne une prédiction du type de sport.
- Simple et rapide grâce à l'intégration de Gradio et Hugging Face.

## Utilisation

### 1. Interface Gradio sur Hugging Face
Vous pouvez accéder à l'interface directement sur [Hugging Face Spaces](https://phihungandre-sport-classifier.hf.space). 

### 2. Utilisation du code
Pour utiliser l'API dans votre propre projet, voici un exemple de code en JavaScript :
```javascript
import { Client } from 'https://cdn.jsdelivr.net/npm/@gradio/client@latest';

async function classifyImage(imageFile) {
    const client = await Client.connect("phihungandre/sport-classifier");
    const result = await client.predict("/predict", {
        image: imageFile,
    });
    const prediction = await result.json();
    console.log("Résultat :", prediction.data);
}
```
### 3. Utilisation sur le site github pages
Une implémentation d'interface en javascript et en html a été faite en démo pour accéder à l'API, vous pouvez l'utiliser via [ce lien](https://phihungandre.github.io/sport-classifier/)
