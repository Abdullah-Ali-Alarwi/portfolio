<template>
    <div class="pdf-wrapper">
      <h2>📜  Some Of my Certificates</h2>
      <div class="pdf-container">
        <iframe :src="pdfUrl" frameborder="0"></iframe>
      </div>
      <a :href="pdfUrl" download class="download-btn">📥  Download Certificates</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pdfUrl: "/Certi.pdf" 
      };
    }
  };
  </script>
  
  <style scoped>
  
  .pdf-wrapper {
    text-align: center;
    font-family: "Arial", sans-serif;
    background: #f9f9f969;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 20px auto;
  }
  

  h2 {
    color: #333;
    margin-bottom: 15px;
  }
  
    
  .pdf-container {
    width: 100%;
    height: 500px;
    border: 2px solid #dddddd4e;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  iframe {
    width: 100%;
    height: 100%;
  }
  

  .download-btn {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  .download-btn:hover {
    background: #0056b3;
  }
  </style>
  