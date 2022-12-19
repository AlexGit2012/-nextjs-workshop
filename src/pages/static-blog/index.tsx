import React from "react";
import AnimalBlog from "../../components/AnimalBlog/AnimalBlog";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIMALS } from "../../queries/queries";

const Blog = () => {
  const { loading, data } = useQuery(GET_ALL_ANIMALS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { animals } = data;

  return (
    <div>
      <AnimalBlog animalList={animals} />
    </div>
  );
};

export default Blog;
