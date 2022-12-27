export default function Repository({
  link,
  name,
  stars,
  language,
  dateModified,
}) {
  const dateFormater = (dateUTC) => {
    const option = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const date = new Date(dateUTC);
    return date.toLocaleDateString('id-ID', option);
  };

  return (
    <div className='rounded-lg border p-3'>
      {link ? (
        <a
          href={link}
          className='text-inter font-inter font-semibold hover:underline focus:underline'
        >
          {name || 'No Name'}
        </a>
      ) : (
        <div className='text-inter font-inter font-semibold'>
          {name || 'No Name'}
        </div>
      )}
      <div className='flex flex-row flex-wrap gap-4'>
        {stars ? (
          <div className='flex flex-row items-center gap-2'>
            <div>⭐</div>
            <div className='font-inter text-sm leading-default tracking-default text-slate-600'>
              {stars}
            </div>
          </div>
        ) : null}
        {language ? (
          <div className='flex flex-row items-center gap-2'>
            <div>💻</div>
            <div className='font-inter text-sm leading-default tracking-default text-slate-600'>
              {language}
            </div>
          </div>
        ) : null}
        {dateModified ? (
          <div className='flex flex-row items-center gap-2'>
            <div>📆</div>
            <div className='font-inter text-sm leading-default tracking-default text-slate-600'>
              {dateFormater(dateModified)}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
