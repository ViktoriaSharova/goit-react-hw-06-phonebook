import { useDispatch, useSelector } from 'react-redux';
import { FilterText, InputFilter } from './Filter.styled';
import { setStoreFilter } from '../../redux/FilterSlice';
export const Filter = () => {
  const currentFilter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onSetFilter = newSearch => {
    const action = setStoreFilter(newSearch);
    dispatch(action);
  };
  return (
    <FilterText>Find contact by name
      <InputFilter
        type="text"
        name="search"
        placeholder="Type name"
        value={currentFilter}
        onChange={evt => onSetFilter(evt.target.value)}
        ></InputFilter>
    </FilterText>
  );
};