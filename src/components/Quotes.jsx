const Quote = ({ text }) => {
    return (
      <div className=" p-2 rounded-md mb-4 bg-[#e5d3b3]">
        <p className="text-lg text-[#664229]">
          {`"${text}"`}
        </p>
      </div>
    );
  };
  
  export default Quote;