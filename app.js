new Vue({
	el: '#events',
	data: {

		event:{id:'', description: '', date: ''},
		events:[]
	},
	
	// Methos we want to use in our application
	methods:{

		addEvent: function(){
			if(this.event.description){
				this.events.push(this.event);
				this.event = {description: '', date: ''};
			}
		},

		deleteEvent: function(index) {
		  if(confirm("Are you sure you want to delete this event?")) {
		    
		    this.events.splice(index);      
		  }
		}

	}
});