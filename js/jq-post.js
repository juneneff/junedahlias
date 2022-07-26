$('#register').on('submit', function(e) {
	e.preventDefault();
	var details=$('#register').serialize();
		$.post('register').html(data);
	});
});
	