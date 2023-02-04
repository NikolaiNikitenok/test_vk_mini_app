import React from 'react';

const prods = [
	{id: 1, name: 'product1', cost: 100},
	{id: 2, name: 'product2', cost: 200},
	{id: 3, name: 'product3', cost: 300},
];

function App() {

	const rows = prods.map(function(item) {
		return <tr key={item.id}>
			<td>{item.name}</td>
			<td>{item.cost}</td>
		</tr>;
	});
	
	return <table>
		<thead>
			<tr>
				<td>название</td>
				<td>стоимость</td>
			</tr>
		</thead>
		<tbody>
			{rows}
		</tbody>
	</table>;
}

export default App;
