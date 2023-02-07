import { Error, SongCard, Loader } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
  const x = 'Pop';
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row w-full mt-4 mb-10 justify-center items-center">
        <h2 className="text-white text-3xl text-left font-semibold">Discover {x}</h2>
        <select className="outline-none mt-4 rounded-lg bg-black text-gray-300 sm:mt-0 text-sm">
          {genres.map((value) => (
            <option key={value.value}>{value.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard className="text-white" key={i} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
