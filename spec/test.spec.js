describe("Testing the express api end points", () => {

	const axios = require('axios');
	const visitor = {
        name: 'Weston',
        assistant: 'Bobby',
		age: 23,
		date_of_visit: '2/5/2020',
		time_of_visit: '12:00:00',
		comments: 'No Comment'
	}
	const updatedVisitor = {
        name: 'Uncle',
        assistant: 'Portia',
		age: 31,
		date_of_visit: '2/5/2020',
		time_of_visit: '12:00:00',
		comments: 'Wack service'
	}

	let visitor_id;
		
	it('Should add new visitor', async () => {
		const res = await axios.post('http://127.0.0.1:3000/add-new-visitor', visitor);

		objVisitor = res.data.visitor;
		visitor_id = objVisitor.id;

		expect(res.data.status).toBe('Is Okay');
		expect(objVisitor.id).toEqual(visitor_id);
		expect(objVisitor.name).toEqual(visitor.name);
		expect(objVisitor.age).toEqual(visitor.age);
		expect(new Date(objVisitor.date_of_visit)).toEqual(new Date(visitor.date_of_visit));
		expect(objVisitor.time_of_visit).toEqual(visitor.time_of_visit);
		expect(objVisitor.assistant).toEqual(visitor.assistant);
		expect(objVisitor.comments).toEqual(visitor.comments);
	});

	it('Should view visitors', async () => {
		const res = await axios.get('http://127.0.0.1:3000/view-visitors');

		objVisitor = res.data.visitor;

		expect(res.data.status).toBe('Is Okay');
		expect(res.data.visitors).not.toBe([]);
	});
		
	it('Should delete visitor', async () => {
		const res = await axios.delete(`http://127.0.0.1:3000/delete-visitor/${visitor_id}`);

		objVisitor = res.data.visitor;

		expect(res.data.status).toBe('Is Okay');
		expect(res.data.visitors).not.toEqual([]);
	});

});
