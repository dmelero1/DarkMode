import chica from "../assets/chica.png";

const profiles = [
    { id: 1, name: "Rosa", age: 35, education:"UCLM", location:"Toledo", job:"Family Physician", hobbies:"Hiking and Dancing"}
];

function Card1() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 p-8">
      <div className="bg-blue-200 dark:bg-blue-400 rounded-lg shadow-lg border border-gray-800 overflow-hidden row-span-2">
        <img className="w-full" src={chica} alt="Imagen" />
        <div className="p-5 flex justify-between items-center">
          <h2>{profiles[0].name}</h2>
          <h2>{profiles[0].age}</h2>
        </div>
        <div className="p-5 flex justify-between items-center">
          <h2>Education:</h2>
          <h2>{profiles[0].education}</h2>
        </div>
        <div className="p-5 flex justify-between items-center">
          <h2>Location:</h2>
          <h2>{profiles[0].location}</h2>
        </div>
        <div className="p-5 flex justify-between items-center">
          <h2>Job:</h2>
          <h2>{profiles[0].job}</h2>
        </div>
        <div className="p-5 flex justify-between items-center">
          <h2>Hobbies:</h2>
          <h2>{profiles[0].hobbies}</h2>
        </div>
      </div>

      {/* Cuatro cajas pequeñas */}
      <div className="bg-blue-200 dark:bg-blue-400 p-8 rounded-lg shadow-md">
        <h2 className="font-bold text-xl mb-3">Bio</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore alias velit nam aperiam corrupti nobis minus tenetur cumque fugiat reprehenderit sint asperiores suscipit officiis ab, amet atque, praesentium ipsam! Doloribus.</p>
      </div>
      <div className="bg-blue-200 dark:bg-blue-400 p-8 rounded-lg shadow-md">
      <h2 className="font-bold text-xl mb-3">Personality</h2>
        <h4>- Handworking</h4>
        <h4>- Smart</h4>
        <h4>- Expressive</h4>
        <h4>- Thoughful</h4>
      </div>
      <div className="bg-blue-200 dark:bg-blue-400 p-8 rounded-lg shadow-md">
        <h2 className="font-bold text-xl mb-3">Pain points</h2>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
      </div>
      <div className="bg-blue-200 dark:bg-blue-400 p-8 rounded-lg shadow-md">
      <h1 className="font-bold text-xl mb-3">Goals</h1>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni expedita!</p>
      </div>
    </div>
  );
}

export default Card1;
