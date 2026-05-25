function Button({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`${className} rounded-[999px] py-2 px-4`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
