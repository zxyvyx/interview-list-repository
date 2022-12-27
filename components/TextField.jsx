export default function TextField({
  type = 'text',
  name,
  id,
  iconLeft,
  placeholder,
  customInputStyle,
  customIconLeftStyle,
  ...props
}) {
  let inputStyle =
    'py-1.5 outline-none font-inter placeholder:text-slate-700 text-slate-700 w-full';
  if (customInputStyle) {
    inputStyle = `${inputStyle} ${customInputStyle}`;
  }

  let iconLeftStyle = 'absolute top-0 left-0 bottom-0 flex items-center pl-3';
  if (customIconLeftStyle) {
    iconLeftStyle = `${iconLeftStyle} ${customIconLeftStyle}`;
  }

  if (iconLeft) {
    inputStyle = `${inputStyle} pl-10 pr-3`;
  }

  return (
    <div className='relative'>
      <input
        type={type}
        name={name}
        id={id}
        className={inputStyle}
        placeholder={placeholder}
        {...props}
      />
      {iconLeft ? (
        <label htmlFor={id} className={iconLeftStyle}>
          {iconLeft}
        </label>
      ) : null}
    </div>
  );
}
