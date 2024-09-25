import { usePagination } from "../contexts/PaginationContext";
import styled from "styled-components";
import ProductCard from "@/components/ProductCard";

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  span {
    align-self: center;
    color: #333;
    margin: 0 4px;
  }
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default function Home() {
  const {
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
  } = usePagination();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
        />
        <Select value={limit} onChange={handleLimitChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </Select>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </SearchContainer>
      <Grid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Pagination>
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || loading}
        >
          Previous
        </Button>
        <span>Page {page}</span>
        <Button onClick={() => handlePageChange(page + 1)} disabled={loading}>
          Next
        </Button>
      </Pagination>
    </Container>
  );
}
