import { useLoaderData } from "react-router-dom";

const Cards = () => {
  const allData = useLoaderData(); // This will fetch the data
  console.log(allData); // This should log the fetched data now

  return (
    <div>
      <div className="text-center text-5xl font-bold">
        <h1>Delicious Food</h1>
      </div>
      <div>
        {/* You can map the fetched data here */}
        {allData && allData.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            {/* Add more details from your fetched data */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
