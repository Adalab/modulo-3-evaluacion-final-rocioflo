function ResetButton({ handleReset }) {
  return (
    <button onClick={handleReset} className="reset-button">
      Reset
    </button>
  );
}

export default ResetButton;
