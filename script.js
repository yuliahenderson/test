document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the document body for touchstart event
    document.body.addEventListener('touchstart', function() {
        // Request fullscreen mode when user taps anywhere on the screen
        var mcontainer = document.documentElement; // Fullscreen target is the entire document

        // Check if the browser supports fullscreen API
        if (mcontainer.requestFullscreen) {
            mcontainer.requestFullscreen().then(() => {
                console.log('Entered fullscreen mode successfully');
            }).catch(error => {
                console.error('Error while trying to enter fullscreen:', error);
            });
        } else if (mcontainer.webkitRequestFullscreen) {
            mcontainer.webkitRequestFullscreen().then(() => {
                console.log('Entered fullscreen mode successfully');
            }).catch(error => {
                console.error('Error while trying to enter fullscreen:', error);
            });
        } else if (mcontainer.msRequestFullscreen) {
            mcontainer.msRequestFullscreen().then(() => {
                console.log('Entered fullscreen mode successfully');
            }).catch(error => {
                console.error('Error while trying to enter fullscreen:', error);
            });
        }
    });
});
