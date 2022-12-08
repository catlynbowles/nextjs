const NumberInput = ({setNumberQuestions}) => {
  return (
    <div>
      <label className="red">How many questions ?</label><br />
      <input required min='10' max='30' type='number' onChange={(e) => setNumberQuestions(e.target.value)}/>
    </div>
  )
}

export default NumberInput