import { createContext, ReactElement, useState } from 'react';

const initialCategory = '';

export const CategoryContext = createContext({
  category: initialCategory,
  setCategory: (initialCategory) => initialCategory,
});

interface CategoryProviderProps {
  children: ReactElement;
}

const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [category, setCategory] = useState(initialCategory);
  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
