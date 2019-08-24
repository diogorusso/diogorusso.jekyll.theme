jQuery(document).ready(function ($) {
    var $container = $(".isotope");
    // Filter isotope
    $container.isotope({
        // options
        // isInitLayout: false,
        // itemSelector: ".grid-item",
        // percentPosition: true,
        // masonry: {
        //     columnWidth: '.grid-sizer',
        //     gutter: '.gutter-sizer'
        // },
        // getSortData: {
        //     name: "h2"
        // }
    });

    // layout Isotope again after all images have loaded
    $container.imagesLoaded( function() {
        $container.isotope('layout');
    });

    

    // Set up filters array with default values
    var filters = {};

    // When a button is pressed, run filterSelect
    $( ".filter-list a" ).on( "click", filterSelect );

    // Set the URI hash to the current selected filters
    function filterSelect() {
        // Current hash value
        var hashFilter = getHashFilter();

        // Set filters to current values (important for first run)
        filters["category"] = hashFilter["category"]

        // data-filter attribute of clicked button
        var currentFilter = $(this).attr("data-filter");
        // Navigation group (subject or author) as object
        var $navGroup = $(this).parents(".filter-list");
        // data-filter-group key for the current nav group
        var filterGroup = $navGroup.attr("data-filter-group");

        // If the current data-filter attribute matches the current filter,
        if ( currentFilter == hashFilter["category"] ) {
            // Reset group filter as the user has unselected the button
            filters[ filterGroup ] = "*";
        } else {
            // Set data-filter of current button as value with filterGroup as key
            filters[ filterGroup ] = $(this).attr("data-filter");
        }

        // Create new hash
        var newHash = "category=" + encodeURIComponent( filters["category"] );
        
        // Apply the new hash to the URI, triggering onHahschange()
        location.hash = newHash;
    } // filterSelect


    function onHashChange() {
        // Current hash value
        var hashFilter = getHashFilter();
        // Concatenate subject and author for Isotope filtering
        var theFilter = hashFilter["category"];

        if ( hashFilter ) {
            // Repaint Isotope container with current filters and sorts
            $container.isotope( {
                filter:  decodeURIComponent( theFilter ),
            } );

            // Toggle checked status of filter buttons
            $( ".filter-list" ).find(".checked").removeClass("checked");
            $( ".filter-list" ).find("[data-filter='" + hashFilter["category"] + "']").addClass("checked");
        }
    } // onHahschange

    function getHashFilter() {
        // Get filters (matches) and sort order (sorts)
        var category = location.hash.match( /category=([^&]+)/i );

        // Set up a hashFilter array
        var hashFilter = {};
        // Populate array with matches and sorts using ternary logic
        hashFilter["category"] = category ? category[1] : "*";

        return hashFilter;
    } // getHashFilter

    // When the hash changes, run onHashchange
    window.onhashchange = onHashChange;

    // When the page loads for the first time, run onHashChange
    onHashChange();
    console.log("hello masonry no sort no tag")
    });

    