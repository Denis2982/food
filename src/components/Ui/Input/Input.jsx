import SearchIcon from '../../Icons/SearchIcon';
import './Input.scss';

export default function Input() {
  return (
    <label className='input'>
        <input className='input__search' type="text" placeholder='Search' />
        <span className='input__icon'><SearchIcon /></span>
    </label>
  )
}
