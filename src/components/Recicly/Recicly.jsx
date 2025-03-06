export const Card = ({ children, className = "" }) => {
    return (
      <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  export const Title = ({ children, size = "lg" }) => {
    const sizes = {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl font-bold",
    };
  
    return <h1 className={`${sizes[size]} text-gray-900`}>{children}</h1>;
  };
  
  export const Button = ({ children, className = "", onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}
      >
        {children}
      </button>
    );
  };
  