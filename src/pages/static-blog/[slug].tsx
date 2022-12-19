import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ANIMAL } from "../../queries/queries";
import AnimalPage from "../../components/AnimalPage/AnimalPage";

const Slug = () => {
  const router = useRouter();

  const { loading, data } = useQuery(GET_ANIMAL, {
    variables: {
      title: router?.query.slug,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { animal } = data;

  return (
    <>
      <AnimalPage animal={animal} />
    </>
  );
};

export default Slug;
