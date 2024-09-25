import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchCategories, fetchProducts } from "../service/api";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function getCategories() {
      try {
        const categories = await fetchCategories();
        setCategories(categories);
      } catch (error) {
        setError(error.message);
      }
    }
    getCategories();
  }, []);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const newProducts = await fetchProducts(page, limit);
        setProducts(newProducts);
        setFilteredProducts(newProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [page, limit]);

  const filterProducts = () => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [search, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setSearch("");
    setSelectedCategory("");
  };

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
    setPage(1);
    setSearch("");
    setSelectedCategory("");
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <PaginationContext.Provider
      value={{
        products,
        filteredProducts,
        loading,
        error,
        page,
        search,
        limit,
        categories,
        selectedCategory,
        handleSearchChange,
        handlePageChange,
        handleLimitChange,
        handleCategoryChange,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);
