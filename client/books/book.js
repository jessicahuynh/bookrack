Template.book.events({
	'click .edit-btn': function() {
		event.preventDefault();
		Session.set("editedbook",this._id);
		Router.go('editbook',{_id:this._id});
	}
});