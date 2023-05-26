import './InputPersona.scss';

export default function InputPersona({tipe, place, title}) {
  return (
    <label className='input-persona'>
        <div className="input-persona__title">{title}</div>
        <input className='input-persona__item' type={tipe} placeholder={place}/>
    </label>
  )
}
