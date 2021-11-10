import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Idly Sambar",
      "A tasty combination of fluffy idly and spicy sambar",
      "https://www.linkpicture.com/q/idli-sambar-1.jpg",
      [new Ingredient("Ravo", 1), new Ingredient("Masala", 1)]
    ),
    new Recipe(
      "Dosa",
      "A tasty roasted tiffin",
      "https://www.linkpicture.com/q/thumb_700_0_0_0_auto.jpg",
      [new Ingredient('Minapappu',1), new Ingredient('Groudnut',1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredient(ingredients);
  }
}
