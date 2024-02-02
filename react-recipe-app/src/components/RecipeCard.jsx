

export const RecipeCard = ({ id, name, description, ingredients}) => {
    return (
        <div className ="">
            <div className="">
                <div><input type="checkbox" value={name} id={name}/><label className=""><b>{name}</b></label></div>
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
