import Image from 'next/image';
import closeIcon from '../../assets/close-icon.svg';
import Repository from '../Repository';

export default function RightPanel({
  activeUsername,
  listRepositories,
  isLoading,
  onClose,
}) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (isLoading) {
    return (
      <div className='flex flex-col gap-4'>
        <div className='h-2 w-full animate-pulse rounded-lg bg-slate-200' />
        <div className='flex flex-col gap-2'>
          <div className='h-2 w-full animate-pulse rounded-lg bg-slate-200' />
          <div className='flex flex-row gap-2'>
            <div className='h-2 w-1/4 animate-pulse rounded-lg bg-slate-200' />
            <div className='h-2 w-1/4 animate-pulse rounded-lg bg-slate-200' />
            <div className='h-2 w-1/4 animate-pulse rounded-lg bg-slate-200' />
            <div className='h-2 w-1/4 animate-pulse rounded-lg bg-slate-200' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between'>
        <div className='truncate font-inter text-xl font-bold text-slate-700 md:text-2xl'>
          {activeUsername}
        </div>
        <button type='button' onClick={handleClose}>
          <div>
            <Image src={closeIcon} alt='close' />
          </div>
        </button>
      </div>
      {listRepositories?.length > 0 ? (
        listRepositories.map((repo) => (
          <Repository
            link={repo.link}
            name={repo.name}
            stars={repo.stars}
            language={repo.language}
            dateModified={repo.dateModified}
            key={`list-repo-${repo.id}`}
          />
        ))
      ) : (
        <div className='flex w-full flex-col items-center justify-center p-5'>
          <div className='font-inter text-xl font-bold text-slate-700 md:text-2xl'>
            No Repositories Found
          </div>
          <div className='font-inter text-sm text-slate-500 sm:text-base'>
            This user has no repositories or the rate limit has been exceeded.
          </div>
        </div>
      )}
    </div>
  );
}
