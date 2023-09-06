import Skeleton from '@mui/material/Skeleton';
const Category = ({ data }) => {
  return (
    <div className="flex-1 max-h-30 ">
    <div class="max-w-full bg-white border border-gray-200 rounded shadow md:max-w-2xl">
    {
    data ? ( <img class="rounded-t w-32 px-1 mx-auto" src={data.img} alt="" />) : (
      <Skeleton variant="rectangular" width={210} height={118} />
    )
  }
  <div class="p-5 text-center">
    <h5 class="m-2 text-xl font-bold tracking-tight text-gray-900">
      {data.title}
    </h5>
    <a
      href="#"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Shop Now
    </a>
  </div>
</div>

    </div>
  );
};

export default Category;
