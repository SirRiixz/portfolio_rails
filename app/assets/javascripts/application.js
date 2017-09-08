// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.jrumble.1.3.js"></script>

// Initialize jRumble on Selector
('#rumble-element').jrumble();

// Start rumble on element
('#rumble-element').trigger('startRumble');

// Stop rumble on element
('#rumble-element').trigger('stopRumble');

('#demo12').jrumble({
	x: 6,
	y: 6,
	rotation: 6,
	speed: 5,
	opacity: true,
	opacityMin: .05
});
