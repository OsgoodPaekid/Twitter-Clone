"use client";

export default function PaginationComponent({ goNext, goPrev }) {
  return (
    <div className="flex flex-row items-center">
      <div className="mr-20 ml-10">
        <button className="bg-blue-400 rounded-lg p-2" onClick={goPrev}>
          Previous
        </button>
      </div>
      <div>
        <button className="bg-blue-400 ml-20 rounded-lg p-2" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
}
