import { useState } from "react";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";

import ReactPaginate from "react-paginate";
import ApiData from "../../data.json";
import "./page.css";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [postperPage, setpostperPage] = useState(6);

  const data = ApiData.cars;

  const start = currentPage * postperPage;
  const end = start + postperPage;

  const [query, setQuery] = useState("");

  const getData = (q) => {
    setQuery(q);
    console.log(q);
  };

  const currentPost = data.slice(start, end);
  const pageCount = Math.ceil(data.length / postperPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
    console.log(currentPage);
  };
  return (
    <>
      <NavBar getData={getData} />

      <div className="con">
        {currentPost
          .filter((user) => user.car.toLowerCase().includes(query))
          .map((e) => (
            <Card
              key={e.id}
              img={e.img}
              title={e.car}
              milage={e.car_mileage}
              year={e.car_model_year}
              model={e.company}
              price={e.price}
              engine={e.engine_type}
              company={e.company}
            />
          ))}
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        nextLinkClassName={"nextbttns"}
        previousLinkClassName={"previousbttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default Page;
