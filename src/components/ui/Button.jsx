function Button({ children, className = "", isStyle = true, ...props }) {
  function handleClick(e) {
    e.preventDefault();
    alert("This feature will be available soon.");
  }
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`${isStyle ? `rounded-[999px] py-2 px-4 shadow-lg` : null} ${className} transition-all duration-300 ease-out`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
