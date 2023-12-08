const Quote = ({ text }) => {
    return (
      <div className=" p-2 rounded-md mb-4 bg-white">
        <p className="text-lg italic text-[#664229]">
          {`"${text}"`}
        </p>
      </div>
    );
  };
  
  export default Quote;