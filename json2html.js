// Export the function using default export for ESM compatibility
export default function json2html(data) {
    // Build the HTML table string
    let html = `
      <table data-user="varshitchand2003@gmail.com">
        <thead>
          <tr>`;
  
    // Create table headers dynamically based on object properties
    const headers = Object.keys(data[0]); // Extract keys from the first object
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
  
    html += `</tr>
        </thead>
        <tbody>`;
  
    // Construct table rows with proper escaping for security
    data.forEach(row => {
      html += `<tr>`;
      headers.forEach(header => {
        const value = row[header];
        html += `<td>${value ? value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : ''}</td>`; // Escape HTML entities
      });
      html += `</tr>`;
    });
  
    html += `
        </tbody>
      </table>`;
  
    return html;
  }