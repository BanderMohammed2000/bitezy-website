// function CategoryCard({ title, text, image }) {
//   return (
//     <div className="flex space-x-3">
//       <img src={image} alt={title} className="w-16 h-16 drop-shadow-lg" />
//       <div className="flex flex-col space-y-1">
//         <h3 className="text-blackSoft font-medium capitalize">{title}</h3>
//         <p className="text-graySoft text-xs leading-snug w-3/4">{text}</p>
//       </div>
//     </div>
//   );
// }

// export default CategoryCard;

function CategoryCard({ title, text, image }) {
  return (
    <div className="flex items-center gap-4">
      <img src={image} alt={title} className="w-14 h-14 drop-shadow-lg" />
      <div className="flex flex-col space-y-1">
        <h3 className="text-blackSoft font-medium capitalize">{title}</h3>
        <p className="text-graySoft text-xs leading-snug max-w-xs">{text}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
