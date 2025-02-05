// User actions
$(document).ready(function(){
    console.log('Document Loaded Successfully!');
    initial();
  
    // Menu Dropdown
    // Display Hovered and clicked Item
    $('.item-card').click(function() {
        // Get the item name
        let item = $(this).find('.card-title').html();
        console.log("Clicked Item:", item);

        // Search for matching card-title in card-body
        $('.card-body').find('h4.card-title').each(function(){
            if ($(this).html() === item){
                hideAll();
                $(this).closest('.card').show();
            }
        });
    });  
});

function initial(){
    $('.col-md-6').children(':gt(1)').hide();
}

function hideAll(){
    $('.col-md-6').children().hide();
}

