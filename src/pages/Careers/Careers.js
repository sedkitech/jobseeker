import { Link, useLoaderData } from "react-router-dom"
import { AddCareer } from "./AddCareer"
import { useState } from "react";
import { Button } from '@mantine/core';
import { useQuery } from "react-query";
import { careersQuery, getCareers } from "../../utilities/loaders/CareersLoader";
import { TextSkeleton } from "../../components/TextSkeleton";
import { CareerList } from './CareerList';
// import { useQuery } from '@tanstack/react-query'

export const Careers = () => {

  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: careers
  // } = useQuery("careers", getCareers)

  const {
    isLoading,
    isError,
    error,
    data: careers
  } = useQuery(careersQuery())

  console.log('careers', careers);

  // const careers = useLoaderData()
  const [showAddForm, setShowAddForm] = useState("none");

  return (
    <>
      <Button uppercase
        variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={() => setShowAddForm("block")}
        disabled={showAddForm === 'none' ? false : true}
      >
        Add Career
      </Button>

      <section style={{ display: showAddForm }}>
        <AddCareer />
      </section>

      {isLoading ? <TextSkeleton /> : <CareerList careers={careers} />}
    </>
  )
}
