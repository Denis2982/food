import './Button.scss';

export default function Button({title, clas}) {
  return (
    <button className={clas}>{title}</button>
  )
}
