import { BsSlashLg } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
    <form className='max-w-xl mx-auto p-2 sm:w-72'>
    <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
        Search
    </label>
    <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
            <IoSearch className='w-5 h-5' />
        </div>
        <input
            type='search'
            id='default-search'
            className='block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 
            focus:border-blue-500 bg-transparent focus:bg-transparent '
            placeholder='type "/ to search'
            required
        />
        <button
            type='submit'
            className='text-white absolute end-2 bottom-2 bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-2 py-2 
             bg-gradient-to-r from-gray-500 to-gray-900 hover:scale-95 active:scale-90 transition-all duration-300'
        >
            
           < BsSlashLg/>
        </button>
    </div>
</form>
);
};
export default Search
