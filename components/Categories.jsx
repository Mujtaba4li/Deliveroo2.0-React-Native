import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { client, urlFor } from "../lib/client";

const Categories = () => {
  const [categoriesData, setcategoriesData] = useState([]);
  useEffect(() => {
    const query = `*[ _type=="category"]{
      ...,
        
        }
      `;
    client.fetch(query).then((res) => {
      setcategoriesData(res);
    });
  }, []);

  console.log(categoriesData);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 6,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categoriesData?.map((cat)=>(
        
        <CategoryCard
        key={cat._id}
          title={cat.title}
          imgURL={urlFor(cat.image).width(200).url()}
          Title={cat.name}
        />
      ))}

   
    </ScrollView>
  );
};

export default Categories;
