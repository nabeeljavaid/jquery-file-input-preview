# File Input Preview Plugin

The File Input Preview plugin is a jQuery plugin that enhances the file input element by displaying selected files next to the input and providing an option to unselect any file.

## Usage

1. Include the jQuery library and the plugin script in your HTML file:

   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   <script src="file-input-preview.js"></script>
   <link rel="stylesheet" href="file-input-preview.css">
   ```

2. Apply the plugin to the file input element:

   ```html
   <input type="file" id="fileInput" multiple>
   ```

   ```javascript
   $(document).ready(function() {
     $('#fileInput').fileInputPreview();
   });
   ```

3. Customize the styling of the plugin elements by adding your own CSS rules.

## Features

- Displays selected files next to the file input element.
- Provides an option to unselect any file by clicking the remove button.
- Includes a clear button to reset the file input and remove all selected files.

## Example

Here's an example of how to use the plugin:

```html
<input type="file" id="fileInput" multiple>
```

```javascript
$(document).ready(function() {
  $('#fileInput').fileInputPreview();
});
```

## Customization

You can customize the appearance of the file input and the selected files container by modifying the provided CSS styles in the plugin or by adding your own CSS rules.

## License

This plugin is released under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Credits

This plugin was developed by [Nabeel Javaid](https://www.linkedin.com/in/nabeeljavaid/).
