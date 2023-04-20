import css from 'components/filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { showElementsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  function handleChange(evt) {
    dispatch(showElementsFilter(evt.target.value));
  }

  return (
    <label className={css.text}>
      Find contacts by Name
      <input
        className={css.input}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </label>
  );
};
