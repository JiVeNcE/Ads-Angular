$(function() {

    $("#file-0").fileinput({
        'allowedFileExtensions' : ['jpg', 'png','gif']
    });

    $(document).ready(function() {
        $("#test-upload").fileinput({
            'showPreview' : false,
            'allowedFileExtensions' : ['jpg', 'png','gif'],
            'elErrorContainer': '#errorBlock'
        });
    });
}());