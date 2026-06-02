function TeamCard({ title, text, image }) {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <img
        src={image}
        alt={title}
        className="w-48 h-60 drop-shadow-lg rounded-xl"
      />
      <div className="space-y-1">
        <h3 className="text-blackSoft font-medium capitalize">{title}</h3>
        <p className="text-graySoft text-sm capitalize">{text}</p>
      </div>
    </div>
  );
}

export default TeamCard;
