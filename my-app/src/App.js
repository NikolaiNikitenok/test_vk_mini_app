import React from 'react';

function App() {

  function showMess(number) {
		alert(number);
	}
	
	return <div>
		<button onClick={() => showMess(1)}>act1</button> 
		<button onClick={() => showMess(2)}>act2</button> 
		<button onClick={() => showMess(3)}>act3</button> 
	</div>;
}
export default App;
