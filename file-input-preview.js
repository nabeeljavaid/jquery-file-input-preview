(function($) {
  $.fn.fileInputPreview = function() {
    return this.each(function() {
      var $fileInput = $(this);
      var $selectedFilesContainer = $('<div class="selected-files-container"></div>');
      var $selectedFiles = $('<div class="selected-files"></div>');
      var $clearButton = $('<button class="clear-button">Clear</button>');

      $fileInput.after($selectedFilesContainer);
      $selectedFilesContainer.append($fileInput, $selectedFiles, $clearButton);

      $fileInput.on('change', function(e) {
        var files = e.target.files;
        $selectedFiles.empty();

        if (files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileName = file.name;
            var fileSize = getFileSize(file.size);

            var $fileItem = $('<div class="file-item">' + fileName + ' (' + fileSize + ')</div>');
            var $removeButton = $('<span class="remove-button">x</span>');

            $removeButton.data('fileIndex', i);
            $removeButton.on('click', function() {
              var index = $(this).data('fileIndex');
              var selectedFiles = Array.from($fileInput[0].files);

              selectedFiles.splice(index, 1);

              var dt = new DataTransfer();
              for (var i = 0; i < selectedFiles.length; i++) {
                dt.items.add(selectedFiles[i]);
              }

              $fileInput[0].files = dt.files;
              $(this).parent('.file-item').remove();
            });

            $fileItem.append($removeButton);
            $selectedFiles.append($fileItem);
          }

          $selectedFilesContainer.addClass('has-files');
        } else {
          $selectedFilesContainer.removeClass('has-files');
        }
      });

      $clearButton.on('click', function() {
        $fileInput.val('');
        $selectedFiles.empty();
        $selectedFilesContainer.removeClass('has-files');
      });

      function getFileSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
      }
    });
  };
})(jQuery);
