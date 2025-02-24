import chica from "../assets/chica.png";

const profiles = [
  {
    id: 1,
    name: "Rosa",
    age: 35,
    education: "UCLM",
    location: "Toledo",
    job: "Web Developer",
    hobbies: "Football and Dancing",
  },
];

function Card1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0">
      <div className="p-5 bg-[var(--color-card-bg-light)] dark:bg-[var(--color-card-bg-dark)] rounded-lg shadow-lg border overflow-hidden row-span-2">
        <img className="w-full" src={chica} alt="Imagen" />
        <div className="p-4 flex justify-between items-center">
          <h2 className="font-bold text-[var(--color-card-h2-light)] dark:text-[var(--color-card-h2-dark)]">
            {profiles[0].name}
          </h2>
          <h2 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-h2-dark)]">
            {profiles[0].age}
          </h2>
        </div>
        <div className="p-4 flex justify-between items-center">
          <h2 className="font-bold text-[var(--color-card-h2-light)] dark:text-[var(--color-card-paragraph-dark)]">
            Education:
          </h2>
          <h2 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
            {profiles[0].education}
          </h2>
        </div>
        <div className="p-4 flex justify-between items-center">
          <h2 className="font-bold text-[var(--color-card-h2-light)] dark:text-[var(--color-card-paragraph-dark)]">
            Location:
          </h2>
          <h2 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
            {profiles[0].location}
          </h2>
        </div>
        <div className="p-4 flex justify-between items-center">
          <h2 className="font-bold text-[var(--color-card-h2-light)] dark:text-[var(--color-card-paragraph-dark)]">
            Job:
          </h2>
          <h2 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
            {profiles[0].job}
          </h2>
        </div>
        <div className="p-4 flex justify-between items-center">
          <h2 className="font-bold text-[var(--color-card-h2-light)] dark:text-[var(--color-card-paragraph-dark)]">
            Hobbies:
          </h2>
          <h2 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
            {profiles[0].hobbies}
          </h2>
        </div>
      </div>

      {/* Cuatro cajas pequeñas */}
      <div className="bg-[var(--color-card-bg-light)] dark:bg-[var(--color-card-bg-dark)] p-8 rounded-lg shadow-md">
        <h2 className="font-bold text-3xl mb-3 text-[var(--color-card-h2-light)] dark:text-[var(--color-card-h2-dark)]">
          Bio
        </h2>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui. Risus pharetra, lacus interdum quam. Egestas aliquam dui at proin. Amet, pharetra, scelerisque molestie nibh porttitor sem malesuada cursus eget. Orci.
        </p>
      </div>
      <div className="bg-[var(--color-card-bg-light)] dark:bg-[var(--color-card-bg-dark)] p-8 rounded-lg shadow-md">
        <h2 className="font-bold text-3xl mb-3 text-[var(--color-card-h2-light)] dark:text-[var(--color-card-h2-dark)]">
          Personality
        </h2>
        <h3 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Hardworking
        </h3>
        <h3 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Smart
        </h3>
        <h3 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Expressive
        </h3>
        <h3 className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Thoughtful
        </h3>
      </div>
      <div className="bg-[var(--color-card-bg-light)] dark:bg-[var(--color-card-bg-dark)] p-8 rounded-lg shadow-md">
        <h2 className="font-bold text-3xl mb-3 text-[var(--color-card-h2-light)] dark:text-[var(--color-card-h2-dark)]">
          Pain points
        </h2>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
      </div>
      <div className="bg-[var(--color-card-bg-light)] dark:bg-[var(--color-card-bg-dark)] p-8 rounded-lg shadow-md">
        <h1 className="font-bold text-3xl mb-3 text-[var(--color-card-h2-light)] dark:text-[var(--color-card-h2-dark)]">
          Goals
        </h1>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
        <p className="text-[var(--color-card-paragraph-light)] dark:text-[var(--color-card-paragraph-dark)]">
          - Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue
        </p>
      </div>
    </div>
  );
}

export default Card1;
