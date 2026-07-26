import React from "react";
import { useParams } from "react-router";
import CollectionData from "../assets/data/CollectionData";
import CollectionCard from "../components/CollectionCard";

const Collection = () => {
  const { category } = useParams();

  const filteredCollection = CollectionData.filter(
    (item) => item.category === category,
  );

  return (
    <div>
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold uppercase">{category} Collection</h1>

        <p className="text-gray-500 mt-3">
          Discover our latest {category} fashion collection.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {filteredCollection.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
