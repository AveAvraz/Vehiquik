"use client";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useCallback, useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchBar from "@/components/custom/SearchBar"; 

export default function VehicleClientSide({ data = [] }) {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const uniqueCategories = [
    ...new Set(
      data.flatMap((item) => item.categories?.map((cat) => cat.make) || [])
    ),
  ];

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  useEffect(() => {
    let filtered = data;

    // Filter by selectedCategory (checking each item's categories array)
    if (selectedCategory) {
      filtered = filtered.filter(
        (item) =>
          item.categories &&
          item.categories.some((cat) => cat.make === selectedCategory)
      );
    }

    
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          (item.model && item.model.toLowerCase().includes(searchQuery)) || 
          (item.categories &&
            Array.isArray(item.categories) && 
            item.categories.some((cat) =>
              cat.make.toLowerCase().includes(searchQuery)
            ))
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchQuery, data]);

  const truncate = (str, num) => {
    if (!str) return "";
    return str.length <= num ? str : str.slice(0, num) + "...";
  };

  const handlePageChange = useCallback(
    (pageNumber, event) => {
      event.preventDefault();
      setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
    },
    [totalPages]
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const generatePaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => handlePageChange(i, e)}
            className={`${currentPage === i ? "bg-primary text-white" : ""}`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <div className="w-full h-full p-6 ">
      <SearchBar onSearch={handleSearch} />
      {/* category */}
      <div className="flex justify-center space-x-4 my-4 p-7 items-center">
        <button
          className={`btn ${
            selectedCategory === ""
              ? "bg-primary  text-black py-3 px-6 rounded-full shadow-md"
              : ""
          } hover:text-primary dark:hover:text-primary capitalize`}
          onClick={() => setSelectedCategory("")}
        >
          All
        </button>

        {uniqueCategories.map((category) => (
          <button
            key={category}
            className={`btn ${
              selectedCategory === category
                ? "bg-primary  text-black py-3 px-6 rounded-full shadow-md"
                : ""
            } hover:primary  hover:text-primary  capitalize`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 place-items-center mx-auto">
        {paginatedData?.map((item) => {
          const imageUrl = item.previewImage?.asset.url;
          return (
            <div
              key={item._id}
              className="w-full max-w-[45rem] md:max-w-[45rem] lg:max-w-[45rem]  h-[550px] transition-transform duration-300 hover:scale-105"
            >
              <a href={`/vehicle/${item.slug}`} className="block group">
                <Card className="relative w-full h-[450px] flex flex-col justify-between rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-in-out bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l hover:from-secondary hover:to-primary hover:scale-105 before:absolute before:inset-0 before:bg-primary before:blur-lg before:opacity-30 hover:before:opacity-50 hover:before:blur-xl hover:shadow-lg hover:shadow-primary/70">
                  {/* Image Section */}
                  <div className="relative w-full h-[70%] overflow-hidden rounded-t-xl border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-blue-500 hover:border-glow transition-all duration-300 ease-in-out">
                    {/* Violet Glow */}
                    <div className="absolute inset-0 z-0 bg-violet-500 blur-lg opacity-30 transition duration-700 ease-in-out hover:opacity-50 hover:blur-xl"></div>

                    <Image
                      src={imageUrl}
                      alt={item.previewImage?.alt || item.slug}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={true}
                      className="transition-transform duration-500 group-hover:scale-110 rounded-t-xl"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {truncate(item.model, 40)}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-800">
                        {truncate(item.description, 100)}
                      </CardDescription>
                    </div>

                    {/* Footer Section */}
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-800 hover:text-secondary transition-colors duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v4m0 0v4m0-4h18M3 7h18M5 15h2m4 0h2m4 0h2"
                          />
                        </svg>
                        <span className="text-xs text-gray-900 hover:text-white transition-colors duration-300">
                          {item.categories[0].make}
                        </span>
                      </div>

                      {/* "Read More" Button */}
                      <button
                        onClick={() =>
                          (window.location.href = `/vehicle/${item.slug}`)
                        }
                        className="text-sm font-medium text-primary hover:text-white bg-transparent border border-primary hover:border-secondary px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out flex items-center space-x-2"
                      >
                        <span>Read More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Card>
              </a>
            </div>
          );
        })}
      </div>
      <div className="w-full h-full flex flex-col items-center p-10">
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              {/* Conditionally render Previous button */}
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    onClick={(e) => handlePageChange(currentPage - 1, e)}
                  />
                </PaginationItem>
              )}
              {generatePaginationItems()}

              {/* Conditionally render Next button */}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    onClick={(e) => handlePageChange(currentPage + 1, e)}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
