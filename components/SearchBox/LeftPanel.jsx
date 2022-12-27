import Option from '../Option';

export default function LeftPanel({
  searchResults,
  isLoading,
  click,
  activeOption,
}) {
  if (isLoading) {
    return <div>Loading...</div>;
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
