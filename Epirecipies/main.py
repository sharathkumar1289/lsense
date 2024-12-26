

import json

with open('recipes.json', 'r') as f:
    recipes = json.load(f)

with open('bulk_recipes.json', 'w') as f:
    for i, recipe in enumerate(recipes):
    
        f.write(json.dumps({ "index": { "_index": "recipes", "_id": str(i+1) } }) + "\n")
       
        f.write(json.dumps(recipe) + "\n")


