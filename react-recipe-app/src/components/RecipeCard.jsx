

export const RecipeCard = ({ id, name, description, ingredients}) => {
    return (
        <div className ="">
            <div className="">
                <h2 className="">{name}</h2>
                <p className="">
                    {description}
                </p>
                <p>
                {ingredients.map(ingredient => {
                    return(<p>{ingredient}</p>);
                })}
                </p>
            </div>
        </div>
    );
};
