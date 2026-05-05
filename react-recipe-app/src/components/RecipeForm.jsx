import { useState } from 'react';
const RecipeForm = () => {
  const [recipe, setRecipe] = useState({

  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={handleOnSubmit} className='recipe-form'>
    </Form>
  );
};
export default RecipeForm;