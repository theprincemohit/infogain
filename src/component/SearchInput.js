import InputField from './InputField'

function SearchInput(props) {
  return (
    <div>
        
      <InputField handleSubmit={props.handleSubmit}
      handleInput={props.handleInput}
      ></InputField>
    </div>
  );
}

export default SearchInput;
