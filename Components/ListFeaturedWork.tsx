import CardProjects from "@/Components/Ui/CardProjects";

const ListFeaturedWork = () => {
  return (
    <div className="grid gap-6 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <CardProjects
        href="/work/details"
        image="/Projects/1.jpg"
        category="E-commerce"
        title="Shop Tech"
      />
      <CardProjects
        href="/work/details"
        image="/Projects/2.jpg"
        category="Galery"
        title="Gallery Photos"
      />
      <CardProjects
        href="/work/details"
        image="/Projects/3.jpg"
        category="Website"
        title="Loud & Proud"
      />
    </div>
  );
};

export default ListFeaturedWork;
