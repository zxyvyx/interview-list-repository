import Option from '../Option';

export default function LeftPanel({
  searchResults,
  isLoading,
  click,
  activeOption,
}) {
  if (isLoading) {
    return (
      <div className='flex flex-col gap-4 p-3'>
        <div className='flex flex-row items-center gap-2'>
          <div>
            <div className='h-6 w-6 animate-pulse rounded-full bg-slate-200' />
          </div>
          <div className='h-2 w-full animate-pulse rounded-lg bg-slate-200' />
        </div>
        <div className='flex flex-row items-center gap-2'>
          <div>
            <div className='h-6 w-6 animate-pulse rounded-full bg-slate-200' />
          </div>
          <div className='h-2 w-full animate-pulse rounded-lg bg-slate-200' />
        </div>
        <div className='flex flex-row items-center gap-2'>
          <div>
            <div className='h-6 w-6 animate-pulse rounded-full bg-slate-200' />
          </div>
          <div className='h-2 w-full animate-pulse rounded-lg bg-slate-200' />
        </div>
      </div>
    );
  }

  return (
    <>
      {searchResults?.length > 0 ? (
        searchResults.map((result) => (
          <Option
            click={click}
            contentData={result}
            key={`search-result-${result.id}`}
            isActive={result.id === activeOption}
          />
        ))
      ) : (
        <div className='flex w-full flex-col items-center justify-center p-5'>
          <div className='font-inter text-xl font-bold text-slate-700 md:text-2xl'>
            No Result Found
          </div>
          <div className='font-inter text-sm text-slate-500 sm:text-base'>
            Please search using valid username
          </div>
        </div>
      )}
    </>
  );
}
