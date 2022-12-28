export default function Alert({ title, message }) {
  return (
    <div className='rounded-lg bg-red-400 px-3 py-2'>
      {title ? <div>{title}</div> : null}
      {message ? <div>{message}</div> : null}
    </div>
  );
}
