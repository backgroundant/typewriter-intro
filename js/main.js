$(document).ready(function() {
       $('#fancy').hide();
       $('#plain').t();
    
        $('*').keydown(function(event) {
            if (event.which == 13) {
                $('#plain').hide();
                $('#fancy').t({
       
                speed:50,
                mistype:100,
                speed_vary:true,
                delay:5,
                blink:true,

                });
            }
        });
    });

        
        
