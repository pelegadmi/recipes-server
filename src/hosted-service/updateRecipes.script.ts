import RecipeRetriever from '@utils/RecipeRetriever/recipeRetriever.util';
import RecipeService from '@services/recipe.service';

const delay = async (ms: number) => {
  await new Promise(resolve => setTimeout(resolve, ms));
};

const recipeRetriever = new RecipeRetriever();
const recipeService = new RecipeService();

const updateRecipes = (recipeQuery: string) => {
  recipeRetriever.retrieve(recipeQuery).then(recipes =>
    recipes.forEach(recipe => {
      recipeService
        .createRecipe(recipe)
        .then(() => {
          console.log('${recipeQuery} recipe added');
        })
        .then(() => {
          console.log('${recipeQuery} recipe already exists');
        });
    }),
  );
};
const main = () => {
  const flag = true;
  const dayInMilliseconds = 86400000;

  while (flag) {
    console.log('Recipes are being Updated');

    updateRecipes('pasta');
    updateRecipes('chicken');

    console.log('Updated Successfully');

    delay(dayInMilliseconds).then(() => console.log('process is being delayed for a day'));
  }
};

main();
