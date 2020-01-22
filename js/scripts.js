$(document).ready(function() {
    $("form#list").submit(function(event) {
        event.preventDefault();
        var items = ["item1", "item3", "item2"];
        var final = []
        items.forEach(function(item) {
            var loud = $("input#" + item).val();
            final.push(loud);

        });
        var last = final.sort();

        last.forEach(function(item) {
            $(".results").append("<li>" + item.toUpperCase() + "</li>");
            $(".results").show();
        
        });
      });
    });


// $(document).ready(function() {
//     $("form#list").submit(function(event) {
//         event.preventDefault();

//         var items = ["#item1", "#item2", "#item3"];

//         var sortedItems = items.map(function(item) {
//             item.sort();

//         });
//         alert(sortedItems);
//     });
// });