import Image from 'next/image';

export default function Option({ isActive, click, contentData, ...props }) {
  let buttonStyle =
    'relative rounded-md py-1.5 px-3 font-inter text-slate-700 w-full';
  if (isActive) {
    buttonStyle = `${buttonStyle} bg-slate-200`;
  } else {
    buttonStyle = `${buttonStyle} hover:bg-slate-100`;
  }

  const handleClick = () => {
    if (click && contentData.name) {
      click(contentData.name, contentData.id);
    }
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      className={buttonStyle}
      {...props}
    >
      <div className='flex flex-row items-center gap-2'>
        <div>
          {contentData?.image ? (
            <div className='relative h-7 w-7 overflow-hidden rounded-full'>
              <Image
                src={contentData.image}
                alt={contentData.name}
                fill
                sizes='28px'
              />
            </div>
          ) : (
            <div className='flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-slate-500 text-sm text-white'>
              {contentData?.name || 'U'}
            </div>
          )}
        </div>
        <div className='text-base leading-default tracking-default text-slate-700'>
          {contentData?.name || 'User'}
        </div>
      </div>
    </button>
  );
}
