

export const RecipeCard = ({ id, name, description, ingredients, cookTemp, lastCooked, cookInstructions}) => {
    return (
        <div className ="recipe-card">
            <div className="recipe-card-body">
                <div className="recipe-name"><label className=""><b><u>{name}</u></b></label></div>
                <p className="recipe-description">
                    {description}
                </p>
                <p>Ate {lastCooked} days ago</p>
                <p>Cooking Instructions:
                    <ul>
                    {cookInstructions.map(cookInstructions => {
                    return(<p>{cookInstructions}</p>);
                    })}
                    </ul>
                </p>
                <p className="ingredient-box">
                {ingredients.map(ingredient => {
                    return(<p>{ingredient}</p>);
                })}
                </p>
            </div>
        </div>
    );
};
