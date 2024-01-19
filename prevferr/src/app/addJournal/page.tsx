const AddJournalForm = () => {
	return (
		<>
			<form>
				<div>
					<input name="abstract" placeholder="Abstract" />
				</div>
				<div>
					<input name="title" placeholder="Title" />
				</div>
				<div>
					<textarea name="description" placeholder="Description" />
				</div>
				<button type="submit">Upload Journal</button>
			</form>
		</>
	);
};

export default AddJournalForm;
