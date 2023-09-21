import React, { useState } from "react";

const Problem1 = () => {
	const [show, setShow] = useState("all");
	const [data, setData] = useState([]);
	const [nameInput, setNameInput] = useState("");
	const [statusInput, setStatusInput] = useState("");

	const handleClick = (val) => {
		setShow(val);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Create a new task object and add it to the data state
		const newTask = { name: nameInput, status: statusInput };
		setData([...data, newTask]);

		// Clear the input fields
		setNameInput("");
		setStatusInput("");
	};


	// Define a custom sorting function
	const customSort = (a, b) => {
		const statusOrder = {
			active: 1,
			completed: 2,
			pending: 3,
			archive: 4,
		};

		if (a.status !== b.status) {
			return statusOrder[a.status] - statusOrder[b.status];
		}

		return a.name.localeCompare(b.name);
	};

	// Sort the data using the custom sorting function
	const sortedData = [...data].sort(customSort);

	// Filter the data based on the selected tab
	const filteredData =
		show === "all"
			? sortedData
			: sortedData.filter((item) => item.status === show);

	return (
		<div className='container'>
			<div className='row justify-content-center mt-5'>
				<h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
				<div className='col-6 '>
					<form
						onSubmit={handleSubmit}
						className='row gy-2 gx-3 align-items-center mb-4'>
						<div className='col-auto'>
							<input
								type='text'
								className='form-control'
								placeholder='Name'
								value={nameInput}
								onChange={(e) => setNameInput(e.target.value)}
							/>
						</div>
						{/* <div className='col-auto'>
							<input
								type='text'
								className='form-control'
								placeholder='Status'
								value={statusInput}
								onChange={(e) => setStatusInput(e.target.value)}
							/>
						</div> */}
						<div className='col-auto' onChange={(e) => setStatusInput(e.target.value)}>
							<select name='status' id='status' className="form-control">
								<option value='active'>Active</option>
								<option value='completed'>Completed</option>
								<option value='pending'>Pending</option>
								<option value='archive'>Archive</option>
							</select>
						</div>

						<div className='col-auto'>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className='col-8'>
					<ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
						<li className='nav-item'>
							<button
								className={`nav-link ${show === "all" && "active"}`}
								type='button'
								onClick={() => handleClick("all")}>
								All
							</button>
						</li>
						<li className='nav-item'>
							<button
								className={`nav-link ${show === "active" && "active"}`}
								type='button'
								onClick={() => handleClick("active")}>
								Active
							</button>
						</li>
						<li className='nav-item'>
							<button
								className={`nav-link ${show === "completed" && "active"}`}
								type='button'
								onClick={() => handleClick("completed")}>
								Completed
							</button>
						</li>
					</ul>
					<div className='tab-content'></div>
					<table className='table table-striped '>
						<thead>
							<tr>
								<th scope='col'>Name</th>
								<th scope='col'>Status</th>
							</tr>
						</thead>
						<tbody>
							{filteredData.map((item, index) => (
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Problem1;
