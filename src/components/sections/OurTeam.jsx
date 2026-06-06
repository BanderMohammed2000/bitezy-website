import teamData from "../../data/teamData";
import TeamCard from "../ui/TeamCard";
function OurTeam() {
  return (
    <section id="team" className="container mx-auto pt-10 lg:pt-14 pb-6 px-6">
      <h2 className="text-2xl w-fit mx-auto text-blackSoft font-medium capitalize relative horizontal-line">
        meet our best team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {teamData.map((data) => (
          <TeamCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
